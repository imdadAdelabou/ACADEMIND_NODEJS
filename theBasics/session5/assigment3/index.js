const path = require("path");
const express = require("express");
const route = require("./routes/route.js");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(route);
app.use((req, res) => {
    res.send("Page Not Found");
});
app.listen(3000);