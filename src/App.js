import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import necessary components
import './App.css'; // Assuming you have styles for your app
import Registration from './registration'; // Import Registration component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/registration">Register</Link> {/* Link to registration page */}
          </nav>
        </header>

        {/* Main Content with Centered Image */}
        <main>
          <div className="image-container">
            <img
              className="random-image"
              alt="DevOps"
            />
          </div>
        </main>

        {/* Footer */}
        <footer>
          <p>Bridging development and operations for faster, more reliable software delivery through collaboration and automation.</p>
        </footer>

        {/* Define Routes */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<h1>Hello !</h1>} />

          {/* Registration Route */}
          <Route path="/registration" element={<Registration />} /> {/* Register page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
