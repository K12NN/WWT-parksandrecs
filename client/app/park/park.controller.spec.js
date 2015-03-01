'use strict';

describe('Controller: ParkCtrl', function () {

  // load the controller's module
  beforeEach(module('parksandrecApp'));

  var ParkCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParkCtrl = $controller('ParkCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
