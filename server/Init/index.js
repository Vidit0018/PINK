const mongoose=require("mongoose");
const Initdata=require("../Init/data.js");
const Doctor = require("../config/models/Doctorschema.js");
main()
.then((res)=>{
    console.log("connection successfull");
})
.catch((res)=>{
    console.log(res);
})
async function main(){
    await mongoose.connect("mongodb+srv://chaudharyrajan387:ur5cQJJy5KyDf5iV@cluster0.rzfawzv.mongodb.net/Pink");
}
const Initdb=async () =>{
     await Doctor.deleteMany({});
    await Doctor.insertMany(Initdata.data);
     console.log("message is successfully conveying");
}
Initdb();