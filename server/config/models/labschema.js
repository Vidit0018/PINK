const mongoose=require("mongoose");
const Labinfo=new mongoose.Schema({
    
        LabName:{ 
            type: String ,
        },
        
        City: {
             type: String, 
            },
            LabAddress: { 
            type: String ,
        },
        Rating: { 
            type: Number,
         },
         Availability:{
            type:[String]
        },

        LabCharges: {
             type: Number, 
            },
            OpeningDays:{
                type:[String]
            }
        
      
      
});
const Lab=new mongoose.model("Lab",Labinfo);
module.exports=Lab;

