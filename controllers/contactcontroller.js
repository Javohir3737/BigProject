const getcontactPage = async (req, res) => {
    res.render("contact", {
        title: "contact page",
        path: "/contact"
    })
}



module.exports = {
    getcontactPage
}