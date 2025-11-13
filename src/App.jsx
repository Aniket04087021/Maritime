import React from "react";
import Careers from "./pages/Careers";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <a href="#top" className="app-header__brand">
          <span>Maritime</span>
          <span>Solutions</span>
        </a>
        <nav className="app-header__nav">
          <a href="#open-roles">Open Roles</a>
        </nav>
        <nav className="app-header__nav">
          <a href="#benefits">Benefits</a>
        </nav>
        <nav className="app-header__nav">
          <a href="#life">Life at Maritime</a>
        </nav>
        <a href="mailto:talent@maritimesolutions.com" className="app-header__cta">
          Join the Crew
        </a>
      </header>
      <main className="app-main" id="top">
        <Careers />
      </main>
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Maritime Solutions. Sailing forward together.</p>
      </footer>
    </div>
  );
}

export default App;
