cpanelRoutes.route('/branch', {
    name: 'cpanel.branch',
    title: 'Branch',
    action: function (params, queryParams) {
        Layout.main('Cpanel_branch');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Branch',
        icon: 'sitemap',
        parent: 'cpanel.home'
    }
});
