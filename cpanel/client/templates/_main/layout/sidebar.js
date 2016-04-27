/**
 * Helper
 */
Template._sidebar.helpers({
    sidebar: function () {
        var currentModule = Session.get('currentModule');
        // var menu = s.decapitalize(currentModule);
        return `${currentModule}_sidebar`;
    },
    currentBranch: function () {
        var currentModule = Session.get('currentModule');
        var currentBranch = Session.get('currentBranch');
        var getBranch = Cpanel.Collection.Branch.findOne({_id: currentBranch});
        var show = false;

        if (!currentModule || !currentBranch || !getBranch) {
            return {show: show};
        } else {
            show = true;
            var title = currentBranch + ' : ' + getBranch.enShortName;
            return {show: show, title: title};
        }
    }
});
Template._sidebar.events({
    'click .js-logout': function (e, t) {
        SignOut();
    }
});