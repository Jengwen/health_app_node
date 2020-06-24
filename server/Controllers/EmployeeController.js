const Employee = require("../models/Employee.js");

// Create and Save a new EMployee
exports.create = (req, res) => {
  
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Employee with a employeeId
exports.findOne = (req, res) => {
  
};

// Update a Employee identified by the employeeId in the request
exports.update = (req, res) => {
  
};

// Delete a EMployee with the specified employeeId in the request
exports.delete = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create an EMployee
    const employee = new Employee({
      ID: req.body.ID,
      Name: req.body.Name,
      UnitID: req.body.UnitID,
      AccountID: req.body.AccountID
    });
  
    // Save Employee in the database
    Employee.create(employee, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Employee."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Employee.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving employees."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Employee.findById(req.params.employeeId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Employee with id ${req.params.employeeId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Employee with id " + req.params.employeeId
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
  
    Employee.updateById(
      req.params.employeeId,
      new Employee(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Employee with id ${req.params.employeeId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating EMployee with id " + req.params.employeeId
            });
          }
        } else res.send(data);
      }
    );
  };

  //delete an account
  exports.delete = (req, res) => {
    Employee.remove(req.params.employeeId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Employee with id ${req.params.employeeId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Employee with id " + req.params.employeeId
          });
        }
      } else res.send({ message: `Employee was deleted successfully!` });
    });
  };