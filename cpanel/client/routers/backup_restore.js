cpanelRoutes.route('/backup', {
    name: 'cpanel.backup',
    title: 'Backup',
    action: function (params, queryParams) {
        Layout.main('cpanel_backup');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Backup',
        icon: 'download',
        parent: 'cpanel.home'
    }
});

cpanelRoutes.route('/restore', {
    name: 'cpanel.restore',
    title: 'Restore',
    action: function (params, queryParams) {
        Layout.main('cpanel_restore');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Restore',
        icon: 'upload',
        parent: 'cpanel.home'
    }
});
