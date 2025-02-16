import User from '../model/userModel.js';
import detectFace from '../middlewares/faceDetection.js';
import fs from 'fs';

export const uploadProfilePhoto = async (req, res) => {
  try {
    const { userId } = req.user; // Get user ID from the authenticated user
    const filePath = req.file.path;

    console.log('Uploading profile photo for user:', userId);
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
    await User.findByIdAndUpdate(userId, { profilePhoto: profilePhotoUrl });

    console.log('Profile photo uploaded successfully:', profilePhotoUrl);
    res.status(200).json({ message: 'Profile photo uploaded successfully!', profilePhotoUrl });
  } catch (error) {
    console.error('Error uploading profile photo:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};