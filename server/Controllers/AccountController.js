const Account = require("../models/Account.js");

// Create and Save a new Account
exports.create = (req, res) => {
  
};

// Retrieve all Accounts from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Account with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Account identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Account with the specified customerId in the request
exports.delete = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create an Account
    const account = new Account({
      ID: req.body.ID,
      AccountName: req.body.AccountName,
      Email: req.body.Email,
      Password: req.body.Password
    });
  
    // Save Account in the database
    Account.create(account, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Account."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Account.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving accounts."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Account.findById(req.params.accountId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Unit with id ${req.params.accountId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Unit with id " + req.params.accountId
          });
        }
      } else res.send(data);
    });
  };

  //update account
  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Account.updateById(
      req.params.accountId,
      new Account(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Unit with id ${req.params.accountId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Unit with id " + req.params.accountId
            });
          }
        } else res.send(data);
      }
    );
  };

  //delete an account
  exports.delete = (req, res) => {
    Account.remove(req.params.accountId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Account with id ${req.params.accountId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Account with id " + req.params.accountId
          });
        }
      } else res.send({ message: `Account was deleted successfully!` });
    });
  };