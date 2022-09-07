
// importing express
const express = require("express");
// importing controllers
const {PostGet} = require("../controller/post");
// setting up a router
const router = express.Router();
// init router -- Home route - get-post
router.get("/posts", PostGet);
module.exports = router;