const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

require("dotenv").config();

// middleware   
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ejs setting
app.set("view engine", "ejs");

const { connect } = require("./userdata/userdb")
connect();
// routers import
const aboutRouter = require("./router/aboutrouter");
const contactRouter = require("./router/contactrouter");
const homeRouter = require("./router/homerouter");
const signinRouter = require("./router/loginrouter");
const signupRouter = require("./router/signuprouter");
const addpostRouter = require("./router/addpostRouter")

app.use(homeRouter.router.path, homeRouter.router.router);
app.use(aboutRouter.router.path, aboutRouter.router.router);
app.use(contactRouter.router.path, contactRouter.router.router);
app.use(signinRouter.router.path, signinRouter.router.router);
app.use(signupRouter.router.path, signupRouter.router.router);
app.use(addpostRouter.router.path, addpostRouter.router.router)
// port listen

app.listen(port, console.log("men ishga tshdim"));