import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon, Phone, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useModal } from '../context/ModalContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/service', label: 'General Service' },
    { id: '/bodyshop', label: 'Body Shop & Spa' },
    { id: '/accessories', label: 'Accessories' }
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 shadow-2xl backdrop-blur-lg bg-gray-950/90 border-b border-white/5'
          : 'py-2'
      }`}
      style={!scrolled ? { backgroundColor: '#ffd630' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/WowGarageIcon1.png"
              alt="WOW Garages"
              className={`h-12 w-auto object-contain hover:scale-105 transition-all duration-500 ${
                scrolled ? 'brightness-90 drop-shadow-md' : ''
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? scrolled
                        ? 'bg-yellow-400 text-gray-900'
                        : 'bg-gray-900 text-[#ffd630]'
                      : scrolled
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-900 hover:bg-black/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled ? 'text-gray-400 hover:text-yellow-400 hover:bg-white/10' : 'text-gray-900 hover:bg-black/10'
              }`}
              title="Toggle Theme"
            >
              {isDark ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
            </button>

            <a
              href="tel:+918095802170"
              className={`flex items-center gap-1.5 text-sm font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-900 hover:text-black'
              }`}
            >
              <Phone size={16} strokeWidth={2.5} /> 080958 02170
            </a>

            <button
              onClick={openModal}
              className={`px-5 py-2 text-sm font-black rounded-lg shadow-md hover:-translate-y-0.5 transition-all duration-300 ${
                scrolled
                  ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                  : 'bg-gray-900 text-[#ffd630] hover:bg-black'
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-900 hover:bg-black/10'
              }`}
            >
              {isDark ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled ? 'text-gray-300 hover:bg-white/10' : 'text-gray-900 hover:bg-black/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden absolute top-full left-0 w-full border-t border-black/10 shadow-2xl ${
            isDark ? 'bg-gray-950' : 'bg-gray-900'
          }`}
        >
          <div className="flex flex-col p-3 gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-bold transition-all ${
                    isActive
                      ? 'bg-yellow-400 text-gray-900'
                      : 'text-gray-100 hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3 mt-1 border-t border-white/10">
              <button
                onClick={openModal}
                className="w-full py-3 flex items-center justify-center gap-2 font-bold rounded-lg text-gray-900 hover:bg-yellow-500 transition-colors shadow-md"
                style={{ backgroundColor: '#ffd630' }}
              >
                <Phone size={18} strokeWidth={2.5} /> Book Now — 080958 02170
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
