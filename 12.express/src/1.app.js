const express = require("express");
const app = express();

// playlist number 4
// console.log(__dirname);
const path = require("path");
const staticPath = path.join(__dirname, "../public");
console.log(staticPath);
// built in middleware
// app.use(express.static(staticPath));

// to set the view of
app.set("view engine", "hbs");

// template engine route

app.get("/", (req, res) => {
  // without the dynamiv content
  // res.render("index");

  // with the dynamic content in object form we can use
  res.render('index',{
    nameOfuser : 'yash patil'
  })
});

// its noraml first video of playlist
app.get("/", (req, res) => {
  res.send("hiii world");
});
app.listen(3000, () => {
  console.log("server connedt");
});
