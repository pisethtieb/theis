/**
 * Schema
 */
Cpanel.Schema.EventReport = new SimpleSchema({
    user: {
        type: String,
        label: "User",
        autoform: {
            type: "select2",
            options: function () {
                return Cpanel.ListForReport.user();
            },
            select2Options: {
                theme: "bootstrap"
            }
        }
    },
    type: {
        type: String,
        label: "Type",
        autoform: {
            type: "select2",
            options: function () {
                return Cpanel.ListForReport.type();
            },
            select2Options: {
                theme: "bootstrap"
            }
        },
        optional: true
    },
    module: {
        type: String,
        label: "Module",
        autoform: {
            type: "select2",
            options: function () {
                return Cpanel.ListForReport.module();
            },
            select2Options: {
                theme: "bootstrap"
            }
        },
        optional: true
    },
    branch: {
        type: String,
        label: "Branch",
        autoform: {
            type: "select2",
            options: function () {
                return Cpanel.ListForReport.branch();
            },
            select2Options: {
                theme: "bootstrap"
            }
        },
        optional: true
    },
    date: {
        type: String,
        label: "Date"
    }
});