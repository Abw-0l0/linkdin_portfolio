import sampleSchema from '../models/samplem'
import asyncHandler from 'express-async-handler';

const uploadData = asyncHandler(async ( req, res) => {
    const { message } = req.body;
    console.log("aa",message)
    try {
        const upload = await sampleSchema.create({message});

        res.json(upload);

    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

export {uploadData};