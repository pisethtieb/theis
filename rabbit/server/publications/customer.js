 //Publication
Meteor.publish('rabbit_customer', function (branchId) {
    this.unblock();
    if (this.userId) {
        var selector = {};
        if (!_.isUndefined(branchId)) {
            selector.branchId = branchId;
        }

        return Rabbit.Collection.Customer.find(selector, {removed: true});
    }

    this.ready();
});

//Meteor.publish('rabbit_customerById', function (id) {
//    this.unblock();
//    if (this.userId) {
//        check(id, String);
//
//        return Rabbit.Collection.Customer.find({_id: id});
//    }
//
//    this.ready();
//});
