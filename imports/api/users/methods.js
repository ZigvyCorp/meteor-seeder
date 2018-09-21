import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import SimpleSchema from 'simpl-schema';
import { map, includes } from 'lodash';

/**
 * @name getStationsByCallCenter
 * @description Fetch all stations based on callCenterId
 * @param callCenterId {String}
 * @type {ValidatedMethod}
 * @return {[Object]}
 */
export const getUsersByCallCenter = new ValidatedMethod({
  name: 'getUsersByCallCenter',
  validate: new SimpleSchema({
    callCenterId: { type: String }
  }).validator(),
  run({ callCenterId }) {
    this.unblock();
    return Meteor.users.find({ assignedCallCenterIds: callCenterId }).fetch();
  }
});

export const addUserServer = new ValidatedMethod({
  name: 'addUserServer',
  validate: new SimpleSchema({
    email: { type: String },
    password: { type: String },
    profile: { type: Object },
    'profile.firstName': { type: String },
    'profile.lastName': { type: String },
    'profile.location': { type: String },
    'profile.phone': { type: String },
    callCentersPermission: { type: Array },
    'callCentersPermission.$': { type: Object },
    'callCentersPermission.$.callCenterId': { type: String },
    'callCentersPermission.$.permissions': { type: Array },
    'callCentersPermission.$.permissions.$': { type: String }
  }).validator({ clean: true, filter: false }),
  run({ email, password, profile, callCentersPermission }) {
    const userId = Accounts.createUser({
      email,
      password,
      profile
    });

    // TODO check user permission for this method
    // TODO Should move this to another method
    const assignedCallCenterIds = map(callCentersPermission, 'callCenterId');
    Meteor.users.update({ _id: userId }, {
      $set: { assignedCallCenterIds }
    });
    callCentersPermission.forEach((callCenter) => {
      Roles.addUsersToRoles(userId, callCenter.permissions, callCenter.callCenterId);
    });

    // Update roles
    return true;
  }
});

export const updateUserServer = new ValidatedMethod({
  name: 'updateUserServer',
  validate: new SimpleSchema({
    userId: { type: String },
    profile: { type: Object },
    'profile.location': { type: String },
    'profile.phone': { type: String },
    callCentersPermission: { type: Array },
    'callCentersPermission.$': { type: Object },
    'callCentersPermission.$.callCenterId': { type: String },
    'callCentersPermission.$.permissions': { type: Array },
    'callCentersPermission.$.permissions.$': { type: String }
  }).validator({ clean: true, filter: false }),
  run({ userId, profile, callCentersPermission }) {
    // TODO check user permission for this method
    const user = Meteor.users.findOne({ _id: userId });
    if (!user) {
      throw new Meteor.Error('404', 'User not found');
    }

    const assignedCallCenterIds = map(callCentersPermission, 'callCenterId');
    Meteor.users.update({ _id: userId }, {
      $set: {
        location: profile.location,
        phone: profile.phone
      },
      $addToSet: { assignedCallCenterIds: { $each: assignedCallCenterIds } }
    });
    callCentersPermission.forEach((callCenter) => {
      Roles.addUsersToRoles(userId, callCenter.permissions, callCenter.callCenterId);
    });
  }
});

const USERS_METHODS = map([
  getUsersByCallCenter,
  addUserServer,
  updateUserServer
], 'name');

if (Meteor.isServer) {
  DDPRateLimiter.addRule({
    name(name) {
      return includes(USERS_METHODS, name);
    },
    connectionId() { return true; }
  }, 5, 1000);
}
