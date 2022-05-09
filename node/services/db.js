const mysql = require("mysql");

const db = () => {
  const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb",
  };

  const connection = mysql.createConnection(config);

  return connection;
};

module.exports = db();
