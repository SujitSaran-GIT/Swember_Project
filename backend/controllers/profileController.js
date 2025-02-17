import User from '../model/userModel.js';
import detectFace from '../middlewares/faceDetection.js';
import fs from 'fs';

// export const uploadProfilePhoto = async (req, res) => {
//   try {
//     const { userId } = req.user; // Get user ID from the authenticated user
//     const filePath = req.file.path;

//     console.log('Uploading profile photo for user:', userId);
//     console.log('File path:', filePath);

//     // Detect if the photo contains a human face
//     const isFaceDetected = await detectFace(filePath);

//     if (!isFaceDetected) {
//       console.log('No face detected, deleting file:', filePath);
//       fs.unlinkSync(filePath); // Delete the uploaded file if no face is detected
//       return res.status(400).json({ message: 'No human face detected in the photo.' });
//     }

//     // Save the profile photo URL to the user's document
//     const profilePhotoUrl = `/uploads/${req.file.filename}`;
//     const user = await User.findByIdAndUpdate(userId, { profilePhoto: profilePhotoUrl });

//     if (!user) {
//       console.log('User not found');
//       return res.status(404).json({ message: 'User not found' });
//     }

//     console.log('Profile photo uploaded successfully:', profilePhotoUrl);
//     res.status(200).json({ message: 'Profile photo uploaded successfully!', profilePhotoUrl });
//   } catch (error) {
//     console.error('Error uploading profile photo:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// export const uploadProfilePhoto = async (req, res) => {
//   try {
//     const userId = req.user.id; // Correct way to get the user ID from decoded token

//     console.log('User ID from token:', userId); // Log the userId

//     if (!userId) {
//       return res.status(400).json({ message: 'User ID is missing in the token.' });
//     }

//     const filePath = req.file.path;
//     console.log('File path:', filePath);

//     // Detect if the photo contains a human face
//     const isFaceDetected = await detectFace(filePath);

//     if (!isFaceDetected) {
//       console.log('No face detected, deleting file:', filePath);
//       fs.unlinkSync(filePath);
//       return res.status(400).json({ message: 'No human face detected in the photo.' });
//     }

//     // Save the profile photo URL to the user's document
//     const profilePhotoUrl = `/uploads/${req.file.filename}`;
//     const user = await User.findByIdAndUpdate(userId, { profilePhoto: profilePhotoUrl });

//     if (!user) {
//       console.log('User not found');
//       return res.status(404).json({ message: 'User not found' });
//     }

//     console.log('Profile photo uploaded successfully:', profilePhotoUrl);
//     res.status(200).json({ message: 'Profile photo uploaded successfully!', profilePhotoUrl });
//   } catch (error) {
//     console.error('Error uploading profile photo:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };
// export const uploadProfilePhoto = async (req, res) => {
//   try {
//     const userId = req.user?.id; // Correct way to get user ID from token
//     const filePath = req.user?.id || req.body.userId;;

//     console.log('Uploading profile photo for user:', userId);
//     console.log('File path:', filePath);

//     // Detect if the photo contains a human face
//     const isFaceDetected = await detectFace(filePath);

//     if (!isFaceDetected) {
//       console.log('No face detected, deleting file:', filePath);
//       fs.unlinkSync(filePath); // Delete the uploaded file if no face is detected
//       return res.status(400).json({ message: 'No human face detected in the photo.' });
//     }

//     // Save the profile photo URL to the user's document
//     const profilePhotoUrl = `/uploads/${req.file.filename}`;
//     const updatedUser = await User.findByIdAndUpdate(userId, { profilePhoto: profilePhotoUrl }, { new: true });

//     if (!updatedUser) {
//       console.log("User not found in the database!");
//       return res.status(404).json({ message: 'User not found' });
//     }

//     console.log('Profile photo uploaded successfully:', profilePhotoUrl);
//     res.status(200).json({ message: 'Profile photo uploaded successfully!', profilePhotoUrl });
//   } catch (error) {
//     console.error('Error uploading profile photo:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

export const uploadProfilePhoto = async (req, res) => {
  try {
      console.log('Request File:', req.file); // Log the uploaded file
      console.log('Request Body:', req.body); // Log the request body

      const { userId } = req.user; // Ensure this matches the decoded token structure
      console.log('User ID from token:', userId); // Log the userId

      if (!req.file) {
          return res.status(400).json({ message: 'No file uploaded.' });
      }

      const filePath = req.file.path;
      console.log('File path:', filePath);

      // Detect if the photo contains a human face
      const isFaceDetected = await detectFace(filePath);

      if (!isFaceDetected) {
          console.log('No face detected, deleting file:', filePath);
          fs.unlinkSync(filePath); // Delete the uploaded file if no face is detected
          return res.status(400).json({ message: 'No human face detected in the photo.' });
      }

      // Save the profile photo URL to the user's document
      const profilePhotoUrl = `/uploads/${req.file.filename}`;
      const user = await User.findByIdAndUpdate(userId, { profilePhoto: profilePhotoUrl });

      if (!user) {
          console.log('User not found');
          return res.status(404).json({ message: 'User not found' });
      }

      console.log('Profile photo uploaded successfully:', profilePhotoUrl);
      res.status(200).json({ message: 'Profile photo uploaded successfully!', profilePhotoUrl });
  } catch (error) {
      console.error('Error uploading profile photo:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
  }
};