import React from 'react';
import { FaHeart, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer glass-card" style={{ 
      marginTop: 'auto', 
      borderRadius: '24px 24px 0 0',
      padding: '2rem',
      textAlign: 'center',
      borderBottom: 'none',
      width: '100%',
      maxWidth: '100%'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
        <a href="#" style={{ color: '#555', fontSize: '1.5rem' }}><FaGithub /></a>
        <a href="#" style={{ color: '#555', fontSize: '1.5rem' }}><FaTwitter /></a>
        <a href="#" style={{ color: '#555', fontSize: '1.5rem' }}><FaLinkedin /></a>
      </div>
      <p style={{ color: '#666', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
        Built with <FaHeart color="#FF416C" /> for the Internship Assignment
      </p>
    </footer>
  );
}
