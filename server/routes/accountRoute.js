module.exports = app => {
    const accounts= require("../Controllers/AccountController.js");
  
    // Create a new Account
    app.post("/accounts", accounts.create);
  
    // Retrieve all Accounts
    app.get("/accounts", accounts.findAll);
  
    // Retrieve a single Account with Id
    app.get("/accounts/:accountId", accounts.findOne);
  
    // Update a account with Id
    app.put("/accounts/:accountId", accounts.update);
  
    // Delete a Account with Id
    app.delete("/accounts/:accountId", accounts.delete);
  
    
  };