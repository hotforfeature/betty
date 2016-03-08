(() => {
  'use strict';

  function HomeController(tokenService) {
    this.student = {};

    if (tokenService.isLoggedIn()) {
      // TODO: Retrieve student
    }
  }

  angular.module('betty.home').controller('HomeController', [
    'tokenService',
    HomeController
  ]);
})();
