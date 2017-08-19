(function() {
    'use strict';
  
    angular
      .module('cvApp')
      .directive('appFooter', appFooter);
  
    /** @ngInject */
    function appFooter() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/footer/footer.html'
      };
  
      return directive;
    }
  
  })();
  