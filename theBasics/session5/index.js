const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3001);

// module.exports = path.dirname(require.main.filename);