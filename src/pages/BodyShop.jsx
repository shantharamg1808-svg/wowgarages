import React from 'react';
import { Camera, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { useTheme } from '../context/ThemeContext';

const BodyShop = () => {
  const { isDark } = useTheme();

  return (
    <div className={`pt-32 pb-24 min-h-screen animate-in fade-in duration-500 transition-colors ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2 block">Tinkering & Spa</span>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Detailing & Paint Shop</h1>
          <p className={`max-w-2xl mx-auto text-lg transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Machine compounding, professional paint correction, and computerised colour-matched spray booth painting.</p>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <div className={`p-4 md:p-6 rounded-3xl border transition-colors ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1596482613146-2434abcc9db6?auto=format&fit=crop&w=1200&q=80&grayscale=true"
              afterImage="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80"
            />
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 px-4 pb-2 gap-4">
              <p className={`italic transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Drag slider to see actual 9H Ceramic Coating results.</p>
              <Button onClick={() => window.open('https://wa.me/918095802170?text=Hi,%20I%20want%20a%20quote%20for%20paint/dent%20repair.%20Here%20are%20my%20photos...', '_blank')}>
                <Camera size={20} className="mr-2" />
                Upload Photos for Instant Quote
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}><ShieldCheck className={`${isDark ? 'text-yellow-400' : 'text-yellow-500'} mr-3`} /> Protective Coatings</h3>
            <ul className="space-y-4">
              <li className={`p-4 rounded-xl border transition-colors ${isDark ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700 shadow-sm'}`}>
                <strong className={`block mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>9H Ceramic Coating</strong>
                Multi-layer hydrophobic protection against environmental damage and micro-scratches.
              </li>
              <li className={`p-4 rounded-xl border transition-colors ${isDark ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700 shadow-sm'}`}>
                <strong className={`block mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Paint Protection Film (PPF)</strong>
                Self-healing, optically clear film installation to safeguard vulnerable panels.
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}><Sparkles className={`${isDark ? 'text-yellow-400' : 'text-yellow-500'} mr-3`} /> Deep Spa Services</h3>
            <ul className="space-y-4">
              <li className={`p-4 rounded-xl border transition-colors ${isDark ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700 shadow-sm'}`}>
                <strong className={`block mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Interior Deep Sanitisation</strong>
                Carpet foam extraction, roof-lining treatment, and anti-bacterial AC duct cleaning.
              </li>
              <li className={`p-4 rounded-xl border transition-colors ${isDark ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700 shadow-sm'}`}>
                <strong className={`block mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Detailed Wash Packages</strong>
                Multi-stage exterior foam wash, high-pressure underbody cleaning, and engine bay degreasing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyShop;
