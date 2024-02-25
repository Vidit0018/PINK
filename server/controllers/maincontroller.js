const User=require("../config/models/userschema");
const bcrypt=require("bcryptjs");
const multer=require("multer");
const UploadCloudinary=require("../config/db/cloudinary");
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
const userprofile = async(req,res)=>{
    try {
        let { id } = req.params;
        console.log(id);
        let editdata = await Register.findById(id);
    
        if (!editdata) {
          return res.status(404).send('User not found'); // Handle if user is not found
         }
    
         res.render("userprofile.ejs");
           } catch (error) {
         console.error(error);
         res.status(500).send('Internal Server Error');
       }
     
    
}
const volunteer = async(req,res)=>{
    res.render("volunteer.ejs")
}
// used multer for starge file........................................>
var storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"./public/images");
    },
     filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
      }
  });
// used multer for uploading files..........................>
  var upload=multer({
    storage:storage,
    fileFilter:function(req,file,callback){
        const allowedMimeTypes = [ "image/jpeg","image/jpg", "image/png"];
        if (allowedMimeTypes.includes(file.mimetype)) {
          callback(null, true);
        }
        else{
            console.log("only jpg and png file is accepted");
            callback(null,false);
        }
    },
    limits:{
        fileSize:1024*2
    }
  });



module.exports ={login,home,contact,userprofile,signup_post,login_post,volunteer};
