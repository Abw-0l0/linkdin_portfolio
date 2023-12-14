import express from "express"
import {uploadData} from '../controllers/samplec'
const router = express.Router();

router.route('/upload').post(uploadData);

module.exports = router;