const express = require("express");
const router = express.Router();
const {login,home,contact} =require("../controllers/maincontroller")
router.get("/", login);
router.get("/home", home);
router.get("/contact", contact);
module.exports= router;