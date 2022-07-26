const aboutRouter = require("./about");
const contactRouter = require("./contact");

function route(app) {
  app.get("/", (req, res) => {
    res.render("home");
  });

  app.use("/about", aboutRouter);
  app.use("/contact", contactRouter);
  
}

module.exports = route;
