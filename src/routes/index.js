import express from 'express';
const router = express.Router();
import htmlRoutes from './htmlRoutes/index.js';
import dbRoutes from './dbRoutes/index.js';

router.use('/', htmlRoutes);
router.use('/', dbRoutes);

export default router;
