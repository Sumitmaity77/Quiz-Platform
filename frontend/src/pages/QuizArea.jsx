import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClock, FaArrowRight } from 'react-icons/fa';

const MOCK_QUESTIONS = [
  { id: 1, text: 'What is the virtual DOM in React?', options: ['A direct copy of the actual DOM', 'A lightweight JavaScript representation of the DOM', 'A new HTML standard', 'A CSS framework'], correct: 1 },
  { id: 2, text: 'Which hook is used for side effects in functional components?', options: ['useState', 'useReducer', 'useEffect', 'useMemo'], correct: 2 },
  { id: 3, text: 'What is JSX?', options: ['A syntax extension for JavaScript', 'A new programming language', 'A database query language', 'A styling preprocessor'], correct: 0 },
];

export default function QuizArea() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Time's up! Auto-submitting your quiz.");
      navigate('/leaderboard');
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const handleNext = () => {
    if (currentQ < MOCK_QUESTIONS.length - 1) {
      setCurrentQ(prev => prev + 1);
      setSelected(null);
    } else {
      navigate('/leaderboard');
    }
  };

  const q = MOCK_QUESTIONS[currentQ];
  const progressPercent = (timeLeft / 60) * 100;

  return (
    <div className="glass-card" style={{ margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
        <span style={{ fontWeight: 600, color: '#555' }}>Question {currentQ + 1} of {MOCK_QUESTIONS.length}</span>
        <span style={{ fontWeight: 800, color: '#FF416C', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <FaClock /> 00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
        </span>
      </div>
      
      <div className="timer-bar">
        <div className="timer-fill" style={{ width: `${progressPercent}%` }}></div>
      </div>

      <div className="question-text">{q.text}</div>
      
      <div className="options-grid">
        {q.options.map((opt, i) => (
          <button 
            key={i} 
            className={`option-btn ${selected === i ? 'selected' : ''}`}
            onClick={() => setSelected(i)}
          >
            {opt}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
        <button className="btn-primary" onClick={handleNext} disabled={selected === null} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {currentQ === MOCK_QUESTIONS.length - 1 ? 'Submit Assessment' : 'Next Question'} <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
