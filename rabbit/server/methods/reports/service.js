Meteor.methods({
    rabbit_serviceReport: function (params) {
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
        selector.serviceDate = {$gte: fDate, $lte: tDate};


        //
        if (!_.isEmpty(params.branch)) {
            selector.branchId = null;
        }

        if (!_.isEmpty(params.websiteId)) {
            selector.websiteId = params.websiteId;
        }
        var index = 1;
        let totalDomainName = 0;
        let totalHosting = 0;
        let totalMaintenance = 0;
        Rabbit.Collection.Service.find(selector)
            .forEach(function (obj) {
                if (obj) {
                    obj.index = index;
                    //total += obj.price;
                    obj.domainNameTotalPrice = obj.domainNameTotalPrice == null ? 0 : obj.domainNameTotalPrice;
                    obj.hostingTotalPrice = obj.hostingTotalPrice == null ? 0 : obj.hostingTotalPrice;
                    obj.maintenanceTotalPrice = obj.maintenanceTotalPrice == null ? 0 : obj.maintenanceTotalPrice;
                    totalDomainName += obj.domainNameTotalPrice;
                    totalHosting += obj.hostingTotalPrice;
                    totalMaintenance += obj.maintenanceTotalPrice;
                    content.push(obj);

                    index++;
                }
            });

        if (content.length > 0) {
            data.content = content;
            data.footer.totalDomainName = totalDomainName;
            data.footer.totalHosting = totalHosting;
            data.footer.totalMaintenance = totalMaintenance;
        }
        if (params.websiteId == '') {
            params.websiteId = 'All'
        } else {
            let website = Rabbit.Collection.Website.findOne({_id: params.websiteId});
            params.websiteId = website._id + " | " + website.webName + " | " + website.registerDate
        }

        //if (params.customerId == '') {
        //    params.customerId = 'All'
        //
        //} else {
        //
        //    params.customerId = Rabbit.Collection.Customer.findOne({_id: params.customerId}).companyName;
        //}
        /****** Header *****/
        data.header = params;

        return data
    }
});
