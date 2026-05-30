import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

import {
  FaPlayCircle,
  FaCheckCircle,
  FaGlobe,
  FaChartLine,
  FaClock,
  FaTrophy,
  FaFire
} from 'react-icons/fa';

export default function Dashboard() {

  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState([]);
  const [stats, setStats] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const quizRes = await api.get('/quizzes');

        setQuizzes(quizRes.data);

        const statsRes = await api.get('/results/my-stats');

        setStats(statsRes.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };

    fetchData();

  }, []);

  return (

    <div
      className="glass-card"
      style={{
        margin: 'auto',
        width: '100%',
        maxWidth: '1200px'
      }}
    >

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}
      >

        <div>

          <h1
            style={{
              fontSize: '2.5rem',
              marginBottom: '10px'
            }}
          >
            Welcome Back 👋
          </h1>

          <p style={{ color: '#777' }}>
            Continue your learning journey.
          </p>

        </div>

        <div
          style={{
            background: 'linear-gradient(135deg,#667eea,#764ba2)',
            padding: '1rem 1.5rem',
            borderRadius: '18px',
            color: 'white',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}
        >

          <h3 style={{ marginBottom: '5px' }}>
            {stats?.averageScore || 0}%
          </h3>

          <p>Average Score</p>

        </div>

      </div>

      {/* STATS */}

      <div className="dashboard-grid">

        <div className="stat-card">

          <FaCheckCircle
            size={30}
            color="#667eea"
            style={{ marginBottom: '10px' }}
          />

          <h2>
            {stats?.quizzesTaken || 0}
          </h2>

          <p>Quizzes Taken</p>

        </div>

        <div className="stat-card">

          <FaChartLine
            size={30}
            color="#764ba2"
            style={{ marginBottom: '10px' }}
          />

          <h2>
            {stats?.averageScore || 0}%
          </h2>

          <p>Average Accuracy</p>

        </div>

        <div className="stat-card">

          <FaTrophy
            size={30}
            color="#FFD700"
            style={{ marginBottom: '10px' }}
          />

          <h2>
            #{stats?.rank || 0}
          </h2>

          <p>Global Rank</p>

        </div>

        <div className="stat-card">

          <FaFire
            size={30}
            color="#FF416C"
            style={{ marginBottom: '10px' }}
          />

          <h2>
            {stats?.streak || 0}
          </h2>

          <p>Day Streak</p>

        </div>

      </div>

      {/* QUIZZES */}

      <h2
        style={{
          marginTop: '3rem',
          marginBottom: '1.5rem'
        }}
      >
        Available Quizzes
      </h2>

      {loading ? (

        <p>Loading quizzes...</p>

      ) : (

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >

          {quizzes.length === 0 && (

            <p>No quizzes available.</p>

          )}

          {quizzes.map((quiz) => (

            <div
              key={quiz._id}
              style={{
                flex: '1 1 320px',
                background: 'rgba(255,255,255,0.55)',
                padding: '1.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: '0.3s'
              }}
            >

              <h3
                style={{
                  marginBottom: '10px'
                }}
              >
                {quiz.title}
              </h3>

              <p
                style={{
                  color: '#666',
                  marginBottom: '1rem'
                }}
              >
                {quiz.description || 'AI Generated Assessment'}
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '15px',
                  marginBottom: '1rem',
                  color: '#555',
                  fontSize: '0.9rem'
                }}
              >

                <span>
                  <FaClock /> {quiz.durationMinutes} mins
                </span>

                <span>
                  Negative: -{quiz.negativeMarkingWeight || 0}
                </span>

              </div>

              <button
                className="btn-primary"
                onClick={() => navigate(`/quiz/${quiz._id}`)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >

                <FaPlayCircle />

                Start Quiz

              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}