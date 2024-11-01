const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Conecting to MongoDB'))
  .catch(error => console.error('Error trying to connect MongoDB:', error));

// Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Server running');
});





app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
