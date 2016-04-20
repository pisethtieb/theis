FlowRouter.route('/register', {
    name: 'cpanel.register',
    title: 'Register',
    action: function (params, queryParams) {
        Layout.login('CpanelModuleRegister');
    }
});
