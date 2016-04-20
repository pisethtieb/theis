destroyAction = function (collection, selector, options) {
    check(collection, Mongo.Collection);
    check(selector, Object);

    _.defaults(options, {
        title: 'Delete',
        item: 'this',
        successMsg: 'Success',
        errorMsg: null
    });

    alertify.confirm(
        fa("trash", options.title),
        "Are you sure to delete [" + options.item + "]?",
        function () {
            collection.remove(selector, function (error) {
                if (error) {
                    Bert.alert({
                        message: options.errorMsg ? options.errorMsg : error.message,
                        type: 'danger'
                    });
                } else {
                    Bert.alert({
                        message: options.successMsg,
                        type: 'success'
                    });
                }
            });
        },
        null);
};
