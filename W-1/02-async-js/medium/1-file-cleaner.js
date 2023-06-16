let fs = require("fs");

function formatdata(data) {
  const arr = data.split(" ");
  let bag = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].length < 1) {
      bag.push(arr[i]);
    }
  }

  return bag.join(" ");
}

function fwritten(err) {
  console.log("Successful");
}

function after(err, data) {
  if (err) {
    console.error(err);
  } else {
    const fdata = formatdata(data);
    fs.writeFile("test.txt", fdata, fwritten);
  }
}

fs.readFile("test.txt", "utf8", after);
