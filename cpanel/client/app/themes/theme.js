// var screenSizes = {
//   xs: 480,
//   sm: 768,
//   md: 992,
//   lg: 1200
// };
//
// Template.AdminLTE.onRendered(function () {
//   let self = this;
//   let data = self.data;
//   let body = $('body');
//   // Set default
//   let skin = '';
//   let sidebarMini = false;
//   let fixed = true;
//
//   if (data) {
//     skin = data.skin || skin;
//     sidebarMini = data.sidebarMini || sidebarMini;
//     fixed = data.fixed || fixed;
//   }
//
//   if (self.view.isRendered) {
//     body.removeClass();
//     body.addClass(skin);
//     sidebarMini && body.addClass('sidebar-mini');
//     fixed && body.addClass('fixed');
//
//     $(function () {
//       MeteorAdminLTE.run();
//     });
//   }
//   //Get window height and the wrapper height
//   var height = $(window).height() - $("body > .header").height() - ($("body > .footer").outerHeight() || 0);
//   $(".wrapper").css("min-height", height + "px");
//   var content = $(".wrapper").height();
//   //If the wrapper height is greater than the window
//   if (content > height)
//   //then set sidebar height to the wrapper
//     $(".left-side, html, body").css("min-height", content + "px");
//   else {
//     //Otherwise, set the sidebar to the height of the window
//     $(".left-side, html, body").css("min-height", height + "px");
//   }
// });
//
// Template.AdminLTE.onDestroyed(function () {
//   // this.removeClasses();
//   // this.style.remove();
//   // this.skin.remove();
// });
//
// Template.AdminLTE.events({
//   'click [data-toggle=offcanvas]': function (e, t) {
//     e.preventDefault();
//
//     //Enable sidebar push menu
//     if ($(window).width() > (screenSizes.sm - 1)) {
//       $("body").toggleClass('sidebar-collapse');
//     }
//     //Handle sidebar push menu for small screens
//     else {
//       if ($("body").hasClass('sidebar-open')) {
//         $("body").removeClass('sidebar-open');
//         $("body").removeClass('sidebar-collapse')
//       } else {
//         $("body").addClass('sidebar-open');
//       }
//     }
//   },
//
//   'click .content-wrapper': function (e, t) {
//     //Enable hide menu when clicking on the content-wrapper on small screens
//     if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
//       $("body").removeClass('sidebar-open');
//     }
//   },
//
//   'click .sidebar li a': function (e, t) {
//     //Get the clicked link and the next element
//     var $this = $(e.currentTarget);
//     var checkElement = $this.next();
//
//     //Check if the next element is a menu and is visible
//     if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
//       //Close the menu
//       checkElement.slideUp('normal', function () {
//         checkElement.removeClass('menu-open');
//       });
//       checkElement.parent("li").removeClass("active");
//     }
//     //If the menu is not visible
//     else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
//       //Get the parent menu
//       var parent = $this.parents('ul').first();
//       //Close all open menus within the parent
//       var ul = parent.find('ul:visible').slideUp('normal');
//       //Remove the menu-open class from the parent
//       ul.removeClass('menu-open');
//       //Get the parent li
//       var parent_li = $this.parent("li");
//
//       //Open the target menu and add the menu-open class
//       checkElement.slideDown('normal', function () {
//         //Add the class active to the parent li
//         checkElement.addClass('menu-open');
//         parent.find('li.active').removeClass('active');
//         parent_li.addClass('active');
//       });
//     }
//     else {
//       //Get the parent menu
//       var parent = $this.parents('ul').first();
//       //Close all open menus within the parent
//       var ul = parent.find('ul:visible').slideUp('normal');
//       //Remove the menu-open class from the parent
//       ul.removeClass('menu-open');
//       parent.find('li.active').removeClass('active');
//       var parent_li = $this.parent("li");
//       //Open the target menu and add the menu-open class
//       parent_li.addClass('active');
//     }
//     //if this isn't a link, prevent the page from being redirected
//     if (checkElement.is('.treeview-menu')) {
//       e.preventDefault();
//     }
//   }
// });