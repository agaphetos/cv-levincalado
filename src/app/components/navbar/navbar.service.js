(function() {
  'use strict';

  angular
      .module('cvApp')
      .service('navbarService', navbarService);

  /** @ngInject */
  function navbarService() {
    var data = [
      {
        'title': 'Home',
        'description': 'Personal Website',
        'route': 'home',
        'icon': 'home'
      },
      {
        'title': 'Resume',
        'description': 'Work Experience, Education, Skills, etc.',
        'route': 'resume',
        'icon': 'description'
      },
      {
        'title': 'Portfolio',
        'description': 'Works, Projects, Hobbies, etc.',
        'route': 'portfolio',
        'icon': 'folder'
      },
      {
        'title': 'Contact',
        'description': 'Leave me a message',
        'route': 'contact',
        'icon': 'email'
      }
    ];

    this.getItems = getItems;

    function getItems() {
      return data;
    }
  }
})();
