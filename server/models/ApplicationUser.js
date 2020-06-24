const sql = require("../DB/DB");
const applicationUserDB = require("../Controllers/ApplicationUserController");

//constructor

const ApplicationUser = function(user){
    this.ID = user.ID
    this.FirstName = user.FirstName,
    this.LastName = user.LastName,
    this.Email = user.Email
this.AccountID = user.AccountID
};

ApplicationUser.create = (newUser, result) => {
    sql.query("INSERT INTO ApplicationUsers SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);count
        return;
      }
  
      console.log("created user: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  };
  
  ApplicationUser.findById = (userId, result) => {
    sql.query(`SELECT * FROM ApplicationUsers WHERE id = ${userId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found user with the id
      result({ kind: "not_found" }, null);
    });
  };
  //method to get all users
  ApplicationUser.getAll = result => {
    sql.query("SELECT * FROM ApplicationUsers", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("users: ", res);
      result(null, res);
    });
  };
//update method
ApplicationUser.updateById = (id, user, result) => {
    sql.query(
      "UPDATE ApplicationUsers SET ID = ?, FirstName = ? , LastName = ?, Email = ?, AccountID = ? WHERE ID = ?",
      [user.ID, user.FirstName, user.LastName, user.Email, user.AccountID,  id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found user with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated user: ", { id: user.ID, ...user });
        result(null, { id: user.ID, ...user});
      }
    );
  };

  //delete
  ApplicationUser.remove = (id, result) => {
    sql.query("DELETE FROM ApplicationUsers WHERE ID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted user with id: ", id);
      result(null, res);
    });
  };

module.exports = ApplicationUser;