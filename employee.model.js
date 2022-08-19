const mongoose = require("mongoose");

//Schema model
const employeeSchema = new mongoose.Schema({
  fname:{type:String, required:true},
  lname:{type:String, required:true},
  email:{type:String, required:true, unique:true},
  mobile:{type:Number, required:true},
  password:{type:String, required:true},
  dob:{type:Date, required:true},
  gender:{type:String, required:true},
  profile:{type:String, required:false},

});

module.exports = mongoose.model("user", employeeSchema);
