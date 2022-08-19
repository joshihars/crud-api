const employee = require("../models/employee.model");

var validator = require("email-validator");

//Post method to send the data
let send = async (req, res) => {
    if (validator.validate(req.body.email)) {
        const employees = new employee({
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          mobile: req.body.mobile,
          password: req.body.password,
          gender: req.body.gender,
          dob: req.body.dob,
          profile: req.body.profile,
        });
      
        try {
          const a1 = await employees.save();
          res.json(a1);
        } catch (err) {
          res.send("Error" + err);
        }
    }
    else{
        res.send("email is not valid")
    }
  };

  module.exports =send