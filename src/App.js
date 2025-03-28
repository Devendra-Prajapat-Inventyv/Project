import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <header>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main Content with Centered Image */}
      <main>
        <div className="image-container">
          <h1> Hello Devendra</h1>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 My Simple React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
