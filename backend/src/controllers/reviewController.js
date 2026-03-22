import Hostel from '../models/Hostel.js';
import Review from '../models/Review.js';

export const addReview = async (req, res) => {
  try {
    const { hostelId, rating, foodRating, comment } = req.body;

    const review = await Review.create({
      user: req.user._id,
      hostel: hostelId,
      rating,
      foodRating,
      comment
    });

    const hostelReviews = await Review.find({ hostel: hostelId });
    const totalRating = hostelReviews.reduce((sum, item) => sum + item.rating, 0);
    const totalFoodRating = hostelReviews.reduce((sum, item) => sum + item.foodRating, 0);

    await Hostel.findByIdAndUpdate(hostelId, {
      averageRating: Number((totalRating / hostelReviews.length).toFixed(1)),
      foodRating: Number((totalFoodRating / hostelReviews.length).toFixed(1)),
      reviewsCount: hostelReviews.length
    });

    return res.status(201).json(review);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReviewsByHostel = async (req, res) => {
  try {
    const reviews = await Review.find({ hostel: req.params.hostelId }).populate('user', 'name');
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
