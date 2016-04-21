cpanelRoutes.route('/user', {
    name: 'cpanel.user',
    title: 'User',
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
