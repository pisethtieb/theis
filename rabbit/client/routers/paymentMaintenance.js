var subs = new SubsManager();

rabbitRoutes.route('/paymentMaintenance/:customerId/:contractId', {
    name: 'rabbit.paymentMaintenance',
    title: 'Payment Maintenance',
    subscriptions: function (params, queryParams) {
        // Customer
        this.register('rabbit_contract', subs.subscribe('rabbit_contract'));
        //this.register('rabbit_maintenance', subs.subscribe('rabbit_maintenance'));
        //this.register('rabbit_paymentMaintenance', subs.subscribe('rabbit_paymentMaintenance'));
    },
    action: function (params, queryParams) {
        Layout.main('rabbit_paymentMaintenance');
    },
    breadcrumb: {
        params: ['customerId', 'contractId'],
        //queryParams: ['show', 'color'],
        title: 'Payment Maintenance',
        icon: 'money',
        parent: 'rabbit.contract'
    }
});
