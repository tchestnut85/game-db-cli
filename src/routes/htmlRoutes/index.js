import * as path from 'node:path';
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../../../static/index.html'));
});

export default router;
