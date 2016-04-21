cpanelRoutes.route('/exchange', {
    name: 'cpanel.exchange',
    title: 'Exchange',
    subscriptions: function(params, queryParams) {
        this.register('cpanel_exchange', Meteor.subscribe('cpanel_exchange'));
    },
    action: function (params, queryParams) {
        Layout.main('cpanel_exchange');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Exchange',
        icon: 'money',
        parent: 'cpanel.home'
    }
});
