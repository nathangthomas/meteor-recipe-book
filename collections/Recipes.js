import { Mongo } from 'meteor/mongo';
Recipes = new Mongo.Collection('recipes');
// Recipes = new Meteor.Collection('recipes');

Recipes.allow({
  insert: function(userId, doc) {
    console.log("This is coming from insert function", userId)
    return !!userId;
    // if user id exists you can add a recipe
  }
});

Ingredient = new SimpleSchema({
  name: {
    type: String
  },
  ammount: {
    type: String
  }
});

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  ingredients: {
    type: [Ingredient]
    // putting Ingredient in square brackets allows recipe to have multiple ingredients and autoform will give incrementing boxes in the form
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  author: {
    type: String,
    label:"Author",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});


Recipes.attachSchema( RecipeSchema );
