import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="footer glass-top">
      <div className="container">
        <motion.div 
          className="footer-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <motion.div className="footer-brand" variants={itemVariants}>
            <div className="brand-logo">
              <img src="/heyta_logo.png" alt="Heyta Telecoms Logo" style={{ height: '48px', width: 'auto' }} />
              <span className="brand-name">Heyta Telecoms</span>
            </div>
            <p className="brand-tagline">High-quality, full turnkey solutions for businesses and organizations.</p>
            <div className="social-links">
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Github size={20} /></a>
            </div>
          </motion.div>

          <div className="footer-links">
            <motion.div className="link-group" variants={itemVariants}>
              <h4 className="group-title">Services</h4>
              <a href="#services">Cabling</a>
              <a href="#services">Equipment</a>
              <a href="#services">Management</a>
              <a href="#services">Consultation</a>
            </motion.div>
            <motion.div className="link-group" variants={itemVariants}>
              <h4 className="group-title">Company</h4>
              <a href="#">Vision</a>
              <a href="#">Mission</a>
              <a href="#why-choose-us">Why Us</a>
              <a href="#">Contact</a>
            </motion.div>
            <motion.div className="link-group" variants={itemVariants}>
              <h4 className="group-title">Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>&copy; 2026 Heyta Telecoms. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: rgba(0, 1, 3, 0.5);
          padding: 80px 0 40px;
          margin-top: 100px;
        }
        .glass-top {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 4rem;
          margin-bottom: 60px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .logo-box {
          width: 32px;
          height: 32px;
          background: #E11D48;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .brand-name {
          font-size: 1.25rem;
          font-weight: 700;
        }
        .brand-tagline {
          color: #A1A1AA;
          font-size: 0.9375rem;
          max-width: 300px;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .social-links {
          display: flex;
          gap: 1.25rem;
        }
        .social-link {
          color: #A1A1AA;
          transition: color 0.2s ease;
        }
        .social-link:hover {
          color: white;
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .group-title {
          font-size: 1rem;
          margin-bottom: 1.5rem;
          color: white;
        }
        .link-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .link-group a {
          color: #A1A1AA;
          text-decoration: none;
          font-size: 0.9375rem;
          transition: color 0.2s ease;
        }
        .link-group a:hover {
          color: white;
        }
        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #71717A;
          font-size: 0.875rem;
        }
        .bottom-links {
          display: flex;
          gap: 1.5rem;
        }
        .bottom-links a {
          color: inherit;
          text-decoration: none;
        }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .footer-links {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
