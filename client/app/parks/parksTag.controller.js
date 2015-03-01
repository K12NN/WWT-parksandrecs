'use strict';

angular.module('parksandrecApp')
  .controller('ParksTagCtrl', function ($scope, parksService, $stateParams) {
    parksService.getParksTag($stateParams.tag).then(function(parks){
      // console.log(parks)
      $scope.parks = parks.data;
    });

  });
