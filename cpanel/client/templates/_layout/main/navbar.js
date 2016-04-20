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
  // 'click .user': function () {
  //     var id = Meteor.userId();
  //     var data = Meteor.users.findOne(id);
  //     if (data.username == "super") {
  //         $('.update-user').addClass('hidden');
  //         $('.show-user').removeClass('hidden');
  //     } else {
  //         $('.show-user').addClass('hidden');
  //         $('.update-user').removeClass('hidden');
  //     }
  // },
  'click .js-logout': function (e, t) {
    SignOut();
  },
  // 'click .update-user': function (e, t) {
  //     var id = Meteor.userId();
  //     var data = Meteor.users.findOne(id);
  //
  //     data.password = 'the same';
  //     data.confirmPassword = 'the same';
  //
  //     if (typeof data.emails !== 'undefined') {
  //         data.email = data.emails[0].address;
  //     }
  //
  //     //var rolesFake = "";
  //     //data.roles.sys.forEach(function(userRoles) {
  //     //    rolesFake += s.humanize(userRoles) + " | ";
  //     //});
  //     //data.rolesFake = new Spacebars.SafeString(rolesFake.substr(0, rolesFake.length - 2));
  //
  //     var roles = [];
  //     var getGroup = Roles.getGroupsForUser(id);
  //     _.each(getGroup, function (group) {
  //         var getRole = Roles.getRolesForUser(id, group);
  //         _.each(getRole, function (role) {
  //             roles.push(group + ':' + role);
  //         });
  //     });
  //
  //     data.roles = roles;
  //
  //     alertify.usersUpdate(fa("pencil", "User"), renderTemplate(updateTpl, data));
  // },
  // 'click .show-user': function (e, t) {
  //     var id = Meteor.userId();
  //     var data = Meteor.users.findOne(id);
  //     // Check email
  //     if (typeof data.emails !== 'undefined') {
  //         data.emails = data.emails[0].address;
  //     } else {
  //         data.emails = "";
  //     }
  //
  //     // Photo
  //     data.photoUrl = null;
  //     if (!_.isUndefined(data.profile.photo)) {
  //         data.photoUrl = Files.findOne(data.profile.photo).url();
  //     } else {
  //         data.photoUrl = '../images/avatar.png';
  //     }
  //
  //     // Check branch
  //     if (_.isObject(data.profile.branch)) {
  //         data.profile.branch = JSON.stringify(data.profile.branch);
  //     } else {
  //         data.profile.branch = "";
  //     }
  //
  //     // Check roles
  //     if (_.isObject(data.roles)) {
  //         data.roles = JSON.stringify(data.roles);
  //     } else {
  //         data.roles = "";
  //     }
  //
  //     alertify.alert(fa("eye", "User"), renderTemplate(showTpl, data).html);
  //
  // }
});