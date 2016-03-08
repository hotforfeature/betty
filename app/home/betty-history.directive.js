(() => {
  'use strict';

  function bettyHistory() {
    return {
      restrict: 'E',
      templateUrl: 'home/betty-history.html',
      scope: {
        student: '<'
      }
    };
  }

  angular.module('betty.home').directive('bettyHistory', bettyHistory);
})();
