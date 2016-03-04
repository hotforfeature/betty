(() => {
  'use strict';

  const app = angular.module('betty', ['betty/login', 'betty/home', 'ngRoute']);

  app.config(['$routeProvider', '$locationProvider',
    ($routeProvider, $locationProvider) => {
      $routeProvider.when('/login', {
        template: '<login-screen></login-screen>'
      }).when('/home', {
        template: '<home-screen></home-screen>'
      }).otherwise({
        redirectTo: '/login'
      });

      $locationProvider.html5Mode(true);
    }]);

  app.directive('helloWorld', () => {
    return {
      restrict: 'E',
      template: '<h1>Hello Betty</h1>'
    };
  });
})();
