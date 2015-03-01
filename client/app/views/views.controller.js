'use strict';

angular.module('parksandrecApp')
  .controller("InitialCtrl", function($scope) {
    $scope.test = "test";
    console.log('initial page loaded');
})
  .controller("WhereCtrl", function($scope) {
    $scope.test = "test";
    console.log('where page loaded');
})
  .controller("WhatCtrl", function($scope) {
    $scope.test = "test";
    console.log('what page loaded');
})
  .controller("LandCtrl", function($scope) {
    $scope.test = "test";
    console.log('land page loaded');
})
  .controller("WaterCtrl", function($scope) {
    $scope.test = "test";
    console.log('water page loaded');
})
  .controller("BeachCtrl", function($scope,$http) {
    $http.get().success(function(data){$scope.beaches = data});
  });
