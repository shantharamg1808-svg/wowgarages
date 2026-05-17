import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Car, Wrench, Sun, Moon, Phone, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? (isDark ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm') : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center relative shadow-lg">
              <Car size={24} className="text-gray-900 absolute" />
              <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center border-2 border-yellow-400 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                <Wrench size={10} className={isDark ? "text-white" : "text-gray-900"} />
              </div>
            </div>
            <div>
              <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? (isDark ? 'text-white' : 'text-gray-900') : 'text-white'}`}>WOW</span>
              <span className={`text-sm font-bold tracking-widest ml-2 uppercase transition-colors ${scrolled ? (isDark ? 'text-yellow-400' : 'text-yellow-500') : 'text-yellow-400'}`}>Garages</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                className={({ isActive }) => `px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive 
                    ? (isDark ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-100 text-yellow-700')
                    : (isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' : 'text-gray-900 hover:text-black hover:bg-gray-100')
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${scrolled ? (isDark ? 'text-gray-400 hover:bg-gray-800 hover:text-yellow-400' : 'text-gray-500 hover:bg-gray-100 hover:text-yellow-500') : 'text-gray-300 hover:bg-white/10 hover:text-yellow-400'}`}
              title="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a href="tel:+918095802170" className={`flex items-center font-bold transition-colors ${scrolled ? (isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600') : 'text-gray-300 hover:text-yellow-400'}`}>
              <Phone size={18} className="mr-2" /> 080958 02170
            </a>
            <Button onClick={() => window.open('https://wa.me/918095802170', '_blank')} className="py-2 px-5 text-sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${scrolled ? (isDark ? 'text-gray-400' : 'text-gray-500') : 'text-gray-300'}`}
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button 
              className={`p-2 transition-colors ${scrolled ? (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900') : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 w-full border-b shadow-2xl animate-in slide-in-from-top-2 ${isDark ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 text-left rounded-lg text-lg font-semibold ${
                  isActive 
                    ? (isDark ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-50 text-yellow-700')
                    : (isDark ? 'text-gray-300 hover:bg-gray-900' : 'text-gray-900 hover:text-black hover:bg-gray-50')
                }`}
              >
                {item.label}
              </NavLink>
            ))}
            <div className={`pt-4 mt-2 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
              <Button className="w-full justify-center" onClick={() => window.open('https://wa.me/918095802170', '_blank')}>
                <Phone size={18} className="mr-2" /> Call 080958 02170
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
