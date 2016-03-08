(() => {
  'use strict';

  function bettyCard() {
    return {
      restrict: 'E',
      templateUrl: 'home/betty-card.html',
      scope: {
        student: '<'
      },
      controllerAs: 'cardCtrl',
      controller: 'BettyCardController'
    };
  }

  angular.module('betty.home').directive('bettyCard', bettyCard);
})();
