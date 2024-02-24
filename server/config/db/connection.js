const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://chaudharyrajan387:ur5cQJJy5KyDf5iV@cluster0.rzfawzv.mongodb.net/Pink").then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log("error cought",e);
})

module.exports=mongoose;
