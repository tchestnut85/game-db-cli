import express from 'express';
const router = express.Router();
import { readFile } from 'fs/promises';

const gamesDbData = JSON.parse(
	await readFile(new URL('../../../db/db.json', import.meta.url))
);

router.get('/db/', (req, res) => {
	res.json(gamesDbData);
});

export default router;
