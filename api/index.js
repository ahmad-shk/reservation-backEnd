require('dotenv').config();
const express = require('express');
const cors = require('cors');
const reservationRoutes = require('../routes/reservationRoutes'); // Route file import karein

const app = express();

app.use(cors());
app.use(express.json());

// Routes ko register karein
app.use('/api', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));