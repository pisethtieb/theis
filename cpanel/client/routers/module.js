FlowRouter.route('/', {
    name: 'cpanel.module',
    action: function (params, queryParams) {
        Layout.login('CpanelModule');
    }
});
