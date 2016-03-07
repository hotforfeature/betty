(() => {
  'use strict';

  function bettyWait() {
    return {
      restrict: 'E',
      templateUrl: 'layout/betty-wait.html'
    };
  }

  angular.module('betty.layout').directive('bettyWait', bettyWait);
})();
