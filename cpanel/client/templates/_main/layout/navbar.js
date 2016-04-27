var updateTpl = Template.Cpanel_userEdit,
  showTpl = Template.Cpanel_userShow;
/**
 * Header
 */
Template.navbar.helpers({
  role: function () {
    var role = Roles.getGroupsForUser(Meteor.userId());
    if (role.length > 0) {
      return true;
    }
    return false;
  },
  date: function () {
    var userDoc = Meteor.users.findOne(Meteor.userId());
    return moment(userDoc.createdAt).format('dddd, LL');
  },
  images: function () {
    var userDoc = Meteor.users.findOne(Meteor.userId());
    return Files.find(userDoc.profile.photo);
  },
  userType: function () {
    var userDoc = Meteor.users.findOne(Meteor.userId());
    var roles = "";
    userDoc.roles.sys.forEach(function (userRoles) {
      roles += s.humanize(userRoles) + " | ";
    });
    return new Spacebars.SafeString(roles.substr(0, roles.length - 2));
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
  },
  moduleName: function () {
    var module = Session.get('currentModule');
    var branch = Session.get('currentBranch');
    if (Meteor.userId() && !_.isUndefined(module) && !_.isUndefined(branch)) {
      var moduleWord = s.words(module, ':');
      return Module[moduleWord[0]].name;
    }

    return 'Rabbit Tech';
  },
  navbarMenu: function () {
    var currentModule = Session.get('currentModule');
    // var menu = s.decapitalize(currentModule);

    return `${currentModule}_navbarMenu`;
  },
  user: function () {
    let data = Meteor.user();
    if (data) {
      data.emailsAddress = data.emails[0].address;
      return data;
    }
  }
});
Template.navbar.events({
  'click .js-logout': function (e, t) {
    SignOut();
  },
  'click .js-profile':function () {
    FlowRouter.go('cpanel.userProfile');
  }
});