const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
});

// const PostModel = new mongoose.model("post", Post);
// const User = new mongoose.Schema({
//     name:{
//         type:String,
//         required: true
//     },
//     posts:[Post]
// });

module.exports = mongoose.model("Posts", Post);