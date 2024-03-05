const express = require("express");
const router = express.Router();
const {login,home,contact,editprofile,signup_post,login_post,volunteer,
    donation,donation_form,appointment,bookAppointment,updateid,
    medicines,nearest,booked_appointment,bookings,donation_success,oncosurgeon,
    oncologist,Radiation, SendMailTemplate,faridabad,gurugram,noida,delhi,All
}=require("../controllers/maincontroller")
const {sendMail} =require("../controllers/mail")
router.get("/", login);
router.get("/home", home);
router.get("/contact", contact);
router.post("/signup",signup_post);
router.post("/login",login_post);
router.get("/editprofile/:id", editprofile);
router.get("/volunteer", volunteer);
router.get("/donation", donation);
router.get("/donation_form", donation_form);
router.post("/donation_form",donation_success);
router.get("/appointment", appointment);
router.get("/mail", sendMail);
router.get("/bookings", bookings);
router.get("/medicines", medicines);
router.get("/book-appointment/:id", bookAppointment);
router.post("/book-appointment/:id/booked",booked_appointment , SendMailTemplate )
router.put("/editprofile/:id",updateid);
router.get("/nearest/:id",nearest);
// sorting
// <------sorting on basis of specialization---------------->
router.get("/Oncosurgeon", oncosurgeon);
router.get("/Oncologist",oncologist);
router.get("/Radiation",Radiation);
// <------------------sorting on basis of location------------->
router.get("/faridabad", faridabad);
router.get("/gurugram",gurugram);
router.get("/noida",noida);
router.get("/delhi",delhi);
router.get("/All",All);

module.exports= router;
