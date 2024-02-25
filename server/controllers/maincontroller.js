const User=require("../config/models/userschema");
const login = async(req,res)=>{
    res.render("login.ejs");
}
const home = async(req,res)=>{
    res.render("home.ejs");
}
const signup = async(req,res)=>{
    res.render("login.ejs");
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
module.exports ={
login,home,signup,signup_post
};
