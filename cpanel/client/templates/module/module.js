/**
 * Index
 */
class CpanelModule extends BlazeComponent {
  role() {
    let role = Roles.getGroupsForUser(Meteor.userId());
    if (role.length > 0) {
      return true;
    }
    return false;
  };
  // Event
  events() {
    return [
      {'click .js-logout': this.signOut}
    ]
  }

  signOut(event) {
    SignOut();
  }
}

CpanelModule.register('CpanelModule');

/**
 * Login
 */
class CpanelModuleLogin extends BlazeComponent {
  onCreated() {
    // AutoForm hook
    AutoForm.hooks({
      CpanelModuleLogin: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
          this.event.preventDefault();
          this.done(null, insertDoc);
        },
        onSuccess: function (formType, result) {
          Meteor.loginWithPassword(result.username, result.password, (error)=> {
            if (error) {
              Bert.alert({
                // title: 'Error',
                message: error.message,
                type: 'danger',
                style: 'growl-bottom-right'
              });
            } else {
              Bert.alert({
                // title: 'Success',
                message: 'You are sign in',
                type: 'success',
                style: 'growl-bottom-right'
              });
            }
          });
        },
        onError: function (formType, error) {
          Bert.alert({
            // title: 'Error',
            message: error.message,
            type: 'danger',
            style: 'growl-bottom-right'
          });
        }
      }
    });
  }
}

CpanelModuleLogin.register('CpanelModuleLogin');

/**
 * Config
 */
Template.CpanelModuleConfig.helpers({
  headerInfo(){
    var id = Meteor.userId();
    var data = Meteor.users.findOne(id);
    if (id) {
      return data.profile.fullName;
    }
  }
});
class CpanelModuleConfig extends BlazeComponent {
  // On created
  onCreated() {
    let self = this;
    let rolesBranch = Meteor.user().rolesBranch;
    self.autorun(function () {
      self.subscribe('Cpanel.branch', {_id: {$in: rolesBranch}});
    });

    // AutoForm hook
    AutoForm.hooks({
      CpanelModuleConfig: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
          this.event.preventDefault();
          this.done(null, insertDoc);
        },
        onSuccess: function (formType, result) {
          // Set current session
          Session.setAuth('currentModule', result.module);
          Session.setAuth('currentBranch', result.branch);

          FlowRouter.go(s.decapitalize(result.module) + '.home');
        }
      }
    });
  }

  // Event
  events() {
    return [
      {'click .js-sign-out': this.signOut}
    ]
  }

  signOut(event) {
    SignOut();
  }
}

CpanelModuleConfig.register('CpanelModuleConfig');

/**
 * Login
 */
class CpanelModuleRegister extends BlazeComponent {
  onCreated() {
    // AutoForm hook
    AutoForm.hooks({
      CpanelModuleRegister: {
        onSubmit: function (insertDoc, result, currentDoc) {
          this.event.preventDefault();
          this.done(null, insertDoc);
        },
        onSuccess: function (formType, result) {
          Accounts.createUser({
            username: result.username,
            email: result.email,
            password: result.password
          }, (error)=> {
            if (error) {
              Bert.alert({
                // title: 'Error',
                message: error.message,
                type: 'danger'
              });
            } else {
              Bert.alert({
                // title: 'Success',
                message: 'You are sign in',
                type: 'success'
              });
              FlowRouter.go('cpanel.home');
            }
          });

        },
        onError: function (formType, error) {
          Bert.alert({
            // title: 'Error',
            message: error.message,
            type: 'danger'
          });
        }
      }
    });
  }
}

CpanelModuleRegister.register('CpanelModuleRegister');
