(function() {
    'use strict';

    angular
        .module('cvApp')
        .controller('ResumeController', ResumeController);

    ResumeController.$inject = ["resumeService"];

    /** @ngInject */
    function ResumeController(resumeService) {
        var vm = this;

        vm.details = {};
        vm.contactItems = [];
        vm.technicalSkills = [];
        vm.personalSkills = [];
        vm.workExperience = [];
        vm.education = [];
        vm.techs = [];

        init();

        function init() {
            getDetails();
            getContactItems();
            getTechnicalSkills();
            getPersonalSkills();
            getWorkExperience();
            getEducation();
            getTechs();
        }

        function getDetails() {
            vm.details = resumeService.getDetails();
        }

        function getContactItems() {
            vm.contactItems = resumeService.getContactItems();
        }

        function getTechnicalSkills() {
            vm.technicalSkills = resumeService.getTechnicalSkills();
        }

        function getPersonalSkills() {
            vm.personalSkills = resumeService.getPersonalSkills();
        }

        function getWorkExperience() {
            vm.workExperience = resumeService.getWorkExperience();
        }

        function getEducation() {
            vm.education = resumeService.getEducation();
        }

        function getTechs() {
            vm.techs = resumeService.getTechs();
        }
    }
})();