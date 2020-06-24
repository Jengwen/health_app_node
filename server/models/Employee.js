const sql = require("../DB/DB");
const employeeDB = require("../Controllers/EmployeeController");

//constructor

const Employee = function(employee){
    this.ID = employee.ID
    this.Name = employee.Name,
    this.UnitID = employee.UnitID,
this.AccountID = employee.AccountID
};

Employee.create = (newEmployee, result) => {
    sql.query("INSERT INTO Employees SET ?", newEmployee, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);count
        return;
      }
  
      console.log("created employee: ", { id: res.insertId, ...newEmployee });
      result(null, { id: res.insertId, ...newEmployee });
    });
  };
  
  Employee.findById = (employeeId, result) => {
    sql.query(`SELECT * FROM Employees WHERE id = ${employeeId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found employee: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found employee with the id
      result({ kind: "not_found" }, null);
    });
  };
  //method to get all employees
  Employee.getAll = result => {
    sql.query("SELECT * FROM Employees", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("employees: ", res);
      result(null, res);
    });
  };
//update method
Employee.updateById = (id, employee, result) => {
    sql.query(
      "UPDATE Employees SET ID = ?, Name = ? , UnitID = ?, AccountID = ? WHERE ID = ?",
      [employee.ID, employee.Name, employee.UnitID, employee.AccountID,  id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found employee with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated employee: ", { id: employee.ID, ...employee });
        result(null, { id: employee.ID, ...employee});
      }
    );
  };

  //delete
  Employee.remove = (id, result) => {
    sql.query("DELETE FROM Employees WHERE ID = ?", id, (err, res) => {
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
  
      console.log("deleted employee with id: ", id);
      result(null, res);
    });
  };

module.exports = Employee;