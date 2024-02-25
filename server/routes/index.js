const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const {login,home,contact,userprofile,signup_post,login_post,volunteer} =require("../controllers/maincontroller")
router.get("/", login);
router.get("/home", home);
router.get("/contact", contact);
router.post("/signup",signup_post);
router.post("/login",login_post);
router.get("/userprofile", userprofile);
router.get("/volunteer", volunteer);
// router.get("/userprofile/:id",userprofile);
module.exports= router;
=======
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
>>>>>>> d7d5b47617ca0c195c882b2ea9f20b1988183659
