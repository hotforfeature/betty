(() => {
  'use strict';

  const login = angular.module('betty/login', []);

  login.directive('loginScreen', () => {
    return {
      restrict: 'E',
      template: '<h1>Login</h1>'
    };
  });
})();
