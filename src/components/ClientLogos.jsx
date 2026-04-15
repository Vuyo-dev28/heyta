import React from 'react';
import { motion } from 'framer-motion';
const ClientLogos = () => {
  const clients = [
    { name: "Hitachi", image: "/images/hitachi_logo.png", showName: false },
    { name: "Mago", image: "/images/mago_logo.png", showName: false },
    { name: "Marthinusen & Coutts", image: "/images/mandc_logo.png", showName: true },
    { name: "QUEENS NEST FARMS", image: "/images/queens_logo.png", showName: true },
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
          padding: 80px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          background: #f5f5f5;
          overflow: hidden;
        }
        .clients-title {
          text-align: center;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #2a2a2a;
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
          background: linear-gradient(to right, #f5f5f5, transparent);
        }
        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #f5f5f5, transparent);
        }
        .marquee-track {
          display: flex;
          gap: 100px;
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
          height: 85px;
          width: auto;
          object-fit: contain;
          filter: brightness(0.9);
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        .client-name {
          font-weight: 700;
          font-size: 1.5rem;
          color: #2a2a2a;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        .client-logo:hover .client-logo-img {
          filter: brightness(1);
          opacity: 1;
        }
        .client-logo:hover .client-name {
          color: #E11D48;
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .client-logos-section {
            padding: 60px 0;
          }
          .marquee-track {
            gap: 50px;
          }
          .client-logo-img {
            height: 50px;
          }
          .client-name {
            font-size: 1.125rem;
          }
          .marquee-container::before,
          .marquee-container::after {
            width: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
