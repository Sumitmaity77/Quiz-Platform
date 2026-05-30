# Online Quiz & Assessment Platform 🎓

A comprehensive, scalable digital solution designed to conduct interactive, timed MCQ-based assessments efficiently. This platform automates the assessment process, offering instant result generation, performance tracking, and a secure environment for educational institutions and organizations.

## 🌟 Key Features

* **Secure User Authentication**: Role-based access for Participants and Administrators.
* **Timed Quiz Functionality**: Client and server-side timer validation with auto-submit capabilities.
* **Dynamic Scoring**: Automatic score calculation featuring **negative marking**.
* **Global Leaderboard**: Instant result generation and ranking system to track participant performance.
* **Admin Dashboard**: 
  * Bulk question uploads via CSV/JSON.
  * Quiz management (duration, negative marking weights).
  * Analytics dashboard to evaluate overall participant performance.
* **Premium UI/UX**: Built entirely without external CSS frameworks. Features a custom glassmorphism design, vibrant gradients, responsive layouts, and smooth micro-animations.

## 🛠️ Technology Stack

* **Frontend**: React.js (Bootstrapped with Vite)
* **Styling**: Vanilla CSS (Custom Glassmorphism & Animations), React-Icons
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose ORM)
* **Authentication**: JSON Web Tokens (JWT), Bcrypt

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* MongoDB (Local installation or MongoDB Atlas URI)

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   * Create a `.env` file in the `backend` folder.
   * Add `PORT=5000` and your `MONGO_URI`.
4. Start the backend server:
   ```bash
   npm start
   # Or for development: npm run dev
   ```

### 2. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

---

## 📂 Project Structure

```text
QuizPlatform/
├── backend/
│   ├── models/          # Mongoose Schemas (User, Quiz, Question, Result)
│   ├── server.js        # Express application entry point
│   └── package.json
└── frontend/
    ├── src/
    │   ├── api/         # Axios configuration
    │   ├── components/  # Reusable UI components (Navbar, Footer)
    │   ├── pages/       # Route Views (Home, Login, Dashboard, etc.)
    │   ├── App.jsx      # Main application router
    │   └── App.css      # Core premium styling
    └── package.json
```

## 📜 License
This project was built as an Internship Assignment. All rights reserved.
