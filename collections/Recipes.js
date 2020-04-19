Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: function(userId, doc) {
    return !!userId;
    // if user id exists you can add a recipe
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
