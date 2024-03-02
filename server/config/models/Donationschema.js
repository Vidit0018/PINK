const mongoose=require("mongoose");
const Donationinfo=new mongoose.Schema({
    
        Fname: { 
            type: String ,
        },
        Lname:{
            type:String,
        },
        Email:{
            type:String,
            unique:true,
        },
        Address:{
            type:String,
        },
        City:{
            type:String,
        },
        State:{
            type:String,
        },
        Pincode:{
            type:Number,
        },


        
       
      
      
});
const Donate=new mongoose.model("Donate",Donationinfo);
module.exports=Donate;

