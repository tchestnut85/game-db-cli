const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const dbRoutes = require('./dbRoutes');

router.use('/', htmlRoutes);
router.use('/', dbRoutes);

module.exports = router;
