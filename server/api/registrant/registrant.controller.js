'use strict';

var _ = require('lodash');
var Registrant = require('./registrant.model');

// Get list of registrants
exports.index = function(req, res) {
  Registrant.find(function (err, registrants) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(registrants);
  });
};

// Get a single registrant
exports.show = function(req, res) {
  Registrant.findOne({registrant_id:req.params.id}, function (err, registrant) {
    if(err) { return handleError(res, err); }
    if(!registrant) { return res.status(404).send('Not Found'); }
    return res.json(registrant);
  });
};

// Creates a new registrant in the DB.
exports.create = function(req, res) {
  Registrant.create(req.body, function(err, registrant) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(registrant);
  });
};

// Updates an existing registrant in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Registrant.findById(req.params.id, function (err, registrant) {
    if (err) { return handleError(res, err); }
    if(!registrant) { return res.status(404).send('Not Found'); }
    var updated = _.merge(registrant, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(registrant);
    });
  });
};

// Deletes a registrant from the DB.
exports.destroy = function(req, res) {
  Registrant.findOne({registrant_id:req.params.id}, function (err, registrant) {
    if(err) { return handleError(res, err); }
    if(!registrant) { return res.status(404).send('Not Found'); }
    registrant.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
