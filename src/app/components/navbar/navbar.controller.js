(function() {
    'use strict';

    angular
        .module('cvApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ["navbarService", "$timeout", "$mdSidenav", "toastr"];

    /** @ngInject */
    function NavbarController(navbarService, $timeout, $mdSidenav, toastr) {
        var vm = this;

        vm.items = [];

        vm.toggleLeft = buildToggler('left');
        vm.showToastr = showToastr;

        init(); 

        function init() {
            getItems();
        }

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }

        function getItems() {
            vm.items = navbarService.getItems();
        }

        function showToastr() {
            toastr.info('Thanks for the heart!');
            vm.classAnimation = '';
        }
    }
})();