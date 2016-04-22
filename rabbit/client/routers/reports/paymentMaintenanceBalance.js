/**
 * Browser view
 */
var subs = new SubsManager();
rabbitRoutes.route('/paymentMaintenanceBalanceReport', {
    name: 'rabbit.paymentMaintenanceBalanceReport',
    title: 'Payment Maintenance Balance Report',
    subscriptions: function (params, queryParams) {
        // Customer
        this.register('rabbit_contract', subs.subscribe('rabbit_contract'));
        //this.register('rabbit_contractor', subs.subscribe('rabbit_contractor'));
        //this.register('rabbit_agent', subs.subscribe('rabbit_agent'));
    },
    action: function (params, queryParams) {
        Layout.main('rabbit_paymentMaintenanceBalanceReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Payment Maintenance Balance Report',
        icon: 'file-text',
        parent: 'rabbit.home'
    }
});

rabbitRoutes.route('/paymentMaintenanceBalanceReportGen', {
    name: 'rabbit.paymentMaintenanceBalanceReportGen',
    action: function (params, queryParams) {
        Layout.report('rabbit_paymentMaintenanceBalanceReportGen');
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
