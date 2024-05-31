// now it is third part to create the schema

const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validator(value) {
      if (validator.isEmail(value)) {
        throw new Error("invalid email");
      }
    },
  },
  phone : {
    type : Number,
    required : true,
    unique :true,
    min : 10
  },
  address  : {
type :String,
required : true
  }
});


// then we will create new collection  
const Student = new mongoose.model('Student', studentSchema)


module.exports = Student