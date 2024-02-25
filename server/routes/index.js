const express = require("express");
const router = express.Router();
const {login,home,signup,signup_post,login_post} =require("../controllers/maincontroller");
router.get("/signup",signup);
router.get("/login", login);
router.get("/home", home);
router.post("/signup",signup_post);
router.post("/login",login_post)
module.exports= router;