const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url); // favicon means logo of left side of the websites

  if (req.url == "/") {
    res.end("Hii , i am yash Patil .");
  } else if (req.url == "/about") {
    // we can also set the head to the network
    res.setHeader("Content-Type", "text/html");

    res.end("Hii , i am yash sanjay Patil .");
  } else if (req.url == "/userApi") {
    fs.readFile("useAPI.json", "utf-8", (err, daata) => {
      console.log(daata);
      res.end(daata)
    });

  } else {
    res.writeHead(404);
    res.end("404 , error.");
  }
});

//port number
server.listen(8000, () => {
  console.log("listen  here");
});
