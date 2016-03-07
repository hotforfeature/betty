(() => {
  'use strict';

  function BettyLoginController($location, tokenService) {
    this.username = '';
    this.password = '';

    this.login = function login() {
      // TODO: Display loading

      tokenService.createToken(this.username, this.password).then(() => {
        // FIXME: Why the delay?
        $location.path('/home');
      }).catch(err => {
        console.error(err);
      });
    };
  }

  angular.module('betty.login').controller('BettyLoginController', [
    '$location',
    'tokenService',
    BettyLoginController
  ]);
})();
