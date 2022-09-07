// importing express
const express = require("express");
// importing controllers
const { about } = require("../controller/about");
// setting up a router
const router = express.Router();
// init router -- about route - get-
router.get("/about", about);
module.exports = router;
