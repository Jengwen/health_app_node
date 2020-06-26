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

require("./routes/unitRoute")(app);
require("./routes/accountRoute")(app);
require("./routes/employeeRoute")(app);
require("./routes/recordRoute")(app);
require("./routes/applicationUserRoute")(app);

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server is running on port; ${process.env.PORT || 3000}`);
})
