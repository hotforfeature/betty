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
          // TODO: Display loading

          tokenService.createToken(this.username, this.password).then(() => {
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
