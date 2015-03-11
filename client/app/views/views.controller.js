'use strict';

angular.module('parksandrecApp')
  .controller("InitialCtrl", function($scope) {
    $scope.test = "test";
    console.log('initial page loaded');
})
  .controller("WhereCtrl", function($scope) {
    $scope.titles = [
      {page: "water", title: "Water"},
      {page: "parks", title: "Parks"}
    ];
})
  .controller("WhatCtrl", function($scope) {
    $scope.titles = [
      {page: "fitness", title: "Fitness"},
      {page: "cultural", title: "Cultural"},
      {page: "scenic", title: "Scenic"},
      {page: "sports", title: "Sports"}
    ];
})
  .controller("LandCtrl", function($scope) {
    $scope.test = "test";
    console.log('land page loaded');
})
  .controller("WaterCtrl", function($scope) {
    $scope.titles = [
      {page: "where", title: "Where to go"},
      {page: "what", title: "What to do"}
    ];
})
  .controller("BeachCtrl", function($scope,$http) {
    $http.get().success(function(data){$scope.beaches = data});
  });
