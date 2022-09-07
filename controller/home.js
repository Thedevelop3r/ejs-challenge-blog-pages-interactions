// ---- All the middlewares controllers reside here
function HomeGet(request, response) {
    const homeStartingContent =
      "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

  response.render("home", {
    homeContect: homeStartingContent,
  });
}

function HomePost(request, response) {
  const data = request.body;
  // getting data from a form -
  let { posttitle, postdetails } = data;
  // creating a object for new post data
  let newPost = {
    title: posttitle,
    post: postdetails,
  };
  // redirecting user to home-page. updated posts
  response.redirect("/");
}

module.exports = { HomeGet, HomePost };
