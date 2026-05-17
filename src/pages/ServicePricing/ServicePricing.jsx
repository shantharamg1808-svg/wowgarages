import React from 'react';
import { CheckCircle2, Wrench as Tool, MessageCircle } from 'lucide-react';
import Button from '../../components/Button';
import { useTheme } from '../../context/ThemeContext';
import { PRICING_PLANS, SERVICE_INCLUSIONS, COMPREHENSIVE_SERVICES } from '../../data/constants';

const ServicePricing = () => {
  const { isDark } = useTheme();

  return (
    <div className={`pt-32 pb-24 min-h-screen animate-in fade-in duration-500 transition-colors ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2 block">Mechanical Repair</span>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Periodic Service Packages</h1>
          <p className={`max-w-2xl mx-auto text-lg transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Transparent pricing. No hidden fees. 40-point diagnostic health scan included with every service.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {PRICING_PLANS.map((plan, idx) => (
            <div key={idx} className={`relative rounded-2xl p-8 border flex flex-col transition-colors ${
              isDark 
                ? `bg-gray-900 ${plan.popular ? 'border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.15)]' : 'border-gray-800'}` 
                : `bg-white ${plan.popular ? 'border-yellow-400 shadow-lg' : 'border-gray-200 shadow-sm'}`
            }`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{plan.type}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-4xl font-extrabold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                <span className={`text-sm transition-colors ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>/service</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {SERVICE_INCLUSIONS.map((feature, i) => (
                  <li key={i} className={`flex items-start transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <CheckCircle2 size={20} className={`${isDark ? 'text-yellow-400' : 'text-yellow-500'} mr-3 shrink-0 mt-0.5`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comprehensive Services List */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Comprehensive Services</h2>
            <p className={`mt-2 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Everything your car needs under one roof.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {COMPREHENSIVE_SERVICES.map((item, idx) => (
              <div key={idx} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors ${isDark ? 'bg-gray-900 border-gray-800 hover:border-yellow-400' : 'bg-gray-50 border-gray-200 hover:border-yellow-500'}`}>
                <Tool size={18} className={`${isDark ? 'text-yellow-400' : 'text-yellow-500'} shrink-0`} />
                <span className={`text-sm font-semibold transition-colors ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-3xl p-8 md:p-12 border flex flex-col md:flex-row items-center justify-between gap-8 transition-colors ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
          <div>
            <h3 className={`text-2xl font-bold mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Need Advanced Repairs?</h3>
            <p className={`max-w-xl transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>We also handle suspension overhauls, computerised OBD-II scanning, alternator troubleshooting, and complete AC system R134a gas refilling.</p>
          </div>
          <Button variant="whatsapp" className="shrink-0" onClick={() => window.open('https://wa.me/918095802170?text=Hi%20WOW%20Garages,%20I%20need%20a%20price%20estimate%20for%20a%20service.', '_blank')}>
            <MessageCircle size={20} className="mr-2" />
            Get Free Price Estimate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicePricing;
