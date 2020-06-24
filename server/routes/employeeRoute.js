module.exports = app => {
    const employees= require("../Controllers/EmployeeController.js");
  
    // Create a new EMployee
    app.post("/employees", employees.create);
  
    // Retrieve all Employees
    app.get("/employees", employees.findAll);
  
    // Retrieve a single Employee with Id
    app.get("/employees/:employeeId", employees.findOne);
  
    // Update a employee with Id
    app.put("/employees/:employeeId", employees.update);
  
    // Delete a Employee with Id
    app.delete("/employees/:employeeId", employees.delete);
  
    
  };