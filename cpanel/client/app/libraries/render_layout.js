Layout = {
    main: function (regions) {
        render('MainLayout', regions);
    },
    login: function (regions) {
        render('LoginLayout', regions);
    },
    report: function (regions) {
        render('reportLayout', regions);
    },
    help: function (regions) {
        render('helpLayout', regions);
    },
    render: function (layout, regions) {
        render(layout, regions);
    }
};

var render = function (layout, regions) {
    if (typeof regions !== 'object') {
        regions = {content: regions};
    }
    //regions.materialInit = 'materialInit';

    BlazeLayout.render(layout, regions);
};