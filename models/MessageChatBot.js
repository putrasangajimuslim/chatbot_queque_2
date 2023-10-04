// models/MessageChatBot.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const MessageChatBot = sequelize.define('MessageChatBot', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_chat_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  msg: {
    type: DataTypes.TEXT, // Menggunakan TEXT untuk msg yang mungkin panjang
    allowNull: true,
  },
  send_time_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'message_chat_bot', // Nama tabel yang sesuai dengan yang ada di database
  timestamps: true, // Jika Anda tidak menggunakan kolom timestamp "createdAt" dan "updatedAt"
});

module.exports = MessageChatBot;
