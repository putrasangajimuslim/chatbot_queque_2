// // db.js
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'mysql',
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'app_chat_bot',
// });

// module.exports = sequelize;
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chatbot_telegram'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});
