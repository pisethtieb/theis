cpanelRoutes.route('/backup', {
    name: 'cpanel.backup',
    action: function (params, queryParams) {
        Layout.main('cpanel_backup');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Backup',
        parent: 'cpanel.home'
    }
});

cpanelRoutes.route('/restore', {
    name: 'cpanel.restore',
    action: function (params, queryParams) {
        Layout.main('cpanel_restore');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Restore',
        parent: 'cpanel.home'
    }
});
