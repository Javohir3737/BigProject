// const fs = require("fs").promises;
// const path = require("path");

const { Usermodel } = require("../userdata/userdb")
const bcrypt = require("bcrypt")

const getloginPage = async (req, res) => {
    res.render("Login", {
        title: "Login page",
        path: "/login",
        error: "",
    });
};


const getPostpage = async (req, res) => {
    try {
        const { login, password } = req.body;

        if (!(login && password))  {
            throw new Error("Barcha maydonni toldiring");
        }


        const user = await Usermodel.findOne({ login });

        if (!user) {
            throw new Error("Bunday login bazada yoq")
        }


        const isPasswordvalid = await bcrypt.compare(password, user.password);

        if (!isPasswordvalid) {
            throw new Error("Parol xato")
        }

        res.redirect("/")
    } catch (error) {
        res.render("login", {
            title: "login page",
            path: "/login",
            error: error.message || "xato sms"
        });
    }
};


module.exports = {
    getloginPage,
    getPostpage
}



// let getuser = await fs.readFile(
        //     path.join(__dirname, "../", "database", "db.json"),
        //     "utf-8"
        // )
        // getuser = JSON.parse(getuser)