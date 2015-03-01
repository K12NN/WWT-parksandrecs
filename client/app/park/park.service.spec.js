'use strict';

describe('Service: park', function () {

  // load the service's module
  beforeEach(module('parksandrecApp'));

  // instantiate service
  var park;
  beforeEach(inject(function (_park_) {
    park = _park_;
  }));

  it('should do something', function () {
    expect(!!park).toBe(true);
  });

});
