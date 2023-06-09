/** Start server for Lunchly. */

const app = require("./app");

app.listen(3000, "127.0.0.1", function() {
  console.log("listening on 3000");
  console.log("Lunchly party!!")
});

// nodemon -e js,html,css