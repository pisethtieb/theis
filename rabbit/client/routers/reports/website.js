/**
 * Browser view
 */
var subs = new SubsManager();
rabbitRoutes.route('/websiteReport', {
    name: 'rabbit.websiteReport',
    title: 'Website Report',
    subscriptions: function (params, queryParams) {
        // Customer
        this.register('rabbit_customer', subs.subscribe('rabbit_customer'));

    },
    action: function (params, queryParams) {
        Layout.main('rabbit_websiteReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Website Report',
        icon: 'file-text',
        parent: 'rabbit.home'
    }
});

rabbitRoutes.route('/websiteReportGen', {
    name: 'rabbit.websiteReportGen',
    action: function (params, queryParams) {
        Layout.report('rabbit_websiteReportGen');
    }
});

/**
 * Excel
 */
//rabbitRoutes.route('/websiteExcelReport', {
//    name: 'rabbit.websiteExcelReport',
//    action: function (params, queryParams) {
//        Layout.main('rabbit_websiteExcelReport');
//    },
//    breadcrumb: {
//        //params: ['id'],
//        //queryParams: ['show', 'color'],
//        title: 'website Excel Report',
//        parent: 'rabbit.home'
//    }
//});
