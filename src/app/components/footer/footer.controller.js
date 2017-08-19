(function() {
    'use strict';

    angular
        .module('cvApp')
        .controller('FooterController', FooterController);

        FooterController.$inject = ["footerService"];

    /** @ngInject */
    function FooterController(footerService) {
        var vm = this;

        vm.socialLinks = [];

        init(); 

        function init() {
            getSocialLinks();
        }

        function getSocialLinks() {
            vm.socialLinks = footerService.getSocialLinks();
        }
    }
})();