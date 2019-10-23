import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  isVerified: { type: Boolean, default: false },
  passwordResetToken: String,
  passwordResetExpires: Date,
  createdDate: {
    type: Date,
    default: Date.now
  }
});

const User = new mongoose.model('User', userSchema);
export default User;
