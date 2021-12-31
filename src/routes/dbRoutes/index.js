import * as path from 'node:path';
import express from 'express';
const router = express.Router();
import games from '../../../db/db.json' assert { type: 'json' };

router.get('/db/', (req, res) => {
	res.json(games);
});

export default router;
