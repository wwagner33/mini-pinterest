// src/config/database.js
const { Sequelize } = require('sequelize');
const path = require('path');

// Cria (ou usa) o arquivo database.sqlite na raiz do projeto
const storagePath = path.resolve(__dirname, '../../database.sqlite');

const db = new Sequelize({
  dialect: 'sqlite',
  storage: storagePath,
  logging: false, // desativa logs SQL no console
});

module.exports = db;
