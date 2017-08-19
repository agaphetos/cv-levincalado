(function() {
    'use strict';
  
    angular
        .module('cvApp')
        .service('malarkeyService', malarkeyService);
  
    /** @ngInject */
    function malarkeyService() {
        var hobbies = [
            {
                'name': 'i like to write code'
            },
            {
                'name': 'i love to create apps'
            },
            {
                'name': 'and learn new technologies'
            }
        ];

        this.getHobbies = getHobbies;
        
        function getHobbies() {
            return hobbies;
        }
    }
})();
  