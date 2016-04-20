/*
 Branch
 */
// Meteor.publish('cpanel_branch', function () {
//     if (this.userId) {
//         Meteor._sleepForMs(1000);
//         return Cpanel.Collection.Branch.find();
//     } else {
//         return [];
//     }
// });
/*
 Branch
 */
Meteor.publish('cpanel_branch', function (selector = {}, options = {}) {
    this.unblock();
    if (this.userId) {
        check(selector, Object);
        check(options, Object);

        let data = Cpanel.Collection.Branch.find(selector, options);

        return data;
    }

    this.ready();
});
