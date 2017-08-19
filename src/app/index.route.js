(function() {
  'use strict';

  angular
    .module('cvApp')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/resume', {
        templateUrl: 'app/resume/resume.html',
        controller: 'ResumeController',
        controllerAs: 'resume'
      })
      .when('/portfolio', {
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'PortfolioController',
        controllerAs: 'portfolio'
      })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  }

})();
