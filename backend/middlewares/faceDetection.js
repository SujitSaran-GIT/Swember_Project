// import * as faceapi from 'face-api.js';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Convert import.meta.url to a file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Load face-api.js models
// const MODEL_URL = path.join(__dirname, '../models'); // Path to pre-trained models
// await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);

// const detectFace = async (filePath) => {
//   try {
//     console.log('Detecting face in:', filePath);
//     const image = await faceapi.bufferToImage(fs.readFileSync(filePath));
//     const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors();

//     if (detections.length > 0) {
//       console.log('Face detected');
//       return true; // Face detected
//     }
//     console.log('No face detected');
//     return false; // No face detected
//   } catch (error) {
//     console.error('Error detecting face:', error);
//     return false;
//   }
// };

// export default detectFace;

import * as faceapi from 'face-api.js';
import canvas from 'canvas';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const { Image, Canvas, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

// Convert __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MODELS_PATH = path.join(__dirname, '../models'); // Path to face detection models

// Load face detection models
async function loadModels() {
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODELS_PATH);
    await faceapi.nets.faceLandmark68Net.loadFromDisk(MODELS_PATH);
    await faceapi.nets.faceRecognitionNet.loadFromDisk(MODELS_PATH);
}

export default async function detectFace(imagePath) {
    await loadModels(); // Load models before detection

    if (!fs.existsSync(imagePath)) {
        console.log("Image not found:", imagePath);
        return false;
    }

    const img = await canvas.loadImage(imagePath);
    const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();

    console.log("Detections:", detections); // Debugging

    return detections ? true : false;
}
