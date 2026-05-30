const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (Stubs for now, will implement logic in next steps)
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.post('/api/auth/register', (req, res) => {
  res.json({ message: "Registration successful" });
});

app.post('/api/auth/login', (req, res) => {
  res.json({ token: "fake-jwt-token", role: "USER" });
});

app.get('/api/quizzes', (req, res) => {
  res.json([{ _id: "1", title: "React Basics", durationMinutes: 10 }]);
});

app.post('/api/quizzes', (req, res) => {
  res.json({ message: "Quiz created" });
});

// Database connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/quiz-platform';

// For this stub, we skip actual mongo connection if we want to run locally without mongo
// mongoose.connect(MONGO_URI).then(() => console.log("MongoDB connected"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
