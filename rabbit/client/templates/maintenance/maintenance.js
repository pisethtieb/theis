/**
 * Created by ratanak on 11/19/15.
 */
/**
 * Declare template
 */
var indexTpl = Template.rabbit_maintenance,
    insertTpl = Template.rabbit_maintenanceInsert,
    updateTpl = Template.rabbit_maintenanceUpdate,
    showTpl = Template.rabbit_maintenanceShow;

//locationAddOnTpl = Template.rabbit_locationAddOnMaintenance;


/**
 * Index
 */
indexTpl.onCreated(function () {
    // SEO
    SEO.set({
        title: 'Sale Branch Maintenance',
        description: 'Description for this page'
    });

    // Create new  alertify
    createNewAlertify(["maintenance"], {size: 'lg'});
    createNewAlertify(["maintenanceShow"]);
    //createNewAlertify(["locationAddon"], {transition: 'zoom', size: 'lg'});
});

indexTpl.events({
    'click .js-insert': function (e, t) {

        alertify.maintenance(fa("plus", "Maintenance"), renderTemplate(insertTpl));

    },
    'click .js-update': function (e, t) {
        alertify.maintenance(fa("pencil", "Maintenance"), renderTemplate(updateTpl, this));
        console.log(this);
    },
    'click .js-remove': function (e, t) {
        var self = this;
        alertify.confirm(
            fa("remove", "Maintenance"),
            "Are you sure to delete [" + self._id + "] ?",
            function () {
                Rabbit.Collection.Maintenance.remove(self._id, function (error) {
                    if (error) {
                        alertify.error(error.message);
                    } else {
                        alertify.success("Success");
                    }
                });
            },
            null
        );
    },
    'click .js-show': function (e, t) {
        alertify.maintenanceShow(fa("eye", "Maintenance"), renderTemplate(showTpl, this));
    },

});

indexTpl.helpers({
    selector: function () {
        let id = FlowRouter.getParam('officeId');
        //console.log(id);
        return {officeId: id}
    },
    office(){
        let officeId = FlowRouter.getParam('officeId');
        let office = Rabbit.Collection.Office.findOne({_id: officeId});

        return office;
    }

});

/*Insert*/
insertTpl.onRendered(function () {
    configOnRender();

});
insertTpl.helpers({

    maintenance(){
        let officeId = FlowRouter.getParam('officeId');
        let office = Rabbit.Collection.Office.findOne({_id: officeId});
        if (office.type == 'HO') {
            return {
                price: office._contract.maintenancePrice[0].headOffice,
                contractPrice: office._contract.maintenancePrice[0].headOffice,
                officeId: office._id,
                type: office.type,
                discount: 0,
                startDate: moment(ReactiveMethod.call("currentDate"), 'YYYY-MM-DD').format('YYYY-MM-DD'),
                endDate: moment().add(1, 'years').format('YYYY-MM-DD')

            }
        } else {
            return {
                contractPrice: office._contract.maintenancePrice[0].branch,
                price: office._contract.maintenancePrice[0].branch,
                officeId: office._id,
                type: office.type,
                discount: 0,
                startDate: moment(ReactiveMethod.call("currentDate"), 'YYYY-MM-DD').format('YYYY-MM-DD'),
                endDate: moment().add(1, 'years').format('YYYY-MM-DD')

            }
        }
    }
})
;
insertTpl.events({
    'click .endDate': function (e, t) {
        $('.endDate').val(moment().add(1, 'years').format('YYYY-MM-DD'))
    },
    'keyup .discount'(e){

        $('#price').val($('.contractPrice').val() - $('.discount').val());
    }
});

/**
 * Update
 */
updateTpl.onCreated(function () {
    this.subscribe('rabbit_maintenance', this.data._id);
});

updateTpl.onRendered(function () {
    Meteor.setTimeout(function () {
        configOnRender();
    }, 200);
});

updateTpl.helpers({
    data: function () {
        var data = Rabbit.Collection.Maintenance.findOne(this._id);
        return data;
    }
});
/**
 * Show
 */
showTpl.onCreated(function () {
    this.subscribe('rabbit_maintenance', this.data._id);
});
showTpl.helpers({
    data: function () {
        var data = Rabbit.Collection.Maintenance.findOne(this._id);
        return data;
    }
});
/**
 * Hook
 */
AutoForm.hooks({
    // Maintenance
    rabbit_maintenanceInsert: {
        before: {
            insert: function (doc) {
                doc.branchId = Session.get('currentBranch');
                var prefix = doc.branchId + '-';
                Meteor.call('rabbit', prefix);
                return doc;
            }
        },
        onSuccess: function (formType, result) {
            alertify.maintenance().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    },
    rabbit_maintenanceUpdate: {
        onSuccess: function (formType, result) {
            alertify.maintenance().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});
var configOnRender = function () {
    // date
    var startDate = $('.startDate');
    DateTimePicker.date(startDate);
    var endDate = $('.endDate');
    DateTimePicker.date(endDate);

};
