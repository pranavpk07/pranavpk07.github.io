import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink, Github } from 'lucide-react';
import './components.css';

const projectsData = [
  {
    title: "Real-Time Data Dashboard (Live API)",
    tag: "Streamlit · Power BI",
    points: [
      "Built real-time dashboard using Python and Streamlit/Power BI",
      "Integrated live API data for continuous updates",
      "Implemented auto-refresh pipeline for real-time monitoring",
      "Designed interactive charts for trend analysis",
    ],
  },
  {
    title: "NSE Stock Market Analysis",
    tag: "Python · SQL · Power BI",
    points: [
      "Collected and cleaned stock market data from NSE",
      "Built dashboards to analyze sector-wise performance",
      "Identified key trends and sector concentration",
    ],
  },
];

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            className="glass-card project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="project-header">
              <Folder size={36} className="folder-icon" />
              <div className="project-links">
                <a href="#" aria-label="GitHub"><Github size={18} /></a>
                <a href="#" aria-label="Live" style={{ marginLeft: '10px' }}><ExternalLink size={18} /></a>
              </div>
            </div>
            <span className="project-tag">{project.tag}</span>
            <h3 className="project-title">{project.title}</h3>
            <ul className="project-desc">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
