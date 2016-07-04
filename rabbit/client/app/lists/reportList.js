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
    quotation: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Rabbit.Collection.Product.find()
            .forEach(function (obj) {
                let quotation = Rabbit.Collection.Quotation.findOne({productId: obj._id}, {sort: {_id: -1}});
                if (quotation) {
                    if (obj._id == quotation.productId) {
                        list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
                    }
                }
            });

        return list;
    },
    customer: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});

        Rabbit.Collection.Customer.find()
            .forEach(function (obj) {
                let contract = Rabbit.Collection.Contract.findOne({customerId: obj._id}, {sort: {_id: -1}});
                if (contract) {
                    if (contract.customerId == obj._id) {
                        list.push({label: obj._id + ' : ' + obj.companyName, value: obj._id});
                    }
                }
            });
        return list;
    },
    //for office
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
    //for renew maintenace
    MaintenanceContract: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});

        let today = moment().format("YYYY-MM-DD");
        var doc = Rabbit.Collection.Maintenance.find({endDate: {$lte: today}}, {sort: {_id: -1}});
        if (doc) {
            doc.forEach(function (obj) {
                let maintenance = Rabbit.Collection.Maintenance.findOne({officeId: obj.officeId}, {sort: {_id: -1}});
                if (maintenance) {

                    if (maintenance._id == obj._id && maintenance.endDate <= today) {
                        let contract = Rabbit.Collection.Contract.findOne({_id: maintenance._office.contractId});
                        list.push({
                            label: contract._id + ' : ' + contract.contractDate + " : " + contract._customer.contractName,

                            value: contract._id
                        });

                        // arr.push(maintenance._id, maintenance.paymentMaintenanceDate);
                    }
                }
            });
        }

        return list;

    },
//for maintenance report
    MaintenanceReport: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        var doc = Rabbit.Collection.Contract.find({}, {sort: {_id: -1}});
        if (doc) {
            doc.forEach(function (obj) {
                let maintenance = Rabbit.Collection.Maintenance.findOne({'_office.contractId': obj._id}, {sort: {_id: -1}});
                if (maintenance) {
                    if (maintenance._office.contractId == obj._id) {
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
    }
    ,
//OfficePayment
    OfficePayment: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        var doc = Rabbit.Collection.Contract.find();
        if (doc) {
            doc.forEach(function (obj) {
                let officePayment = Rabbit.Collection.PaymentOffice.findOne({contractId: obj._id}, {sort: {_id: -1}});
                if (officePayment) {
                    if (officePayment.contractId == obj._id) {
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
    }
    ,
//payment maintenace &balance

    paymentMaintenaceReport: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        var doc = Rabbit.Collection.Contract.find();
        if (doc) {
            doc.forEach(function (obj) {
                let MaintenancePayment = Rabbit.Collection.PaymentMaintenance.findOne({contractId: obj._id}, {sort: {_id: -1}});
                if (MaintenancePayment) {
                    if (MaintenancePayment.contractId == obj._id) {
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
    }
    ,

    agent: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Rabbit.Collection.Agent.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
            });
        return list;
    }
    ,
//for websiteService
    website: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Rabbit.Collection.Website.find()

            .forEach(function (obj) {
                let service = Rabbit.Collection.Service.findOne({websiteId: obj._id}, {sort: {_id: -1}});
                if (service) {
                    if (service.websiteId == obj._id) {
                        list.push({label: obj._id + ' : ' + obj.webName + ' | ' + obj.registerDate, value: obj._id});
                    }
                }
            });
        return list;

    }
    ,
//for paymentWebsite and for balance
    websitePayment: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Rabbit.Collection.Website.find()

            .forEach(function (obj) {
                let service = Rabbit.Collection.PaymentWebsite.findOne({websiteId: obj._id}, {sort: {_id: -1}});
                if (service) {
                    if (service.websiteId == obj._id) {
                        list.push({label: obj._id + ' : ' + obj.webName + ' | ' + obj.registerDate, value: obj._id});
                    }
                }
            });
        return list;

    }
    ,
//for website customerId
    websiteCustomer: function () {
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Rabbit.Collection.Website.find()
            .forEach(function (obj) {
                let customer = Rabbit.Collection.Customer.findOne({_id: obj.customerId});
                if (customer._id == obj.customerId) {
                    list.push({
                        label: customer._id + ' : ' + customer.contractName,
                        value: customer._id
                    });
                }
            });
        return list;
    }
    ,
//alertrenew service
    alertrenewService: function () {

        let today = moment().format("YYYY-MM-DD");
        var list = [];
        list.push({label: "(Select All)", value: ""});
        Rabbit.Collection.Website.find()

            .forEach(function (obj) {
                let service = Rabbit.Collection.Service.findOne({websiteId: obj._id}, {sort: {_id: -1}});
                if (service) {
                    if (service.websiteId == obj._id) {
                        if ((service.domainNameEndDate <= today || service.hostingEndDate <= today || service.maintenanceEndDate <= today)) {

                            list.push({
                                label: obj._id + ' : ' + obj.webName + ' | ' + obj.registerDate,
                                value: obj._id
                            });
                        }
                    }
                }
            });
        return list;


        // var doc = Rabbit.Collection.Service.find();
        // if (doc != null) {
        //     doc.forEach(function (obj) {
        //         let service = Rabbit.Collection.Service.findOne({websiteId: obj.websiteId}, {sort: {_id: -1}});
        //         // console.log(service);
        //         if (service) {
        //             // console.log(service.websiteId)
        //             list.push({
        //                 label: obj.websiteId,
        //                 value: obj.websiteId
        //             });
        //             // }
        //         }
        //     });
        // }
        // return list;
    }
}
;
