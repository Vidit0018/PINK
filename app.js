const express = require('express');


const app = express();
const port = 3000;
const path=require("path");
app.use(express.static(path.join(__dirname,"/public")));

const page_routes = require ("./server/routes/index")
console.log(__dirname);
app.get("/", function (req, res) {
  res.render("login.ejs");
});
app.use("/routes", page_routes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
