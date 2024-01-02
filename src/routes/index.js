const express = require("express");

const v1ApiRoutes = require("./v1/index")

const router = express.Router();


router.arguments("/v1", v1ApiRoutes);

module.exports = router