// importing express
const express = require("express");
// importing controllers
const {HomeGet, HomePost} = require("../controller/home");
// setting up a router
const router = express.Router();
// init router -- Home route - get-post
router.get("/", HomeGet);
// home post request
router.post("/", HomePost);

module.exports = router;