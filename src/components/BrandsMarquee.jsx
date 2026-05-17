import React from 'react';
import { BRANDS } from '../data/constants';

const BrandsMarquee = () => {
  return (
    <div className="bg-yellow-400 py-3 overflow-hidden relative flex items-center border-y border-yellow-500">
      <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite]">
        {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
          <div key={i} className="flex items-center mx-6 text-gray-900 font-black tracking-widest uppercase text-sm md:text-base">
            <span>{brand}</span>
            <span className="mx-6 text-gray-900/40">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsMarquee;
