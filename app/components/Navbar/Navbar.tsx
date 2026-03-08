import { useState } from 'react';
import { FaBars, FaLaptopCode, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const base =
    'px-4 py-2 rounded-lg transition-all duration-300 hover:text-pastel-blue-500 dark:hover:text-pastel-blue-300 hover:bg-pastel-blue-100/50 dark:hover:bg-pastel-blue-900/30';
  const active =
    'text-pastel-blue-600 dark:text-pastel-blue-300 font-semibold bg-pastel-blue-100 dark:bg-pastel-blue-900/40 shadow-sm';

  return (
    <nav className="sticky top-0 z-50 bg-pastel-light-surface/80 dark:bg-pastel-dark-surface/80 backdrop-blur-xl border-b border-pastel-light-border dark:border-pastel-dark-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="group flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-400 to-pastel-accent-400 dark:from-pastel-blue-500 dark:to-pastel-accent-500 rounded-lg opacity-20 blur-md group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-pastel-blue-500 to-pastel-accent-500 dark:from-pastel-blue-400 dark:to-pastel-accent-400 p-2 rounded-lg shadow-md">
                <FaLaptopCode className="text-white text-xl" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pastel-blue-600 to-pastel-accent-600 dark:from-pastel-blue-300 dark:to-pastel-accent-300 bg-clip-text text-transparent">
              Thread Byte
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${base} ${isActive ? active : 'text-pastel-light-text-muted dark:text-pastel-dark-text-muted'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${base} ${isActive ? active : 'text-pastel-light-text-muted dark:text-pastel-dark-text-muted'}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${base} ${isActive ? active : 'text-pastel-light-text-muted dark:text-pastel-dark-text-muted'}`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${base} ${isActive ? active : 'text-pastel-light-text-muted dark:text-pastel-dark-text-muted'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${base} ${isActive ? active : 'text-pastel-light-text-muted dark:text-pastel-dark-text-muted'}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-pastel-blue-500 dark:text-pastel-blue-400 hover:bg-pastel-blue-100 dark:hover:bg-pastel-blue-900/30 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${base} ${isActive ? active : 'text-pastel-light-text-muted dark:text-pastel-dark-text-muted'}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${base} ${isActive ? active : 'text-pastel-light-text-muted dark:text-pastel-dark-text-muted'}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${base} ${isActive ? active : 'text-pastel-light-text-muted dark:text-pastel-dark-text-muted'}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${base} ${isActive ? active : 'text-pastel-light-text-muted dark:text-pastel-dark-text-muted'}`
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${base} ${isActive ? active : 'text-pastel-light-text-muted dark:text-pastel-dark-text-muted'}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
