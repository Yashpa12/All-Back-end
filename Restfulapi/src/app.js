const express = require("express");
const app = express();
require("./db/conn");
const Student = require("./model/student");
const port = process.env.PORT || 3000;

// middleware we will use for the output of json data
app.use(express.json());


// insert the new student registration

app.post("/student", async (req, res) => {
  try {
    console.log("Request body:", req.body); // Log the request body
    const user = new Student(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    console.error("Error saving user:", err); // Log the error
    res.status(400).send(err);
  }
});

// to get the all data
app.get("/student", async (req, res) => {
  try {
    const result = await Student.find(); // find method is used
    console.log(result);
    res.send(result);
  } catch (e) {
    console.log("error ocuured", e);
    res.send(400);
  }
});

//particulat data

app.get("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await Student.findById(_id);
    res.send(result);
  } catch (e) {
    res.status(500).send(e); // 500 for the internal serer error
  }
});

// PUT & PATCH METHOD for the updating

app.patch("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await Student.findByIdAndUpdate(_id, req.body);
    res.send(result);
  } catch (e) {
    res.status(500).send(e); // 500 for the internal serer error
  }
});

// // put method
// app.patch("/student/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const result = await Student.findByIdAndUpdate(_id, req.body);
//     res.send(result);
//   } catch (e) {
//     res.status(500).send(e); // 500 for the internal serer error
//   }
// });

// delete method of vrud api

app.delete("/student/:id", async (req, res) => {
  try {
    // const _id = req.params.id;
    const result = await Student.findByIdAndDelete(req.params.id);
    if(!result) {
     return res.status(400).send()
    }res.send(result)
  
  } catch (e) {
    res.status(500).send(e); // 500 for the internal serer error
  }
});

app.listen(port, () => {
  console.log("server is the connected");
});
