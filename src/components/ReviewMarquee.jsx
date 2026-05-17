import React from 'react';
import { Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { REVIEWS } from '../data/constants';

const ReviewMarquee = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border-y py-3 overflow-hidden relative flex items-center transition-colors duration-300`}>
      <div className={`absolute left-0 z-10 w-16 h-full bg-gradient-to-r ${isDark ? 'from-gray-900' : 'from-gray-50'} to-transparent pointer-events-none`}></div>
      <div className={`absolute right-0 z-10 w-16 h-full bg-gradient-to-l ${isDark ? 'from-gray-900' : 'from-gray-50'} to-transparent pointer-events-none`}></div>
      
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
          <div key={i} className={`flex items-center mx-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
            </div>
            <span className="text-sm font-medium">"{review}"</span>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </div>
  );
};

export default ReviewMarquee;
