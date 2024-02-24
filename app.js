const express = require('express');


const app = express();
const port = 3000;

app.use(express.static("public"));

const page_routes = require ("./server/routes/index")

app.get("/", function (req, res) {
  res.render("login.ejs");
});
app.use("/routes", page_routes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
