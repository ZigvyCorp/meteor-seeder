import { Meteor } from 'meteor/meteor';

const call = (methodName, args = {}) => (
  new Promise((resolve, reject) => {
    Meteor.call(methodName, { ...args }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  })
);

const METEOR_API = {
  call
};

export default METEOR_API;
