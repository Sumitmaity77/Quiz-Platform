import React from 'react';
import { FaCloudUploadAlt, FaPlusCircle } from 'react-icons/fa';

export default function AdminPanel() {
  return (
    <div className="glass-card" style={{ margin: 'auto' }}>
      <h2>Admin Control Center</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Manage assessments, bulk upload questions, and analyze performance.</p>
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaCloudUploadAlt /> Bulk Upload Questions</h3>
          <div style={{ background: 'rgba(255,255,255,0.5)', padding: '2rem', borderRadius: '16px', border: '2px dashed rgba(118, 75, 162, 0.4)', textAlign: 'center', marginTop: '1rem' }}>
            <p style={{ marginBottom: '1rem', color: '#555' }}>Drag & drop your CSV or JSON file here</p>
            <button className="btn-secondary">Browse Files</button>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaPlusCircle /> Create New Quiz</h3>
          <div style={{ marginTop: '1rem' }}>
            <div className="form-group">
              <label>Quiz Title</label>
              <input type="text" className="form-control" placeholder="e.g. Midterm Evaluation" />
            </div>
            <div className="form-group" style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label>Duration (mins)</label>
                <input type="number" className="form-control" placeholder="30" />
              </div>
              <div style={{ flex: 1 }}>
                <label>Negative Mark</label>
                <input type="number" className="form-control" placeholder="-0.25" step="0.01" />
              </div>
            </div>
            <button className="btn-primary" style={{ width: '100%' }}>Generate Quiz Link</button>
          </div>
        </div>
      </div>
    </div>
  );
}
