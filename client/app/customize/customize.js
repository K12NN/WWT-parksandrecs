'use strict';

angular.module('parksandrecApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('customize', {
        url: '/customize',
        templateUrl: 'app/customize/customize.html',
        controller: 'MapCtrl'

      });
  });


