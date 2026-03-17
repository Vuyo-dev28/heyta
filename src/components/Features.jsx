import React from 'react';
import { Shield, Zap, Target, Cpu, Layers, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: "Cabling Solutions",
      description: "Fiber optics to copper wiring, ensuring reliable and fast data transmission.",
      icon: <Layers className="text-red-500" />,
      size: "large",
      image: "https://images.unsplash.com/photo-1601343521361-82550993081e?w=800&auto=format&fit=crop"
    },
    {
      title: "Equipment Supply",
      description: "Top-quality telecom equipment from switches to wireless devices.",
      icon: <Cpu className="text-rose-500" />,
      size: "small"
    },
    {
      title: "System Management",
      description: "Regular system checks, updates, and troubleshooting services.",
      icon: <Shield className="text-red-600" />,
      size: "small"
    },
    {
      title: "Signal Boosters",
      description: "Cutting-edge solutions to enhance mobile and wireless coverage.",
      icon: <Zap className="text-rose-400" />,
      size: "medium"
    },
    {
      title: "Microsoft Services",
      description: "Sharepoint online, Power Apps, Automate, Dynamics 365 and Business Central.",
      icon: <Globe className="text-red-400" />,
      size: "medium"
    },
    {
      title: "Consultation",
      description: "Tailored advice and solutions to meet unique business requirements.",
      icon: <Target className="text-rose-600" />,
      size: "small"
    },
    {
      title: "Cell Phone Management",
      description: "Cost saving analysis and management system implementation.",
      icon: <Cpu className="text-red-500" />,
      size: "small"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="section-padding" id="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">Comprehensive telecom solutions designed to meet the evolving needs of your business.</p>
        </motion.div>

        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`feature-card glass ${feature.size}`}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="card-top">
                <div className="icon-wrapper">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
              {feature.image && (
                <div className="card-visual">
                  <img src={feature.image} alt={feature.title} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title {
          font-size: 3rem;
          margin-bottom: 16px;
        }
        .section-subtitle {
          color: #A1A1AA;
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 300px);
          gap: 1.5rem;
        }
        .feature-card {
          border-radius: 24px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(225, 29, 72, 0.3);
          box-shadow: 0 10px 30px -10px rgba(225, 29, 72, 0.2);
        }
        .large {
          grid-column: span 2;
          grid-row: span 2;
        }
        .medium {
          grid-column: span 2;
        }
        .small {
          grid-column: span 1;
        }
        .icon-wrapper {
          margin-bottom: 1.5rem;
          width: 48px;
          height: 48px;
          background: rgba(255,255,255,0.03);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feature-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .feature-desc {
          color: #A1A1AA;
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        .card-visual {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%;
          opacity: 0.5;
          mask-image: linear-gradient(to top, black, transparent);
        }
        .card-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .large, .medium, .small {
            grid-column: span 2;
            height: auto;
            min-height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
