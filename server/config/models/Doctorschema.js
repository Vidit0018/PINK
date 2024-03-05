const mongoose=require("mongoose");
const Doctorinfo=new mongoose.Schema({
    
        name:{ 
            type: String ,
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
        rating: { 
            type: Number,
         },
        availability:{
            type:[String]
        },

        consultation_fee: {
             type: String, 
            },
        verified: { 
            type: Boolean ,
        }
      
      
});
const Doctor=new mongoose.model("Doctor",Doctorinfo);
module.exports=Doctor;

