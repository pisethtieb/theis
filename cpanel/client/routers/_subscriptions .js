FlowRouter.subscriptions = function () {
    // User
    this.register('cpanel_user', Meteor.subscribe('cpanel_user'));
    // User
    this.register('Cpanel.currentUser', Meteor.subscribe('Cpanel.currentUser'));
    // Currency
    this.register('cpanel_currency', Meteor.subscribe('cpanel_currency'));
    // Setting
    this.register('cpanel_setting', Meteor.subscribe('cpanel_setting'));
    // Company
    //this.register('cpanel_company', Meteor.subscribe('cpanel_company'));
    // Branch
    this.register('cpanel_branch', Meteor.subscribe('cpanel_branch'));
    // Files upload
    this.register('files', Meteor.subscribe('files'));
    Meteor.subscribe('files');
};