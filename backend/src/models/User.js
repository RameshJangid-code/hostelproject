import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['student', 'owner', 'admin'],
      default: 'student'
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hostel'
      }
    ]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

export default User;
