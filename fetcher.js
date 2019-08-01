let args = process.argv.slice(2);
const request = require("request");
const fs = require("fs");
const fetcher = function(args) {
  let url = args[0];
  let filepath = args[1];
  request(url, (err, response, body) => {
    fs.writeFile(filepath, body, err => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });
};

fetcher(args);
