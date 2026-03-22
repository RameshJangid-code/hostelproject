import Hostel from '../models/Hostel.js';

const buildFilters = (query) => {
  const filters = {};

  if (query.area) {
    filters.area = new RegExp(query.area, 'i');
  }

  if (query.genderType) {
    filters.genderType = query.genderType;
  }

  if (query.acType) {
    filters.acType = query.acType;
  }

  if (query.environment) {
    filters.environmentTags = { $in: [query.environment] };
  }

  if (query.seatStatus) {
    filters.seatStatus = query.seatStatus;
  }

  if (query.minRating) {
    filters.averageRating = { ...filters.averageRating, $gte: Number(query.minRating) };
  }

  if (query.minRent || query.maxRent) {
    filters.rent = {};

    if (query.minRent) {
      filters.rent.$gte = Number(query.minRent);
    }

    if (query.maxRent) {
      filters.rent.$lte = Number(query.maxRent);
    }
  }

  return filters;
};

export const addHostel = async (req, res) => {
  try {
    const hostelData = {
      ...req.body,
      owner: req.user._id
    };

    const hostel = await Hostel.create(hostelData);
    return res.status(201).json(hostel);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getHostels = async (req, res) => {
  try {
    const filters = buildFilters(req.query);
    const hostels = await Hostel.find(filters).sort({ createdAt: -1 }).populate('owner', 'name mobile');
    return res.status(200).json(hostels);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getHostelById = async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id).populate('owner', 'name mobile');

    if (!hostel) {
      return res.status(404).json({ message: 'Hostel not found' });
    }

    return res.status(200).json(hostel);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
