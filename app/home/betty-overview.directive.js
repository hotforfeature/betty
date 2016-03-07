(() => {
  'use strict';

  function bettyOverview() {
    return {
      restrict: 'E',
      templateUrl: 'home/betty-overview.html',
      scope: {
        student: '<'
      },
      controllerAs: 'overviewCtrl',
      controller: 'BettyOverviewController'
    };
  }

  angular.module('betty.home').directive('bettyOverview', bettyOverview);
})();
