import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.publish('currentUserData', function () {
  return Meteor.users.find({ _id: this.userId }, {
    fields: {
      emails: 1,
      firstName: 1,
      lastName: 1,
      roles: 1
    }
  });
});

Meteor.publish('getUsersByCallCenter', (callCenterId) => {
  check(callCenterId, String);
  return Meteor.users.find({ assignedCallCenterIds: callCenterId });
});
