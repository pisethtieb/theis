cpanelRoutes.route('/eventReport', {
    name: 'cpanel.eventReport',
    action: function (params, queryParams) {
        Layout.main('cpanel_eventReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Event Report',
        parent: 'cpanel.home'
    }
});

cpanelRoutes.route('/eventReportGen', {
    name: 'cpanel.eventReportGen',
    action: function (params, queryParams) {
        Layout.report('cpanel_eventReportGen');
    }
});
