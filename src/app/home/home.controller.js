(function() {
    'use strict';

    angular
        .module('cvApp')
        .controller('HomeController', HomeController);

        HomeController.$inject = ["homeService"];

    /** @ngInject */
    function HomeController(homeService) {
        var vm = this;

        vm.data = {};
        vm.socialLinks = [];

        init(); 

        function init() {
            getData();
            getSocialLinks();
        }

        function getData() {
            vm.data = homeService.getData();
        }

        function getSocialLinks() {
            vm.socialLinks = homeService.getSocialLinks();
        }
    }
})();