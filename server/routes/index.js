const express = require("express");
const router = express.Router();
const {login,home,contact,userprofile,signup_post,login_post,volunteer,
    donation,donation_form,appointment,bookAppointment} =require("../controllers/maincontroller")
router.get("/", login);
router.get("/home", home);
router.get("/contact", contact);
router.post("/signup",signup_post);
router.post("/login",login_post);
router.get("/userprofile", userprofile);
router.get("/volunteer", volunteer);
router.get("/donation", donation);
router.get("/donation_form", donation_form);
router.get("/appointment", appointment);
router.get("/book-appointment", bookAppointment);
// router.get("/userprofile/:id",userprofile);
module.exports= router;