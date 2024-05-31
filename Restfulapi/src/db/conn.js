const mongoose = require("mongoose");

// It will return a Promise 
mongoose.connect("mongodb://127.0.0.1:27017/student-api")
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Connection error", err);
});
