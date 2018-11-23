(function () {

  'use strict';


  // EXAMPLE CODE STARTS HERE

  // little_scroll

  // creates a module called starter - bound to body through ng-app directive
  // requires the ionic module for ionic to work
  // need ngAnimate for animations
  var app = angular.module('starter', ['ionic', 'ngAnimate']);

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

  // creating controller
  app.controller('AnimationExample', control);

  // Inject services that you need (in this case we don't need any :D )
  control.$inject = [];

  // Pass any injected services to the controller constructor function
  function control() {
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
      // toggle boolean to trigger animation
      vm.animating = !vm.animating;
      vm.animateButtonState = (vm.animating === true) ? 'Reset' : 'Animate';
    }
  }

})();