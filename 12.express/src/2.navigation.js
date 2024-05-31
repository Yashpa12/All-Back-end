const express = require("express");
const app = express();

//  routing of the express
app.get("/", (req, res) => {
  res.send("hii, this is my Home page");
});

app.get("/about", (req, res) => {
  res.send("this is my about page");
});

app.get("/contact", (req, res) => {
  res.send("this is my contact page");
});
app.get("/temp", (req, res) => {
  // if we don't mentineod the status code by default take take 304 : not modified
  res.status(200).send("this is my temp page");
});
app.get("/json", (req, res) => {
  // if we response the here array of object or  object data then ie will convert into the json automatically

  res.status(200).json([
    {
      id: 1,
      name: "yash",
    },
    {
        id: 1,
        name: "yash",
      },

      {
        id: 1,
        name: "yash",
      },

      {
        id: 1,
        name: "yash",
      },
      {
        id: 1,
        name: "yash",
      }

  ]);
});
app.listen(8000, () => {
  console.log("server is listen");
});
