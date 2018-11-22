(function () { // Immediately invoked function expression (IFFE)

  'use strict'; // Enforces correct code (can't have unused variables etc.)


  // EXAMPLE CODE STARTS HERE

  // little_scroll

  // creates a module called starter - bound to body through ng-app directive
  // requires the ionic module for ionic to work
  var app = angular.module('starter', ['ionic', 'ngAnimate']); // need ngAnimate for animations

  // entry point for the web app
  // boilerplate code that doesn't need to be modified
  app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
    });

  });

  // This is how you create a controller which you then bind to whatever html element you want to be the controller (usually the body element)
  // control is the name of the function which declares any variables and functions that the view needs
  app.controller('AnimationExample', control);

  // inject services that you need (in this case we don't need any :D )
  control.$inject = [];

  // pass the service to the function that is passed to the app.controller() function
  function control() {
    // vm -> View Model - angular.extend takes one object and adds the properties of another object onto it.
    var vm = angular.extend(this, {
      selectedAnimation: '',
      selectedText: '',
      availableAnimations: [
        'scroll'
      ],
      availableText: [
        'This is a very very very very long message which is here to demo the scrolling animation',
        'This is a shorter message'
      ],
      animating: false,
      animateButtonState: 'Animate'
    });

    
    // setting up default values
    vm.selectedAnimation = vm.availableAnimations[0];
    vm.selectedText = vm.availableText[0];
    
    // declaring the function that executes when the button is pressed
    vm.animate = function() {
      // toggling this boolean value to prompt angularjs to add the selectedAnimation as a class to the element.
      // This will trigger the animation based on the name of the css class (in this case 'scroll')
      vm.animating = !vm.animating;

      // the text of the 'Animate' button has angularjs 2 way binding so updating the variable which gives it it's name according to the state of the boolean will change the text to the appropriate value.
      vm.animateButtonState = (vm.animating === true) ? 'Reset' : 'Animate';
    }
  }

})();