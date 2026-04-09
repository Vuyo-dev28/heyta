import React from 'react';
import { motion } from 'framer-motion';
const ClientLogos = () => {
  const clients = [
    { name: "Hitachi", image: "/images/hitachi_logo.png", showName: false },
    { name: "Mago", image: "/images/mago_logo.png", showName: false },
    { name: "Marthinusen & Coutts", image: "/images/mandc_logo.png", showName: true },
    { name: "QUEENS'S NEST FARMS", image: "/images/queens_logo.png", showName: true },
  ];

  return (
    <section className="client-logos-section">
      <div className="container">
        <p className="clients-title ">TRUSTED BY INDUSTRY LEADERS</p>
        <div className="marquee-container">
          <motion.div
            className="marquee-track"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div key={index} className="client-logo">
                <img src={client.image} alt={client.name} className="client-logo-img" />
                {client.showName && <span className="client-name">{client.name}</span>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .client-logos-section {
          padding: 60px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .clients-title {
          text-align: center;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          margin-bottom: 40px;
        }
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        /* Fade edges for smooth entry/exit */
        .marquee-container::before,
        .marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 2;
        }
        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, var(--bg-dark), transparent);
        }
        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, var(--bg-dark), transparent);
        }
        .marquee-track {
          display: flex;
          gap: 80px;
          width: fit-content;
        }
        .client-logo {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: max-content;
          cursor: pointer;
        }
        .client-logo-img {
          height: 60px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%) brightness(1.5);
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .client-name {
          font-weight: 600;
          font-size: 1.25rem;
          color: var(--text-secondary);
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .client-logo:hover .client-logo-img {
          filter: grayscale(0%) brightness(1);
          opacity: 1;
        }
        .client-logo:hover .client-name {
          color: #FFFFFF;
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .marquee-track {
            gap: 40px;
          }
          .client-logo-img {
            height: 40px;
          }
          .client-name {
            font-size: 1rem;
          }
          .marquee-container::before,
          .marquee-container::after {
            width: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
