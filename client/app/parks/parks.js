'use strict';

angular.module('parksandrecApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parks', {
        url: '/parks',
        templateUrl: 'app/parks/parks_list.html',
        controller: 'ParksCtrl'
      })

      .state('park', {
        url: '/parks/:id',
        templateUrl: 'app/parks/park_detail.html',
        controller: 'ParkDetailCtrl'
      });

  });