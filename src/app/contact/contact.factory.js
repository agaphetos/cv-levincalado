(function() {
    'use strict';

    angular
        .module('cvApp')
        .factory('MessageService', MessageService);

        MessageService.$inject = ["$http", "$log"]

    /** @ngInject */
    function MessageService($http, $log) {
        var serviceUri = "http://api.levincalado.me/message";

        var service = {
            fetchAll: fetchAll,
            createMessage: createMessage
        };

        return service;

        function fetchAll() {
            return $http.get(serviceUri)
                .then(getMessageComplete)
                .catch(getMessageFailed);

            function getMessageComplete(response) {
                return response.data.results;
            }

            function getMessageFailed(error) {
                $log.error('XHR Failed for fetchAll.' + error.data);
            }
        }

        function createMessage(data) {
            return $http.post(serviceUri, data)
                .then(createMessageComplete)
                .catch(createMessageFailed);

            function createMessageComplete(response) {
                return response.data;
            }

            function createMessageFailed(error) {
                $log.error('XHR Failed for createMessage.' + error.data);
            }
        }
    }
})();