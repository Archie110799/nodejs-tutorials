const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 9222;

const route = require('./routes')

console.log(path.join(__dirname));
app.use(express.static(path.join(__dirname, "public")))

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Action -> Dispatcher -> Function handler
// app.get("/", (req, res) => {
//   res.render("home");
// });

// Routes init 
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
