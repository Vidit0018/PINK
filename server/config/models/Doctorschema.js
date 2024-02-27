const mongoose=require("mongoose");
const Doctorinfo=new mongoose.Schema({
    Username:{
        type:String,
    
    },    
    Email:{
        type:String,
        unique:true,
    },
    Password:{
        type:String,
    },
    Phone:{
        type:Number,
    },
    Location: {
        type:String,
    },
    Birthday:{
        type:String,
    },
    Age:{
        type:Number,
    },
    Name:{
        type:String,
    },
    Address:{
        type:Number,
    },
    City:{
        type:String, 
    },
    Pincode:{
        type:Number,
    },
    Image1:{
        type:String,
    },
});
const Doctor=new mongoose.model("Doctor",Doctorinfo);
module.exports=Doctor;

