/**
 * Schema
 */
// Config
Cpanel.Schema.WelcomeConfig = new SimpleSchema({
    module: {
        type: String,
        label: 'Module',
        autoform: {
            type: "select2",
            options: function () {
                return Meteor.isClient && Cpanel.List.roleForUser();
            },
            afFieldInput: {
                value: function () {
                    return Meteor.isClient && Session.get('currentModule');
                }
            },
            select2Options: {
                theme: "bootstrap"
            }
        }
    },
    branch: {
        type: String,
        label: "Branch",
        autoform: {
            type: "select2",
            options: function () {
                return Meteor.isClient && Cpanel.List.branchForUser();
            },
            afFieldInput: {
                value: function () {
                    return Meteor.isClient && Session.get('currentBranch');
                }
            }
        }
    }
});


