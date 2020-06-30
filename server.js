const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.json());

//app.use('/api', apiRouter);

app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Employee Health" });
});

require("./server/routes/unitRoute")(app);
require("./server/routes/accountRoute")(app);
require("./server/routes/employeeRoute")(app);
require("./server/routes/recordRoute")(app);
require("./server/routes/applicationUserRoute")(app);

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server is running on port; ${process.env.PORT || 3000}`);
})
