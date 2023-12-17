const express = require('express')
const mongoose = require( 'mongoose')
const cors = require( 'cors')
const PostRoutes = require('./routes/PostRoutes')
const UserRoutes = require('./routes/UserRoutes')

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://abw_0l0:inputstream12@cluster0.em87p35.mongodb.net/')
const db = mongoose.connection;

db.once("open", () => {
    console.log("db connected");
})

app.listen(port, console.log(`Server is running on http://localhost:${port}`));

app.use('/post',PostRoutes);
app.use('/user',UserRoutes);