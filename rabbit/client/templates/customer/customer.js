/**
 * Declare template
 */
var indexTpl = Template.rabbit_customer,
    insertTpl = Template.rabbit_customerInsert,
    updateTpl = Template.rabbit_customerUpdate,
    showTpl = Template.rabbit_customerShow;

//locationAddOnTpl = Template.rabbit_locationAddOnCustomer;


/**
 * Index
 */
indexTpl.onCreated(function () {
    // SEO
    SEO.set({
        title: 'Customer',
        description: 'Description for this page'
    });

    // Create new  alertify
    createNewAlertify(["customer"], {size: 'lg'});
    createNewAlertify(["customerShow"], {size: 'lg'});
    createNewAlertify(["locationAddon"], {transition: 'zoom', size: 'lg'});
});

indexTpl.onRendered(function () {
    //Meteor.subscribe('rabbit_contract');
    //Meteor.subscribe('rabbit_quotation');
    //Meteor.subscribe('rabbit_website');
});

indexTpl.helpers({
    selector: function () {
        return {branchId: Session.get('currentBranch')};
    }
});

indexTpl.events({
    'click .js-insert': function (e, t) {
        alertify.customer(fa("plus", "Customer"), renderTemplate(insertTpl));
    },
    'click .js-update': function (e, t) {
        alertify.customer(fa("pencil", "Customer"), renderTemplate(updateTpl, this));
    },
    'click .js-remove': function (e, t) {
        var self = this;
        var id = this._id;
        var arr = [
            {collection: 'Rabbit.Collection.Contract', selector: {customerId: id}},
            {collection: 'Rabbit.Collection.Website', selector: {customerId: id}}
        ];
        Meteor.call('isRelationExist', arr, function (error, result) {
                if (result) {

                    alertify.message(self._id + '|' + self.companyName + '  is in used !');
                    return false
                } else {
                    alertify.confirm(
                        fa("remove", "Customer"),
                        "Are you sure to delete [" + self._id + "] ?",
                        function () {
                            Rabbit.Collection.Customer.remove(self._id, function (error) {
                                if (error) {
                                    alertify.error(error.message);
                                } else {
                                    alertify.success("Success");
                                }
                            });
                        },
                        null
                    );
                }
            }
        );
    },
    'click .js-show': function (e, t) {
        alertify.customerShow(fa("eye", "Customer"), renderTemplate(showTpl, this));
    }
    ,
    'click .contractAction': function () {

        if (this._contractCount == 0 || this._contractCount == null) {
            FlowRouter.go('rabbit.contract', {
                customerId: this._id
            });
            alertify.customer(fa("plus", "Contract"), renderTemplate(Template.rabbit_contractInsert));

        } else {
            FlowRouter.go('rabbit.contract', {
                customerId: this._id
            })
        }



    }
    ,
    'click .websiteAction': function () {

        if (this._websiteCount == 0 || this._websiteCount == null) {
            FlowRouter.go('rabbit.website', {
                customerId: this._id
            });
            alertify.customer(fa("plus", "Website"), renderTemplate(Template.rabbit_websiteInsert));

        } else {
            FlowRouter.go('rabbit.website', {
                customerId: this._id
            })
        }
    }


});

/**
 * Insert
 */
insertTpl.onRendered(function () {
    configOnRender();
});

/**
 * Update
 */
updateTpl.onCreated(function () {
    //this.subscribe('rabbit_customer', this.data._id);
});

updateTpl.onRendered(function () {
    Meteor.setTimeout(function () {
        configOnRender();
    }, 200);
});

updateTpl.helpers({
    //data: function () {
    //    var data = Rabbit.Collection.Customer.findOne(this._id);
    //    return data;
    //}
});


/**
 * Show
 */
showTpl.onCreated(function () {
    this.subscribe('rabbit_customer', this.data._id);
});

showTpl.helpers({
    data: function () {
        var data = Rabbit.Collection.Customer.findOne(this._id);
        return data;

    },
    contactPerson: function () {
        var str = "<table class='table table-bordered'><thead>" +
            "<tr>" +
            "<th>Name</th>" +
            "<th>Gender</th>" +
            "<th>Position</th>" +
            "<th>Telephone</th>" +
            "</tr>" +
            "</thead><tbody>";
        this.contactPerson.forEach(function (o) {
            str += '<tr>' +
                '<td>' + o.name + '</td>' +
                '<td>' + o.gender + '</td>' +
                '<td>' + o.position + '</td>' +
                '<td>' + o.tel + '</td>' +
                '</tr>'
        });
        str += "</tbody></table>";
        return new Spacebars.SafeString(str);
    }
});


/**
 * Hook
 */
AutoForm.hooks({
    // Customer
    rabbit_customerInsert: {
        before: {
            insert: function (doc) {
                doc.branchId = Session.get('currentBranch');
                var prefix = doc.branchId + '-';
                Meteor.call('rabbit', prefix);
                return doc;
            }
        },
        onSuccess: function (formType, result) {
            alertify.success('Success');
            alertify.customer().close();
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    },
    rabbit_customerUpdate: {
        onSuccess: function (formType, result) {
            alertify.customer().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});

// Config date picker
var configOnRender = function () {
    // date
    debugger;
    var dob = $('[name="dob"]');
    DateTimePicker.date(dob);
};
