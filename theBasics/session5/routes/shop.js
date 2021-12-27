const path = require("path");
const express = require("express");
const router = express.Router();
const adminData = require("./admin.js");

router.get("/", (req, res, next) => {
    const products = adminData.products;
    res.render('shop', { prods: products, path: "/", hasProduct: products.length > 0, shopPage: true });
});
module.exports = router;