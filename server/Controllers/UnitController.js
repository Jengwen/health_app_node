
const Unit = require("../models/Unit.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Unit
    const unit = new Unit({
      ID: req.body.ID,
      AccountID: req.body.AccountID
    });
  
    // Save Unit in the database
    Unit.create(unit, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Unit.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Unit.findById(req.params.unitId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Unit with id ${req.params.unitId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Unit with id " + req.params.unitId
          });
        }
      } else res.send(data);
    });
  };

  //update unit
  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Unit.updateById(
      req.params.unitId,
      new Unit(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Unit with id ${req.params.unitId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Unit with id " + req.params.unitId
            });
          }
        } else res.send(data);
      }
    );
  };

  //delete a unit
  exports.delete = (req, res) => {
    Unit.remove(req.params.unitId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Unit with id ${req.params.unitId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Unit with id " + req.params.unitId
          });
        }
      } else res.send({ message: `Unit was deleted successfully!` });
    });
  };