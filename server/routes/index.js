const express = require("express");
const router = express.Router();
const {login,home,contact,userprofile,signup_post,login_post,volunteer,fileUpload} = require("../controllers/maincontroller")
router.route("/").get(login);
router.route("/home").get(home);
router.route("/contact").get(contact);
router.route("/signup").post(signup_post);
router.route("/login").post(login_post);
// router.get("/userprofile").get( userprofile);
router.route("/volunteer").post( volunteer);
router.route("/userprofile/:id").post(userprofile);
module.exports= router; 