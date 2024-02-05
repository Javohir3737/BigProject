


const { Usermodel } = require("../userdata/userdb");
const bcrypt = require("bcrypt")


const getsignupPage = async (_, res) => {
    try {
        res.render("signup", {
            title: "sign up page",
            path: "/signup",
            error: '',
        });
    } catch (error) {
        res.render("signup", {
            title: "sign up page",
            path: "/signup",
            error: error
        });
    }
};

const getPostpage = async (req, res) => {
    try {
        const {username, login, password} = req.body;
    
        if (!(username && login && password)) {
            throw new Error("Barcha maydollarning to'ldiring")
        }

        const findUser = await Usermodel.findOne({
            username: username,
        })


        if (findUser) {
            throw new Error("Bunday UserName bazada bor")
        }

        if (password.length < 4) {
            throw new Error("Parol 4 belgidan kam")
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt).catch((err) => {
            console.error("Parolni hash qilib bolmaydi", err);
        });


        const user = {username, login, password: hashPassword}
        await Usermodel.create(user);
        
        res.redirect("/login");
     } catch (error) {
        console.error("Error", error);
        res.render("signup", {
            title: "signup page",
            path: "/signup",
            error: error.message || "Xato sms",
        });
    }
};

module.exports = {
    getsignupPage,
    getPostpage,
};




// alluser.push(user)
        // alluser = JSON.stringify(alluser);
        // await fs.writeFile(
        //     path.join(__dirname, "../", "database", "db.json"),
        //     alluser,
        //     "utf-8"
        // );

        // agar registratsiyadan o'tsa login sahifasiga yo'naltirib beramiz
        
        
        
        
        
        
        
        // const getuser = await fs.readFile(
        //     path.join(__dirname, "../", "database", "db.json"),
        //     "utf-8"
        // );


        // let alluser = JSON.parse(getuser);
        // const findUser = alluser.find((user) => user.username === username);


        // if (findUser) {
        //     throw new Error("Bunday user name bazada bor");
        // }

        // if (password.length < 4) {
        //     throw new Error("Parol 4 belgidan kam");
        // }