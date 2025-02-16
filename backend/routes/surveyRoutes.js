import express from 'express';

import authMiddleware from '../middlewares/authMiddleware.js';
import { getSurveyByUserId, submitSurvey } from '../controllers/surveyController.js';

const router = express.Router();

// Submit survey
router.post('/submit', authMiddleware, submitSurvey);

// Get survey by user ID
router.get('/user', authMiddleware, getSurveyByUserId);

export default router;