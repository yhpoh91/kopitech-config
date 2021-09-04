const express = require('express');
const validate = require('express-validation');
const validator = require('./validation');
const controller = require('./controller');

const router = express.Router({ mergeParams: true });

router.route('/')
  .get(
    validate(validator.getConfigs),
    controller.getConfigs,
  )
  .post(
    validate(validator.setConfig),
    controller.setConfig,
  )
  .delete(
    validate(validator.clearConfig),
    controller.clearConfig,
  );

module.exports = router;
