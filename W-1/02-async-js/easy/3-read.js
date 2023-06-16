const { ifError } = require("assert");
let fs = require("fs");

fs.readFile("x.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
