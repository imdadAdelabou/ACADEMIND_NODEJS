const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const rootDir = require("./utils/path.js");

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminRoutes.router);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.render('404');
});

app.listen(3001);

// module.exports = path.dirname(require.main.filename);