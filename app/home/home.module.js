(() => {
  'use strict';

  const home = angular.module('betty.home', []);

  home.directive('homeScreen', () => {
    return {
      restrict: 'E',
      template: '<h1>Home</h1>'
    };
  });
})();
