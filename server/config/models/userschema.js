const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const womeninfo=new mongoose.Schema({
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
    Contact:{
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
    Timing:{
        type:String,
    },  
    Image1:{
        type:String,
    },
});
womeninfo.pre("save",async function(next){
    if(this.isModified('Password')){
        try{
        this.Password= await bcrypt.hash(this.Password,12);    
    }
    catch(e){
         console.log("error hashing password",e);
    }
}
    next();
})

const User=new mongoose.model("User",womeninfo);

module.exports=User;
