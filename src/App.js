import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>Hello, </h1>
      </header>

      {/* Main Content Section */}
      <main className="content">
        <h2>Harsh Panchal</h2>
        <img 
          src="https://placedog.net/400/300" 
          alt="Cute Dog" 
          className="body-image" 
        />
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>devendra.prajapati.inventyv@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
