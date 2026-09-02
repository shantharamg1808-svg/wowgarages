import React from 'react';
import { BRANDS } from '../data/constants';

const BrandsMarquee = () => {
  return (
    <div className="bg-yellow-400 py-3 overflow-hidden relative flex items-center border-y border-yellow-500">
      <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite]">
        {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
          <div key={i} className="flex items-center mx-8 md:mx-12 shrink-0">
            {/* 
              TO CHANGE SIZES, TWEAK THESE CLASSES:
              h-12         = Mobile height (3rem / 48px)
              md:h-16      = Desktop height (4rem / 64px)
              min-w-[80px] = Minimum width to prevent collapsing
            */}
            <img src={brand.logo} alt={brand.name} className="h-12 md:h-16 w-auto min-w-[80px] object-contain drop-shadow-sm hover:scale-110 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsMarquee;
