FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
    // define which layout you want to render ('MainLayout') in route, add name of template area (main), add name of template you want to render into that layout ('Recipes').
  }
});
