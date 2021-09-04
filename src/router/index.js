const express = require('express');

const configRouter = require('./configuration');

const { L } = require('../services/logger')('Global Router');

const router = express.Router({ mergeParams: true });

router.get('/', (_, res) => res.send('Server is online'));
router.use('/config', configRouter);


module.exports = router;
