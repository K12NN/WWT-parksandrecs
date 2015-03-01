'use strict';

angular.module('parksandrecApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('where', {
        url: '/where',
        templateUrl: 'app/views/where.html',
        controller: 'WhereCtrl'
      })
      .state('land', {
        url: '/land',
        templateUrl: 'app/views/land.html',
        controller: 'LandCtrl'
      })
      .state('water', {
        url: '/water',
        templateUrl: 'app/views/water.html',
        controller: 'WaterCtrl'
      })
      .state('what', {
        url: '/what',
        templateUrl: 'app/views/what.html',
        controller: 'WhatCtrl'
      });
  });