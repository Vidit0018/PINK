const express = require("express");
const router = express.Router();
const {login,about,contact} =require("../controllers/maincontroller")
router.get("/login", login);
router.get("/about", about);
router.get("/contact", contact);
module.exports= router;