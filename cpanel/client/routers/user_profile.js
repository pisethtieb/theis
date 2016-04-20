cpanelRoutes.route('/user-profile', {
    name: 'cpanel.userProfile',
    title: 'User Profile',
    action: function (params, queryParams) {
        Layout.main('Cpanel_userProfile');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'User Profile',
        icon: 'user',
        parent: 'cpanel.home'
    }
});
