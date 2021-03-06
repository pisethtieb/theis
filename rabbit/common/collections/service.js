// Collection
Rabbit.Collection.Service = new Mongo.Collection("rabbit_service");

// Schema
Rabbit.Schema.Service = new SimpleSchema({
    websiteId: {
        type: String,
        label: 'Website ID'

    },
    serviceDate: {
        type: String,
        label: 'Date'
    },
    des: {
        type: String,
        label: 'Description',
        optional: true,
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    },
//    domainName
    domainNamePrice: {
        type: Number,
        label: "Price",
        decimal: true,
        optional: true
    },
    domainNameStartDate: {
        type: String,
        label: "Start Date",
        optional: true
    },
    domainNameEndDate: {
        type: String,
        label: "End Date",
        optional: true,
        custom: function () {
            if (this.value < this.field('domainNameStartDate').value) {
                return "endDate";
            }
        }
    },
    domainNameOwedAmount: {
        type: Number,
        label: "Owed Amount",
        optional: true
    },
    domainNameTotalPrice: {
        type: Number,
        label: "Total Price",
        optional: true
    },
//    Hosting
    hostingPrice: {
        type: Number,
        label: "Price",
        decimal: true,
        optional: true
    },
    hostingStartDate: {
        type: String,
        label: "Start Date",
        optional: true
    },
    hostingEndDate: {
        type: String,
        label: "End Date",
        optional: true,
        custom: function () {
            if (this.value < this.field('hostingStartDate').value) {
                return "endDate";
            }
        }

    },
    hostingOwedAmount: {
        type: Number,
        label: "Owed Amount",
        optional: true
    },
    hostingTotalPrice: {
        type: Number,
        label: "Total Price",
        optional: true
    },
    //    maintenance

    maintenancePrice: {
        type: Number,
        label: "Price",
        decimal: true,
        optional: true
    },
    maintenanceStartDate: {
        type: String,
        label: "Start Date",
        optional: true

    },
    maintenanceEndDate: {
        type: String,
        label: "End Date",
        optional: true,
        custom: function () {
            if (this.value < this.field('maintenanceStartDate').value) {
                return "endDate";
            }
        }
    },
    maintenanceOwedAmount: {
        type: Number,
        label: "Owed Amount",
        optional: true
    },
    maintenanceTotalPrice: {
        type: Number,
        label: "Total Price",
        optional: true
    },
    status: {
        type: String,
        label: "Status",
        defaultValue: "no"
    },
    branchId: {
        type: String,
        label: "Branch"
    }
});
// Attach schema
Rabbit.Collection.Service.attachSchema(Rabbit.Schema.Service);

// Attach soft remove
//Rabbit.Collection.Customer.attachBehaviour('softRemovable');

SimpleSchema.messages({
    "greaterThan": "it mustn't be greater than ContractPrice!",
    "endDate": "It must be longer than the start Date !"
});