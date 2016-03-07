(() => {
  'use strict';

  angular.module('betty').config([
    '$routeProvider',
    '$locationProvider',
    '$mdThemingProvider',
    ($routeProvider, $locationProvider, $mdThemingProvider) => {
      $routeProvider.when('/login', {
        templateUrl: 'login/login-partial.html'
      }).when('/home', {
        templateUrl: 'home/home-partial.html'
      }).otherwise({
        redirectTo: '/login'
      });

      const maroon = $mdThemingProvider.extendPalette('red', {
        500: '#A00000'
      });
      $mdThemingProvider.definePalette('maroon', maroon);
      $mdThemingProvider.theme('default')
        .primaryPalette('maroon');
    }
  ]);
})();
