// import mongoose.model for creating post
const Post = require("../models/post");

// get compose
function composeGet(request, response) {
  // renders compose page
  response.render("compose");
};
// post compose
async function composePost(request, response){
   const data = request.body;
   // getting data from a form -
   let { posttitle, postdetails } = data;
   // creating a object for new post data
   let newPost = new Post({
     title: posttitle,
     post: postdetails,
   });

   await newPost.save();
   // redirecting user to home-page. updated posts
   response.redirect("/posts");
}

module.exports = {composeGet, composePost};