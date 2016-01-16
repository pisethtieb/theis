// Collection
Rabbit.Collection.Contract = new Mongo.Collection("rabbit_contract");

// Schema
Rabbit.Schema.Contract = new SimpleSchema({
    contractDate: {
        type: String,
        label: "Contract Date"

    },
    customerId: {
        type: String,
        label: 'Customer Id'
    },
    productId: {
        type: String,
        label: "Product Id",
        autoform: {
            type: 'select2',
            options(){
                return Rabbit.List.product();
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
    paymentMethod: {
        type: Array,
        minCount: 1,
        maxCount: 3
    },
    'paymentMethod.$': {
        type: Object
    },
    'paymentMethod.$.paymentDuration': {
        type: String
    },
    type: {
        type: String,
        label: 'type',
        autoform: {
            type: 'select2',
            options(){
                return Rabbit.List.contractType();
            }
        }
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
        }
    },
    addFile: {
        type: [String],
        label: 'Choose file',
        optional: true
    },
    "addFile.$": {
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Files'
            }
        }
    },
    contractorId: {
        type: String,
        label: "ContractorId",
        autoform: {
            type: 'select2',
            options(){
                return Rabbit.List.contractors();
            }
        }
    },
    agentId: {
        type: String,
        label: 'AgentId',
        autoform: {
            type: 'select2',
            options(){
                return Rabbit.List.agent();
            }
        }
    },
    amount: {
        type: Number,
        label: 'Agent Fee',
        decimal: true
    }
});

// Attach schema
Rabbit.Collection.Contract.attachSchema(Rabbit.Schema.Contract);

