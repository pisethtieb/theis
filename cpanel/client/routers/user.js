cpanelRoutes.route('/user', {
    name: 'cpanel.user',
    action: function (params, queryParams) {
        Layout.main('Cpanel_user');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'User',
        icon: 'user',
        parent: 'cpanel.home'
    }
});
