SignOut = function () {
    Meteor.logout((error)=> {
        if (!error) {
            // Clear Session
            Session.clearPersistent();
            
            FlowRouter.go('cpanel.module');
            Bert.alert({
                // title: 'Success',
                message: 'You are sign out',
                type: 'success'
            });
        }
    });
};
