const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path.js");
const productCtrl = require("../controllers/product.js");

router.get("/add-product", productCtrl.getAddProduct);
router.post("/add-product", productCtrl.postAddProduct);

exports.router = router;