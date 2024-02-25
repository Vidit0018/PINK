const User=require("../config/models/userschema");
const bcrypt=require("bcryptjs");
const fileUpload=require("express-fileupload");
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
                        res.send("you successfully signin");
                    } else {
                        res.status(401).send("Invalid Username and password");
                    }
                } catch (error) {
                    console.error("Error during login:", error);
                    res.status(500).send("Internal Server Error");
                }
            }
            const userprofile=async(req,res)=>{
                res.render(userprofile.ejs);
            }

const volunteer = async(req,res)=>{
    res.render("volunteer.ejs")
}
//   Router.put("/")
module.exports ={
    login,home,contact,userprofile,signup_post,login_post,volunteer,fileUpload
};
