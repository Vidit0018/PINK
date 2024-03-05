const mongoose=require("mongoose");
const Labdata=require("../Init/labdata.js");
const Lab = require("../config/models/labschema.js");
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
         await Lab.deleteMany({});
         const result = await Lab.insertMany(Labdata.data);
         console.log("Documents inserted:",result.lngth);
        console.log("Message successfully conveyed");
      } catch (error) {
        console.error("Error inserting documents:", error);
      }
}
Initdb();