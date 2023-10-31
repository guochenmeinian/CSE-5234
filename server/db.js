var MySQL = require("sync-mysql");

var connection = new MySQL({
  host: "localhost",
  user: "root",
  password: "",
  database: "db",
});

module.exports = connection;
