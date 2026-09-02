import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ModalProvider, useModal } from './context/ModalContext';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Button from './components/Button';
import BookingModal from './components/BookingModal';
import { ChevronRight } from 'lucide-react';

import Home from './pages/Home/Home';
import ServicePricing from './pages/ServicePricing/ServicePricing';
import BodyShop from './pages/BodyShop/BodyShop';
import Accessories from './pages/Accessories/Accessories';

const AppLayout = () => {
  const { isDark } = useTheme();
  const { openModal } = useModal();

  return (
    <div className={`relative min-h-screen overflow-x-hidden font-sans selection:bg-yellow-400 selection:text-gray-900 transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ServicePricing />} />
          <Route path="/bodyshop" element={<BodyShop />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </main>

      <ContactSection />
      <Footer />
      <BookingModal />

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="primary" 
          className="rounded-full shadow-[0_10px_40px_rgba(250,204,21,0.3)] px-6 py-4 flex items-center group"
          onClick={openModal}
        >
          <span className="hidden md:inline-block mr-2 font-extrabold group-hover:scale-105 transition-transform">Book a Service / Schedule Pick-up</span>
          <span className="md:hidden font-extrabold">Book Now</span>
          <ChevronRight size={20} className="ml-1 md:ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <Router>
          <AppLayout />
        </Router>
      </ModalProvider>
    </ThemeProvider>
  );
}
