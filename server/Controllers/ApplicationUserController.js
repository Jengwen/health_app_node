const ApplicationUser = require("../models/ApplicationUser.js");

// Create and Save a new user
exports.create = (req, res) => {
  
};

// Retrieve all user from the database.
exports.findAll = (req, res) => {
  
};

// Find a single user with a employeeId
exports.findOne = (req, res) => {
  
};

// Update a user identified by the employeeId in the request
exports.update = (req, res) => {
  
};

// Delete a user with the specified employeeId in the request
exports.delete = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create an user
    const user = new ApplicationUser({
      ID: req.body.ID,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      AccountID: req.body.AccountID
    });
  
    // Save user in the database
    ApplicationUser.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    ApplicationUser.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    ApplicationUser.findById(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
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
  
    ApplicationUser.updateById(
      req.params.userId,
      new ApplicationUser(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found usere with id ${req.params.userId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating user with id " + req.params.userId
            });
          }
        } else res.send(data);
      }
    );
  };

  //delete an account
  exports.delete = (req, res) => {
    ApplicationUser.remove(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
          });
        }
      } else res.send({ message: `User was deleted successfully!` });
    });
  };