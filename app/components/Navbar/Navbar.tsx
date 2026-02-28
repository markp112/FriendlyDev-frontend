import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaLaptopCode, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const base = 'transition-colors duration-300 hover:text-blue-400';
  const active = 'text-blue-400 font-semibold';

  return (
    <nav className="bg-gray-800 px-4 py-2 rounded mb-8 border-b border-gray-700 shadow-md sticky top-0 Z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-blue-300 text-lg font-bold flex items-center gap-2">
          <FaLaptopCode className="text-blue-400 text-xl" />
          The Friendly Developer
        </NavLink>
        <div className="hidden md:flex gap-6 items-center">
          <div className="space-x-4 text-sm text-gray-300">
            <NavLink to="/" className={({ isActive }) => (isActive ? active : base)}>
              Home
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? active : base)}>
              Projects
            </NavLink>
             <NavLink to="/blog" className={({ isActive }) => (isActive ? active : base)} >
                Blog
              </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? active : base)}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? active : base)}>
              Contact
            </NavLink>
          </div>
        </div>
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-400 text-xl cursor-pointer transition-colors duration-300 hover:text-blue-300"
            title="menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full text-center bg-gray-800 border-t border-gray-700 shadow-md md:hidden px-6 py-4 space-y-2 space-x-4">
            <div className="space-x-4 text-sm text-gray-300">
              <NavLink to="/" className={({ isActive }) => (isActive ? active : base)} onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? active : base)} onClick={() => setMenuOpen(false)}>
                Projects
              </NavLink>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? active : base)} onClick={() => setMenuOpen(false)}>
                Blog
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? active : base)} onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? active : base)} onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
