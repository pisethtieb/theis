// LoginLayout
class LoginLayout extends BlazeComponent {
    onCreated() {
        // Get current date time from server
        let self = this;
        self.cssColor = new ReactiveField('blue');
        self.dateTimeVal = new ReactiveField('');

        Meteor.setInterval(function () {
            Meteor.call('currentDate', function (error, result) {
                let dateTime = moment(result, 'YYYY-MM-DD H:mm:ss');
                if (dateTime.day() == 0 || dateTime.day() == 6) {
                    self.cssColor('red');
                }
                self.dateTimeVal(dateTime.format('dddd D, MMMM YYYY H:mm:ss'));
            });
        }, 1000);
    }

    onRendered() {
        /* ---- particles.js config ---- */
        particlesJS('particles-js', pJSConfig);
    }

    headerInfo() {
        // Check use login
        if (Meteor.user()) {
            return Spacebars.SafeString(`Hi, <b>${Meteor.user().profile.name} !</b>`);
        }
        return 'Please sign in to start . . .';
    }
}

LoginLayout.register('LoginLayout');