import { useState, useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">AS</div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#project" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-buttons">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle Navigation"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
