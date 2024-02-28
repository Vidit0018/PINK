const User=require("../config/models/userschema");
const Volunteer=require("../config/models/Volunteerschema");
const Medicine=require("../config/models/Medicineschema.js");
const Doctor=require("../config/models/Doctorschema");
const express = require('express');
const app = express();
const bcrypt=require("bcryptjs");
const cloudinary=require("cloudinary").v2;
cloudinary.config({ 
  cloud_name: 'diukjw38i', 
  api_key: '779135273943798', 
  api_secret: 'riHpwxvUAlHEcTNBdotlGuZrXGY' 
});

const login = async(req,res)=>{
    res.render("login.ejs");
}
const home = async(req,res)=>{
    res.render("home.ejs");
}
const contact = async(req,res)=>{
    res.send("<h1>Contact Page</h1>");
}
const signup_post=async(req,res)=>{
    try {
        const user = new User({
            Username: req.body.Username,
            Email: req.body.Email,
            Password: req.body.Password
        });
        const user_registered = await user.save();
        console.log(user_registered);
        res.send("Welcome! You have successfully registered.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering user.");
    }
        }
        const login_post=async(req,res)=>{
            
                try {
                    const Username= req.body.Username;
                    const Password = req.body.Password;
                    // const Email=req.body.Email;
              
                    // Check if Email and Password are present in the request body
                    if (!Username || !Password) {
                        return res.status(400).send("Email and Password are required");
                    }
              
                    const user = await User.findOne({ Username });
              
                    // Check if the user exists in the database
                    if (!user) {
                        return res.status(404).send("User not found");
                    }
              
                    const isMatch = await bcrypt.compare(Password, user.Password);
              
                    // Check if the passwords match
                    if (isMatch) {
                      console.log({Password,Username});
                     res.render("home.ejs",{user});   
                    } else {
                        res.status(401).send("Invalid Username and password");
                    }
                } catch (error) {
                    console.error("Error during login:", error);
                    res.status(500).send("Internal Server Error");
                }
            }
const editprofile=async(req,res)=>{
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
 const updateid=async(req,res,next)=>{
    try {
        const { id } = req.params;
        console.log(req.files);
        const imagepath1 = req.files.path;
  
        // Upload image to Cloudinary
        cloudinary.uploader.upload(imagepath1.tempFilePath, async (err, result) => {
            if (err) {
                console.error("Error uploading image to Cloudinary:", err);
                return res.status(500).send("Failed to upload image to Cloudinary");
            }
            console.log("Image uploaded to Cloudinary:", result);
            
            // Assuming you get the sport from the request body
             try {
                // Update user data with Cloudinary image URL
                   const updatedData = {
                    // Birthday: req.body.Birthday,
                    // Detail: req.body.Detail,
                    // Contact: req.body.Contact,
                    // Location: req.body.Location,
                     Image1: result.url,
                };
  
                // Update user profile in MongoDB
                const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
                if (!user) {
                    return res.status(404).send("User not found");
                }
  
                console.log("User profile updated successfully:", user);
                // Redirect to user page with updated user data
                res.render("home.ejs",{user});
                
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

const volunteer = async(req,res)=>{
    res.render("volunteer.ejs")
}
const donation = async(req,res)=>{
    res.render("donation.ejs")
}
const donation_form = async(req,res)=>{
    res.render("donation_form.ejs")
}
const appointment = async(req,res)=>{
    const  Doctorlisting=  await Doctor.find({})
    res.render("appointment.ejs",{Doctorlisting});
}
const bookAppointment = async(req,res)=>{
    res.render("book-appointment.ejs")
}
const medicines = async(req,res)=>{
    const  Medicinelisting=  await Medicine.find({})
    console.log(Medicinelisting);
   res.render("medicines.ejs",{Medicinelisting});
}
//   Router.put("/")
module.exports ={
    login,home,contact,editprofile,signup_post,login_post,
    volunteer,donation,donation_form,
    appointment,bookAppointment,updateid,
    medicines
};
