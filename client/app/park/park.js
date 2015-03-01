'use strict';

angular.module('parksandrecApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parks', {
        url: '/parks',
        templateUrl: 'app/park/parks_list.html',
        controller: 'ParkCtrl'
      });
  });