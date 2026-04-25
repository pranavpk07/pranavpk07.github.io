import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, Server, Zap } from 'lucide-react';
import './components.css';

const specializations = [
  { icon: <Database size={20} />, text: "Cleaned and processed raw datasets to improve data quality and usability." },
  { icon: <LineChart size={20} />, text: "Developed interactive dashboards in Power BI for business insights." },
  { icon: <Zap size={20} />, text: "Generated actionable insights to support decision-making." },
  { icon: <Server size={20} />, text: "Performed data analysis using Python and SQL to identify trends." },
];

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="about-grid">
        <motion.div
          className="about-text glass-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-badge">Data Analyst</div>
          <p>
            Data Analyst with <strong>6 months of industry experience</strong> and 2+ years of hands-on exposure in data analysis, machine learning, and visualization.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Skilled in <span className="highlight-text">Python</span>, <span className="highlight-text">SQL</span>, and <span className="highlight-text">Power BI</span> for extracting insights and building data-driven solutions.
          </p>
        </motion.div>

        <motion.div
          className="specialization-list"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="spec-heading">Specializations</h3>
          {specializations.map((spec, i) => (
            <motion.div
              className="spec-item"
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              whileHover={{ x: 6 }}
            >
              <div className="spec-icon">{spec.icon}</div>
              <p>{spec.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
