import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, BarChart3, Database, Wrench } from 'lucide-react';
import './components.css';

const skillCategories = [
  { title: "Languages", icon: <Code2 size={18} />, skills: ["Python", "R", "SQL", "C", "C++", "HTML", "CSS"] },
  { title: "Machine Learning", icon: <BrainCircuit size={18} />, skills: ["Pandas", "NumPy", "Scikit-learn", "Feature Engineering"] },
  { title: "Visualization", icon: <BarChart3 size={18} />, skills: ["Power BI", "Excel"] },
  { title: "Databases", icon: <Database size={18} />, skills: ["MySQL", "MongoDB"] },
  { title: "Tools", icon: <Wrench size={18} />, skills: ["Git", "AWS"] },
];

const Skills = () => (
  <section id="skills" className="skills">
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </motion.h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div
            className="skill-category glass-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <h3 className="skill-cat-title">
              <span className="skill-cat-icon">{category.icon}</span>
              {category.title}
            </h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <motion.span
                  className="skill-tag"
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
