/**
 * Created by Fox on 2/28/2015.
 */
var geoserv = angular.module('geoService',[]);

geoserve.factory('getLocation', [function () {
  return {
    location: function() {
      if (navigator.geolocation){
        //W3C geolocation method gets location data
        return navigator.geolocation.getCurrentPosition(showPosition, showError); //(success callback, error callback)
      } else
      {
        return "Geolocation is not supported by this browser.";
      }
    }
  }
}]);

var showPosition = function (position) {
  var initialLocation = {latitude: position.coords.latitude, longitude:position.coords.longitude};
  console.log(intialLocation);
  return initialLocation;
};

var showError = function (error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      $scope.error = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      $scope.error = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      $scope.error = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      $scope.error = "An unknown error occurred."
      break;
  }
};

