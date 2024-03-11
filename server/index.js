const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const user = require("./model/userDetail");
const bodyParser = require("body-parser");
const dotenv=require('dotenv')
const Token=require('./model/token');
const router = require("./routes/user");
const adminRouter = require("./routes/admin");
dotenv.config()
mongoose
  .connect(
    "mongodb+srv://sachin:sachinpatadiya@cluster0.swbxzxl.mongodb.net/blog_management_system",
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
    app.use('/',router)
    app.use('/admin',adminRouter)

    app.listen(3030, () => {
      console.log(`server started at @3030`);
    });
  });
