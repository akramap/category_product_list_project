import express from 'express';
import categoryRoutes from './src/app/Categories/route';

const router = express.Router();

// mount sample routes at /sample
router.use('/category', categoryRoutes);


export default router;


