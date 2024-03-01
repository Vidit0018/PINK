const express = require("express");
const router = express.Router();

const {login,home,contact,editprofile,signup_post,login_post,volunteer,
    donation,donation_form,appointment,bookAppointment,updateid,
    medicines,nearest,booked_appointment
} =require("../controllers/maincontroller")
router.get("/", login);
router.get("/home", home);
router.get("/contact", contact);
router.post("/signup",signup_post);
router.post("/login",login_post);
router.get("/editprofile/:id", editprofile);
router.get("/volunteer", volunteer);
router.get("/donation", donation);
router.get("/donation_form", donation_form);
router.get("/appointment", appointment);
router.get("/medicines", medicines);
router.get("/book-appointment/:id", bookAppointment);
router.put("/editprofile/:id",updateid);
router.get("/nearest",nearest);
router.post("/book-appointment/:id/booked",booked_appointment)
module.exports= router;
