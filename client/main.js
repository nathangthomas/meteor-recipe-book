import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating';
import { Recipes } from '/collections/Recipes.js';
import { ReactiveVar } from 'meteor/reactive-var';

// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './main.html';
import '../lib/routes.js';
import './layouts/HomeLayout.html';
import './layouts/MainLayout.html';
import './partials/SideNav.html';
import './recipes/Recipes.html';
import './recipes/NewRecipe.html';
import './partials/Header.html';
import './recipes/Recipes.js';
import './recipes/Recipe.html';
import './recipes/RecipeSingle.html';
import './recipes/RecipeSingle.js';
import './helpers/onLogin.html';
