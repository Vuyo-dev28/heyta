import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge">Contact Us</span>
          <h2 className="section-title">Get in <span className="text-red">Touch</span></h2>
          <p className="section-subtitle">We're here to help you revolutionize your telecoms infrastructure.</p>
        </motion.div>

        <div className="contact-layout centered">
          {/* Information Side */}
          <motion.div 
            className="info-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div className="info-item glass" variants={itemVariants}>
              <div className="icon-box"><Mail size={24} /></div>
              <div className="text-box">
                <h3>Email Us</h3>
                <p>info@heytatelecoms.co.za</p>
              </div>
            </motion.div>

            <motion.div className="info-item glass" variants={itemVariants}>
              <div className="icon-box"><MapPin size={24} /></div>
              <div className="text-box">
                <h3>Visit Us</h3>
                <p>Gauteng, South Africa</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 100px 0;
          background: #2a2a2a;
          position: relative;
          overflow: hidden;
        }
        .contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: radial-gradient(circle at 80% 50%, rgba(225, 29, 72, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(225, 29, 72, 0.1);
          color: #E11D48;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1rem;
          border: 1px solid rgba(225, 29, 72, 0.2);
        }
        .section-title {
          font-size: 2.5rem;
          color: #ffffff !important;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .contact-layout.centered {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          width: 100%;
          max-width: 900px;
        }

        .info-item {
          padding: 2rem;
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .info-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(225, 29, 72, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
