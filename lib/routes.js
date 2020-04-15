FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/test', {
  name: 'test',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Test'});
    // define which layout you want to render ('MainLayout') in route, add name of template area (main), add name of template you want to render into that layout ('Test').
  }
});
