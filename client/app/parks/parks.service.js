'use strict';

angular.module('parksandrecApp')
  .factory('parksService', function ($http) {

    var getParks = function(setting) {
      return $http({
        method: 'GET',
        url: '/api/parks',
        params: {setting: setting}
      });
    };

    var getParkDetail = function(id) {
      return $http({
        method: 'GET',
        url: '/api/parks/'+id
      });
    };

    var getParksTag = function(tag) {
      return $http({
        method: 'GET',
        url: '/api/parks/tag/'+tag
      });
    };


    // Public API here
    return {
      getParks: getParks,
      getParkDetail: getParkDetail,
      getParksTag: getParksTag
    };
  });
