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
      var id = this._id;

      alertify.confirm(
          fa("remove", "Branch"),
          "Are you sure to delete [" + id + "]?",
          function () {

              Cpanel.Collection.Branch.remove(id, function (error) {
                  if (error) {
                      alertify.error(error.message);
                  } else {
                      alertify.success("Success");
                  }
              });
          },
          null);
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
          alertify.success("Success");
        },
        onError: function (formType, error) {
          alertify.error(error.message);
        }
    },
    Cpanel_branchEdit: {
        onSuccess: function (formType, result) {
            alertify.branch().close();
            alertify.success("Success");
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});
