const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON (optional but recommended)
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

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
