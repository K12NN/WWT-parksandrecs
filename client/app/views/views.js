'use strict';

angular.module('parksandrecApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/customize/customize.html',
        controller: 'CustomizeCtrl'
      })

      .state('where', {
        url: '/where',
        templateUrl: 'app/views/topics.html',
        controller: 'WhereCtrl'
      })

      .state('what', {
        url: '/what',
        templateUrl: 'app/views/topics.html',
        controller: 'WhatCtrl'
      })

      .state('water', {
        url: '/water',
        templateUrl: 'app/views/water.html',
        controller: 'WaterCtrl'
      });

      // .state('beaches', {
      //   url: '/beaches',
      //   templateUrl: 'app/views/beaches.html',
      //   controller: 'BeachCtrl'
      // })

      // .state('lakes', {
      //   url: '/lakes',
      //   templateUrl: 'app/views/lakes.html',
      //   controller: 'LakeCtrl'
      // })

      // .state('pools', {
      //   url: '/pools',
      //   templateUrl: 'app/views/pools.html',
      //   controller: 'PoolCtrl'
      // })

      // .state('fitness', {
      //   url: '/fitness',
      //   templateUrl: 'app/views/fitness.html',
      //   controller: 'FitCtrl'
      // })

      // .state('cultural', {
      //   url: '/cultural',
      //   templateUrl: 'app/views/cultural.html',
      //   controller: 'CultureCtrl'
      // })

      // .state('scenic', {
      //   url: '/scenic',
      //   templateUrl: 'app/views/scenic.html',
      //   controller: 'SceneCtrl'
      // })

      // .state('sports', {
      //   url: '/sports',
      //   templateUrl: 'app/views/sports.html',
      //   controller: 'SportCtrl'
      // });
  });
