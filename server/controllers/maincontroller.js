const login = async(req,res)=>{
    res.render("login.ejs");
}
const home = async(req,res)=>{
    res.render("home.ejs");
}
const contact = async(req,res)=>{
    res.send("<h1>Contact Page</h1>");
}
module.exports ={login,home,contact};
