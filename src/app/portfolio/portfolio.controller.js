(function() {
    'use strict';

    angular
        .module('cvApp')
        .controller('PortfolioController', PortfolioController);

    PortfolioController.$inject = ["portfolioService"];

    /** @ngInject */
    function PortfolioController(portfolioService) {
        var vm = this;

        vm.category = '';
        vm.categories = [];
        vm.items = [];

        vm.getCategoryItems = getCategoryItems;

        init();

        function init() {
            vm.category = 'Web Pages';
            getCategories();
            getWebPages();
        }

        function getCategoryItems(item) {
            vm.category = item.name;
            if (item.id === 'web') {
                getWebPages();
            }
            if (item.id === 'project') {
                getProjects();
            }
            if (item.id === 'others') {
                getOthers();
            }
        }
        
        function getCategories() {
            vm.categories = portfolioService.getCategories();
        }

        function getWebPages() {
            vm.items = portfolioService.getWebPages();
        }

        function getProjects() {
            vm.items = portfolioService.getProjects();
        }

        function getOthers() {
            vm.items = portfolioService.getOthers();
        }
    }
})();