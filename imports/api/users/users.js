import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { get } from 'lodash';

const schema = new SimpleSchema({
  emails: {
    type: Array,
    optional: true
  },
  'emails.$': {
    type: Object
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  'emails.$.verified': {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  firstName: {
    type: String,
    optional: true
  },
  initials: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  location: {
    type: String,
    optional: true
  },
  phone: {
    type: String,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: Object,
    optional: true,
    blackbox: true
  },
  assignedCallCenterIds: {
    type: Array,
    optional: true
  },
  'assignedCallCenterIds.$': {
    type: String
  },
  heartbeat: {
    type: Date,
    optional: true
  }
});

Meteor.users.attachSchema(schema);

// Deny all client-side updates to user documents
Meteor.users.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

/**
 * Meteor users helper
 * */
Meteor.users.helpers({
  getRolesByCallCenter(callCenterId) {
    return get(this.roles, callCenterId);
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
});

export const Users = {
  schema
};
