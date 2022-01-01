const path = require("path");
const express = require("express");
const router = express.Router();
const adminData = require("./admin.js");
const productCtrl = require("../controllers/product.js");

router.get("/", productCtrl.home);
module.exports = router;