(function() {
    'use strict';
  
    angular
        .module('cvApp')
        .service('footerService', footerService);
  
    /** @ngInject */
    function footerService() {

      var socialLinks = [
          {
            'name': 'Facebook',
            'link': 'http://facebook.com/agaphetos',
            'icon': 'fa-facebook-square'
          },
          {
            'name': 'Twitter',
            'link': 'http://twitter.com/agaphetos',
            'icon': 'fa-twitter-square'
          },
          {
            'name': 'LinkedIn',
            'link': 'http://linkedin.com/in/agaphetos',
            'icon': 'fa-linkedin-square'
          },
          {
            'name': 'Google+',
            'link': 'http://google.com/+LevinCaladoAgaphetos',
            'icon': 'fa-google-plus-square'
          },
          {
            'name': 'Github',
            'link': 'http://github.com/agaphetos',
            'icon': 'fa-github-square'
          }
      ];

      this.getSocialLinks = getSocialLinks;

      function getSocialLinks() {
        return socialLinks;
      }
    }
  })();
  