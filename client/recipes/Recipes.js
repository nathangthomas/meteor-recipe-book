Meteor.subscribe('recipes');
// Meteor.subscribe(Recipes);

Template.Recipes.helpers({
  recipes: ()=> {
    console.log("This is coming from Recipes.js")
    // return db.recipes.find({})
    return Recipes.find({});
  }
});
