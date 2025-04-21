import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const location = useLocation();

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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex bg-black/80 dark:bg-white/10 text-white rounded-full px-6 py-2 border border-white/10 shadow-lg backdrop-blur-lg gap-6 items-center">
        {navLinks.map((link) => (
           <li key={link.name}>
           <a
             href={link.hash}
             className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200
               ${location.hash === link.hash
                 ? 'bg-white text-black dark:bg-white/90 dark:text-black shadow-md'
                 : 'hover:bg-white/20'}
             `}
           >
             {link.name}
           </a>
         </li>
        ))}
        <li>
          <button onClick={toggleTheme} className="text-lg px-2 py-1 rounded-full hover:bg-white/20 transition-colors">
            {theme === 'dark'
              ? <FaSun className="text-yellow-300" />
              : <FaMoon className="text-blue-300" />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
