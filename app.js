const express = require("express");
const mongodbConnection = require("./Src/database/database");
const app = express();

//Connection with mongodb stored in mongodbConnection
mongodbConnection;

app.use(express.json());

//Routers
const employeeRouter = require("./Src/routers/employees.route");
app.use("/", employeeRouter);

//localhost 9000
app.listen(9000, () => {
  console.log("Server started");
});
