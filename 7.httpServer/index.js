// The http.createServer() method includes request and response parameters which is supplied by Node.js

// The request object can used to get info. about the current HTTP request
// e.g url, request header , and data

// The response object can be used to send a response for the current HTTP request

// If the response from the HTTP  server is supposed to be displayed as HTML,
// so you should include the http header with the current content type:

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url); // favIcon means logo of left side of the websites

  if (req.url == "/") {
    res.end("Hii , i am yash Patil .");
  } else if (req.url == "/about") {
    // we can also set the head to the network
    res.setHeader("Content-Type", "text/html");

    res.end("Hii , i am yash sanjay Patil .");
  } else {
    res.writeHead(404);
    res.end("404 , error.");
  }
});

//port number
server.listen(8000, () => {
  console.log("listen  here");
});
