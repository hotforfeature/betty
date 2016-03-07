(() => {
  'use strict';

  function bettyLogin() {
    return {
      restrict: 'E',
      templateUrl: 'login/betty-login.html',
      controllerAs: 'loginCtrl',
      controller: 'BettyLoginController'
    };
  }

  angular.module('betty.login').directive('bettyLogin', bettyLogin);
})();
