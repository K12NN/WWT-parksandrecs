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


    // Public API here
    return {
      getParks: getParks,
      getParkDetail: getParkDetail
    };
  });
