import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/api';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Connect to backend (using stub route we created earlier)
      const res = await api.post('/auth/login', formData);
      console.log('Login Success:', res.data);
      // Would store token in localStorage here: localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      alert('Failed to login. Ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" className="form-control" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="••••••••" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required />
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#666' }}>
        Don't have an account? <Link to="/register" style={{ color: '#764ba2', fontWeight: '600' }}>Register here</Link>
      </p>
    </div>
  );
}
