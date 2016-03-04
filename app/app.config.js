(() => {
  'use strict';

  angular.module('betty').config([
    '$routeProvider',
    '$locationProvider',
    '$mdThemingProvider',
    ($routeProvider, $locationProvider, $mdThemingProvider) => {
      $routeProvider.when('/login', {
        template: '<betty-login></betty-login>'
      }).when('/home', {
        template: '<home-screen></home-screen>'
      }).otherwise({
        redirectTo: '/login'
      });

      $locationProvider.html5Mode(true);

      const maroon = $mdThemingProvider.extendPalette('red', {
        500: '#A00000'
      });
      $mdThemingProvider.definePalette('maroon', maroon);
      $mdThemingProvider.theme('default')
        .primaryPalette('maroon');
    }
  ]);
})();
