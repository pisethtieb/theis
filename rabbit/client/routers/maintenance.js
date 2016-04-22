var subs = new SubsManager();

rabbitRoutes.route('/maintenance/:customerId/:contractId/:officeId', {
    name: 'rabbit.maintenance',
    title: 'Maintenance',
    subscriptions: function (params, queryParams) {
        // Customer.
        //this.register('rabbit_maintenance', subs.subscribe('rabbit_maintenance', Session.get('currentBranch')));

    },
    action: function (params, queryParams) {
        Layout.main('rabbit_maintenance');
    },
    breadcrumb: {
        //params: ['officeId'],
        //queryParams: ['show', 'color'],
        title: 'Maintenance',
        icon: 'wrench',
        parent: 'rabbit.office'
    }
});
