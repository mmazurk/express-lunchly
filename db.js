/** Database for lunchly */

const { Client } = require("pg");

// I think this works on Mac
// let db = new Client({
//     // host: "/tmp",
//     host: "localhost",
//     database: "lunchly"
//   })

// and this is WSL2
let db = new Client({
    host: "/var/run/postgresql/",
    database: "lunchly"
  });

db.connect();

module.exports = db;
