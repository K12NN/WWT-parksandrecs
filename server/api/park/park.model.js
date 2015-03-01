'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ParkSchema = new Schema({
    features: Array,
    parkName: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    website: String,
    phone: String,
    lat: Number,
    long: Number
});


module.exports = mongoose.model('Park', ParkSchema);