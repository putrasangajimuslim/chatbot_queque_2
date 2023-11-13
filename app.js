const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');
const app = express();
const server = http.createServer(app);
const db = require('./db'); 

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
    console.log('Klien terhubung ke WebSocket.');

    var botToken = '6628164620:AAE9iA2aDBpzIgl2LpDZG3hBh-IL9oGq8mI'
  
    const fetchDataFromAPI = async () => {
        try {
            const response = await axios.get(`https://api.telegram.org/bot${botToken}/getUpdates`);
            const data = response.data;

            const result = data['result'];

            result.forEach(item => {
                console.log(item);
            });
            
            // await db.promise().query('INSERT INTO data_api (data) VALUES (?)', [JSON.stringify(data)]);

            // Emit data ke klien yang terhubung
            socket.emit('data', data);
        } catch (error) {
            console.error('Error fetching data from API:', error);
        }
    };
    
     // Panggil fungsi untuk mengambil data dari API pada interval tertentu
    const interval = setInterval(() => {
        fetchDataFromAPI();
    }, 4000);
  
    socket.on('disconnect', () => {
      console.log('Klien terputus dari WebSocket.');
    });
  });

// Mulai server Express
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
