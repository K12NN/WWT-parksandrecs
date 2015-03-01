'use strict';

angular.module('parksandrecApp')
  .controller('ParkDetailCtrl', function ($scope, parksService, $stateParams) {

    parksService.getParkDetail($stateParams.id).then(function(park){
      $scope.park = park.data;
      $scope.features = park.data.features.join(', ');
    });

  });
