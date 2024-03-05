const User = require("../config/models/userschema");
const Volunteer = require("../config/models/Volunteerschema");
const Medicine = require("../config/models/Medicineschema.js");
const Doctor = require("../config/models/Doctorschema");
const Booked = require("../config/models/booked_appointschema.js");
const {sendMail} =require("../controllers/mail")
const Donate=require("../config/models/Donationschema.js");
const express = require('express');
const dotenv=require('dotenv');
const fs = require("fs");
const { PythonShell } = require('python-shell');
const app = express();
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: 'diukjw38i',
    api_key: '779135273943798',
    api_secret: 'riHpwxvUAlHEcTNBdotlGuZrXGY'
});

const login = async (req, res) => {
    res.render("login.ejs");
}
const home = async (req, res) => {
    res.render("home.ejs");
}
const contact = async (req, res) => {
    res.send("<h1>Contact Page</h1>");
}

const signup_post = async (req, res) => {
    try {
        const user = new User({
            Username: req.body.Username,
            Email: req.body.Email,
            Password: req.body.Password
        });
        const user_registered = await user.save();
        console.log(user_registered);
        res.render("popup_signup.ejs");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering user.");
    }
}


const login_post = async (req, res) => {

    try {
        const Username = req.body.Username;
        const Password = req.body.Password;
        // const Email=req.body.Email;

        // Check if Email and Password are present in the request body
        if (!Username || !Password) {
            return res.status(400).send("Email and Password are required");
        }

        const user = await User.findOne({ Username });

        // Check if the user exists in the database
        if (!user) {
            return res.render("pop_login.ejs");
        }

        const isMatch = await bcrypt.compare(Password, user.Password);

        // Check if the passwords match
        if (isMatch) {
            console.log({ Password, Username });
            res.render("home.ejs", { user });
        } else {
            res.status(401).send("Invalid Username and password");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal Server Error");
    }
}

const editprofile = async (req, res) => {
    try {
        let { id } = req.params;
        console.log(id);
        let editdata = await User.findById(id);

        if (!editdata) {
            return res.status(404).send('User not found'); // Handle if user is not found
        }
        res.render("userprofile.ejs", { editdata });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
// editprofileId-------------------------->update krne ka code
const updateid = async (req, res, next) => {
    try {
        const { id } = req.params;
       
        const imagepath1 = req.files.path;
        console.log(imagepath1);
        // Upload image to Cloudinary
        cloudinary.uploader.upload(imagepath1.tempFilePath, async (err, result) => {
            if (err) {
                console.error("Error uploading image to Cloudinary:", err);
                return res.status(500).send("Failed to upload image to Cloudinary");
            }
            console.log("Image uploaded to Cloudinary:", result);
            fs.unlink(imagepath1.tempFilePath, (unlinkErr) => {
                if (unlinkErr) {
                    console.error("Error deleting temporary file:", unlinkErr);
                } else {
                    console.log("Temporary file deleted successfully");
                }
            });

            // Assuming you get the sport from the request body
            try {
                const updatedData = {
                    Birthday: req.body.Birthday,
                    Age: req.body.Age,
                    Phone: req.body.Phone,
                    Name:req.body.Name,
                    City: req.body.City,
                    Address: req.body.Address,
                    Pincode: req.body.Pincode,
                    Image1: result.url,
                };

                // Update user profile in MongoDB
                const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
                if (!user) {
                    return res.status(404).send("User not found");
                }

                console.log("User profile updated successfully:", user);
                // Redirect to user page with updated user data
                res.render("home.ejs", { user });

            } catch (error) {
                console.error("Error updating user profile:", error);
                res.status(500).send("Failed to update user profile");
            }
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
}
// <--------------------end of edit profile ka code------------------------>

const volunteer = async (req, res) => {
    const volunteerlisting = await Volunteer.find({})
    console.log(volunteerlisting);
    res.render("volunteer.ejs", { volunteerlisting });
}
const donation = async (req, res) => {
    res.render("donation.ejs")
}
const donation_form = async (req, res) => {
    res.render("donation_form.ejs")
}
const donation_success=async(req,res)=>{
    try{
        const donate=new Donate({
            Fname:req.body.Fname,
            Lname:req.body.Lname,
            Email:req.body.Email,
            Address:req.body.Address,
            City:req.body.City,
            State:req.body.State,
            Pincode:req.body.Pincode,

        })
        const data=await donate.save();
        res.redirect("/donation");
    }
    catch(err){
        console.log("error caught",err);
    }
    

}
const appointment = async (req, res) => {
    const Doctorlisting = await Doctor.find({})
    res.render("appointment.ejs", { Doctorlisting });
}
const bookAppointment = async (req, res) => {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    res.render("book-appointment.ejs", { doctor })
}

const SendMailTemplate = async (req,res) =>{
    const result = await sendMail(req.body);
    if(result){
        res.redirect("/appointment");
    }
}

const medicines = async (req, res) => {
    const Medicinelisting = await Medicine.find({})
    res.render("medicines.ejs", { Medicinelisting });
}
const bookings = async(req,res)=>{
    const booking=await Booked.find({});
   res.render("bookings.ejs",{booking});
}

// <--------------------python---------------------------------------------->
const nearest = async (req, res) => {
    let ownData = await User.findById(req.params.id);
    console.log(ownData.Pincode)
    const pythonShell = new PythonShell('server/python/nearest.py', { args: ownData.Pincode });
    pythonShell.on('message', (message) => {
        res.render("nearest.ejs", { message : message.split("**")[0] , location:message.split("**")[1] });

    });
    pythonShell.end();
}
//<------------------------------ booking appointment-------------------------------------->
const booked_appointment = async (req, res,next) => {
    try {
        const { id } = req.params;
        const doctor = await Doctor.findById({ _id: id });
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        const { Username, UserPhone, Useremail,Date_1,Date_2,Message } = req.body;
        const bookedAppointment = new Booked({
            name: doctor.name,
            specialization: doctor.specialization,
            hospital: doctor.hospital,
            location: doctor.location,
            contact: doctor.contact,
            experience: doctor.experience,
            availability:doctor.availability,
            Username,
            UserPhone,
            Useremail,
            Date_1,
            Date_2,
            Message,
        });
        const savedAppointment = await bookedAppointment.save();
        console.log(savedAppointment);
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
// <---------------------end of booking--------------------------------->
// sorting
const oncosurgeon=async(req,res)=>{
    const Doctorlisting = await Doctor.find({specialization :"Oncosurgeon"})
    res.render("appointment.ejs", { Doctorlisting });
}
const oncologist=async(req,res)=>{
    const Doctorlisting = await Doctor.find({specialization :"Oncologist"})
    res.render("appointment.ejs", { Doctorlisting });
}
const Radiation=async(req,res)=>{
    const Doctorlisting = await Doctor.find({specialization :"Radiation Oncologist"});
    res.render("appointment.ejs", { Doctorlisting });
}
const faridabad=async(req,res)=>{
    const Doctorlisting = await Doctor.find({location :"Faridabad"});
    res.render("appointment.ejs", { Doctorlisting });
}
const delhi=async(req,res)=>{
    const Doctorlisting = await Doctor.find({location :"Delhi"});
    res.render("appointment.ejs", { Doctorlisting });
}
const gurugram=async(req,res)=>{
    const Doctorlisting = await Doctor.find({location :"Gurugram"});
    res.render("appointment.ejs", { Doctorlisting });
}
const noida=async(req,res)=>{
    const Doctorlisting = await Doctor.find({location :"Noida"});
    res.render("appointment.ejs", { Doctorlisting });
}


module.exports = {
    login, home, contact, editprofile, signup_post, login_post,
    volunteer, donation, donation_form,
    appointment, bookAppointment, updateid,
    medicines, nearest,booked_appointment,
    bookings,donation_success, SendMailTemplate,oncosurgeon,oncologist,Radiation ,
    gurugram,delhi,noida,faridabad
};
