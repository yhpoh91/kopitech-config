module.exports = (sequelize, DataTypes) => {
  const Configuration = sequelize.define('Configuration', {
    id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
    },
    clientId: {
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

  Configuration.associate = (models) => {
    // associations can be defined here
    Configuration.hasMany(models.ConfigurationAudit, { foreignKey: 'configurationId', as: 'audits' });
  };

  return Configuration;
};