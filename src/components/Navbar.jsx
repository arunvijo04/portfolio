import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', hash: '#home' },
    { name: 'About', hash: '#about' },
    { name: 'Tech Stack', hash: '#skills' },
    { name: 'Projects', hash: '#projects' },
    { name: 'Contact', hash: '#contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-screen-lg px-6">
      <div className="flex justify-between items-center text-white px-4 py-2 md:px-0 md:py-0">
        {/* Mobile Styled Container */}
        <div className="md:hidden w-full flex justify-between items-center bg-black/80 dark:bg-white/10 rounded-full px-6 py-3 border border-white/10 shadow-lg backdrop-blur-lg">
          {/* Hamburger + Theme (Mobile) */}
          <button
            className="text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <button onClick={toggleTheme} className="text-lg px-2 py-1 rounded-full hover:bg-white/20 transition-colors">
            {theme === 'dark' ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-blue-300" />}
          </button>
        </div>

        {/* Desktop Nav Styled Container */}
        <div className="hidden md:flex w-full justify-center">
          <div className="flex items-center gap-8 bg-black/80 dark:bg-white/10 text-white rounded-full px-8 py-3 border border-white/10 shadow-lg backdrop-blur-lg">
          {navLinks.map((link) => (
  <a
    key={link.name}
    href={link.hash}
    className={`px-4 py-2 font-medium rounded-full transition-all duration-200
      ${
        location.hash === link.hash
          ? 'bg-white text-black dark:bg-white/90 dark:text-black'
          : 'hover:text-blue-300'
      }
    `}
  >
    {link.name}
  </a>
))}

            <button onClick={toggleTheme} className="text-xl px-2 py-1 rounded-full hover:bg-white/20 transition-colors">
              {theme === 'dark' ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-blue-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links (Dropdown) */}
      {menuOpen && (
        <ul className="flex flex-col md:hidden bg-black/90 dark:bg-white/10 text-white rounded-xl mt-2 px-4 py-4 gap-4 items-start shadow-md backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full">
              <a
                href={link.hash}
                onClick={() => setMenuOpen(false)}
                className={`block w-full px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${location.hash === link.hash
                    ? 'bg-white text-black dark:bg-white/90 dark:text-black shadow-md'
                    : 'hover:bg-white/20'}
                `}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
