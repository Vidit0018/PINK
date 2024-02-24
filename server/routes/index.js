const express = require("express");
const router = express.Router();

const {home,about,contact,} =require("../controllers/maincontroller")

router.route("/home").get(home);
router.route("/about").get(about);
router.route("/contact").get(contact);

module.exports= router;