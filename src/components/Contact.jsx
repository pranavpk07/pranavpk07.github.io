import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import './components.css';

const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Let's Connect
      </motion.h2>
      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="contact-text">
          Feel free to connect with me for opportunities, collaborations, or just to discuss tech!
        </p>

        <div className="social-links">
          {[
            { href: 'https://github.com/pranavpk07', icon: <Github size={28} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/pranav-kamble-886656334', icon: <Linkedin size={28} />, label: 'LinkedIn' },
            { href: 'mailto:pranavdilipkamble@gmail.com', icon: <Mail size={28} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -6, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {icon}
              <span>{label}</span>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:pranavdilipkamble@gmail.com"
          className="btn btn-primary"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Say Hello ✉️
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
