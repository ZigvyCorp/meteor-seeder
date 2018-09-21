import V1 from './v1';

V1();
Migrations.config({
  // Log job run details to console
  log: true,

  // Use a custom logger function (defaults to Meteor's logging package)
  logger: null,

  // Enable/disable logging "Not migrating, already at version {number}"
  logIfLatest: true,

  // migrations collection name to use in the database
  collectionName: 'migrations'
});

Meteor.startup(() => {
  // Migrations.unlock();
  // Migrations.migrateTo(0);
  Migrations.migrateTo('latest');
});
