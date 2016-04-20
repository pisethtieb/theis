// Declare template
var indexTpl = Template.Cpanel_userProfile,
    editTpl = Template.Cpanel_userProfileEdit,
    passwordTpl = Template.Cpanel_userChangePassword;

// Index
indexTpl.onCreated(function () {
    // Create new  alertify
    createNewAlertify('userProfile');
});

indexTpl.helpers({
    data: function () {
        let data = Meteor.user();

        // Check data
        if(data){
            // Check email
            if (data.emails) {
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

        return {};
    }
});

indexTpl.events({
    'click .js-update': function (e, t) {
        alertify.userProfile(fa("pencil", "User Profile"), renderTemplate(editTpl));
    },
    'click .js-password': function (e, t) {
        alertify.userProfile(fa("pencil", "User Password"), renderTemplate(passwordTpl));
    }
});

// Edit
editTpl.helpers({
    data: function () {
        let data = Meteor.user();

        // Check email
        if (typeof data.emails !== 'undefined') {
            data.email = data.emails[0].address;
        } else {
            data.email = '';
        }

        return data;
    }
});

// Hook
AutoForm.hooks({
    Cpanel_userProfileEdit: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            let self = this;
            self.event.preventDefault();

            Meteor.call('Capanel.userProfile', currentDoc._id, insertDoc, function (error, result) {
                if (error) {
                    self.done(new error);
                }
            });
            self.done();
        },
        onSuccess: function (formType, result) {
            alertify.userProfile().close();
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
    Cpanel_userChangePassword: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();
            this.done(null, insertDoc);
        },
        onSuccess: function (formType, result) {
            Accounts.changePassword(result.oldPassword, result.newPassword, function (error) {
                if (error) {
                    Bert.alert({
                        message: error.message,
                        type: 'danger'
                    });
                } else {
                    alertify.userProfile().close();
                    SignOut();
                }
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
