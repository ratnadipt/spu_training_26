const abc = require("http");

const server = abc.createServer((req, res) => {
  //business logic
  res.write(
    "Congratulations🎉🎊! I have created my First Web Server.👏👏👏👏👏👏",
  );
  res.end();
});

// server start
server.listen(3000);
console.log("Server is started at port no: 3000");
