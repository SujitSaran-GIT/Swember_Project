// import express from "express";

// import { createUser } from "../controllers/userController.js";

// import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

// const router = express.Router()
// router.route("/").post(createUser)

// export default router

import express from 'express';
import {signup,login} from '../controllers/userController.js'
import authMiddleware from '../middlewares/authMiddleware.js';
import { deleteUserById, getAllUsers, getUserById } from '../controllers/adminController.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);
// Admin-only routes
router.get('/admin/users', authMiddleware, adminMiddleware, getAllUsers); // Get all users

router.get('/admin/users/:userId', authMiddleware, adminMiddleware, getUserById); // Get user by ID

router.delete('/admin/users/:userId', authMiddleware, adminMiddleware, deleteUserById); // Delete user by ID

export default router