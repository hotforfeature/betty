(() => {
  'use strict';

  function BettyLoginController($location, tokenService) {
    this.username = '';
    this.password = '';
    this.loading = false;

    this.login = function login() {
      this.loading = true;
      tokenService.createToken(this.username, this.password).then(() => {
        this.loading = false;
        $location.path('/home');
      }).catch(err => {
        this.loading = false;
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
