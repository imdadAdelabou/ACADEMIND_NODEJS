const Product = require("../models/product.js");

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { path: "/admin/add-product", addProductPage: true });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
};

exports.home = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', { prods: products, path: "/", hasProduct: products.length > 0, shopPage: true });
};