Meteor.subscribe('recipes');
// Meteor.subscribe(Recipes);

Template.Recipes.helpers({
  recipes: ()=> {
    return Recipes.find({});
  }
});
