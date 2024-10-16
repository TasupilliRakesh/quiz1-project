const express = require('express');
const cors = require('cors');
const app = express();
const quizRoutes = require('./routes/quizRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', quizRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));
