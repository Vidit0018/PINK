const express = require("express");
const router = express.Router();
const {login,home,contact,userprofile} =require("../controllers/maincontroller")
router.get("/", login);
router.get("/home", home);
router.get("/contact", contact);
router.get("/userprofile", userprofile);
module.exports= router;