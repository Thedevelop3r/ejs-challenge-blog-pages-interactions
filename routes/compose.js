// importing express
const express = require("express");
// importing controllers
const { compose } = require("../controller/compose");
// setting up a router
const router = express.Router();
// init router -- about route - get-
router.get("/compose", compose);
module.exports = router;
