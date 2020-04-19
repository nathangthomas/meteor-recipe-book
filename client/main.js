import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating';
import { Recipes } from '/collections/Recipes.js';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/routes.js';
import './layouts/HomeLayout.html';
import './layouts/MainLayout.html';
import './recipes/Recipes.html';
import './recipes/NewRecipe.html';
// import './Recipes.js';
// import './server/publish.js';
