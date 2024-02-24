const express = require("express");
const router = express.Router();

const {about,contact,} =require("../controllers/maincontroller")

router.route("/about").get(about);
router.route("/contact").get(contact);

module.exports= router;