import { useState } from "react";

const logoUrl = "https://storecdn.goqii.com/media/goqiiweb/assets/images/site-logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ✅ Embedded CSS */}
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: #ffffff;
          color: #000000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1.5rem;
          height: 70px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .logo img {
          height: 45px;
        }

        .menu {
          display: flex;
          list-style: none;
          gap: 1.5rem;
          margin: 0;
          padding: 0;
        }

        .menu li a {
          color: #000;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
        }

        .menu li a:hover {
          color: #00796B; /* Subtle health-themed accent */
        }

        .mobile-menu-btn {
          display: none;
          font-size: 2rem;
          background: none;
          border: none;
          color: #000;
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          height: 100vh;
          background-color: #fff;
          padding: 4rem 2rem;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: right 0.3s ease;
          box-shadow: -4px 0 10px rgba(0,0,0,0.05);
          z-index: 2000;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu li a {
          color: #000;
          font-size: 1.2rem;
          text-decoration: none;
        }

        .mobile-menu li a:hover {
          color: #00796B;
        }

        @media (max-width: 768px) {
          .menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>

      {/* ✅ Navbar HTML */}
      <nav className="navbar">
        <div className="logo">
          <a href="https://www.goqii.com" target="_blank" rel="noreferrer">
            <img src={logoUrl} alt="GOQii Logo" />
          </a>
        </div>

        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#coaching">Coaching</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </button>
      </nav>

      {/* ✅ Mobile Menu */}
      <ul className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <li><a href="/" onClick={() => setMobileOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMobileOpen(false)}>About</a></li>
        <li><a href="#programs" onClick={() => setMobileOpen(false)}>Programs</a></li>
        <li><a href="#coaching" onClick={() => setMobileOpen(false)}>Coaching</a></li>
        <li><a href="#support" onClick={() => setMobileOpen(false)}>Support</a></li>
        <li><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
      </ul>
    </>
  );
}
