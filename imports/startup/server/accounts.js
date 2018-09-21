Accounts.config({
  sendVerificationEmail: false,
  forbidClientAccountCreation: true
});

Accounts.onCreateUser((options, user) => {
  let customizedUser = {
    ...user
  };

  if (options.profile) {
    customizedUser = {
      ...user,
      ...options.profile
    };
  }
  return customizedUser;
});
