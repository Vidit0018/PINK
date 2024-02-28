const mongoose=require("mongoose");
const Initdata=require("./data.js");
const Doctor = require("../config/models/Doctorschema.js");
main()
.then((res)=>{
    console.log("connection successfull");
})
.catch((res)=>{
    console.log(res);
})
async function main(){
    await mongoose.connect("mongodb+srv://chaudharyrajan387:ur5cQJJy5KyDf5iV@cluster0.rzfawzv.mongodb.net/Pink"
       );
}
const Initdb=async () =>{
    try {
         await Doctor.deleteMany({});
        const result = await Doctor.insertMany(Initdata.data);
        console.log("Documents inserted:",result.lngth);
        console.log("Message successfully conveyed");
      } catch (error) {
        console.error("Error inserting documents:", error);
      }
}
Initdb();