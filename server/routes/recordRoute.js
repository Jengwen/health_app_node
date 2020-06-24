module.exports = app => {
    const records= require("../Controllers/RecordController.js");
  
    // Create a new Record
    app.post("/records", records.create);
  
    // Retrieve all Records
    app.get("/records", records.findAll);
  
    // Retrieve a single Record with Id
    app.get("/records/:recordId", records.findOne);
  
    // Update a record with Id
    app.put("/records/:recordId", records.update);
  
    // Delete a Record with Id
    app.delete("/records/:recordId", records.delete);
  
    
  };