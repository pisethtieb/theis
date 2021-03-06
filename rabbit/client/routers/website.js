var subs = new SubsManager();

rabbitRoutes.route('/website/:customerId', {
    name: 'rabbit.website',
    title: 'Website Contract',
    subscriptions: function (params, queryParams) {
        // Customer
        this.register('rabbit_customer', subs.subscribe('rabbit_customer', Session.get('currentBranch')));
        this.register('rabbit_agent', subs.subscribe('rabbit_agent'));
    },
    action: function (params, queryParams) {
        Layout.main('rabbit_website');
    },
    breadcrumb: {
        params: ['customerId'],
        //queryParams: ['show', 'color'],
        title: 'Website Contract',
        icon: 'edge',
        parent: 'rabbit.customer'
    }
});
