(function() {
    'use strict';

    angular
        .module('cvApp')
        .controller('ContactController', ContactController);

    ContactController.$inject = ["toastr", "$timeout", "$location"];

    /** @ngInject */
    function ContactController(toastr, $timeout, $location) {
        var vm = this;

        vm.currentDate = new Date();
        vm.message = {};

        vm.submit = submit;
        vm.reset = reset;

        init(); 

        function init() {
            initMessage();
        }

        function initMessage() {
            vm.message = {
                'date': vm.currentDate,
                'name': '',
                'email': '',
                'content': ''
            };
        }

        function submit() {
            if(!vm.form.$invalid) {
                console.log(JSON.stringify(vm.message));
                toastr.info('Message sent! Please wait for my response in your email. Thanks ' + vm.name + '. Redirecting to home page.');
                vm.classAnimation = '';
                $timeout(function(){
                    $location.path("/");
                }, 2000);
            }
        }

        function reset() {
            initMessage();
            vm.form.$setPristine();
        }
    }
})();