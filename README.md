# Welcome to Meteor Recipe Book
This application was created as an exercise to further explore Meteor, Blaze, and MongoDB. You can view a similar repo where I explored using Meteor with React to build a ToDo app [HERE](https://github.com/nathangthomas/meteor-todos)

## Table of Contents
<!--ts-->
   * [Set Up](#set-up)
   * [Live App](#live-app)
   * [Helpful Terminal Commands](#helpful-terminal-commands)
   * [Helpful Links](#helpful-links)
   * [Tech Stack](#tech-stack)
<!--te-->

## **Set Up**

### Clone repo
```
https://github.com/nathangthomas/meteor-recipe-book
```
### Run Meteor Recipe Book Locally
- Type `meteor` in your terminal to spin up your server.
- Visit [http://localhost:3000/](http://localhost:3000/) in your browser to interact with the app.
- Run the test suite by first shutting down your current server or specifying a new port with `--port XYZ`.
  You can then run `TEST_WATCH=1 meteor test --driver-package meteortesting:mocha` to run tests.

## Live App
(This functionality is not currently set up.)
You can also interact with a live version of Meteor Recipe Book [HERE](https://meteor--todos.herokuapp.com).

## Helpful Terminal Commands:
- `meteor create new-app` creates a new Meteor app.
- `meteor create --react new-react-app` creates a new Meteor app using React
- `meteor` runs your local server on localhost:3000
- `meteor --settings settings.json` run local server using settings.json file
- `meteor remove whatever-you-want-to-remvoe`
- `meteor add whatever-you-want-to-add`
- `meteor update` Update all packages
- `meteor add react-meteor-data` Allows us to create a "data container" to feed Meteor's reactive data into React's component hierarchy
- `meteor mongo` Opens a console into your app's local development database
  - `show dbs` Displays all databases
  -  `show collections` Collections of current db
- `meteor add accounts-ui accounts-password` Adds packages to enable the accounts system and UI
- `TEST_WATCH=1 meteor test --driver-package meteortesting:mocha` Run app in test mode
- `--port XYZ` Specify alternate port

### Running On an iOS Simulator
- `meteor install-sdk ios` Run application inside the IOS simulator
- `meteor add-platform ios` Install Xcode from the App Store
- `sudo xcodebuild -license accept` short cut for ^^
- `meteor run ios`
- `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer` Enable Xcode tools in the terminal environment
- `meteor run ios-device` Opens project in Xcode
- `meteor run ios-device --mobile-server=http://1.1.1.1:3000`
- `meteor add-platform ios` Adds iOS platform to project

## Helpful Links:
- [Meteor Guide](https://guide.meteor.com/)
- [Facebook's React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [React Docs](https://reactjs.org/)
- [JSX](https://reactjs.org/docs/jsx-in-depth.html)
- [React Events](https://reactjs.org/docs/events.html)
- [Meteor's Optimistic UI - Blog Post](https://blog.meteor.com/optimistic-ui-with-meteor-67b5a78c3fcf)

## Tech Stack:
### This app was built with the following:
- [Meteor](https://www.meteor.com/)
- [Blaze](http://blazejs.org/guide/introduction.html)
- [JavaScript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/)
