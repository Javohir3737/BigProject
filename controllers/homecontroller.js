const gethomePage = async (req, res) => {
    res.render("index", {
        title: "home page",
        path: "/"
    })
}



module.exports = {
    gethomePage
}