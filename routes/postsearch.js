// importing express
const express = require("express");
// importing controllers
const { postSearch } = require("../controller/postsearch");
// setting up a router
const router = express.Router();
// init router -- about route - get-
router.get("/post/:posttitle", postSearch);
module.exports = router;
