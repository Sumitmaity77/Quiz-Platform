import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import QuizArea from './pages/QuizArea';
import Leaderboard from './pages/Leaderboard';
import AdminPanel from './pages/AdminPanel';

import AdminPrompt from './pages/AdminPrompt';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz/:quizId" element={<QuizArea />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/generate" element={<AdminPrompt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
