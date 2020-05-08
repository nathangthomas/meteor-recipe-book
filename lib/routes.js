// Accounts.onLogin(function() {
//   FlowRouter.go('recipe-book');
// });
//
// Accounts.onLogout(function() {
//   FlowRouter.go('/');
// });

// the below console.logs render the proper message to the console, but FlowRouter does not seem to be working properly.
//
// Accounts.onLogin(function() {
//   console.log("I just logged in.");
// });
//
// Accounts.onLogout(function() {
//   console.log("I just logged out.");
// });

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()) {
      FlowRouter.go('recipe-book');
    }
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    // BlazeLayout.render('HomeLayout');
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
    // define which layout you want to render ('MainLayout') in route, add name of template area (main), add name of template you want to render into that layout ('Recipes').
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'recipe',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});
