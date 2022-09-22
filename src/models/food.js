'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    ethnicity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    spiciness: {
      type: DataTypes.ENUM,
      values: ['hot', 'medium', 'mild', 'none'],
      allowNull: true,
    },
  });
};
