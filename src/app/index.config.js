(function() {
  'use strict';

  angular
    .module('cvApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-bottom-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
    toastrConfig.closeButton = true;

    $mdThemingProvider.theme('light-green').backgroundPalette('green').accentPalette('blue');
    $mdThemingProvider.theme('light-blue').backgroundPalette('blue').accentPalette('amber');
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').accentPalette('amber').dark();
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  }

})();
