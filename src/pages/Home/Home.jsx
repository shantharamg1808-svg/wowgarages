import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Truck, CalendarCheck, Phone, Wrench, Sparkles, Music, ChevronRight, CheckCircle2, Shield, FileText, Settings } from 'lucide-react';
import Button from '../../components/Button';
import ReviewMarquee from '../../components/ReviewMarquee';
import BrandsMarquee from '../../components/BrandsMarquee';
import { useTheme } from '../../context/ThemeContext';
import { useModal } from '../../context/ModalContext';

const Home = () => {
  const { isDark } = useTheme();
  const { openModal } = useModal();
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className={`relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden transition-colors duration-300`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <img
            src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Premium Garage Background"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          {/* Gradient overlay — starts from yellow at top to blend with the navbar */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: isDark
                ? 'linear-gradient(to bottom, #ffd630 0%, #ffd63020 12%, rgba(17,24,39,0.5) 30%, rgba(3,7,18,0.85) 100%)'
                : 'linear-gradient(to bottom, #ffd630 0%, #ffd63020 12%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.9) 100%)'
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold backdrop-blur-md transition-colors ${isDark ? 'bg-gray-800/80 border-yellow-400/30 text-yellow-400' : 'bg-white/90 border-yellow-400 text-yellow-600 shadow-sm'}`}>
              <Star size={16} className={isDark ? "fill-yellow-400" : "fill-yellow-500"} /> 4.9★ Google Reviews
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold backdrop-blur-md transition-colors ${isDark ? 'bg-gray-800/80 border-yellow-400/30 text-yellow-400' : 'bg-white/90 border-yellow-400 text-yellow-600 shadow-sm'}`}>
              <Users size={16} /> 500+ Happy Customers
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold backdrop-blur-md transition-colors ${isDark ? 'bg-gray-800/80 border-yellow-400/30 text-yellow-400' : 'bg-white/90 border-yellow-400 text-yellow-600 shadow-sm'}`}>
              <Truck size={16} /> Free Doorstep Pickup (5km)
            </div>
          </div>
          <h1 className={`text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
            COMPLETE CARE <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-yellow-400 to-yellow-200' : 'from-yellow-500 to-yellow-400'}`}>
              FOR YOUR CAR
            </span>
          </h1>
          <p className={`text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Electronic City's leading MULTIBRAND CAR SERVICE. From advanced diagnostics and premium accessories to PPF, tinkering, and exact-match painting. Hassle-free insurance claims handled end-to-end.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openModal} className="text-lg px-8 py-4">
              <CalendarCheck size={20} className="mr-2" /> Book Appointment
            </Button>
            <Button variant="outline" className={`text-lg px-8 py-4 backdrop-blur-sm ${isDark ? 'bg-gray-900/50' : 'bg-white/50'}`} onClick={() => window.open('https://wa.me/918095802170', '_blank')}>
              <Phone size={20} className="mr-2" /> 080958 02170
            </Button>
          </div>
        </div>
      </div>

      <ReviewMarquee />

      {/* Service Quick Links */}
      <div className={`py-24 transition-colors duration-300 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Expertise</h2>
            <p className={`max-w-2xl mx-auto transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Comprehensive automotive solutions delivered with precision engineering and care.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: '/service', title: 'Periodic & Mechanical', icon: <Wrench size={32} />, desc: 'Advanced diagnostics, brake overhauls, engine repair & AC service.', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80' },
              { id: '/bodyshop', title: 'Body Shop & Spa', icon: <Sparkles size={32} />, desc: '9H Ceramic coatings, PPF, tinkering, and exact-match paintwork.', img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80' },
              { id: '/accessories', title: 'Customisation Hub', icon: <Music size={32} />, desc: 'Premium Android infotainment, custom seating & acoustic damping.', img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=600&q=80' }
            ].map((service) => (
              <div
                key={service.id}
                onClick={() => {
                  navigate(service.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group cursor-pointer rounded-2xl overflow-hidden border hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-md hover:shadow-xl'}`}
              >
                <div className="h-48 relative overflow-hidden">
                  <div className={`absolute inset-0 z-10 transition-colors ${isDark ? 'bg-gray-900/40 group-hover:bg-transparent' : 'bg-gray-900/10 group-hover:bg-transparent'}`}></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-yellow-400 p-3 rounded-xl text-gray-900 shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className={`text-xl font-bold mb-3 flex items-center justify-between transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                    <ChevronRight size={20} className={`opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                  </h3>
                  <p className={`leading-relaxed transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BrandsMarquee />

      {/* Why Choose Us Section */}
      <div className={`py-24 border-t transition-colors duration-300 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2 block">The WOW Guarantee</span>
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Why Choose WOW Garages</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Free Pick/Drop", desc: "Complimentary within 5km radius", icon: <Truck size={28} className={isDark ? "text-yellow-400" : "text-yellow-500"} /> },
              { title: "Insurance Claims", desc: "Hassle-free accident support", icon: <FileText size={28} className={isDark ? "text-yellow-400" : "text-yellow-500"} /> },
              { title: "500+ Customers", desc: "Trusted by the community", icon: <Users size={28} className={isDark ? "text-yellow-400" : "text-yellow-500"} /> },
              { title: "Genuine Parts", desc: "100% authentic components", icon: <Shield size={28} className={isDark ? "text-yellow-400" : "text-yellow-500"} /> },
              { title: "Transparent Pricing", desc: "No hidden charges, ever", icon: <CheckCircle2 size={28} className={isDark ? "text-yellow-400" : "text-yellow-500"} /> },
              { title: "Experienced Techs", desc: "Specialists for every brand", icon: <Settings size={28} className={isDark ? "text-yellow-400" : "text-yellow-500"} /> }
            ].map((feature, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border text-center flex flex-col items-center transition-colors ${isDark ? 'bg-gray-950 border-gray-800 hover:border-yellow-400' : 'bg-white border-gray-200 hover:border-yellow-500 shadow-sm hover:shadow-md'}`}>
                <div className={`p-4 rounded-full mb-4 shadow-sm ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>{feature.icon}</div>
                <h4 className={`text-lg font-bold mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h4>
                <p className={`text-sm transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
