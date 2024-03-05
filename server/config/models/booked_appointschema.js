const mongoose=require("mongoose");
const bookedinfo=new mongoose.Schema({
    // doctor detail
    name:{
        type:String,
    
    }, 
    specialization: {
        type: String, 
       },
   hospital: {
        type: String, 
       },
   location: { 
       type: String ,
   },
   contact: { 
       type: Number, 
   },
   experience: { 
       type: Number ,
   },
   availability:{
    type:[String]
},
//    user detail
    Username:{
     type:String,
    },
    Address:{
        type:String,
    },
    UserPhone:{
    type:String,
    },
    Useremail:{
        type:String,
           Unique:true,
    },
    Service:{
        type:String,
    },
    Message:{
        type:String,
    },
    Time:{
           type:String,
    },
    Date_1:{
        type:String,
    },
    Date_2:{
        type:String,
    }
    ,

    
});
const Booked=new mongoose.model("Booked",bookedinfo);
module.exports={Booked};
