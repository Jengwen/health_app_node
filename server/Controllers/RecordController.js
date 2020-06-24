const Record = require("../models/Record.js");

// Create and Save a new record
exports.create = (req, res) => {
  
};

// Retrieve all records from the database.
exports.findAll = (req, res) => {
  
};

// Find a single record with a recordId
exports.findOne = (req, res) => {
  
};

// Update a record identified by the recordId in the request
exports.update = (req, res) => {
  
};

// Delete a record with the specified recordId in the request
exports.delete = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create an Record
    const record = new Record({
      ID: req.body.ID,
      Date: req.body.Date,
      UnitID: req.body.UnitID,
      AccountID: req.body.AccountID,
      EmployeeID: req.body.EmployeeID,
      Temperature: req.body.Temperature,
      Fever: req.body.Fever,
      Taste: req.body.Taste,
      VorD: req.body.VorD,
      Breath: req.body.Breath,
      Contact: req.body.Contact
    });
  
    // Save Record in the database
    Record.create(record, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Record."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Record.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving records."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Record.findById(req.params.recordId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Record with id ${req.params.recordId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Record with id " + req.params.recordId
          });
        }
      } else res.send(data);
    });
  };

  //update employee
  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Record.updateById(
      req.params.employeeId,
      new Record(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Record with id ${req.params.recordId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Record with id " + req.params.recordId
            });
          }
        } else res.send(data);
      }
    );
  };

  //delete an account
  exports.delete = (req, res) => {
    Record.remove(req.params.recordId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Reecord with id ${req.params.recordId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Record with id " + req.params.recordId
          });
        }
      } else res.send({ message: `Record was deleted successfully!` });
    });
  };