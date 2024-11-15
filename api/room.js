const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// API route for rooms
app.get('/api/rooms', (req, res) => {
  const rooms = [
    { id: 101, status: 'booked', cleaning: false },
    { id: 102, status: 'available', cleaning: true },
    { id: 103, status: 'booked', cleaning: false },
  ];
  res.json(rooms);
});

// Catch-all route for unknown endpoints
app.use((req, res) => {
  res.status(404).send({ error: 'Not Found' });
});

module.exports = app;
