(function() {
    'use strict';
  
    angular
        .module('cvApp')
        .service('malarkeyService', malarkeyService);
  
    /** @ngInject */
    function malarkeyService() {
        var hobbies = [
            {
                'name': 'write code'
            },
            {
                'name': 'create apps'
            },
            {
                'name': 'learn new technologies'
            }
        ];

        this.getHobbies = getHobbies;
        
        function getHobbies() {
            return hobbies;
        }
    }
})();
  