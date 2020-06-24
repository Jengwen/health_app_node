module.exports = app => {
    const users= require("../Controllers/ApplicationUserController.js");
  
    // Create a new user
    app.post("/users", users.create);
  
    // Retrieve all users
    app.get("/users", users.findAll);
  
    // Retrieve a single user with Id
    app.get("/users/:userId", users.findOne);
  
    // Update a user with Id
    app.put("/users/:userId", users.update);
  
    // Delete a user with Id
    app.delete("/users/:userId", users.delete);
  
    
  };