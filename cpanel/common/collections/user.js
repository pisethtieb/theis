/**
 * Schema
 */
Cpanel.Schema.User = new SimpleSchema({
    username: {
        type: String,
        label: 'Username',
        unique: true,
        min: 3
    },
    email: {
        type: String,
        label: 'Email',
        unique: true,
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    password: {
        type: String,
        label: "Password",
        min: 6
    },
    confirmPassword: {
        type: String,
        label: "Confirm Password",
        min: 6,
        custom: function () {
            if (this.value !== this.field('password').value) {
                return "passwordMismatch";
            }
        }
    },
    profile: {
        type: Object
    },
    'profile.fullName': {
        type: String
    },
    'profile.photo': {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Files',
                accept: 'image/*'
            }
        },
        optional: true
    },
    roles: {
        type: [String],
        autoform: {
            type: "select-multiple",
            //multiple: true,
            options: function () {
                return Cpanel.List.role();
            }
        }
    },
    rolesBranch: {
        type: [String],
        autoform: {
            type: "select-multiple",
            //multiple: true,
            options: function () {
                return Cpanel.List.branch(false);
            }
        }
    }
});

Cpanel.Schema.UserProfile = new SimpleSchema({
    username: {
        type: String,
        label: 'Username',
        unique: true,
        min: 3
    },
    email: {
        type: String,
        label: 'Email',
        unique: true,
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    profile: {
        type: Object
    },
    'profile.fullName': {
        type: String
    }
});

Cpanel.Schema.UserPassword = new SimpleSchema({
    oldPassword: {
        type: String,
        label: "Old password",
        min: 6
    },
    newPassword: {
        type: String,
        label: "New password",
        min: 6
    },
    newConfirmPassword: {
        type: String,
        label: "New confirm password",
        min: 6,
        custom: function () {
            if (this.value !== this.field('newPassword').value) {
                return "passwordMismatch";
            }
        }
    }
});

/**
 * Errors message
 */
SimpleSchema.messages({
    "passwordMismatch": "[label] don't match."
});
