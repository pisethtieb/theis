/**
 * Browser view
 */
var subs = new SubsManager();
rabbitRoutes.route('/renewMaintenanceReport', {
    name: 'rabbit.renewMaintenanceReport',
    title: 'Payment Maintenance Report',
    subscriptions: function (params, queryParams) {
        // Customer
        this.register('rabbit_contract', subs.subscribe('rabbit_contract'));
    },
    action: function (params, queryParams) {
        Layout.main('rabbit_renewMaintenanceReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Payment Maintenance Report',
        icon: 'file-text',
        parent: 'rabbit.home'
    }
});

rabbitRoutes.route('/renewMaintenanceReportGen', {
    name: 'rabbit.renewMaintenanceReportGen',
    action: function (params, queryParams) {
        Layout.report('rabbit_renewMaintenanceReportGen');
    }
});

/**
 * Excel
 */
//rabbitRoutes.route('/paymentMaintenanceExcelReport', {
//    name: 'rabbit.paymentMaintenanceExcelReport',
//    action: function (params, queryParams) {
//        Layout.main('rabbit_paymentMaintenanceExcelReport');
//    },
//    breadcrumb: {
//        //params: ['id'],
//        //queryParams: ['show', 'color'],
//        title: 'paymentMaintenance Excel Report',
//        parent: 'rabbit.home'
//    }
//});
