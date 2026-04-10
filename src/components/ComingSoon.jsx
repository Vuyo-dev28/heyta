import React from 'react'
import '../../comingSoon.css'
import logo from '../../public/heyta_logo.png' // 👈 add your logo here

const ComingSoon = () => {
    return (
        <div className="cs-container">
            <div className="cs-card">

                {/* Brand Header */}
                <div className="cs-brand">
                    <img src={logo} alt="Logo" />
                    <h2>HEYTA TELECOMS</h2>
                </div>

                {/* Badge */}
                <div className="cs-badge">
                    <span className="dot"></span>
                    Coming Soon
                </div>

                {/* Content */}
                <div className="cs-content">
                    <div className="emoji">🚀</div>
                    <p className="sub">WE'RE LAUNCHING SOON</p>

                    <h1>
                        Something <span>Powerful</span> is Coming.
                    </h1>

                    <p className="desc">
                        We're working hard to bring you an amazing experience.
                        Stay tuned.
                    </p>

                    {/* <button className="notify-btn">
                        ✉️ Notify Me
                    </button> */}
                </div>

                {/* Shapes */}
                <div className="shape shape-left"></div>
                <div className="shape shape-right"></div>
                <div className="shape shape-bottom"></div>

            </div>
        </div>
    )
}

export default ComingSoon