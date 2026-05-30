import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaHome, FaTachometerAlt, FaTrophy, FaUserShield, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaGraduationCap size={28} color="#FF416C" />
        <h1 className="text-gradient" style={{ margin: 0, fontSize: '1.8rem' }}>QuizMaster AI</h1>
      </Link>
      <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaHome /> Home</Link>
        <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaTachometerAlt /> Dashboard</Link>
        <Link to="/leaderboard" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaTrophy /> Leaderboard</Link>
        <Link to="/admin" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaUserShield /> Admin</Link>
        
        <div style={{ display: 'flex', gap: '10px', marginLeft: '1rem' }}>
          <Link to="/login" className="btn-secondary" style={{ padding: '0.4rem 1.2rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <FaSignInAlt /> Login
          </Link>
          <Link to="/register" className="btn-primary" style={{ padding: '0.4rem 1.2rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
            <FaUserPlus /> Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
