import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt, FaPlusCircle, FaSpinner } from 'react-icons/fa';
import api from '../api/api';

export default function AdminPanel() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [quizConfig, setQuizConfig] = useState({
    title: '',
    numQuestions: 10,
    durationMinutes: 30,
    negativeMarkingWeight: 0
  });

  const updateConfig = (field, value) => {
    setQuizConfig(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', quizConfig.title || `Quiz from ${file.name}`);
    formData.append('numQuestions', quizConfig.numQuestions);
    formData.append('durationMinutes', quizConfig.durationMinutes);
    formData.append('negativeMarkingWeight', quizConfig.negativeMarkingWeight);

    try {
      const res = await api.post('/upload-questions', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Questions uploaded and parsed by AI successfully!');
      navigate(`/quiz/${res.data.quizId}`);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || 'Failed to process file. Ensure backend, MongoDB, and Groq API are set.');
    } finally {
      setLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleGenerateClick = () => {
    if (!quizConfig.numQuestions || quizConfig.numQuestions < 1) {
      alert('Enter at least 1 question.');
      return;
    }

    navigate('/admin/generate', { state: quizConfig });
  };

  return (
    <div className="glass-card" style={{ margin: 'auto' }}>
      <h2>Admin Control Center</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Manage assessments, bulk upload questions, and use AI to generate quizzes.</p>

      <div className="config-panel">
        <div className="form-group">
          <label>Quiz Title</label>
          <input type="text" className="form-control" placeholder="JavaScript Fundamentals" value={quizConfig.title} onChange={e => updateConfig('title', e.target.value)} />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>No. of Questions</label>
            <input type="number" min="1" className="form-control" value={quizConfig.numQuestions} onChange={e => updateConfig('numQuestions', e.target.value)} />
          </div>
          <div className="form-group">
            <label>Duration (minutes)</label>
            <input type="number" min="1" className="form-control" value={quizConfig.durationMinutes} onChange={e => updateConfig('durationMinutes', e.target.value)} />
          </div>
          <div className="form-group">
            <label>Negative Marking</label>
            <input type="number" min="0" step="0.25" className="form-control" value={quizConfig.negativeMarkingWeight} onChange={e => updateConfig('negativeMarkingWeight', e.target.value)} />
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        
        {/* File Upload Section */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaCloudUploadAlt /> Bulk Upload with AI Parsing</h3>
          <div 
            style={{ background: 'rgba(255,255,255,0.5)', padding: '2rem', borderRadius: '16px', border: '2px dashed rgba(118, 75, 162, 0.4)', textAlign: 'center', marginTop: '1rem', cursor: 'pointer' }}
            onClick={() => fileInputRef.current?.click()}
          >
            <p style={{ marginBottom: '1rem', color: '#555' }}>Click to upload PDF, TXT, CSV, or JSON file</p>
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              onChange={handleFileUpload} 
              accept=".pdf,.txt,.csv,.json"
            />
            <button className="btn-secondary" disabled={loading}>
              {loading ? <FaSpinner className="fa-spin" /> : 'Browse Files'}
            </button>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#777', marginTop: '0.5rem' }}>AI will scan the file and create a MongoDB-backed quiz using the settings above.</p>
        </div>

        {/* Create Quiz Flow Section */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaPlusCircle /> AI Quiz Generator</h3>
          <p style={{ color: '#555', marginTop: '1rem', marginBottom: '1.5rem' }}>
            Want to generate a quiz from scratch using AI? Use our prompt generator to configure your topics and sections.
          </p>
          <button className="btn-primary" style={{ width: '100%', padding: '1rem' }} onClick={handleGenerateClick}>
            Generate Quiz
          </button>
        </div>

      </div>
    </div>
  );
}
