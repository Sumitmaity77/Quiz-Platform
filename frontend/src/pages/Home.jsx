import React from 'react';

import { useNavigate } from 'react-router-dom';

import {

  FaRocket,
  FaBrain,
  FaClock,
  FaChartLine,
  FaShieldAlt,
  FaUsers

} from 'react-icons/fa';

export default function Home() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        width: '100%'
      }}
    >

      {/* HERO SECTION */}

      <div

        className="glass-card"

        style={{

          textAlign: 'center',

          margin: 'auto',

          overflow: 'hidden',

          position: 'relative'
        }}
      >

        {/* GLOW EFFECT */}

        <div
          style={{

            position: 'absolute',

            width: '300px',

            height: '300px',

            background:
              'rgba(118,75,162,0.18)',

            borderRadius: '50%',

            top: '-100px',

            right: '-100px',

            filter: 'blur(60px)'
          }}
        />

        <h1

          style={{

            fontSize: '4rem',

            marginBottom: '1rem',

            background:
              'linear-gradient(to right,#667eea,#764ba2,#FF416C)',

            WebkitBackgroundClip: 'text',

            WebkitTextFillColor: 'transparent',

            fontWeight: '900',

            lineHeight: '1.1'
          }}
        >

          Elevate Your Knowledge 🚀

        </h1>

        <p

          style={{

            fontSize: '1.2rem',

            color: '#555',

            marginBottom: '2.5rem',

            maxWidth: '700px',

            marginInline: 'auto',

            lineHeight: '1.7'
          }}
        >

          Participate in AI-powered secure assessments with
          real-time analytics, leaderboard rankings, instant
          results, and professional quiz experiences.

        </p>

        {/* BUTTONS */}

        <div

          style={{

            display: 'flex',

            justifyContent: 'center',

            gap: '1rem',

            flexWrap: 'wrap'
          }}
        >

          <button

            className="btn-primary"

            onClick={() =>
              navigate('/register')
            }

            style={{

              fontSize: '1.1rem',

              padding: '1rem 2.5rem',

              display: 'flex',

              alignItems: 'center',

              gap: '10px'
            }}
          >

            <FaRocket />

            Start Your Journey

          </button>

          <button

            className="btn-secondary"

            onClick={() =>
              navigate('/leaderboard')
            }

            style={{

              fontSize: '1.1rem',

              padding: '1rem 2.5rem'
            }}
          >

            View Rankings

          </button>

        </div>

        {/* STATS */}

        <div

          style={{

            display: 'grid',

            gridTemplateColumns:
              'repeat(auto-fit,minmax(180px,1fr))',

            gap: '1.5rem',

            marginTop: '4rem'
          }}
        >

          <div className="stat-card">

            <FaUsers
              size={32}
              color="#667eea"
              style={{
                marginBottom: '10px'
              }}
            />

            <h2>10K+</h2>

            <p>Active Students</p>

          </div>

          <div className="stat-card">

            <FaBrain
              size={32}
              color="#764ba2"
              style={{
                marginBottom: '10px'
              }}
            />

            <h2>AI Powered</h2>

            <p>Smart Quiz Generation</p>

          </div>

          <div className="stat-card">

            <FaClock
              size={32}
              color="#FF416C"
              style={{
                marginBottom: '10px'
              }}
            />

            <h2>24/7</h2>

            <p>Instant Assessments</p>

          </div>

          <div className="stat-card">

            <FaChartLine
              size={32}
              color="#23a6d5"
              style={{
                marginBottom: '10px'
              }}
            />

            <h2>Real-Time</h2>

            <p>Performance Analytics</p>

          </div>

        </div>

      </div>

      {/* FEATURES */}

      <div

        style={{

          marginTop: '3rem',

          display: 'grid',

          gridTemplateColumns:
            'repeat(auto-fit,minmax(260px,1fr))',

          gap: '2rem'
        }}
      >

        {/* FEATURE 1 */}

        <div className="glass-card">

          <FaShieldAlt
            size={40}
            color="#764ba2"
            style={{
              marginBottom: '1rem'
            }}
          />

          <h2
            style={{
              marginBottom: '1rem'
            }}
          >

            Secure Assessments

          </h2>

          <p
            style={{
              color: '#666',
              lineHeight: '1.7'
            }}
          >

            Timed quiz sessions with protected authentication,
            secure submissions, and auto-save functionality.

          </p>

        </div>

        {/* FEATURE 2 */}

        <div className="glass-card">

          <FaBrain
            size={40}
            color="#FF416C"
            style={{
              marginBottom: '1rem'
            }}
          />

          <h2
            style={{
              marginBottom: '1rem'
            }}
          >

            AI Question Generator

          </h2>

          <p
            style={{
              color: '#666',
              lineHeight: '1.7'
            }}
          >

            Generate high-quality MCQs instantly using AI
            powered by Groq & Llama models.

          </p>

        </div>

        {/* FEATURE 3 */}

        <div className="glass-card">

          <FaChartLine
            size={40}
            color="#23a6d5"
            style={{
              marginBottom: '1rem'
            }}
          />

          <h2
            style={{
              marginBottom: '1rem'
            }}
          >

            Smart Analytics

          </h2>

          <p
            style={{
              color: '#666',
              lineHeight: '1.7'
            }}
          >

            Monitor scores, rankings, average performance,
            and quiz insights in real time.

          </p>

        </div>

      </div>

    </div>
  );
}