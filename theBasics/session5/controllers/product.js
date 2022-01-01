const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { path: "/admin/add-product", addProductPage: true });
};

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect("/");
};

exports.home = (req, res, next) => {
    res.render('shop', { prods: products, path: "/", hasProduct: products.length > 0, shopPage: true });
};