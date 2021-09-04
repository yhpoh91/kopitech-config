module.exports = (sequelize, DataTypes) => {
  const ConfigurationAudit = sequelize.define('ConfigurationAudit', {
    id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
    },
    configurationId: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    clientId: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    action: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    key: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0,
    },
  }, {
    timestamps: true,
  });

  ConfigurationAudit.associate = (models) => {
    // associations can be defined here
    ConfigurationAudit.belongsTo(models.Configuration, { foreignKey: 'configurationId', as: 'configuration' });
  };

  return ConfigurationAudit;
};