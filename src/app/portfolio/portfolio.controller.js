(function() {
    'use strict';

    angular
        .module('cvApp')
        .controller('PortfolioController', PortfolioController);

    PortfolioController.$inject = [];

    /** @ngInject */
    function PortfolioController() {
        var vm = this;

        init(); 

        function init() {}
    }
})();