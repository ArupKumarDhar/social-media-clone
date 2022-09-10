const express = require("express");
const { user } = require("../controllers/user");
const router = express.Router();

router.post("/user", user);

module.exports = router;
