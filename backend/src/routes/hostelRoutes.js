import express from 'express';
import { addHostel, getHostelById, getHostels } from '../controllers/hostelController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getHostels);
router.get('/:id', getHostelById);
router.post('/', protect, authorize('owner', 'admin'), addHostel);

export default router;
