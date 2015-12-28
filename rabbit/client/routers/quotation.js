var subs = new SubsManager();

rabbitRoutes.route('/quotation/:customerId', {
    name: 'rabbit.quotation',
    subscriptions: function (params, queryParams) {
        // Customer
        this.register('rabbit_customer', subs.subscribe('rabbit_customer', Session.get('currentBranch')));
        this.register('rabbit_quotation', subs.subscribe('rabbit_quotation'));
    },
    action: function (params, queryParams) {
        Layout.main('rabbit_quotation');
    },
    breadcrumb: {
        params: ['customerId'],
        //queryParams: ['show', 'color'],
        title: 'quotation',
        parent: 'rabbit.customer'
    }
});
