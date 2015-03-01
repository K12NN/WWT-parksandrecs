/**
 * Created by Fox on 2/28/2015.
 */
var geoserv = angular.module('geoService',[]);

geoserv.factory('getLocation', ['$q',function ($q) {

  var location = function() {
    var deferred = $q.defer();
    if (navigator.geolocation){
      //W3C geolocation method gets location data
      navigator.geolocation.getCurrentPosition(function(position){
        var initialLocation = {latitude:position.coords.latitude,longitude:position.coords.longitude};
        deferred.resolve(initialLocation);
      }, function (error) {
        deferred.reject(error)
      });
    } else
    {
      return "Geolocation is not supported by this browser.";
    }
    return deferred.promise;
  };

  return {
    location: location
  }
}]);

//var showError = function (error) {
//  return $q.reject(error);
  //switch (error.code) {
  //  case error.PERMISSION_DENIED:
  //    error = "User denied the request for Geolocation."
  //    break;
  //  case error.POSITION_UNAVAILABLE:
  //    error = "Location information is unavailable."
  //    break;
  //  case error.TIMEOUT:
  //    error = "The request to get user location timed out."
  //    break;
  //  case error.UNKNOWN_ERROR:
  //    error = "An unknown error occurred."
  //    break;
  //}
//};

