import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Server, GraduationCap, HeartPulse, ShoppingBag, Factory, Pickaxe, Truck } from 'lucide-react';

const Industries = () => {
  const industries = [
    { name: "Corporate Enterprises", icon: <Building2 size={24} /> },
    { name: "Data Centers", icon: <Server size={24} /> },
    { name: "Educational Institutions", icon: <GraduationCap size={24} /> },
    { name: "Healthcare Providers", icon: <HeartPulse size={24} /> },
    { name: "Retail & Hospitality", icon: <ShoppingBag size={24} /> },
    { name: "Industrial & Manufacturing", icon: <Factory size={24} /> },
    { name: "Mining Industry", icon: <Pickaxe size={24} /> },
    { name: "Transport Industry", icon: <Truck size={24} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    whileInView: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="section-padding" id="industries">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Industries <span className="text-gradient">Served</span></h2>
          <p className="section-subtitle">Providing tailored telecom solutions to a wide range of sectors.</p>
        </motion.div>

        <motion.div 
          className="industries-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="industry-card glass"
              whileHover={{ 
                y: -5,
                backgroundColor: "rgba(225, 29, 72, 0.05)",
                borderColor: "rgba(225, 29, 72, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="industry-icon">{item.icon}</div>
              <span className="industry-name">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="industries-visual-wrapper"
        >
          <div className="visual-container glass">
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="dots"><span/><span/><span/></div>
                  <span className="mockup-title">Network Operations Center</span>
                </div>
                <div className="mockup-content">
                  <div className="mockup-sidebar">
                    <div className="sidebar-item active">Global Ops</div>
                    <div className="sidebar-item">Security</div>
                    <div className="sidebar-item">Performance</div>
                    <div className="sidebar-item">Regions</div>
                  </div>
                  <div className="mockup-main">
                    <div className="mockup-rows">
                      <div className="row">
                        <div className="row-content">
                          <span className="row-label">Cross-Industry Connectivity</span>
                          <span className="row-value">+99.9%</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="row-content">
                          <span className="row-label">Real-time Signal Boosts</span>
                          <span className="row-value">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="visual-glow"></div>
          </div>

          <p className="industries-footer-text">
            For businesses looking for a trusted partner to manage and maintain their telecom systems, <span className="text-red">Heyta Telecoms</span> delivers unmatched service and expertise.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .industry-card {
          padding: 2rem;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .industry-card:hover {
          background: rgba(225, 29, 72, 0.05);
          border-color: rgba(225, 29, 72, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -10px rgba(225, 29, 72, 0.1);
        }
        .industry-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(225, 29, 72, 0.1);
          color: #E11D48;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .industry-name {
          font-weight: 500;
          font-size: 1rem;
        }

        .industries-visual-wrapper {
          margin-top: 80px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
        }

        .visual-container {
          width: 100%;
          max-width: 900px;
          height: 400px;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px -20px rgba(225, 29, 72, 0.3);
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

        .industries-footer-text {
          font-size: 1.25rem;
          text-align: center;
          color: #A1A1AA;
          max-width: 800px;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .industries-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .industries-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Industries;
