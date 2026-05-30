import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { FaPlayCircle, FaCheckCircle, FaGlobe, FaChartLine } from 'react-icons/fa';

export default function Dashboard() {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await api.get('/quizzes');
        setQuizzes(res.data);
      } catch (error) {
        console.error('Failed to fetch quizzes:', error);
        // Fallback mock data if backend isn't ready
        setQuizzes([{ _id: "mock1", title: "Advanced React Concepts", durationMinutes: 15, negativeMarkingWeight: 0.25 }]);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div className="glass-card" style={{ margin: 'auto', width: '100%', maxWidth: '1000px' }}>
      <h2>Student Dashboard</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Welcome back! Here are your available assessments.</p>
      
      {loading ? (
        <p>Loading quizzes...</p>
      ) : (
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {quizzes.map(quiz => (
            <div key={quiz._id} style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.5)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.8)' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{quiz.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1.5rem' }}>
                Duration: {quiz.durationMinutes} mins • Negative Marking: -{quiz.negativeMarkingWeight || 0}
              </p>
              <button className="btn-primary" onClick={() => navigate('/quiz')} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <FaPlayCircle /> Start Quiz
              </button>
            </div>
          ))}
        </div>
      )}

      <h3 style={{ marginTop: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaChartLine /> Your Statistics
      </h3>
      <div className="dashboard-grid">
        <div className="stat-card">
          <FaCheckCircle size={30} color="#667eea" style={{ margin: '0 auto 10px auto', display: 'block' }} />
          <h3>12</h3>
          <p>Quizzes Taken</p>
        </div>
        <div className="stat-card">
          <FaChartLine size={30} color="#764ba2" style={{ margin: '0 auto 10px auto', display: 'block' }} />
          <h3>85%</h3>
          <p>Average Score</p>
        </div>
        <div className="stat-card">
          <FaGlobe size={30} color="#FF416C" style={{ margin: '0 auto 10px auto', display: 'block' }} />
          <h3>Top 5%</h3>
          <p>Global Rank</p>
        </div>
      </div>
    </div>
  );
}
