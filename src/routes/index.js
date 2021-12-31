import express from 'express';
import htmlRoutes from './htmlRoutes/index.js';
import dbRoutes from './dbRoutes/index.js';

const router = express.Router();

router.use('/', htmlRoutes);
router.use('/', dbRoutes);

export default router;
