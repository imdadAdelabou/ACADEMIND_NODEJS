const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const rootDir = require("./utils/path.js");
const expressHbs = require("express-handlebars");
const ctrl = require("./controllers/404.js");

const app = express();

// app.engine('handlebars', expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout' }));
// app.set('view engine', 'handlebars');
// app.set('view engine', 'pug'); //In order to use pug engine
app.set('view engine', 'ejs'); //In order to use ejs engine
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminRoutes.router);
app.use(shopRoutes);
app.use(ctrl.page404);

app.listen(3001);

// module.exports = path.dirname(require.main.filename);