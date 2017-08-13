(function() {
    'use strict';

    angular
        .module('cvApp')
        .controller('ContactController', ContactController);

    ContactController.$inject = [];

    /** @ngInject */
    function ContactController() {
        var vm = this;

        init(); 

        function init() {}
    }
})();