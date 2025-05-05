const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Image = db.define('Image', {
  title:  { type: DataTypes.STRING, allowNull: false },
  url:    { type: DataTypes.STRING, allowNull: false },
  desc:   { type: DataTypes.TEXT    , allowNull: true  },
}, {
  tableName: 'images'
});

module.exports = Image;
