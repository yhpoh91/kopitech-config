const joi = require('joi');

module.exports = {
  getConfigs: {
    query: {},
    params: {},
    body: {},
  },
  setConfig: {
    query: {},
    params: {},
    body: {
      key: joi.string().min(1).required(),
      value: joi.string().required(),
    },
  },
  clearConfig: {
    query: {},
    params: {},
    body: {
      key: joi.string().min(1).required(),
    },
  },
};
