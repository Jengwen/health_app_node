module.exports = app => {
    const units = require("../Controllers/UnitController.js");
  
    // Create a new Unit
    app.post("/units", units.create);
  
    // Retrieve all Units
    app.get("/units", units.findAll);
  
    // Retrieve a single Unit with rId
    app.get("/units/:unitId", units.findOne);
  
    // Update a unit with Id
    app.put("/units/:unitId", units.update);
  
    // Delete a Unit with unitId
    app.delete("/units/:unitId", units.delete);
  
    
  };