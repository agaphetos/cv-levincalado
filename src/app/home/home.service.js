(function() {
    'use strict';
  
    angular
        .module('cvApp')
        .service('homeService', homeService);
  
    /** @ngInject */
    function homeService() {
      var data = {
        'image': 'assets/images/profile.jpg',
        'icon': 'favicon.ico',
        'title': 'Levin Calado',
        'subtitle': 'Geek | Techie | Developer'
      };

      var socialLinks = [
          {
            'name': 'Facebook',
            'link': 'http://facebook.com/agaphetos',
            'icon': 'fa-facebook'
          },
          {
            'name': 'Twitter',
            'link': 'http://twitter.com/agaphetos',
            'icon': 'fa-twitter'
          },
          {
            'name': 'LinkedIn',
            'link': 'http://linkedin.com/in/agaphetos',
            'icon': 'fa-linkedin'
          },
          {
            'name': 'Github',
            'link': 'http://github.com/agaphetos',
            'icon': 'fa-github'
          }
      ];
  
      this.getData = getData;
      this.getSocialLinks = getSocialLinks;
  
      function getData() {
        return data;
      }

      function getSocialLinks() {
        return socialLinks;
      }
    }
  })();
  