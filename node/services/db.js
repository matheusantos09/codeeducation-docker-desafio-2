module.exports = function () {
  const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb",
  };

  const mysql = require("mysql");
  const connection = mysql.createConnection(config);

  return connection;
};
