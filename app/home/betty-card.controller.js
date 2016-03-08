(() => {
  'use strict';

  function BettyCardController() {
    this.changeCard = function changeCard() {
      // TODO: Stripe prompt!
    };
  }

  angular.module('betty.home').controller('BettyCardController',
      BettyCardController);
})();
