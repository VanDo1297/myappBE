const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/token', require('./getAccessToken'));

module.exports = router;
