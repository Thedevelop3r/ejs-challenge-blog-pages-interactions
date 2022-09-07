const mongoose = require("mongoose");

function ConnectDatabase(){
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  connectTimeoutMS: 1000,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("Connnection Established Successfully.");
});
}

module.exports = {ConnectDatabase};

