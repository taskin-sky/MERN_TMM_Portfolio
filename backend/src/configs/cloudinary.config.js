import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

// CONFIGURE CLOUDINARY

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) {
      return null;
    }

    const result = await cloudinary.uploader.upload(filePath);
    console.log('Cloudinary upload result:', result);

    // Optionally, delete the local file after upload
    fs.unlinkSync(filePath);

    return result.secure_url;
  } catch (error) {
    fs.unlinkSync(filePath);
    console.error('Error uploading to Cloudinary:', error);
  }
};

export default uploadOnCloudinary;
