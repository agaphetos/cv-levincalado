(function() {
    'use strict';

    angular
        .module('cvApp')
        .controller('ResumeController', ResumeController);

    ResumeController.$inject = ["resumeService", "$http"];

    /** @ngInject */
    function ResumeController(resumeService, $http) {
        var vm = this;
        var pdfUrl = 'assets/files/Resume-JamesLevinCalado.pdf';

        vm.details = [];
        vm.contactItems = [];
        vm.technicalSkills = [];
        vm.personalSkills = [];
        vm.workExperience = [];
        vm.education = [];
        vm.techs = [];
        vm.pdf = {
            'src': pdfUrl,
            'data': null
        }

        init();

        vm.downloadPDF = downloadPDF;

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

        function downloadPDF() {
            getPdfAsArrayBuffer(pdfUrl)
                .then(function(response) {
                    vm.pdf.data = new Uint8Array(response.data);
                });
        }
    
        function getPdfAsArrayBuffer (pdfUrl) {
            return $http.get(pdfUrl, {
                responseType: 'arraybuffer'
            });
        }
    }
})();