var subs = new SubsManager();

rabbitRoutes.route('/contractor', {
    name: 'rabbit.contractor',
    title: 'Contractor',
    subscriptions: function (params, queryParams) {
        // contractor
        //this.register('rabbit_contractor', subs.subscribe('rabbit_contractor', Session.get('currentBranch')));
    },
    action: function (params, queryParams) {
        Layout.main('rabbit_contractor');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Contractor',
        icon: 'users',
        parent: 'rabbit.home'
    }
});
