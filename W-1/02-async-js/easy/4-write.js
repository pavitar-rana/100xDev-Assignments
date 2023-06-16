const fs = require("fs");

const data = "Hi I am Pavitar Rana.";

fs.writeFile("x.txt", data, "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File has been written successfully.");
});
