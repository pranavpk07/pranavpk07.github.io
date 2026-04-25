import React, { useState, useEffect } from 'react';
import './components.css';

const sections = ['home', 'about', 'projects', 'skills', 'contact'];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find which section is in view
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // offsetTop gives position relative to document — subtract navbar so content sits right below nav
      const navH = 72; // matches --nav-height
      const top = el.offsetTop - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setActive(id);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo" onClick={e => scrollTo(e, 'home')}>
          Pranav<span>.</span>
        </a>
        <div className="nav-links">
          {sections.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? 'active' : ''}`}
              onClick={e => scrollTo(e, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              {active === id && <span className="nav-indicator" />}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
