import express from 'express';
import { generateUploadURL } from '../controllers/uploadControllers';

const router = express.Router();

router.get('/generate-upload-url', generateUploadURL);

export default router;
