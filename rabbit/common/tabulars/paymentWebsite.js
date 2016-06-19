Rabbit.TabularTable.PaymentWebsite = new Tabular.Table({
    name: "rabbit_saleBranchPaymentWebsiteList",
    collection: Rabbit.Collection.PaymentWebsite,
    pagingType: "full_numbers",
    autoWidth: false,
    columnDefs: [
        {"width": "12px", "targets": 0}
    ],
    order: [['1', 'desc']],
    columns: [
        {title: '<i class="fa fa-bars"></i>', tmpl: Meteor.isClient && Template.rabbit_paymentWebsiteAction},
        {data: "_id", title: "ID"},
        {
            data: "Payment Date", title: "Payment Date",
            render: function (val, type, doc) {
                return moment(val).format('YYYY-MM-DD');
            }
        },
        {
          data: "buildPrice", title: "Build",
          render:function (val, type, doc) {
            var result = "Price : " + val + " | " + "Paid : " + doc.buildPaid + " | " + "Due : " + doc.buildDue ;
            return result;
          }
        },
        {
          data: "domainNamePrice", title: "Domain",
          render:function (val, type, doc) {
            var result = "Price : " + val + " | " + "Paid : " + doc.domainNamePaid + " | " + "Due : " + doc.domainNameDue ;
            return result;
          }
        },
        {
          data: "hostingPrice", title: "Hosting",
          render:function (val, type, doc) {
            var result = "Price : " + val + " | " + "Paid : " + doc.hostingPaid + " | " + "Due : " + doc.hostingDue ;
            return result;
          }
        },
        {
          data: "maintenancePrice", title: "Maintenance",
          render:function (val, type, doc) {
            var result = "Price : " + val + " | " + "Paid : " + doc.maintenancePaid + " | " + "Due : " + doc.maintenanceDue ;
            return result;
          }
        }

    ],
    extraFields: ['websiteId','serviceId','domainNamePaid', 'domainNameDue', 'hostingPaid', 'hostingDue', 'maintenancePaid', 'maintenanceDue', 'paymentWebsiteDate', 'buildPaid', 'buildDue', 'customerId','maintenanceOwedAmount','maintenanceTotalPrice','_customer','_website']
});
