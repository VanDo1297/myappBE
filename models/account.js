'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const account = sequelize.define(
    'account',
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      accountId: DataTypes.STRING,
      displayName: DataTypes.STRING,
      emailAddress: DataTypes.STRING,
      // eslint-disable-next-line camelcase
      employee_ref: DataTypes.STRING,
      avatarUrl: DataTypes.STRING
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      freezeTableName: true,
      tableName: 'account'
    }
  );

  return account;
};
