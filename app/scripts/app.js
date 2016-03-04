(() => {
  'use strict';

  const app = angular.module('betty', []);

  app.directive('helloWorld', () => {
    return {
      restrict: 'E',
      template: '<h1>Hello Betty</h1>'
    };
  });
})();
