import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";        
cloudinary.config({ 
  cloud_name: 'diukjw38i', 
  api_key: '779135273943798', 
  api_secret: 'riHpwxvUAlHEcTNBdotlGuZrXGY' 
});
const UploadCloudinary=async(localpath)=>{
try{
    if(!localpath) return null;
     const response=await cloudinary.uploader.upload(localpath,{
       resource_type:"auto",
    })
    // file has uploaded on cloudinary;
    console.log("file is uploaded on cloudinary",response.url);
    return response;
}
catch(err){
    fs.unlinkSync(localpath);
    // remove the locally file when upload file got failed.....
console.log(err);
return null;
}
}
module.exports ={UploadCloudinary};