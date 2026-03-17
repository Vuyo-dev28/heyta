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
    hidden: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
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

        <div className="contact-layout">
          {/* Information Side */}
          <motion.div 
            className="info-side"
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
              <div className="icon-box"><Phone size={24} /></div>
              <div className="text-box">
                <h3>Call Us</h3>
                <p>+27 (0) 12 345 6789</p>
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

          {/* Form Side with Clear Separation */}
          <motion.div 
            className="form-side glass highlight"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form">
              <div className="field-row">
                <div className="field-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="field-group">
                  <label>Email</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="field-group">
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" />
              </div>
              <div className="field-group">
                <label>Message</label>
                <textarea placeholder="Your message..."></textarea>
              </div>
              <button type="button" className="btn btn-primary submit-btn">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 100px 0;
          background: #000;
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
          font-size: 3rem;
          color: white;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .section-subtitle {
          color: #A1A1AA;
          font-size: 1.1rem;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          align-items: start;
        }

        /* Info Side */
        .info-side {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-item {
          padding: 1.5rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: transform 0.3s ease;
        }
        .info-item:hover {
          transform: translateX(10px);
          background: rgba(255, 255, 255, 0.05);
        }
        .icon-box {
          width: 52px;
          height: 52px;
          background: rgba(225, 29, 72, 0.1);
          color: #E11D48;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(225, 29, 72, 0.2);
        }
        .text-box h3 {
          font-size: 1.1rem;
          color: white;
          margin-bottom: 2px;
        }
        .text-box p {
          color: #A1A1AA;
          font-size: 0.95rem;
        }

        /* Form Side */
        .form-side {
          padding: 3rem;
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
        }
        .highlight {
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .field-group label {
          font-size: 0.85rem;
          color: #A1A1AA;
          font-weight: 500;
        }
        .field-group input, .field-group textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.8rem 1rem;
          border-radius: 10px;
          color: white;
          transition: all 0.2s ease;
        }
        .field-group input:focus, .field-group textarea:focus {
          outline: none;
          border-color: #E11D48;
          background: rgba(225, 29, 72, 0.05);
        }
        .field-group textarea {
          height: 120px;
          resize: none;
        }
        .submit-btn {
          padding: 1rem;
          justify-content: center;
          font-weight: 600;
        }

        @media (max-width: 991px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }
          .field-row {
            grid-template-columns: 1fr;
          }
          .form-side {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
