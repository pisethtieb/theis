var subs = new SubsManager();

rabbitRoutes.route('/agent', {
    name: 'rabbit.agent',
    title: 'Agent',
    subscriptions: function (params, queryParams) {
        // agent
        //this.register('rabbit_agent', subs.subscribe('rabbit_agent', Session.get('currentBranch')));
    },
    action: function (params, queryParams) {
        Layout.main('rabbit_agent');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Agent',
        icon: 'users',
        parent: 'rabbit.home'
    }
});
