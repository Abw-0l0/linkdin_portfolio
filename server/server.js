const express = require('express')
const mongoose = require( 'mongoose')
const cors = require( 'cors')
const PostRoutes = require('./routes/PostRoutes')
const UserRoutes = require('./routes/UserRoutes')
const multer = require('multer')
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
// app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

  mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;

db.once("open", () => {
    console.log("db connected");
})

app.listen(port, console.log(`Server is running on http://localhost:${port}`));

app.use('/post',PostRoutes);
app.use('/user',UserRoutes);
app.use("/uploads", express.static("uploads"));

// app.use("/upload",upload.single("image"),(req,res)=>{
//     console.log(req.body);
//     console.log(req.file);
//     return res.redirect('/');
// })