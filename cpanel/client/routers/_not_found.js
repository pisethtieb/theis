FlowRouter.notFound = {
    name: 'cpanel.notFound',
    title: '404: Page not found',
    action: function () {
        Layout.login('notFound');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Not Found',
        parent: 'cpanel.module'
    }
};
