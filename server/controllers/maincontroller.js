const about = async(req,res)=>{
    res.send("<h1>About Page</h1>");
}
const contact = async(req,res)=>{
    res.send("<h1>Contact Page</h1>");
}
module.exports ={about,contact};
