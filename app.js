const express = require('express');
const app = express();
const port = 3000;
const path=require("path");
const connection=require("./server/config/db/connection");
const models=require("./server/config/models/userschema");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const methodoverride=require("method-override");
app.use(methodoverride("_method"));
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
const page_routes = require ("./server/routes/index")
app.use("/", page_routes);
app.get("/",(req,res)=>{
  res.send("Home page is rendering");
})
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
