const router = require('express').Router();
const path = require('path');
const games = require('../../utils/db/db.json');

router.get('/db/', (req, res) => {
	res.json(games);
});

module.exports = router;
