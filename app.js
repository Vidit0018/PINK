const express = require('express');
const app = express();
const port = 3000;
const path=require("path");
const connection=require("./server/config/db/connection");
const models=require("./server/config/models/userschema");
const fileUpload=require("express-fileupload");
app.use(express.json());
app.use(fileUpload({
  useTempFiles:true
}));
const ejs_mate=require("ejs-mate");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.engine("ejs",ejs_mate);
app.use(express.urlencoded({ extended: true }));
const methodoverride=require("method-override");
app.use(methodoverride("_method"));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
const page_routes = require ("./server/routes/index")
// const fileUpload=require("express-fileupload");
app.use("/", page_routes);
// app.use(fileUpload({
//   useTempFiles:true
// }));
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
