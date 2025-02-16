import express from 'express';
import { uploadProfilePhoto } from '../controllers/profileController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

// Upload profile photo
router.post('/upload', authMiddleware, upload.single('profilePhoto'), uploadProfilePhoto);

export default router;