'use strict';

angular.module('parksandrecApp')
  .controller("MapCtrl", ['$scope','uiGmapGoogleMapApi','getLocation',function($scope, uiGmapGoogleMapApi,getLocation) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
    getLocation.location().then(function(value){
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 }; //need to re-declare or it's undefined
      $scope.map.center = value;
    })
}]);
