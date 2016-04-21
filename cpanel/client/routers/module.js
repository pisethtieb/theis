FlowRouter.route('/', {
    name: 'cpanel.module',
    title: 'Module',
    action: function (params, queryParams) {
        Layout.login('CpanelModule');
    }
});
