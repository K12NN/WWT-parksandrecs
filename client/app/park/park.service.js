'use strict';

angular.module('parksandrecApp')
  .factory('park', function ($http) {

    var getParks = function(setting) {
      return $http({
        method: 'GET',
        url: '/api/parks',
        params: {setting: setting}
      });
    };



    // Public API here
    return {
      getParks: getParks
    };
  });
