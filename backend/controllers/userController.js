// import asyncHandler from "../middlewares/asyncHandler.js";
// import User from "../model/userModel.js";
// import bcrypt from 'bcryptjs/dist/bcrypt.js'
// import createToken from '../utils/createToken.js'

// const createUser = asyncHandler(async (req, res) => {
//     const { fullname, email, password, gender, prefergender } = req.body;

//     if (!fullname || !email || !password || !gender || !prefergender) {
//         return res.status(400).json({ message: "Please fill all the inputs" });
//     }

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//         return res.status(400).json({ message: "User already exists" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({ fullname, email, password: hashPassword, gender, prefergender });

//     try {
//         await newUser.save();
//         createToken(res, newUser._id);

//         res.status(201).json({
//             _id: newUser._id,
//             fullname: newUser.fullname,
//             email: newUser.email,
//             isAdmin: newUser.isAdmin
//         });
//     } catch (error) {
//         res.status(400).json({ message: "Invalid user data" });
//     }
// });

// export {createUser}

import User from '../model/userModel.js';
import jwt from 'jsonwebtoken';

// Signup
const signup = async (req, res) => {
  const { username, email, password, gender, preferredGender, isAdmin } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({ username, email, password, gender, preferredGender, isAdmin });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, user: { id: user._id, username, email, gender, preferredGender, isAdmin } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email, gender: user.gender, preferredGender: user.preferredGender } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export {signup,login}