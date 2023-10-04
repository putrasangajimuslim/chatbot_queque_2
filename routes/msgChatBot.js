const express = require('express');
const router = express.Router();
const axios = require('axios');
const chatBots = require('../models/MessageChatBot');

router.get('/fetch-and-save', async (req, res) => {
    try {
      // Ambil data dari API
      const response = await axios.get('URL_API_ANDA');
      const data = response.data;
  
      // Simpan data ke database
      await chatBots.bulkCreate(data);
  
      res.json({ message: 'Data telah diambil dan disimpan ke database.' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Terjadi kesalahan saat mengambil dan menyimpan data.' });
    }
  });
  
  module.exports = router;