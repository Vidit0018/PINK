const mongoose=require("mongoose");
const Volunteerinfo=new mongoose.Schema({
    name:{
        type:String,
    
    },    
    date:{
        type:String,

    },
    day:{
        type:String,
    },
    time:{
        type:String,
    },
    location: {
        type:String,
    },
    city:{
        type:String,
    },
    type:{
        type:String,
    },
    
});
const Volunteer=new mongoose.model("Volunteer",Volunteerinfo);
module.exports=Volunteer;
