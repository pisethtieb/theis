/*
 User
 */
Meteor.publish('cpanel_user', function (selector = {}, options = {}) {
    this.unblock();
    if (this.userId) {
        check(selector, Object);
        check(options, Object);

        let data = Meteor.users.find(selector, options);

        return data;
    }

    this.ready();
});

Meteor.publish('Cpanel.currentUser', function () {
    this.unblock();
    if (this.userId) {
        let data = Meteor.users.find(this.userId);
        return data;
    }

    this.ready();
});

/*
 Roles
 */
Meteor.publish(null, function () {
    return Meteor.roles.find();
});
