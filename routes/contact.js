// importing express
const express = require("express");
// importing controllers
const { contact } = require("../controller/contact");
// setting up a router
const router = express.Router();
// init router -- about route - get-
router.get("/contact", contact);
module.exports = router;
