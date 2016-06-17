// List for report
Rabbit.ListForReport = {
    branch: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Cpanel.Collection.Branch.find()
            .forEach(function (obj) {
                list.push({label: obj.enName, value: obj._id});
            });
        return list;
    },
    product: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Rabbit.Collection.Product.find()
            .forEach(function (obj) {
                debugger;
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
            });
        return list;
    },
    customer: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});

        Rabbit.Collection.Customer.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.companyName, value: obj._id});
            });
        return list;
    },
    contract: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});

        Rabbit.Collection.Contract.find()
            .forEach(function (obj) {
                    let maintenance = Rabbit.Collection.Maintenance.find({'_office.contractId': obj._id});
                    debugger;
                    console.log(maintenance.count());
                    // Rabbit.Collection.Maintenance.find({'_office.contractId': obj._id}.sort({_id: -1})).forEach(function (objMaintenace) {
                    // if (obj._id == maintenance._office.contractId) {
                    //     //             console.log(objMaintenace._office.contractId);
                    //     // if (obj._id) {
                    //     list.push({
                    //         label: obj._office.contractId + ' : ' + obj._office.contractDate,
                    //         value: obj._office._id
                    //     });
                    //     //     list.push({label: obj._id + ' : ' + obj.contractDate, value: obj._id});
                    //     // }
                    //     //     }
                    // }//     if (objMaintenace) {

                }
            );
// );

        return list;
    },
    office: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Rabbit.Collection.Office.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
            });
        return list;
    },
    agent: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Rabbit.Collection.Agent.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
            });
        return list;
    },
    website: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Rabbit.Collection.Website.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.webName + '|' + obj.registerDate, value: obj._id});
            });
        return list;
    }
};
