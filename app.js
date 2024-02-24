const express = require('express');
const app = express();
const port = 3000;
const path=require("path");
const connection=require("./server/config/db/connection");
const models=require("./server/config/models/userschema");
app.use(express.json());
const ejs_mate=require("ejs-mate");
app.engine("ejs",ejs_mate);
app.use(express.urlencoded({ extended: true }));
const methodoverride=require("method-override");
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.use(methodoverride("_method"));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
const page_routes = require ("./server/routes/index")
app.use("/", page_routes);
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
