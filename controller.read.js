const employee = require("../models/employee.model");
// Get method to fetch all data
let show = async (req, res) => {
    try {
      const employees = await employee.find();
      res.json(employees);
    } catch (err) {
      res.send("Error " + err);
    }
  };


  let showOne = async (req, res) => {
    try {
      const employees = await employee.findById(req.params.id);
      res.json(employees);
    } catch (err) {
      res.send("Error " + err);
    }
  };
  
 
  module.exports=show, showOne;