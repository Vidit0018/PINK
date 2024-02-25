const express = require("express");
const router = express.Router();
const {login,home,contact,userprofile,signup_post,login_post} =require("../controllers/maincontroller")
router.get("/", login);
router.get("/home", home);
router.get("/contact", contact);
router.post("/signup",signup_post);
router.post("/login",login_post);
router.get("/userprofile", userprofile);
module.exports= router;