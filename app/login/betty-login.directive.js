(() => {
  'use strict';

  function bettyLogin($location, tokenService) {
    return {
      restrict: 'E',
      templateUrl: 'login/betty-login.directive.html',
      controllerAs: 'loginCtrl',
      controller() {
        this.username = '';
        this.password = '';

        this.login = function login() {
          tokenService.createToken(this.username, this.password).then(() => {
            this.password = '';
            $location.path('/home');
          }).catch(err => {
            console.error(err);
          });
        };
      }
    };
  }

  angular.module('betty.login').directive('bettyLogin', [
    '$location',
    'tokenService',
    bettyLogin
  ]);
})();
