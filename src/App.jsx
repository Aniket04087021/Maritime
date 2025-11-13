import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Careers from "./pages/Careers";
import "./App.css";

const HomeLanding = () => (
  <section className="home-landing">
    <div className="home-landing__content">
      <span className="home-landing__eyebrow">Maritime Solutions Ltd</span>
      <h1>Navigating safer oceans through people, data, and bold ideas.</h1>
      <p>
        We partner with fleets across 32 countries to modernize operations, champion sustainability,
        and empower the crews that keep world trade afloat. Explore our careers to join a crew built
        on purpose.
      </p>
      <div className="home-landing__actions">
        <Link to="/careers" className="btn btn-primary">
          Explore Careers
        </Link>
        <a className="btn btn-secondary" href="mailto:hello@maritisolutions.com">
          Connect With Us
        </a>
      </div>
    </div>
    <div className="home-landing__visual" role="presentation" />
  </section>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <Link to="/" className="app-header__brand">
            <span>Maritime</span>
            <span>Solutions</span>
          </Link>
          <nav className="app-header__nav">
            <Link to="/careers">Home</Link>
          </nav>
          <nav className="app-header__nav">
            <Link to="/careers">About Us</Link>
          </nav>
          <nav className="app-header__nav">
            <Link to="/careers">Careers</Link>
          </nav>
          <Link to="/careers" className="app-header__cta">
            Join the Crew
          </Link>
        </header>
        <main className="app-main">
          <Routes>
            
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Maritime Solutions. Sailing forward together.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

