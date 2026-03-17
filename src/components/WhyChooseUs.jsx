import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Experience & Expertise",
      description: "With over two decades of industry experience, our team is equipped to handle diverse telecom challenges."
    },
    {
      title: "Comprehensive Solutions",
      description: "We offer a full range of services, from initial design and installation to ongoing maintenance and support."
    },
    {
      title: "Quality & Reliability",
      description: "Our commitment to quality ensures every solution meets the highest standards and supports your goals."
    },
    {
      title: "Customer-Centric Approach",
      description: "We provide personalized services tailored to your specific business needs, ensuring maximum satisfaction."
    },
    {
      title: "Innovation & Reliability",
      description: "We leverage the latest technology, including advanced signal boosters, to ensure uninterrupted connectivity."
    }
  ];

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
    hidden: { opacity: 0, x: -20 },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section-padding" id="why-choose-us">
      <div className="container">
        <div className="choose-wrapper">
          <motion.div 
            className="choose-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Why <span className="text-gradient">Choose Us</span></h2>
            <p className="section-subtitle" style={{ margin: '0 0 40px 0' }}>
              Delivering innovation, quality, and reliability through expert management and support.
            </p>
            
            <motion.div 
              className="reasons-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="reason-item"
                >
                  <div className="reason-icon">
                    <CheckCircle2 size={24} color="#E11D48" />
                  </div>
                  <div>
                    <h3 className="reason-title">{reason.title}</h3>
                    <p className="reason-desc">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="choose-visual glass"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
             <div className="visual-pattern"></div>
             <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop" alt="Telecom Tower" className="visual-img" />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .choose-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .reasons-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .reason-item {
          display: flex;
          gap: 1.5rem;
        }
        .reason-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .reason-desc {
          color: #A1A1AA;
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        .choose-visual {
          position: relative;
          height: 600px;
          border-radius: 32px;
          overflow: hidden;
        }
        .visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
        }
        .visual-pattern {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(225, 29, 72, 0.4), transparent, rgba(225, 29, 72, 0.2));
          z-index: 1;
        }
        @media (max-width: 1024px) {
          .choose-wrapper { grid-template-columns: 1fr; gap: 40px; }
          .choose-visual { height: 400px; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
