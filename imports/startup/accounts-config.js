import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: 'YOUR_TEST_APP_ID',
    secret: 'YOUR_TEST_APP_SECRET'
});