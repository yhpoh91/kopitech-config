const { v4: uuid } = require('uuid');
const { Op } = require('sequelize');
const { Configuration } = require('../database');
const { L } = require('../logger')('Configuration Service');

const mapConfig = (rawConfig) => {
  if (rawConfig == null) {
    return null;
  }

  const config = rawConfig.dataValues;
  return config;
}

const getConfig = async (clientId) => {
  try {
    const query = {
      where: {
        clientId: ['base'],
        deleted: 0,
      },
    };

    if (clientId != null) {
      query.where.clientId.push(clientId);
    }

    const rawConfigs = await Configuration.findAll(query);
    const mappedConfigs = rawConfigs.map(mapConfig);
    return Promise.resolve(mappedConfigs);
  } catch (error) {
    return Promise.reject(error);
  }
};

const setConfig = async (clientId, key, value) => {
  try {
    // Delete existing
    await deleteConfig(clientId, key);

    // Create new
    const config = await createConfig(clientId, key, value);

    return Promise.resolve(config);
  } catch (error) {
    return Promise.reject(error);
  }
};

const clearConfig = async (clientId, key) => {
  try {
    // Delete existing
    await deleteConfig(clientId, key);

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}

const createConfig = async (clientId, key, value) => {
  try {
    const rawConfig = await Configuration.create({
      id: uuid(),
      clientId,
      key,
      value,
      deleted: 0,
    });

    const mappedConfig = mapConfig(rawConfig)
    return Promise.resolve(mappedConfig);
  } catch (error) {
    return Promise.reject(error);
  }
}

const deleteConfig = async (clientId, key) => {
  try {
    const query = {
      where: { clientId, key, deleted: 0 },
      returning: true,
    };

    const changes = {
      deleted: Math.floor(new Date().getTime() / 1000),
    }

    const updateResult = await Configuration.update(changes, query);
    return Promise.resolve(updateResult);
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  getConfig,

  setConfig,
  clearConfig,
};
