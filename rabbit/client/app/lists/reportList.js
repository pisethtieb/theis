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
                list.push({
                    label: obj._id + ' : ' + obj.contractDate + " : " + obj._customer.contractName,
                    value: obj._id
                });

                }
            );

        return list;
    },
        MaintenanceContract: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});

        let today = moment().format("YYYY-MM-DD");
            var doc = Rabbit.Collection.Contract.find({}, {sort: {_id: -1}});
            if (doc) {
                doc.forEach(function (obj) {
                    let maintenance = Rabbit.Collection.Maintenance.findOne({'_office.contractId': obj._id}, {sort: {_id: -1}});
                    if (maintenance) {
                        if (maintenance._office.contractId == obj._id && maintenance.endDate <= today) {
                            //maintenance.countIndex = [maintenance];
                            list.push({
                                label: obj._id + ' : ' + obj.contractDate + " : " + obj._customer.contractName,
                                value: obj._id
                            });

                            // arr.push(maintenance._id, maintenance.paymentMaintenanceDate);
                        }
                    }
                });

            }

        return list;
    },

    office: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Rabbit.Collection.Office.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name , value: obj._id});
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
                list.push({label: obj._id + ' : ' + obj.webName + ' | ' + obj.registerDate, value: obj._id});
            });
        return list;
    }
};
