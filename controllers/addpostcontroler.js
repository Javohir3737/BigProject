const { postModel } = require("../postdata/postdata");

const getaddpostpage =  async (_, res) => {
    try {
        res.render("addpost",{
            title: "addpost page",
            path:"/addpost",
            error:""
        }   )
        
    } catch (error) {
        res.render("addpost", {
            title: "addpost page",
            path: "/addpost",
            error: error
        });
    }
};


const getaddpostPostpage = async (req, res) => {
    try {
        const {post, comment} = req.body;
    
        if (!(post && comment)) {
            throw new Error("Barcha maydollarning to'ldiring")
        }

        const findPostUser = await postModel.findOne({
            post: post,
        })


        if (findPostUser) {
            throw new Error("Bunday UserName bazada bor")
        }

        if (comment.length < 4) {
            throw new Error("Parol 4 belgidan kam")
        }

        const postuser = {post, comment}
        await postModel.create(postuser);
        
        res.redirect("/");
     } catch (error) {
        console.error("Error", error);
        res.render("addpost", {
            title: "addpost page",
            path: "/addpost",
            error: error.message || "Xato sms",
        });
    }
};

module.exports = {
    getaddpostpage,
    getaddpostPostpage,
};