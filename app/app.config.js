(() => {
  'use strict';

  angular.module('betty').config([
    '$routeProvider',
    '$locationProvider',
    ($routeProvider, $locationProvider) => {
      $routeProvider.when('/login', {
        template: '<betty-login></betty-login>'
      }).when('/home', {
        template: '<home-screen></home-screen>'
      }).otherwise({
        redirectTo: '/login'
      });

      $locationProvider.html5Mode(true);
    }
  ]);
})();
