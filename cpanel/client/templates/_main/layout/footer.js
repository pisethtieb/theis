Template.registerHelper('_footerInfo', function () {
  let data = {
    copyright: '2014-2016',
    company: 'Rabbit IT Solution',
    website: 'www.rabbit-tec.come',
    tel: '053 50 66 777',
    version: '---'
  };

  let module = Session.get('currentModule');
  if (Meteor.userId() && !_.isUndefined(module)) {
    let moduleWord = s.words(module, ':');
    data.version = Module[moduleWord[0]].version;
  }

  return data;
});/**
 * Created by Ratanak on 4/21/2016.
 */
