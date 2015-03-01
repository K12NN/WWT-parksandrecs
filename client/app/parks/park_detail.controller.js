'use strict';

var sortable = function(input, key) {
  var items;

  items = input.slice();

  items.sort(function(a, b){
    // console.log('sorting', a[key], key,a.key  < b.key, a.key  > b.key );
    if (a[key]  < b[key]) {
      return -1;
    } else if (a[key]  > b[key]) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log('finish sort', items);
  return items;
};

var minMaxValue = function(values, key) {
  var min, max;

  values.forEach(function(coor){

    // get min value
    min = min || coor[key];
    if(coor[key] < min) {
      min = coor[key];
    }

    // get max value
    max = max || coor[key];
    if(coor[key] > max) {
      max = coor[key];
    }
  });


  console.log('final', key, min, max);
  return {min: min, max: max};

};

var calculateBounds  = function (coors) {

  var coorsLat,
    coorsLong,
    lats,
    longs;

  coorsLat = sortable(coors, 'latitude');
  lats = minMaxValue(coorsLat, 'latitude');

  coorsLong = sortable(coors, 'longitude');
  longs = minMaxValue(coorsLong, 'longitude');

  console.log('sort', lats, longs);

  return {
    northeast: {latitude: lats.min, longitude: longs.min},
    southwest: {latitude: lats.max, longitude: longs.max}
  };

  // return {
  //   northeast: {latitude: 57.0630, longitude: -70.0410},
  //   southwest: {latitude: 16.8438, longitude: -135.9590}
  // };

};



angular.module('parksandrecApp')
  .controller('ParkDetailCtrl', ['$scope', 'parksService', '$stateParams', 'uiGmapGoogleMapApi', 'getLocation',
    function ($scope, parksService, $stateParams, uiGmapGoogleMapApi, getLocation) {

      parksService.getParkDetail($stateParams.id).then(function(park){

        var parkMarker = {latitude: park.data.lat, longitude: park.data.long,  id: $stateParams.id};
        //var currentMarker = {latitude: 33.9777809, longitude: -118.40835340000001,  id: 1};
        var currentMarker = {latitude: 34, longitude: -118,  id: 1};

        var coors = [parkMarker];

        // uiGmapGoogleMapApi is a promise.
        // The "then" callback function provides the google.maps object.
        uiGmapGoogleMapApi.then(function(maps) {

          $scope.map = {
            center: { latitude: park.data.lat, longitude: park.data.long },
            zoom: 11
            //bounds: calculateBounds(coors)
          };

          getLocation.location().then(function(value){
            $scope.map.center = value;
            currentMarker = value;
            currentMarker.id = 1;
            console.log(value);
            coors.push(currentMarker);
            $scope.markers = coors;
            console.log($scope.markers);
          });

        });

        $scope.park = park.data;
        $scope.features = park.data.features.join(', ');
        //$scope.markers = coors;
        //console.log(coors)

      });

    }]);


