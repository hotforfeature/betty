(() => {
  'use strict';

  function BettyToolbarController(tokenService) {
    this.logout = function logout() {
      tokenService.logout();
    };
  }

  angular.module('betty.layout').controller('BettyToolbarController', [
    'tokenService',
    BettyToolbarController
  ]);
})();
