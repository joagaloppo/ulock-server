const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const linkRouter = require('./link');
router.use('/auth', authRouter);
router.use('/link', linkRouter);

module.exports = router;
