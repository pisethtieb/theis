// // // // ///**
// // // // // * Created by root on 3/11/16.
// // // // // */
// // // // //
// Meteor.startup(function() {
//     if (Rabbit.Collection.Customer.find().count() > 0) {
//         var data = Rabbit.Collection.Customer.find();
//
//         _.each(data, function(obj) {
//             Rabbit.Collection.Customer.update({},{$set:{_contractCount:0}},{multi:true});
//         });
//     }
// });