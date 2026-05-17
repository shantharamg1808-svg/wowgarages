import React from 'react';
import Button from '../components/Button';
import { useTheme } from '../context/ThemeContext';
import { ACCESSORY_ITEMS } from '../data/constants';

const Accessories = () => {
  const { isDark } = useTheme();

  return (
    <div className={`pt-32 pb-24 min-h-screen animate-in fade-in duration-500 transition-colors ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2 block">Upgrades & Mods</span>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Customisation Hub</h1>
          <p className={`max-w-2xl mx-auto text-lg transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Premium audio, infotainment upgrades, and custom cabin enhancements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ACCESSORY_ITEMS.map((item, idx) => (
            <div key={idx} className={`group relative rounded-2xl overflow-hidden aspect-[4/3] border transition-colors ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'}`}>
              <img src={item.img} alt={item.title} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100 ${isDark ? 'opacity-70' : 'opacity-90'}`} />
              <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-950' : 'from-gray-900/90'} via-transparent to-transparent`}></div>
              <h3 className={`absolute bottom-6 left-6 text-xl font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={() => window.open('https://wa.me/918095802170?text=Hi,%20I%20want%20to%20enquire%20about%20fitment%20compatibility%20for%20my%20car.', '_blank')} className="text-lg">
            Enquire About Fitment Compatibility
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
