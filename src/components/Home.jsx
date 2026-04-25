import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import './components.css';

const roles = ['Data Analyst', 'Dashboard Builder', 'ML Enthusiast', 'Insight Creator'];

const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="home" className="home">
      <div className="container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, it's Pranav 👋
          </motion.span>

          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            I build <span className="title-highlight">insightful</span><br />
            dashboards.
          </motion.h1>

          <motion.div
            className="typewriter-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="typewriter-prefix">→ </span>
            <span className="typewriter-text">{displayed}</span>
            <span className="typewriter-cursor">|</span>
          </motion.div>

          <motion.p
            className="quote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            "Transforming complex data into actionable insights."
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a href="#projects" className="btn btn-primary">
              Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch <Mail size={18} />
            </a>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            className="home-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            {[['6mo', 'Industry Exp'], ['2+yr', 'Hands-on'], ['10+', 'Projects']].map(([num, label]) => (
              <div className="stat-pill" key={label}>
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
