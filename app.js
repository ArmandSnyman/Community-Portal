// app.js

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = 3000;

app.use(favicon(path.join(__dirname, "public", "images", "favicon.jpg")));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", pageRoutes);
app.use((req, res) => {
    res.status(404).render('pages/404', { title: '404 Error' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


