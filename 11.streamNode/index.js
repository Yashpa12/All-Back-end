const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // 1.Method
  //   fs.readFile("y1.txt", (err, data) => {
  //     if (err) {
  //     return console.log(err);
  //     }
  // //     res.end(data);
  //   });

  // 2.Method
  // Reading from the server
  // Create a readable stream
  // Handle stream events -> data , end ,err , finish

//   const readableStream = fs.createReadStream("y1.txt");
//   readableStream.on("data", (chunkData) => {
//     res.write(chunkData);
//   });
//   readableStream.on("end", () => {
//     res.end();
//   });

//   // if file not exist  or name of the fiel is wrrong then it will disepear
//   readableStream.on("error", (err) => {
//     console.log(err);
//     res.end("file is not find");
//   });



  // 3 way

  
  const readableStream = fs.createReadStream("y1.txt");
  readableStream.pipe(res)
});

server.listen(3000, () => {
  console.log("server started");
});



