Template.Recipes.onCreated(function(){
  var self = this;
  self.autorun(function(){
// ^^ unscribes us from any old subscriptions
    self.subscribe('recipes');
  })
});

Template.Recipes.helpers({
  recipes: ()=> {
    return Recipes.find({});
  }
});
