const Post = require("../models/post");


async function PostGet(request, response){

    let allPosts = await Post.find();
    console.log(allPosts);
    response.render("post", {
        posts: allPosts
    });

}

module.exports = {PostGet};


