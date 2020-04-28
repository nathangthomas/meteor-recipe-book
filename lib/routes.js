FlowRouter.route('/', {
  name: 'home',
  action() {
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
  name: 'recipe-book',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});
