// Declare template
let indexTpl = Template.Cpanel_user,
    newTpl = Template.Cpanel_userNew,
    editTpl = Template.Cpanel_userEdit,
    showTpl = Template.Cpanel_userShow;

// Index
indexTpl.onCreated(function () {
    // Create new  alertify
    createNewAlertify("user", {size: 'lg'});
});

indexTpl.events({
    'click .js-new': function (e, t) {
        alertify.user(fa("plus", "User"), renderTemplate(newTpl));
    },
    'click .js-update': function (e, t) {
        alertify.user(fa("pencil", "User"), renderTemplate(editTpl, this));
    },
    'click .js-destroy': function (e, t) {
        let self = this;

        alertify.confirm(
            fa("remove", "User"),
            "Are you sure to delete [" + self.username + "]?",
            function () {
                Meteor.call('userRemove', self._id, function (error, result) {
                    if (error) {
                      alertify.error(error.message);
                    } else {
                      alertify.success('Success');
                    }
                });
            },
            null);
    },
    'click .js-display': function (e, t) {
        alertify.alert(fa("eye", "User"), renderTemplate(showTpl, this).html);
    }
});

// New
newTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Cpanel.branch', {});
    });
});

// Edit
editTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Cpanel.branch', {});
        self.subscribe('Cpanel.user', {_id: self.data._id});
    });
});

editTpl.helpers({
    data: function () {
        let self = this;
        let data = Meteor.users.findOne(self._id);
        data.password = 'the same';
        data.confirmPassword = 'the same';

        if (typeof data.emails !== 'undefined') {
            data.email = data.emails[0].address;
        }

        let roles = [];
        let getGroup = Roles.getGroupsForUser(self._id);
        _.each(getGroup, function (group) {
            let getRole = Roles.getRolesForUser(self._id, group);
            _.each(getRole, function (role) {
                roles.push(group + ':' + role);
            });
        });
        data.roles = roles;

        return data;
    }
});

// Show
showTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Cpanel.user', {_id: self.data._id});
    });
});

showTpl.helpers({
    data: function () {
        let self = this;
        let data = Meteor.users.findOne(self._id);

        // Check email
        if (typeof data.emails !== 'undefined') {
            data.email = data.emails[0].address;
        } else {
            data.email = '';
        }

        // Check roles
        if (_.isObject(data.roles)) {
            data.roles = JSON.stringify(data.roles);
        } else {
            data.roles = '';
        }

        // Check branch
        if (_.isObject(data.rolesBranch)) {
            data.rolesBranch = JSON.stringify(data.rolesBranch);
        } else {
            data.rolesBranch = '';
        }

        return data;
    }
});

// Hook
AutoForm.hooks({
    Cpanel_userNew: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();

            Meteor.call('userInsert', insertDoc, function (error, result) {
                if (error) {
                  alertify.error(error.message);
                }
            });

            this.done();
        },
        onSuccess: function (formType, result) {
          alertify.success("Success");
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    },
    Cpanel_userEdit: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();

            Meteor.call('userUpdate', currentDoc._id, insertDoc, function (error, result) {
                if (error) {
                    alertify.error(error.message);
                }
            });

            this.done();
        },
        onSuccess: function (formType, result) {
            alertify.user().close();
            alertify.success("Success");
        },
        onError: function (formType, error) {
              alertify.error(error.message);
        }
    }
});
