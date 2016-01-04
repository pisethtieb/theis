Meteor.methods({
    rabbit_contractReport: function (params) {
        var data = {
            title: {},
            header: {},
            content: [{index: 'No Result'}],
            footer: {}
        };

        date = s.words(params.date, ' To '),
            fDate = date[0],
            newDate = new Date(date[1]);
        var tDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
        tDate = moment(tDate).format('YYYY-MM-DD');
        //var date = s.words(params.date, ' To ');
        //var fDate = moment(date[0], 'YYYY-MM-DD').toDate();
        //var tDate = moment(date[1], 'YYYY-MM-DD').add(1, 'days').toDate();
        //****** Title *****/
        data.title = Cpanel.Collection.Company.findOne();

        /****** Header *****/
        data.header = params;

        /****** Content *****/
        var content = [];
        var selector = {};
        selector.contractDate = {$gte: fDate, $lte: tDate};


        //
        if (!_.isEmpty(params.branch)) {
            selector.branchId = params.branch;
        }

        if (!_.isEmpty(params.productId)) {
            selector.customerId = params.customerId;
        }

        var index = 1;
        Rabbit.Collection.Contract.find(selector)
            .forEach(function (obj) {
                // Do something
                obj.index = index;

                content.push(obj);

                index++;
            });

        if (content.length > 0) {
            data.content = content;
        }

        return data
    }
});