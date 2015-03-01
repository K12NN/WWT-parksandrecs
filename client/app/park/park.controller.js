'use strict';

angular.module('parksandrecApp')
  .controller('ParkCtrl', function ($scope, park) {
    park.getParks().then(function(parks){
      // console.log(parks)
      $scope.parks = parks.data;
    })

  });
