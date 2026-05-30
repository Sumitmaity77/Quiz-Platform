import React, { useEffect, useState } from 'react';

import api from '../api/api';

import {
  FaMedal,
  FaTrophy,
  FaCrown
} from 'react-icons/fa';

export default function Leaderboard() {

  const [leaders, setLeaders] = useState([]);

  useEffect(() => {

    const fetchLeaderboard = async () => {

      try {

        const res = await api.get('/results/leaderboard');

        setLeaders(res.data);

      } catch (error) {

        console.error(error);
      }
    };

    fetchLeaderboard();

  }, []);

  return (

    <div
      className="glass-card"
      style={{
        margin: 'auto',
        maxWidth: '1100px'
      }}
    >

      <h1
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px'
        }}
      >

        <FaTrophy color="#FFD700" />

        Global Leaderboard

      </h1>

      {/* TOP 3 */}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}
      >

        {leaders.slice(0, 3).map((user, index) => (

          <div
            key={user._id}
            style={{
              background: 'rgba(255,255,255,0.55)',
              padding: '1.5rem',
              borderRadius: '20px',
              width: '220px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >

            <div
              style={{
                fontSize: '2rem',
                marginBottom: '10px'
              }}
            >

              {index === 0 && <FaCrown color="#FFD700" />}
              {index === 1 && <FaMedal color="#C0C0C0" />}
              {index === 2 && <FaMedal color="#CD7F32" />}

            </div>

            <h3>{user.name}</h3>

            <h2
              style={{
                color: '#667eea'
              }}
            >
              {user.score}
            </h2>

            <p>
              Accuracy: {user.accuracy}%
            </p>

          </div>

        ))}

      </div>

      {/* TABLE */}

      <div style={{ overflowX: 'auto' }}>

        <table className="leaderboard-table">

          <thead>

            <tr>

              <th>Rank</th>

              <th>Name</th>

              <th>Score</th>

              <th>Accuracy</th>

            </tr>

          </thead>

          <tbody>

            {leaders.map((user, index) => (

              <tr key={user._id}>

                <td>
                  #{index + 1}
                </td>

                <td>
                  {user.name}
                </td>

                <td>
                  {user.score}
                </td>

                <td>
                  {user.accuracy}%
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}