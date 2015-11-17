// Collection
Rabbit.Collection.Order = new Mongo.Collection("rabbit_order");

// Schema
Rabbit.Schema.Order = new SimpleSchema({
    orderDate: {
        type: Date,
        defaultValue: function () {
            return moment().format('YYYY-MM-DD');
        }
    },
    customerId: {
        type: String
    },
    des: {
        type: String,
        label: "Description",
        autoform: {
            afFieldInput: {
                type: 'summernote',
                class: 'editor', // optional
                settings: {
                    height: 150,                 // set editor height
                    minHeight: null,             // set minimum height of editor
                    maxHeight: null,             // set maximum height of editor
                    toolbar: [
                        ['font', ['bold', 'italic', 'underline', 'clear']], //['font', ['bold', 'italic', 'underline', 'clear']],
                        ['para', ['ul', 'ol']] //['para', ['ul', 'ol', 'paragraph']],
                        //['insert', ['link', 'picture']], //['insert', ['link', 'picture', 'hr']],
                    ]
                } // summernote options goes here
            }
        }
    },
    items: {
        type: [Object]
    },
    'items.$.name': {
        type: String
    },
    'items.$.qty': {
        type: Number
    },
    'items.$.price': {
        type: Number,
        decimal: true
    },
    'items.$.amount': {
        type: Number,
        decimal: true
    },
    total: {
        type: Number,
        decimal: true
    },
    branchId: {
        type: String,
        label: "Branch"
    }
});

// Attach schema
Rabbit.Collection.Order.attachSchema(Rabbit.Schema.Order);

// Attach soft remove
Rabbit.Collection.Order.attachBehaviour('softRemovable');