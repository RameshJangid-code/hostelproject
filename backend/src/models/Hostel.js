import mongoose from 'mongoose';

const hostelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    description: {
      type: String,
      default: ''
    },
    area: {
      type: String,
      required: true,
      index: true
    },
    city: {
      type: String,
      default: 'Jaipur'
    },
    address: {
      type: String,
      default: ''
    },
    rent: {
      type: Number,
      required: true
    },
    securityDeposit: {
      type: Number,
      default: 0
    },
    genderType: {
      type: String,
      enum: ['boys', 'girls', 'unisex'],
      required: true
    },
    acType: {
      type: String,
      enum: ['ac', 'non-ac', 'both'],
      required: true
    },
    roomTypes: [
      {
        type: String,
        enum: ['single', 'double', 'triple', 'dormitory']
      }
    ],
    facilities: [String],
    images: [String],
    averageRating: {
      type: Number,
      default: 0
    },
    foodRating: {
      type: Number,
      default: 0
    },
    reviewsCount: {
      type: Number,
      default: 0
    },
    environmentTags: [String],
    rules: [String],
    timings: {
      type: String,
      default: ''
    },
    contactName: {
      type: String,
      default: ''
    },
    contactPhone: {
      type: String,
      default: ''
    },
    seatStatus: {
      type: String,
      enum: ['available', 'few-left', 'full'],
      default: 'available'
    },
    nearbyColleges: [String],
    nearbyCoachings: [String],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Hostel = mongoose.model('Hostel', hostelSchema);

export default Hostel;
