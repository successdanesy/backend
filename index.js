const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample endpoint to dynamically update room attributes
app.get('/api/rooms', (req, res) => {
  const rooms = [
    { id: 101, status: 'booked', cleaning: false },
    { id: 102, status: 'available', cleaning: true },
    { id: 103, status: 'booked', cleaning: false },
  ];
  res.json(rooms);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
