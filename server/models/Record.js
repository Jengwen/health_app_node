const sql = require("../DB/DB");
const recordDB = require("../Controllers/RecordController");

//constructor

const Record = function(record){
    this.ID = record.ID
    this.Date = record.Date,
    this.Temperature = record.Temperature,
this.UnitID = record.UnitID,
this.AccountID = record.AccountID,
this.EmployeeID = record.EmployeeID,
this.Contact = record.Contact,
this.Fever = record.Fever,
this.Breath = record.Breath,
this.VorD = record.VorD,
this.Taste = record.Taste
};

Record.create = (newRecord, result) => {
    sql.query("INSERT INTO Records SET ?", newRecord, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);count
        return;
      }
  
      console.log("created record: ", { id: res.insertId, ...newRecord });
      result(null, { id: res.insertId, ...newRecord });
    });
  };
  
  Record.findById = (recordId, result) => {
    sql.query(`SELECT * FROM Records WHERE id = ${recordId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found record: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found record with the id
      result({ kind: "not_found" }, null);
    });
  };
  //method to get all records
  Record.getAll = result => {
    sql.query("SELECT * FROM Records", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("records: ", res);
      result(null, res);
    });
  };
//update method
Record.updateById = (id, record, result) => {
    sql.query(
      "UPDATE Records SET ID = ?, Temperature = ? , UnitID = ?, AccountID = ?, EmployeeID = ?, Date = ?, Contact = ?, Taste = ?, VorD = ?, Breath = ?, Fever = ? WHERE ID = ?",
      [record.ID, record.Temperature, record.UnitID, record.AccountID, record.EmployeeID, record.Date, record.Contact, record.Taste, record.VorD, record.Breath, record.Fever,  id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found record with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated record: ", { id: record.ID, ...record });
        result(null, { id: record.ID, ...record});
      }
    );
  };

  //delete
  Record.remove = (id, result) => {
    sql.query("DELETE FROM Records WHERE ID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found record with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted record with id: ", id);
      result(null, res);
    });
  };

module.exports = Record;