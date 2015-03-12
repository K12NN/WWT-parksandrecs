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
  .controller("WaterCtrl", function($scope) {
    $scope.titles = [
      {page: "beaches", title: "Beaches"},
      {page: "lakes", title: "Lakes"},
      {page: "pools", title: "Swimming Pools"}
    ];
    console.log('water');
})
  .controller("BeachCtrl", function($scope,$http) {
    $http.get().success(function(data){$scope.beaches = data});
  });
