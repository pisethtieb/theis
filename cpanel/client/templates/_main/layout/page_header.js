Template._pageHeader.helpers({
    title: function () {
        let contentHeader = FlowRouter.getRouteName();
        let words = s.words(contentHeader, '.');
        if (_.isUndefined(contentHeader) || _.isUndefined(words[1])) {
            return 'No Title';
        }
        let contentHeaderTitle = s.titleize(s.humanize(words[1]));
        return contentHeaderTitle;
    }
});
