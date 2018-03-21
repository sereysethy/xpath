const https = require("https");
var dom = require('xmldom').DOMParser;
var xpath = require('xpath');

const url = "https://www.goldenpages.be/search/coiffeur/";

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });

  res.on("end", () => {
    // parse JSON
    // body = JSON.parse(body);

    //console.log(body);

    // parse HTML/XML
    var doc = new dom().parseFromString(body);

    var nodes = xpath.select("//h2[@itemprop='name']/text()", doc);
   
    nodes.forEach(function(node) {
      console.log(node.toString());
    });
  });
});
