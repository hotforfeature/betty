(() => {
  'use strict';

  function bettyWait() {
    return {
      restrict: 'E',
      templateUrl: 'utils/betty-wait.html'
    };
  }

  angular.module('betty.utils').directive('bettyWait', bettyWait);
})();
