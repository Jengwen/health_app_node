const sql = require("../DB/DB");

//constructor

const Unit = function(unit){
    this.ID = unit.ID
    this.AccountID = unit.AccountID
};

Unit.create = (newUnit, result) => {
    sql.query("INSERT INTO Units SET ?", newUnit, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created unit: ", { id: res.insertId, ...newUnit });
      result(null, { id: res.insertId, ...newUnit });
    });
  };
  
  Unit.findById = (unitId, result) => {
    sql.query(`SELECT * FROM Units WHERE id = ${unitId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found unit: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found unit with the id
      result({ kind: "not_found" }, null);
    });
  };
  //method to get all units
  Unit.getAll = result => {
    sql.query("SELECT * FROM Units", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("units: ", res);
      result(null, res);
    });
  };
//update method
Unit.updateById = (id, unit, result) => {
    sql.query(
      "UPDATE Units SET ID = ?, AccountID = ? WHERE ID = ?",
      [unit.ID, unit.AccountID, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Unit with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated unit: ", { id: unit.ID, ...unit });
        result(null, { id: unit.ID, ...unit});
      }
    );
  };

  //delete
  Unit.remove = (id, result) => {
    sql.query("DELETE FROM Units WHERE ID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted unit with id: ", id);
      result(null, res);
    });
  };

module.exports = Unit;