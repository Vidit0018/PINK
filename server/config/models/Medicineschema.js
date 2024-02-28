const mongoose=require("mongoose");
const Medicineinfo=new mongoose.Schema({
    name:{
        type:String,
    
    },    
    description:{
        type:String,

    },
    price:{
        type:Number,
    },
    life_span:{
        type:String,
    },
    
    
});
const Medicine=new mongoose.model("Medicine",Medicineinfo);
module.exports=Medicine;
