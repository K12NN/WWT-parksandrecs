'use strict';

var _ = require('lodash');
var Park = require('./park.model');

// Get list of parks
exports.index = function(req, res) {
  Park.find(function (err, parks) {
    if(err) { return handleError(res, err); }
    return res.json(200, parks);
  });
};

// Get a single park
exports.show = function(req, res) {
  Park.findById(req.params.id, function (err, park) {
    console.log('one park');
    if(err) { return handleError(res, err); }
    if(!park) { return res.send(404); }
    return res.json(park);
  });
};


// Get a  parks by tag
exports.showTag = function(req, res) {
  console.log('api tag', req.params.tag)

  Park.find({features: req.params.tag}, function (err, park) {
    if(err) { return handleError(res, err); }
    if(!park) { return res.send(404); }
    return res.json(park);
  });
};


// Creates a new park in the DB.
exports.create = function(req, res) {
  Park.create(req.body, function(err, park) {
    if(err) { return handleError(res, err); }
    return res.json(201, park);
  });
};

// Updates an existing park in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Park.findById(req.params.id, function (err, park) {
    if (err) { return handleError(res, err); }
    if(!park) { return res.send(404); }
    var updated = _.merge(park, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, park);
    });
  });
};

// Deletes a park from the DB.
exports.destroy = function(req, res) {
  Park.findById(req.params.id, function (err, park) {
    if(err) { return handleError(res, err); }
    if(!park) { return res.send(404); }
    park.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}