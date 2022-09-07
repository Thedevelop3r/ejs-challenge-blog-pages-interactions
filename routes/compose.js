// importing express
const express = require("express");
// importing controllers
const { composeGet, composePost} = require("../controller/compose");
// setting up a router
const router = express.Router();
// init router -- about route - get-
router.get("/compose", composeGet);
router.post("/compose", composePost);
module.exports = router;
