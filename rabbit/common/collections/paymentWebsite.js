// Collection
Rabbit.Collection.PaymentWebsite = new Mongo.Collection("rabbit_paymentWebsite");

// Schema
Rabbit.Schema.PaymentWebsite = new SimpleSchema({
    customerId: {
        type: String,
        label: 'Customer ID'

    },
    websiteId: {
        type: String,
        label: 'Website ID'
    },
    paymentWebsiteDate: {
        type: String,
        label: 'Payment Website Date'
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

// Build Website price

    buildPrice: {
        type: Number,
        label: "Price",
        optional: true,
        decimal: true,
        defaultValue: 0
    },
    buildPaid: {
        type: Number,
        label: "Paid Amount",
        optional: true,
        custom: function () {
            if (this.value > this.field('buildPrice').value) {
                return "buidlPraid";
            }
        },
        defaultValue: 0,
        decimal: true
    },
    buildDue: {
        type: Number,
        label: "Due Amount",
        optional: true,
        decimal: true,
        defaultValue: 0
    },

//    domainName
    domainNamePrice: {
        type: Number,
        label: "Price",
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    domainNamePaid: {
        type: Number,
        label: "Paid Amount",
        optional: true,
        decimal: true,
        defaultValue: 0,
        custom: function () {
            if (this.value > this.field('domainNamePrice').value) {
                return "buidlPraid";
            }
        }
    },
    domainNameDue: {
        type: Number,
        label: "Due Amount",
        optional: true,
        defaultValue: 0
    },

//    Hosting
    hostingPrice: {
        type: Number,
        label: "Price",
        decimal: true,
        optional: true,
        defaultValue: 0
    },

    hostingPaid: {
        type: Number,
        label: "Paid Amount",
        optional: true,
        decimal: true,
        defaultValue: 0,
        custom: function () {
            if (this.value > this.field('hostingPrice').value) {
                return "buidlPraid";
            }
        }

    },
    hostingDue: {
        type: Number,
        label: "Due Amount",
        optional: true,
        defaultValue: 0
    },
    //    maintenance


    maintenancePrice: {
        type: Number,
        label: "Price",
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    maintenancePaid: {
        type: Number,
        label: "Paid Amount",
        optional: true,
        decimal: true,
        defaultValue: 0,
        custom: function () {
            if (this.value > this.field('maintenancePrice').value) {
                return "buidlPraid";
            }
        }

    },
    maintenanceDue: {
        type: Number,
        label: "Due Amount",
        optional: true,
        decimal: true,
        defaultValue: 0
    },
    serviceId: {
        type: String,
        optional: true
    },
    branchId:{
      type:String,
      label:"Branch"
    }
})
;
// Attach schema
Rabbit.Collection.PaymentWebsite.attachSchema(Rabbit.Schema.PaymentWebsite);

// Attach soft remove
//Rabbit.Collection.Customer.attachBehaviour('softRemovable');

SimpleSchema.messages({
    "buidlPraid": "it mustn't be greater than Price!"
});
//Status API Training Shop Blog About Pricing
