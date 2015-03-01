'use strict';

angular.module('parksandrecApp')
  .controller('ParkDetailCtrl', ['$scope', 'parksService', '$stateParams', 'uiGmapGoogleMapApi',
    function ($scope, parksService, $stateParams, uiGmapGoogleMapApi) {

    parksService.getParkDetail($stateParams.id).then(function(park){

      // uiGmapGoogleMapApi is a promise.
      // The "then" callback function provides the google.maps object.
      uiGmapGoogleMapApi.then(function(maps) {
        $scope.map = { center: { latitude: park.data.lat, longitude: park.data.long }, zoom: 11 };
      });

      $scope.park = park.data;
      $scope.features = park.data.features.join(', ');

      $scope.parkMarkers = [{latitude: park.data.lat, longitude: park.data.long, title: 'me', id: 1}];

    });

  }]);


