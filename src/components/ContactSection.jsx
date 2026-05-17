import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const ContactSection = () => {
  const { isDark } = useTheme();

  return (
    <div className={`border-t py-24 transition-colors duration-300 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`} id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`text-4xl font-bold mb-8 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Visit The Garage</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 shrink-0 transition-colors ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className={`text-xl font-bold mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Location</h4>
                  <p className={`leading-relaxed max-w-md transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    79, Bettadasanapura Main Road, Bettadasanapura, Electronic City Phase 1, Bengaluru, Karnataka 560100
                  </p>
                  <div className={`inline-block mt-3 px-3 py-1 border text-xs rounded uppercase tracking-wider font-semibold transition-colors ${isDark ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400' : 'bg-yellow-50 border-yellow-300 text-yellow-700'}`}>
                    Landmark: Inside HPCL Fuel Station
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 shrink-0 transition-colors ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className={`text-xl font-bold mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Operating Hours</h4>
                  <p className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Open 7 days a week</p>
                  <p className={`font-semibold mt-1 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 shrink-0 transition-colors ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className={`text-xl font-bold mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Direct Line</h4>
                  <a href="tel:+918095802170" className={`flex items-center font-bold transition-colors ${isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-900 hover:text-yellow-600'}`}>
                    <Phone size={18} className="mr-2" /> 080958 02170
                  </a>
                </div>
              </div>
            </div>
            
            <Button 
              className="mt-10 w-full sm:w-auto"
              onClick={() => window.open('https://maps.google.com/?q=79,+Bettadasanapura+Main+Road,+Electronic+City+Phase+1,+Bengaluru', '_blank')}
            >
              <MapPin size={18} className="mr-2" />
              Open in Google Maps for Navigation
            </Button>
          </div>

          <div className={`p-2 rounded-3xl border shadow-2xl h-[450px] transition-colors ${isDark ? 'bg-gray-950 border-gray-800' : 'bg-gray-100 border-gray-300'}`}>
            <iframe 
              title="WOW Garages Location"
              src="https://maps.google.com/maps?q=79,+Bettadasanapura+Main+Road,+Electronic+City+Phase+1,+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1.25rem' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
