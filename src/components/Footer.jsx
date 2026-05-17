import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`py-12 border-t transition-colors duration-300 ${isDark ? 'bg-black border-gray-900' : 'bg-gray-100 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-2xl font-black transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>WOW</span>
            <span className={`text-sm font-bold uppercase transition-colors ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Garages</span>
          </div>
          <p className={`text-sm max-w-sm mb-6 transition-colors ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            Premier multi-brand car service in Bettadasanapura, Electronic City Phase 1. Specializing in mechanical repair, detailing, ceramic coating, and accessories.
          </p>
          <div className={`text-xs transition-colors ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            <p>SEO Tags: Multi-brand car service Bettadasanapura, Car wash Electronic City Phase 1, Best ceramic coating Bangalore, Car mechanics near me.</p>
          </div>
        </div>
        <div>
          <h4 className={`font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
          <ul className={`space-y-2 text-sm transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <li><Link to="/service" className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Services & Pricing</Link></li>
            <li><Link to="/bodyshop" className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Body Shop & Spa</Link></li>
            <li><Link to="/accessories" className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Customisation</Link></li>
            <li><span className={`cursor-not-allowed ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Car Care Blog & Quests (Coming Soon)</span></li>
          </ul>
        </div>
        <div>
          <h4 className={`font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Legal</h4>
          <ul className={`space-y-2 text-sm transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <li><a href="#" className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Privacy Policy</a></li>
            <li><a href="#" className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Terms of Service</a></li>
            <li><a href="#" className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Vehicle Handling Policy</a></li>
          </ul>
        </div>
      </div>
      <div className={`max-w-7xl mx-auto px-4 mt-12 pt-8 border-t text-center text-sm transition-colors ${isDark ? 'border-gray-900 text-gray-600' : 'border-gray-200 text-gray-500'}`}>
        © {new Date().getFullYear()} WOW Garages. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
