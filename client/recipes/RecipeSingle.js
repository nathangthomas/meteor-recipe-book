Template.RecipeSingle.onCreated(function(){
  var self = this;
  self.autorun(function(){
// ^^ unscribes us from any old subscriptions
    var id = FlowRouter.getParam('id');
    self.subscribe('singleRecipe', id);
  });
});

Template.RecipeSingle.helpers({
  recipe: ()=> {
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({_id: id});
  }
});
