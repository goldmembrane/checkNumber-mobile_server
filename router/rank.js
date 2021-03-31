const express = require('express');
const router = express.Router();

const { RankController } = require('../controllers');

router.get('/get', RankController.get);
router.post('/post', RankController.post);

module.exports = router;