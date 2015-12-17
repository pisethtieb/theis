// List
Rabbit.ListState = new ReactiveObj();

Rabbit.List = {
    gender: function () {
        var list = [];
        //list.push({label: "", value: ""});
        list.push({label: 'Male', value: 'M'});
        list.push({label: 'Female', value: 'F'});

        return list;
    },
    type: function () {
        var list = [];
        list.push({label: "Select One", value: ""});
        list.push({label: 'Head Office', value: 'HO'});
        list.push({label: 'Branch Office', value: 'BO'});

        return list;
    },
    address: function () {
        var list = [];
        list.push({label: "(Select One)", value: ""});

        // Set default for update
        var id = Rabbit.ListState.get(['customer', 'addressId']);
        Rabbit.Collection.Address.find(id)
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
            });

        return list;
    },
    product: function () {
        var list = [];
        list.push({label: "(Select One)", value: ""});

        Rabbit.Collection.Product.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
            });

        return list;
    },
    customer: function () {
        var list = [];
        list.push({label: "(Select One)", value: ""});

        Rabbit.Collection.Customer.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.companyName, value: obj._id});
            });

        return list;
    },
    getProduct(id){
        let product = Rabbit.Collection.Product.findOne(id);
        return product;
    },
    contractType: function () {
        var list = [];
        list.push({label: "Select One", value: ""});
        list.push({label: 'Product', value: 'product'});
        list.push({label: 'new', value: 'new'});

        return list;
    },
    contractPaymentType: function () {
        let list = [];
        list.push({label: 'Office', value: 'office'}, {label: 'Maintenance', value: 'maintenance'}
        );
        return list;
    },
    officeMaintenance: function () {

        var list = [];


        var contractId = FlowRouter.getParam("contractId");
        debugger;
        //var checkOM = Session.get('checkOfficeMaintenance');
        //
        //if (checkOM == "office") {
        //var patientId = Labo.ListForSale.get('patientId');

        Rabbit.Collection.Office.find({contractId: contractId}).forEach(function (obj) {

                var payment = Rabbit.Collection.Payment.findOne({
                        'office.officeId': obj._id
                    },
                    {
                        sort: {
                            _id: -1
                        }
                    });
                debugger;
                if (payment != null) {
                    payment.office.forEach(function (payObj) {
                        debugger;
                        if (payment != null && payObj.dueAmount > 0) {

                            list.push({
                                    label: "ID : " + payObj.officeId + " | " + " Price: " + payObj.dueAmount,
                                    value: payObj.officeId
                                }
                            )
                            ;
                        }

                    });
                }
                else if (payment == null) {
                    list.push({
                        label: "ID : " + obj._id + " | " + "price : " + obj.price,
                        value: obj._id
                    });
                }
            }
        )
        ;

        //} else if (checkOM == "maintenance") {
        //    Rabbit.Collection.Maintenance.find({"_office.contractId": contractId}).forEach(function (obj) {
        //        //var patient = Dental.Collection.Patient.findOne({_id: obj.patientId});
        //        var payment = Rabbit.Collection.Payment.findOne({
        //                maintenanceId: obj._id,
        //            },
        //            {
        //                sort: {
        //                    _id: -1
        //                }
        //            });
        //        if (payment != null && payment.dueAmount > 0) {
        //            list.push({
        //                    label: "ID : " + obj._id + " | " + " : " + payment.dueAmount,
        //                    value: obj._id
        //
        //                }
        //            )
        //            ;
        //        }
        //        else if (payment == null) {
        //            list.push({
        //                label: "ID : " + obj._id + " | " + "price : " + obj.price,
        //                value: obj._id
        //            });
        //        }
        //    });
        //}

        return list;
    }
}
;
