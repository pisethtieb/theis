// Collection
Rabbit.Collection.Quotation = new Mongo.Collection("rabbit_quotation");

// Schema
Rabbit.Schema.Quotation = new SimpleSchema({
    quotationDate: {
        type: String,
        label: "Quotation Date",
        defaultValue: function () {
            var currentDate = moment(ReactiveMethod.call("currentDate"), 'YYYY-MM-DD').format('YYYY-MM-DD');
            return currentDate;
        }
    },
    customerId: {
        type: String,
        autoform: {
            type: 'select2',
            options(){
                return Rabbit.List.customer();
            },
            afFieldInput: {
                select2Options: {
                    theme: "bootstrap"
                }
            }
        }
    },
    productId: {
        type: String,
        label: "Product",
        autoform: {
            type: 'select2',
            options(){
                return Rabbit.List.product();
            },
            afFieldInput: {
                select2Options: {
                    theme: "bootstrap"
                }
            }
        }
    },
    basePrice: {
        type: Array,
        //label: "Branch Price",
        minCount: 1,
        maxCount: 1
    },
    'basePrice.$': {
        type: Object
    },
    'basePrice.$.headOffice': {
        type: Number,
        decimal: true
    },
    'basePrice.$.branch': {
        type: Number,
        decimal: true
    },
    maintenancePrice: {
        type: Array,
        minCount: 1,
        maxCount: 1
    },
    'maintenancePrice.$': {
        type: Object
    },
    'maintenancePrice.$.headOffice': {
        type: Number,
        decimal: true
    },
    'maintenancePrice.$.branch': {
        type: Number,
        decimal: true
    },

    branchId: {
        type: String,
        label: "Branch"
    }
    ,
    des: {
        type: String,
        label: "Description",
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        },
        optional: true
    },
    contractorId: {
        type: String,
        label: "Contractor",
        autoform: {
            type: 'select2',
            options(){
                return Rabbit.List.contractors();
            },
            afFieldInput: {
                select2Options: {
                    theme: "bootstrap"
                }
            }
        }
    }


})
;
// Attach schema
Rabbit.Collection.Quotation.attachSchema(Rabbit.Schema.Quotation);

// Attach soft remove
//Rabbit.Collection.Customer.attachBehaviour('softRemovable');
