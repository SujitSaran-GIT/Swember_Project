// // packages
// // import path from 'path'
// // path: Provides utilities for working with file and directory paths.
// import express from 'express'
// // express: A minimal and flexible web framework for building web and API servers.
// import dotenv from 'dotenv'
// // dotenv: Loads environment variables from a .env file into process.env.
// import cookieParser from 'cookie-parser'
// // cookie-parser: Middleware for parsing cookies from incoming requests.

// import connectDB from './config/db.js'
// import userRoutes from './routes/userRoutes.js'

// dotenv.config()
// // dotenv.config(): Loads environment variables from a .env file

// const port = process.env.PORT || 6500
// connectDB()
// // Establishes a connection to the database.
// const app = express()
// app.use(express.json())
// // express.json(): Parses incoming JSON payloads.
// app.use(express.urlencoded({extended:true}))
// // express.urlencoded({ extended: true }): Parses URL-encoded data (e.g., form submissions).
// app.use(cookieParser())
// // cookieParser(): Parses cookies sent with requests.

// app.use("/api/users",userRoutes)

// app.listen(port, () => console.log(`Server running on port ${port}`));
// // Starts the Express server and listens on the specified port.
// // Logs a message to indicate the server is running.

import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Routes
app.use('/api/auth', userRoutes);

// Start server
const PORT = process.env.PORT || 6500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));