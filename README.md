#  QuizMaster - AI Powered Online Quiz & Assessment Platform

QuizMaster is a modern AI-powered online quiz and assessment platform designed for conducting secure, interactive, and timed MCQ-based examinations. The platform automates quiz generation, participant evaluation, leaderboard ranking, and analytics with a premium responsive UI experience.

---

#  Features

##  Authentication & Security
- Secure JWT-based authentication
- Role-based access control (User / Admin)
- Protected quiz submission routes
- Password encryption using Bcrypt

---

##  AI Quiz Generation
- Generate quizzes dynamically using AI
- Upload:
  - PDF
  - TXT
  - CSV
  - JSON
- AI automatically creates MCQs
- Smart section-based question generation

---

##  Quiz System
- Timed assessments
- Auto-submit on timer end
- Previous / Next navigation
- Review Answers page before final submission
- Negative marking support
- Real-time score calculation
- Responsive quiz interface

---

##  Dashboard & Analytics
- Real participant statistics
- Dynamic average accuracy calculation
- Quiz attempt tracking
- User ranking system
- Performance analytics

---

##  Leaderboard
- Live leaderboard updates
- Real user rankings
- Dynamic accuracy percentages
- Score tracking

---

##  Premium UI/UX
- Fully responsive design
- Glassmorphism interface
- Animated gradients
- Mobile hamburger navigation
- Smooth transitions & animations
- Modern professional dashboard

---

#  Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- React Icons
- Vite

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

## AI Integration
- Groq API
- Llama Models

---

#  Project Structure

```text
QuizPlatform/
│
├── backend/
│   │
│   ├── models/
│   │   ├── Question.js
│   │   ├── Quiz.js
│   │   ├── Result.js
│   │   └── User.js
│   │
│   ├── uploads/
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── api/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── AdminPrompt.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── QuizArea.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└── README.md
```

---

#  Installation Guide

##  Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GROQ_API_KEY=your_groq_api_key
```

Run backend server:

```bash
npm start
```

OR:

```bash
npm run dev
```

---

##  Frontend Setup

Open a new terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

#  Core Functionalities

##  User Features
- Register/Login
- Participate in quizzes
- View leaderboard
- Track dashboard statistics
- Review answers before submission

---

##  Admin Features
- Generate AI quizzes
- Upload question files
- Manage quizzes
- Track performance analytics

---

#  Responsive Design

The application is fully optimized for:
- Desktop
- Tablet
- Mobile devices

Features include:
- Hamburger mobile menu
- Responsive cards
- Adaptive quiz layout
- Mobile-friendly leaderboard

---

#  Security Features
- JWT authentication
- Protected APIs
- Encrypted passwords
- Secure quiz submission

---

#  Future Improvements
- Dark/Light theme toggle
- Email verification
- Certificate generation
- Real-time multiplayer quizzes
- AI difficulty adaptation
- Advanced analytics dashboard

---

#  Developed By

**Sumit Maity**

Built as an Internship Assignment Project using the MERN Stack & AI Integration.

---

#  License

This project is developed for educational and internship purposes.
