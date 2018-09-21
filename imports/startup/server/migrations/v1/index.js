import { Meteor } from 'meteor/meteor';
import { USER_ROLES } from '../../../../lib';

const V1 = () => Migrations.add({
  version: 1,
  name: 'Create root admin user',
  up() {
    const rootAdmin = Meteor.users.findOne({ 'emails.address': 'admin@call-center.com' });
    if (!rootAdmin) {
      try {
        const userId = Accounts.createUser({
          email: 'admin@call-center.com',
          password: '123456',
          admin: true,
          profile: {
            firstName: 'Gilman',
            lastName: 'Wolsey'
          }
        });

        if (userId) {
          Roles.addUsersToRoles(userId, USER_ROLES.ROOT_ADMIN, Roles.GLOBAL_GROUP);
        }
      } catch (e) {
        console.log('ERROR: While migrating version 1', e);
        console.log('INFO: Downgrading to version 0');
        Migrations.migrateTo(0);
      }
    }
  },
  down() {
    Meteor.users.remove({ 'emails.0.address': 'admin@call-center.com' });
  }
});

export default V1;
