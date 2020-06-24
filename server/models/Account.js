const sql = require("../DB/DB");

//constructor

const Account = function(account){
    this.ID = account.ID
    this.AccountName = account.AccountName,
    this.Email = account.Email,
this.Password = account.Password
};

Account.create = (newAccount, result) => {
    sql.query("INSERT INTO Accounts SET ?", newAccount, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);count
        return;
      }
  
      console.log("created account: ", { id: res.insertId, ...newAccount });
      result(null, { id: res.insertId, ...newAccount });
    });
  };
  
  Account.findById = (accountId, result) => {
    sql.query(`SELECT * FROM Accounts WHERE id = ${accountId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found accountt: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found account with the id
      result({ kind: "not_found" }, null);
    });
  };
  //method to get all accounts
  Account.getAll = result => {
    sql.query("SELECT * FROM Accounts", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("accounts: ", res);
      result(null, res);
    });
  };
//update method
Account.updateById = (id, account, result) => {
    sql.query(
      "UPDATE Accounts SET ID = ?, AccountName = ? , Email = ?, Password = ? WHERE ID = ?",
      [account.ID, account.AccountName, account.Email, account.Password,  id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Account with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated account: ", { id: account.ID, ...account });
        result(null, { id: account.ID, ...account});
      }
    );
  };

  //delete
  Account.remove = (id, result) => {
    sql.query("DELETE FROM Accounts WHERE ID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found account with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted account with id: ", id);
      result(null, res);
    });
  };

module.exports = Account;