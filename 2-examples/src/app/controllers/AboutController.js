class AboutController{
    // [GET] /about
    index(req, res){
        res.render("about");
    }

    // [GET] /about/:slug
    show(req, res){
        res.send("Show about");
    }
}

module.exports = new AboutController;