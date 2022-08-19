const employee = require("../models/employee.model");
let update = async (req, res) => {
  let user = await employee.findOne({email: req.body.email})
  if (user) {
    res.send("user already exists..");
  } else {
    try {
      const employees = await employee.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.json(employees);
    } catch (err) {
      res.send("Error" + err);
    }
  }
};

module.exports = update;
