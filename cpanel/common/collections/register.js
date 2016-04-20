/**
 * Schema
 */
// Login
Cpanel.Schema.WelcomeRegister = new SimpleSchema({
    username: {
        type: String
    },
    email: {
        type: String,
        label: 'Email',
        unique: true,
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    password: {
        type: String
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
    }
});