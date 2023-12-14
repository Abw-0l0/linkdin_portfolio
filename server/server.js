//imports

import express from "express"
import sampleRoutes from './routes/sampler'
import mongoose from 'mongoose'
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json())

app.use('/api',sampleRoutes);

mongoose.connect('mongodb+srv://abw_0l0:inputstream12@cluster0.em87p35.mongodb.net/')
const db = mongoose.connection;

db.once("open", () => {
    console.log("db connected");
})

app.listen(port, console.log(`Server is running on http://localhost:${port}`));
