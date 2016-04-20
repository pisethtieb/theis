// Declare template
var indexTpl = Template.Cpanel_branch,
  newTpl = Template.Cpanel_branchNew,
  editTpl = Template.Cpanel_branchEdit,
  showTpl = Template.Cpanel_branchShow;

// Index
indexTpl.onCreated(function () {
    // Create new  alertify
    createNewAlertify("branch", {size: 'lg'});
});

indexTpl.events({
    'click .js-create': function (e, t) {
        alertify.branch(fa("plus", "Branch"), renderTemplate(newTpl));
    },
    'click .js-update': function (e, t) {
        alertify.branch(fa("pencil", "Branch"), renderTemplate(editTpl, this));
    },
    'click .js-destroy': function (e, t) {
        destroyAction(
          Cpanel.Collection.Branch,
          {_id: this._id},
          {title: 'Branch', item: this._id}
        );
    },
    'click .js-display': function (e, t) {
        alertify.alert(fa("eye", "Branch"), renderTemplate(showTpl, this).html);
    }
});

// Edit
editTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Cpanel.branch', {_id: self.data._id});
    });
});

editTpl.helpers({
    data: function () {
        let data = Cpanel.Collection.Branch.findOne(this._id);
        return data;
    }
});

// Show
showTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Cpanel.branch', {_id: self.data._id});
    });
});

showTpl.helpers({
    data: function () {
        let data = Cpanel.Collection.Branch.findOne(this._id);
        return data;
    }
});

// Hook
AutoForm.hooks({
    Cpanel_branchNew: {
        onSuccess: function (formType, result) {
            Bert.alert({
                message: 'Success',
                type: 'success'
            });
        },
        onError: function (formType, error) {
            Bert.alert({
                message: error.message,
                type: 'danger'
            });
        }
    },
    Cpanel_branchEdit: {
        onSuccess: function (formType, result) {
            alertify.branch().close();
            Bert.alert({
                message: 'Success',
                type: 'success'
            });
        },
        onError: function (formType, error) {
            Bert.alert({
                message: error.message,
                type: 'danger'
            });
        }
    }
});
