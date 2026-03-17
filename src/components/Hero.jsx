import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="hero-section section-padding">
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="tag-wrapper" variants={itemVariants}>
            <span className="tag" style={{ borderColor: 'rgba(225, 29, 72, 0.5)', background: 'rgba(225, 29, 72, 0.15)' }}>Introducing Heyta Telecoms</span>
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            The Next Generation of <br />
            <span className="text-gradient">Telecom Success</span>
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            <span className="text-red">Heyta Telecoms</span> is an emerging telecommunications provider, dedicated to offering high-quality, full turnkey solutions to businesses and organizations.
          </motion.p>
          
          <motion.div className="hero-actions" variants={itemVariants}>
            <button className="btn btn-primary">
              Our Services <ArrowRight size={18} />
            </button>
            <button className="btn btn-glass">
              Contact Us
            </button>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <span className="stat-value">Our Vision</span>
              <span className="stat-label">Leading provider of integrated telecom infrastructure solutions.</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">Our Mission</span>
              <span className="stat-label">Empower businesses with cutting-edge telecom solutions.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 160px;
          position: relative;
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          margin-bottom: 80px;
        }
        .tag-wrapper {
          margin-bottom: 24px;
        }
        .tag {
          background: rgba(225, 29, 72, 0.1);
          border: 1px solid rgba(225, 29, 72, 0.2);
          color: #E11D48;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
        }
        .hero-title {
          font-size: 4.5rem;
          margin-bottom: 24px;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: #A1A1AA;
          max-width: 600px;
          margin: 0 auto 40px;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 60px;
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          padding: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #E11D48;
        }
        .stat-label {
          font-size: 0.875rem;
          color: #A1A1AA;
        }
        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.05);
        }
        .hero-visual {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          perspective: 1000px;
        }
        .visual-container {
          height: 500px;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px -20px rgba(225, 29, 72, 0.3);
          transform: rotateX(5deg);
          border: 1px solid rgba(225, 29, 72, 0.2);
          background: rgba(0,0,0,0.8);
        }
        .visual-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 60%;
          background: radial-gradient(circle at top, rgba(225, 29, 72, 0.3), transparent 70%);
          z-index: 1;
        }
        .dashboard-mockup {
          padding: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }
        .mockup-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .mockup-title {
          font-size: 0.75rem;
          color: #A1A1AA;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .dots { display: flex; gap: 6px; }
        .dots span { width: 10px; height: 10px; border-radius: 50%; background: rgba(225, 29, 72, 0.3); }
        .mockup-content { display: flex; flex: 1; gap: 24px; }
        .mockup-sidebar { 
          width: 160px; 
          background: rgba(225, 29, 72, 0.05); 
          border-radius: 12px; 
          border: 1px solid rgba(225, 29, 72, 0.1);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sidebar-item {
          font-size: 0.75rem;
          color: #71717A;
          padding: 8px;
          border-radius: 6px;
        }
        .sidebar-item.active {
          color: #E11D48;
          background: rgba(225, 29, 72, 0.1);
        }
        .mockup-main { flex: 1; }
        .mockup-rows { display: flex; flex-direction: column; gap: 16px; }
        .row { 
          height: 80px; 
          background: rgba(225, 29, 72, 0.05); 
          border-radius: 12px; 
          border: 1px solid rgba(225, 29, 72, 0.1);
          position: relative;
          overflow: hidden;
          padding: 16px;
        }
        .row-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          position: relative;
          z-index: 2;
        }
        .row-label {
          font-size: 0.875rem;
          color: #A1A1AA;
        }
        .row-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #E11D48;
        }
        .row::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 30%;
          background: linear-gradient(90deg, rgba(225, 29, 72, 0.2), transparent);
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-stats { flex-direction: column; gap: 2rem; }
          .stat-divider { display: none; }
          .hero-actions { flex-direction: column; }
          .visual-container { height: 300px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
