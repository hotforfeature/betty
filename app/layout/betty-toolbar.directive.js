(() => {
  'use strict';

  function bettyToolbar() {
    return {
      restrict: 'E',
      templateUrl: 'layout/betty-toolbar.html',
      controllerAs: 'toolbarCtrl',
      controller: 'BettyToolbarController'
    };
  }

  angular.module('betty.layout').directive('bettyToolbar', bettyToolbar);
})();
