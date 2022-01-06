import express from 'express';
import controller from '../controllers/api'
const router = express.Router();

router.get('/ffmpeg/image', controller.getEncodedImage);

export = router;