'use strict';
var csv = require("fast-csv");
var fs = require('fs');

var _ = require('lodash');
var Importpark = require('./importpark.model');

// Get list of importparks
exports.index = function(req, res) {
  console.log('import');

  var stream = fs.createReadStream("./parks.csv");

  // csv
   // .fromPath("./parks.csv")
   // .on("data", function(data){
   //     console.log(data);
   // })
   // .on("end", function(){
   //     console.log("done");
   // });
};

// Get a single importpark
exports.show = function(req, res) {
  Importpark.findById(req.params.id, function (err, importpark) {
    if(err) { return handleError(res, err); }
    if(!importpark) { return res.send(404); }
    return res.json(importpark);
  });
};

// Creates a new importpark in the DB.
exports.create = function(req, res) {
  Importpark.create(req.body, function(err, importpark) {
    if(err) { return handleError(res, err); }
    return res.json(201, importpark);
  });
};

// Updates an existing importpark in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Importpark.findById(req.params.id, function (err, importpark) {
    if (err) { return handleError(res, err); }
    if(!importpark) { return res.send(404); }
    var updated = _.merge(importpark, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, importpark);
    });
  });
};

// Deletes a importpark from the DB.
exports.destroy = function(req, res) {
  Importpark.findById(req.params.id, function (err, importpark) {
    if(err) { return handleError(res, err); }
    if(!importpark) { return res.send(404); }
    importpark.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}