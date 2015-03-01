'use strict';

angular.module('parksandrecApp')
  .controller('ParksCtrl', function ($scope, parksService) {
    parksService.getParks().then(function(parks){
      // console.log(parks)
      $scope.parks = parks.data;
    });

  });
