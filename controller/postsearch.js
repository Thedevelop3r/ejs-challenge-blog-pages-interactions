function postSearch(request, response) {
  // --- first priority api -
  let postTitle = request.params.posttitle;
  // --- second priority if a query is being sent then this should do.
  if (request.query.posttitle) {
    postTitle = request.query.posttitle;
  }
  // ---- Otherwise calling api would still work ---
  // formating upcomming search params
  postTitle = postTitle.split("-").join(" ").toLowerCase();
  // new variable for storing the post data-
  let postFound = null;
  // ----------------------
  // database operation goes here
  // write here
  // --- database operation ends here

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
}

module.exports = { postSearch };
