import React from 'react';
import { FaMedal } from 'react-icons/fa';

export default function Leaderboard() {
  return (
    <div className="glass-card" style={{ margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <FaMedal color="#FFD700" /> Global Leaderboard
      </h2>
      <div style={{ overflowX: 'auto' }}>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Participant Name</th>
              <th>Score</th>
              <th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong style={{ color: '#FFD700', fontSize: '1.2rem' }}>#1</strong></td><td>Alice Smith</td><td>98/100</td><td>98%</td></tr>
            <tr><td><strong style={{ color: '#C0C0C0', fontSize: '1.2rem' }}>#2</strong></td><td>John Doe (You)</td><td>85/100</td><td>85%</td></tr>
            <tr><td><strong style={{ color: '#CD7F32', fontSize: '1.2rem' }}>#3</strong></td><td>Bob Johnson</td><td>82/100</td><td>82%</td></tr>
            <tr><td><strong style={{ color: '#777', fontSize: '1.2rem' }}>#4</strong></td><td>Emma Wilson</td><td>75/100</td><td>75%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
