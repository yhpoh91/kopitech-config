const { L } = require('../../services/logger')('Configuration Router');
const configService = require('../../services/config');

const getConfigs = async (req, res, next) => {
  try {
    const { clientId } = req.clientId;
    const configs = await configService.getConfig(clientId);
    res.status(200).json(configs);
  } catch (error) {
    next(error);
  }
};

const setConfig = async (req, res, next) => {
  try {
    const { clientId } = req.clientId;
    const { key, value } = req.body;
    const config = await configService.setConfig(clientId, key, value);
    res.status(200).json(config);
  } catch (error) {
    next(error);
  }
};

const clearConfig = async (req, res, next) => {
  try {
    const { clientId } = req.clientId;
    const { key } = req.body;
    await configService.clearConfig(clientId, key);
    res.status(200).send('ok');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getConfigs,

  setConfig,
  clearConfig,
};
