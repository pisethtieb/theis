/**
 * Browser view
 */
var subs = new SubsManager();
rabbitRoutes.route('/paymentWebsiteBalanceReport', {
    name: 'rabbit.paymentWebsiteBalanceReport',
    title: 'Payment Website Balance Report',
    action: function (params, queryParams) {
        Layout.main('rabbit_paymentWebsiteBalanceReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Payment Website Balance Report',
        icon: 'file-text',
        parent: 'rabbit.home'
    }
});

rabbitRoutes.route('/paymentWebsiteBalanceReportGen', {
    name: 'rabbit.paymentWebsiteBalanceReportGen',
    action: function (params, queryParams) {
        Layout.report('rabbit_paymentWebsiteBalanceReportGen');
    }
});

/**
 * Excel
 */
//rabbitRoutes.route('/paymentWebsiteBalanceExcelReport', {
//    name: 'rabbit.paymentWebsiteBalanceExcelReport',
//    action: function (params, queryParams) {
//        Layout.main('rabbit_paymentWebsiteBalanceExcelReport');
//    },
//    breadcrumb: {
//        //params: ['id'],
//        //queryParams: ['show', 'color'],
//        title: 'paymentWebsiteBalance Excel Report',
//        parent: 'rabbit.home'
//    }
//});
