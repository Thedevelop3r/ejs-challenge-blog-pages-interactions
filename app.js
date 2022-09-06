//jshint esversion:6 -- for atom- but its built in vs code.
// import express for routing and middlewares - protection-encoding
const express = require("express");
// import body-parser for parsing request.body data
const bodyParser = require("body-parser");
// import ejs for dynamic html pages embedded with javascript- for dynamic rendering
const ejs = require("ejs");
// lodash for string format
const _ = require("lodash");

// dummy home data - todos- remove
const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// init express app
const app = express();
// init ejs for views folder rendering
app.set("view engine", "ejs");
// using body-parser for parsing request.body
app.use(bodyParser.urlencoded({ extended: true }));
// setting up a public folder style sheet- public unprotected data.
app.use(express.static("public"));

// global varibales - dummy array for post - todos remove
let posts = [
  { title: "hello", post: "This is the found post" },
  { title: "bils", post: "This is the bills post" },
  { title: "micro", post: "This is MicroSOft Post" },
];

// routes -- starts here
app.get("/", function (request, response) {
  // renders home page - ejs rendering dynamic data
  response.render("home", {
    homeContect: homeStartingContent,
    posts: posts,
  });
});
// handles the upcoming post request
app.post("/", function (request, response) {
  const data = request.body;
  // getting data from a form -
  let { posttitle, postdetails } = data;
  // creating a object for new post data
  let newPost = {
    title: posttitle,
    post: postdetails,
  };
  // dummy array push - temp - todos remove
  posts.push(newPost);
  // redirecting user to home-page. updated posts
  response.redirect("/");
});
//--- dynamic get routes --- posts --- post-title - search posts
app.get("/post/:posttitle", function (request, response) {
  let postTitle = request.params.posttitle;
  // ---if a query is being sent then this should do.
  if (request.query.posttitle) {
    postTitle = request.query.posttitle;
  }
  // ---- Otherwise calling api would still work ---
  // formating upcomming search params
  postTitle = postTitle.split("-").join(" ");
  // lowering the search params
  postTitle = postTitle.toLowerCase();
  // new variable for storing the post data-
  let postFound = null;
  // iterating over posts object array for a match
  posts.forEach((post) => {
    // lowering the post.title to match for search params.
    if (post.title.toLowerCase() == postTitle) {
      //todos: remove this and send a response direcctly with
      // matched results
      //- remove. setting up postFound varibale if title matches
      postFound = {
        title: post.title,
        post: post.post,
      };
    }
  });
  // validation for if a isnt found
  if (postFound == null || postFound == undefined) {
    // no match found ? return.
    return response.send("<h2>No Post Found</h2>");
  }
  // sending response if match found - with new direct object.
  response.render("post", {
    title: postFound.title,
    post: postFound.post,
  });
});

app.get("/about", function (request, response) {
  // renders about page
  response.render("about", {
    aboutContent: aboutContent,
  });
});
app.get("/contact", function (request, response) {
  // renders contact page
  response.render("contact", {
    contactContect: contactContent,
  });
});
app.get("/compose", function (request, response) {
  // renders compose page
  response.render("compose");
});
// routes ends here

// server starts listening....
app.listen(4500, function () {
  console.log("Server started on port 4500");
});
