// import jwt from "jsonwebtoken";
// import User from "../model/userModel.js";
// import asyncHandler from "./asyncHandler.js";

// const authenticate = asyncHandler(async (req, res, next) => {
//     // if the token is valid then the user is able to login
//     let token;
//     token = req.cookies.jwt // read JWT from the 'jwt' cookie
//     console.log(token)

//     // check the token is valid or not
//     if (token) {
//         try {
//             const decoded = jwt.verify(token, process.env.JWT_SECRET)
//             req.user = await User.findById(decoded.userId).select('-password')
//             next();
//         } catch (error) {
//             res.status(401)
//             throw new Error("Not Authorised, token failed")
//         }
//     }else{
//         res.status(401)
//         throw new Error("Not Authorised,no token")
//     }
// })

// // check for the admin
// const authorizeAdmin = (req, res, next) => {
//     if (req.user && req.user.isAdmin) {
//         next()
//     }else{
//         res.status(401).send("Not authorised as an admin")
//     }
// }

// export {authenticate, authorizeAdmin}

import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  console.log('Token:', token);
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = decoded; // Correct way

    req.user = { userId: decoded.id }; // Attach user data to the request
    console.log('Decoded Token:', decoded);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default authMiddleware;