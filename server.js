const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/database");
const userroutes = require("./routes/user_route");
const memberroutes = require("./routes/member_route");
const authorroutes = require("./routes/author_routes");
const bookroutes = require("./routes/book_routes");
const categoryroutes = require("./routes/category_route");
app.use("/user", userroutes);
app.use("/book", bookroutes);
app.use("/member", memberroutes);
app.use("category", categoryroutes);
app.use("author", authorroutes);


app.get("/", (req, res) => {
  res.send("this");
});

app.listen(process.env.PORT, function () {
  console.log(`The server is Running in The PORT : ${process.env.PORT}`);
});
