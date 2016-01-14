Meteor.methods({
    rabbit_paymentMaintenanceBalanceReport: function (params) {
        var data = {
            title: {},
            header: {},
            content: [{index: 'No Result'}],
            footer: {}
        };
        //exchange = Cpanel.Collection.Exchange.findOne(exchangeId);
        //date = s.words(params.date, ' To '),
        //    fDate = date[0],
        //    newDate = new Date(date[1]);
        //var tDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
        //tDate = moment(tDate).format('YYYY-MM-DD');
        //var date = s.words(params.date, ' To ');
        //var fDate = moment(date[0], 'YYYY-MM-DD').toDate();
        //var tDate = moment(date[1], 'YYYY-MM-DD').add(1, 'days').toDate();
        //****** Title *****/
        data.title = Cpanel.Collection.Company.findOne();

        /****** Header *****/
        data.header = params;

        /****** Content *****/
        var content = [];
        var selector = {};
        selector.paymentMaintenanceDate = {$lte: moment(params.date + ' 23:59:59').format('YYYY-MM-DD HH:mm:ss')};
        //selector.paymentMaintenanceDate = {$gte: fDate, $lte: tDate};
        //
        if (!_.isEmpty(params.branch)) {
            selector.branchId = params.branch;
        }
        //if (!_.isEmpty(params.contractId)) {
        //    selector.{office.contractId}= params.contractId
        //}
        if (!_.isEmpty(params.contractId)) {
            selector.contractId = params.contractId;
        }

        var index = 1;
        let total = 0;
        var totalDueAmount = 0;
        let totalPaidAmount = 0;

        let paymentMaintenance = Rabbit.Collection.PaymentMaintenance.find(selector);
        paymentMaintenance.forEach(function (obj) {
            //if (obj._office.contractId == params.contractId) {
            //    console.log(obj._id);
            // Do something
            obj.payment = JSON.stringify(obj.maintenance);
            obj.index = index;
            let amount = 0;
            let paidAmount = 0;
            let dueAmount = 0;
            obj.maintenance.forEach(function (office) {
                paidAmount += parseFloat(office.paidAmount);
                amount += parseFloat(office.price);
                dueAmount += parseFloat(office.dueAmount);
            });
            //amount
            obj.amount = numeral(amount).format('0,0.00');
            obj.paid = numeral(paidAmount).format('0,0.00');
            obj.due = numeral(dueAmount).format('0,0.00');
            totalPaidAmount += paidAmount;
            contractId = obj.contractId;
            content.push(obj);
            index++;
            //}
        });
        if (paymentMaintenance.count() == 1) {
            let office = Rabbit.Collection.Maintenance.find({'_office.contractId': contractId});
            office.forEach(function (o) {
                total += parseFloat(o.price);
            })
        } else {
            let office = Rabbit.Collection.Maintenance.find();
            office.forEach(function (o) {
                total += parseFloat(o.price);
            })
        }
        ;
        totalDueAmount = total - totalPaidAmount;
        if (content.length > 0) {
            data.content = content;
            data.footer.totalPrice = numeral(total).format('$0,0.00');
            data.footer.totalDueAmount = numeral(totalDueAmount).format('$0,0.00');
            data.footer.totalPaidAmount = numeral(totalPaidAmount).format('$0,0.00');
            //data.footer.paidAmount = numeral(fx.convert(paidAmount, {from: 'KHR', to: 'USD'})).format('0,0.00')
        }

        return data
    }
});
