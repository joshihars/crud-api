const employee = require("../models/employee.model");
//Delete method to delete a value
let remove = async (req, res) => {
    try {
      const employees = await employee.findById(req.params.id);
      employees.fname = req.body.fname;
      employees.lname = req.body.lname;
      employees.email = req.body.email;
      employee.mobile = req.body.mobile;
      employees.password = req.body.password;
      employees.gender = req.body.gender;
      employees.dob = req.body.dob;
      employee.profile = req.body.profile;
      const a1 = await employees.remove();
      res.json(a1);
    } catch (err) {
      res.send("Error" + err);
    }
  };
  
  module.exports=remove;