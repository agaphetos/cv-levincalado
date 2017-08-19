(function() {
  'use strict';

  angular
    .module('cvApp')
    .directive('appMalarkey', appMalarkey);

  /** @ngInject */
  function appMalarkey(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var watcher;
      var typist = malarkey(el[0], {
        typeSpeed: 60,
        deleteSpeed: 60,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      el.addClass('app-malarkey');

      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause().delete();
      });

      watcher = scope.$watch('vm.hobbies', function() {
        angular.forEach(vm.hobbies, function(hobby) {
          typist.type(hobby.name).pause().delete();
        });
      });

      scope.$on('$destroy', function () {
        watcher();
      });
    }

    /** @ngInject */
    function MalarkeyController(malarkeyService) {
      var vm = this;

      vm.contributors = [];
      vm.hobbies = [];

      activate();

      function activate() {
        getHobbies();
      }

      function getHobbies() {
        vm.hobbies = malarkeyService.getHobbies();
      }
    }

  }

})();
