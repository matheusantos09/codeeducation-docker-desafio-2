const express = require("express");

const app = express();
const port = 3000;
const db = require("./services/db");

db.query(`INSERT INTO people(name) values ('Matheus Eduardo')`);

var getPeople = function (callback) {
  db.query("SELECT * FROM people", (err, res) => {
    if (err) return callback(err);
    if (res.length) {
      callback(null, res);
    }
  });
};

app.get("/", (_, res) => {
  getPeople((err, results) => {
    let html = "<h1>Full Cycle Rocks!</h1>";
    html += "<ul>";

    results.map((result) => {
      html += `<li>${result.name}</li>`;
    });

    html += "</ul>";

    res.send(html);
  });
});

app.listen(port, () => {
  console.log("Listening in port: " + port);
});
