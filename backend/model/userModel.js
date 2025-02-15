// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     fullname: { type: String, required: true },
//     gender: { type: String, required: true, enum: ["male", "female"] },
//     prefergender: { type: String, required: true, enum: ["male", "female"] },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     isAdmin: { type: Boolean, required: true, default: false },
// }, { timestamps: true });

// const User = mongoose.model("User", userSchema);
// export default User;


import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  preferredGender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  isAdmin: { type: Boolean, default: false }, // Add this field
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User