Template.RecipeSingle.onCreated(function(){
  var self = this;
  self.autorun(function(){
// ^^ unscribes us from any old subscriptions
    self.subscribe('recipes');
  })
});

Template.RecipeSingle.helpers({
  recipe: ()=> {
    return Recipes.findOne({});
  }
});
