(() => {
  'use strict';

  function HomeController() {
    this.student = 'Matt Smith';
  }

  angular.module('betty.home').controller('HomeController', HomeController);
})();
