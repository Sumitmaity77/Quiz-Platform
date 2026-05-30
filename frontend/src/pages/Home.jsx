import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="glass-card" style={{ textAlign: 'center', margin: 'auto' }}>
      <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Elevate Your Knowledge.
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
        Participate in secure, timed assessments with instant result generation and performance tracking. Join thousands of learners today.
      </p>
      <button className="btn-primary" onClick={() => navigate('/register')} style={{ fontSize: '1.2rem', padding: '1rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
        <FaRocket /> Start Your Journey
      </button>
    </div>
  );
}
