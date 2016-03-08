(() => {
  'use strict';

  function BettyLoginController($location, $mdDialog, tokenService) {
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
        $mdDialog.show($mdDialog.alert({
          title: 'Error',
          textContent: err.message,
          ok: 'OK'
        }));
      });
    };
  }

  angular.module('betty.login').controller('BettyLoginController', [
    '$location',
    '$mdDialog',
    'tokenService',
    BettyLoginController
  ]);
})();
