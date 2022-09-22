'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('dogs', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sex: {
      type: DataTypes.ENUM,
      values: ['male', 'female', 'unknown'],
      allowNull: true,
    },
  });
};
