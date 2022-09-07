//jshint esversion:6 -- for atom- but its built in vs code.
// import express for routing and middlewares - protection-encoding
const express = require("express");
// import body-parser for parsing request.body data
const bodyParser = require("body-parser");
// import ejs for dynamic html pages embedded with javascript- for dynamic rendering
const ejs = require("ejs");
// lodash for string format
const _ = require("lodash");
// -- importing routes
const HomeRoute = require("./routes/home");
const AboutRoute = require("./routes/about");
const ContactRoute = require("./routes/contact");
const ComposeRoute = require("./routes/compose");
const PostSearchRoute = require("./routes/postsearch");
// init express app
const app = express();
// init ejs for views folder rendering
app.set("view engine", "ejs");
// using body-parser for parsing request.body
app.use(bodyParser.urlencoded({ extended: true }));
// setting up a public folder style sheet- public unprotected data.
app.use(express.static("public"));

// routes -- starts here
app.use(HomeRoute);
app.use(AboutRoute);
app.use(ContactRoute);
app.use(ComposeRoute);
app.use(PostSearchRoute);



// server starts listening....
app.listen(4500, function () {
  console.log("Server started on port 4500");
});
