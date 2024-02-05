const getaboutPage = async (req, res) => {
    res.render("about", {
        title: "about page",
        path: "/about"
    })
}



module.exports = {
    getaboutPage
}