import React, { useState, useRef, useEffect } from 'react';
import { 
  Wrench, 
  Car, 
  Sparkles, 
  Music, 
  MapPin, 
  Phone, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowLeftRight,
  ShieldCheck,
  Clock,
  MessageCircle,
  Camera,
  Settings,
  Shield,
  ThumbsUp,
  Wrench as Tool,
  Users,
  Truck,
  FileText,
  CalendarCheck
} from 'lucide-react';

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg transition-all duration-300 transform active:scale-95";
  const variants = {
    primary: "bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 border border-gray-600",
    outline: "bg-transparent text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900",
    whatsapp: "bg-green-500 text-white hover:bg-green-600 shadow-lg"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const ReviewMarquee = () => {
  const reviews = [
    "Polite and helpful staff! Excellent service.",
    "Neat and clean work done with washing and polishing. Highly recommend.",
    "No upselling or unwanted replacements. Very honest garage.",
    "Best ceramic coating in Bangalore! My SUV looks brand new.",
    "Fixed my AC perfectly in record time."
  ];

  return (
    <div className="bg-gray-900 border-y border-gray-800 py-3 overflow-hidden relative flex items-center">
      <div className="absolute left-0 z-10 w-16 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 z-10 w-16 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        {[...reviews, ...reviews, ...reviews].map((review, i) => (
          <div key={i} className="flex items-center mx-8 text-gray-300">
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

const BrandsMarquee = () => {
  const brands = [
    "Maruti", "Hyundai", "Honda", "Toyota", "Tata", "Mahindra", 
    "KIA", "Ford", "Volkswagen", "Skoda"
  ];

  return (
    <div className="bg-yellow-400 py-3 overflow-hidden relative flex items-center border-y border-yellow-500">
      <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite]">
        {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center mx-6 text-gray-900 font-black tracking-widest uppercase text-sm md:text-base">
            <span>{brand}</span>
            <span className="mx-6 text-gray-900/40">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = (event.touches ? event.touches[0].clientX : event.clientX) - containerRect.left;
    const newPosition = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(newPosition);
  };

  return (
    <div 
      className="relative w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl group"
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleMove}
    >
      <img src={afterImage} alt="After Repair" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <img 
        src={beforeImage} 
        alt="Before Repair" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />

      <div 
        className="absolute top-0 bottom-0 w-1 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <ArrowLeftRight size={20} className="text-gray-900" />
        </div>
      </div>
      
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-white/20">Before</div>
      <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">After</div>
    </div>
  );
};

const HomeView = ({ setView }) => (
  <div className="animate-in fade-in duration-500">
    <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Premium Garage Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-gray-900/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/80 border border-yellow-400/30 text-yellow-400 text-sm font-semibold backdrop-blur-md">
            <Star size={16} className="fill-yellow-400" /> 4.9★ Google Reviews
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/80 border border-yellow-400/30 text-yellow-400 text-sm font-semibold backdrop-blur-md">
            <Users size={16} /> 500+ Happy Customers
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/80 border border-yellow-400/30 text-yellow-400 text-sm font-semibold backdrop-blur-md">
            <Truck size={16} /> Free Doorstep Pickup (5km)
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          COMPLETE CARE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            FOR YOUR CAR
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Electronic City's leading MULTIBRAND CAR SERVICE. From advanced diagnostics and premium accessories to PPF, tinkering, and exact-match painting. Hassle-free insurance claims handled end-to-end.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.open('https://wa.me/918095802170?text=Hi,%20I%20want%20to%20book%20an%20appointment.', '_blank')} className="text-lg px-8 py-4">
            <CalendarCheck size={20} className="mr-2" /> Book Appointment
          </Button>
          <Button variant="outline" className="text-lg px-8 py-4 bg-gray-900/50 backdrop-blur-sm" onClick={() => window.open('https://wa.me/918095802170', '_blank')}>
            <Phone size={20} className="mr-2" /> 080958 02170
          </Button>
        </div>
      </div>
    </div>

    <ReviewMarquee />

    <div className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive automotive solutions delivered with precision engineering and care.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { id: 'service', title: 'Periodic & Mechanical', icon: <Wrench size={32} />, desc: 'Advanced diagnostics, brake overhauls, engine repair & AC service.', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80' },
            { id: 'bodyshop', title: 'Body Shop & Spa', icon: <Sparkles size={32} />, desc: '9H Ceramic coatings, PPF, tinkering, and exact-match paintwork.', img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80' },
            { id: 'accessories', title: 'Customisation Hub', icon: <Music size={32} />, desc: 'Premium Android infotainment, custom seating & acoustic damping.', img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=600&q=80' }
          ].map((service) => (
            <div 
              key={service.id} 
              onClick={() => setView(service.id)}
              className="group cursor-pointer bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20 bg-yellow-400 p-3 rounded-xl text-gray-900 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                  {service.title}
                  <ChevronRight size={20} className="text-yellow-400 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <BrandsMarquee />

    <div className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-2 block">The WOW Guarantee</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose WOW Garages</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Free Pick/Drop", desc: "Complimentary within 5km radius", icon: <Truck size={28} className="text-yellow-400" /> },
            { title: "Insurance Claims", desc: "Hassle-free accident support", icon: <FileText size={28} className="text-yellow-400" /> },
            { title: "500+ Customers", desc: "Trusted by the community", icon: <Users size={28} className="text-yellow-400" /> },
            { title: "Genuine Parts", desc: "100% authentic components", icon: <Shield size={28} className="text-yellow-400" /> },
            { title: "Transparent Pricing", desc: "No hidden charges, ever", icon: <CheckCircle2 size={28} className="text-yellow-400" /> },
            { title: "Experienced Techs", desc: "Specialists for every brand", icon: <Settings size={28} className="text-yellow-400" /> }
          ].map((feature, idx) => (
            <div key={idx} className="bg-gray-950 p-6 rounded-2xl border border-gray-800 text-center flex flex-col items-center hover:border-yellow-400 transition-colors">
              <div className="bg-gray-900 p-4 rounded-full mb-4 shadow-lg">{feature.icon}</div>
              <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ServicePricingView = () => {
  const plans = [
    { type: 'Hatchback', price: '₹3,499', popular: false },
    { type: 'Sedan', price: '₹4,499', popular: true },
    { type: 'SUV / Premium', price: '₹5,999', popular: false }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-950 min-h-screen animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-2 block">Mechanical Repair</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Periodic Service Packages</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Transparent pricing. No hidden fees. 40-point diagnostic health scan included with every service.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative bg-gray-900 rounded-2xl p-8 border ${plan.popular ? 'border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.15)]' : 'border-gray-800'} flex flex-col`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.type}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-gray-500 text-sm">/service</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Engine Oil Flushing & Replacement",
                  "Oil Filter Upgrade",
                  "Air & Cabin Filter Replacement",
                  "Coolant Top-up",
                  "40-Point Diagnostic Scan",
                  "Brake Pad Inspection & Skimming"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <CheckCircle2 size={20} className="text-yellow-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Comprehensive Services</h2>
            <p className="text-gray-400 mt-2">Everything your car needs under one roof.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "General Car Service", "Engine Repair & Overhauling", "Computer Scanning & Diagnostics", 
              "Brake Service", "Suspension & Steering Work", "Oil Change & Maintenance", 
              "Car AC Service", "Battery & Tyre Replacement", "Wheel Alignment & Balancing", 
              "Denting & Painting", "Insurance Claim Assistance"
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-4 rounded-xl border border-gray-800 flex items-center gap-3 hover:border-yellow-400 transition-colors">
                <Tool size={18} className="text-yellow-400 shrink-0" />
                <span className="text-sm font-semibold text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Need Advanced Repairs?</h3>
            <p className="text-gray-400 max-w-xl">We also handle suspension overhauls, computerised OBD-II scanning, alternator troubleshooting, and complete AC system R134a gas refilling.</p>
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

const BodyShopView = () => (
  <div className="pt-32 pb-24 bg-gray-950 min-h-screen animate-in fade-in duration-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-2 block">Tinkering & Spa</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Detailing & Paint Shop</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Machine compounding, professional paint correction, and computerised colour-matched spray booth painting.</p>
      </div>

      <div className="max-w-5xl mx-auto mb-20">
        <div className="bg-gray-900 p-4 md:p-6 rounded-3xl border border-gray-800">
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1596482613146-2434abcc9db6?auto=format&fit=crop&w=1200&q=80&grayscale=true"
            afterImage="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80"
          />
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 px-4 pb-2 gap-4">
            <p className="text-gray-400 italic">Drag slider to see actual 9H Ceramic Coating results.</p>
            <Button onClick={() => window.open('https://wa.me/918095802170?text=Hi,%20I%20want%20a%20quote%20for%20paint/dent%20repair.%20Here%20are%20my%20photos...', '_blank')}>
              <Camera size={20} className="mr-2" />
              Upload Photos for Instant Quote
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center"><ShieldCheck className="text-yellow-400 mr-3" /> Protective Coatings</h3>
          <ul className="space-y-4">
            <li className="bg-gray-900 p-4 rounded-xl border border-gray-800 text-gray-300">
              <strong className="text-white block mb-1">9H Ceramic Coating</strong>
              Multi-layer hydrophobic protection against environmental damage and micro-scratches.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-gray-800 text-gray-300">
              <strong className="text-white block mb-1">Paint Protection Film (PPF)</strong>
              Self-healing, optically clear film installation to safeguard vulnerable panels.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center"><Sparkles className="text-yellow-400 mr-3" /> Deep Spa Services</h3>
          <ul className="space-y-4">
            <li className="bg-gray-900 p-4 rounded-xl border border-gray-800 text-gray-300">
              <strong className="text-white block mb-1">Interior Deep Sanitisation</strong>
              Carpet foam extraction, roof-lining treatment, and anti-bacterial AC duct cleaning.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-gray-800 text-gray-300">
              <strong className="text-white block mb-1">Detailed Wash Packages</strong>
              Multi-stage exterior foam wash, high-pressure underbody cleaning, and engine bay degreasing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const AccessoriesView = () => (
  <div className="pt-32 pb-24 bg-gray-950 min-h-screen animate-in fade-in duration-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-2 block">Upgrades & Mods</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Customisation Hub</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Premium audio, infotainment upgrades, and custom cabin enhancements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {[
          { title: "Android Infotainment", img: "https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?auto=format&fit=crop&w=600&q=80" },
          { title: "Acoustic Soundproofing", img: "https://images.unsplash.com/photo-1605557202138-097825c38883?auto=format&fit=crop&w=600&q=80" },
          { title: "Custom Seat Covers", img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=600&q=80" },
          { title: "7D Floor Mats", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" },
          { title: "Audio Systems (Amps & Subs)", img: "https://images.unsplash.com/photo-1511612260655-6b5420101b0b?auto=format&fit=crop&w=600&q=80" },
          { title: "Two-Wheeler Detailing Bay", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80" }
        ].map((item, idx) => (
          <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 border border-gray-800">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">{item.title}</h3>
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

const ContactSection = () => (
  <div className="bg-gray-900 border-t border-gray-800 py-24" id="contact">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">Visit The Garage</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-lg text-yellow-400 mr-4 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Location</h4>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  79, Bettadasanapura Main Road, Bettadasanapura, Electronic City Phase 1, Bengaluru, Karnataka 560100
                </p>
                <div className="inline-block mt-3 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs rounded uppercase tracking-wider font-semibold">
                  Landmark: Inside HPCL Fuel Station
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-lg text-yellow-400 mr-4 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Operating Hours</h4>
                <p className="text-gray-400">Open 7 days a week</p>
                <p className="text-gray-300 font-semibold mt-1">9:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-lg text-yellow-400 mr-4 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Direct Line</h4>
                <a href="tel:+918095802170" className="text-3xl font-extrabold text-white hover:text-yellow-400 transition-colors">
                  080958 02170
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

        <div className="bg-gray-950 p-2 rounded-3xl border border-gray-800 shadow-2xl h-[450px]">
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

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'service', label: 'General Service' },
    { id: 'bodyshop', label: 'Body Shop & Spa' },
    { id: 'accessories', label: 'Accessories' }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-yellow-400 selection:text-gray-900">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center relative shadow-lg">
                <Car size={24} className="text-gray-900 absolute" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center border-2 border-yellow-400">
                  <Wrench size={10} className="text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tighter text-white">WOW</span>
                <span className="text-sm font-bold tracking-widest text-yellow-400 ml-2 uppercase">Garages</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === item.id 
                      ? 'bg-gray-800 text-yellow-400' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+918095802170" className="flex items-center font-bold text-gray-300 hover:text-yellow-400 transition-colors">
                <Phone size={18} className="mr-2" /> 080958 02170
              </a>
              <Button onClick={() => window.open('https://wa.me/918095802170', '_blank')} className="py-2 px-5 text-sm">
                Book Now
              </Button>
            </div>

            <button 
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gray-950 border-b border-gray-800 shadow-2xl animate-in slide-in-from-top-2">
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 text-left rounded-lg text-lg font-semibold ${
                    activeTab === item.id 
                      ? 'bg-gray-800 text-yellow-400' 
                      : 'text-gray-300 hover:bg-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-800">
                <Button className="w-full justify-center" onClick={() => window.open('https://wa.me/918095802170', '_blank')}>
                  <Phone size={18} className="mr-2" /> Call 080958 02170
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        {activeTab === 'home' && <HomeView setView={handleNavClick} />}
        {activeTab === 'service' && <ServicePricingView />}
        {activeTab === 'bodyshop' && <BodyShopView />}
        {activeTab === 'accessories' && <AccessoriesView />}
      </main>

      <ContactSection />

      <footer className="bg-black py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-white">WOW</span>
              <span className="text-sm font-bold text-yellow-400 uppercase">Garages</span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm mb-6">
              Premier multi-brand car service in Bettadasanapura, Electronic City Phase 1. Specializing in mechanical repair, detailing, ceramic coating, and accessories.
            </p>
            <div className="text-xs text-gray-600">
              <p>SEO Tags: Multi-brand car service Bettadasanapura, Car wash Electronic City Phase 1, Best ceramic coating Bangalore, Car mechanics near me.</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => handleNavClick('service')} className="hover:text-yellow-400">Services & Pricing</button></li>
              <li><button onClick={() => handleNavClick('bodyshop')} className="hover:text-yellow-400">Body Shop & Spa</button></li>
              <li><button onClick={() => handleNavClick('accessories')} className="hover:text-yellow-400">Customisation</button></li>
              <li><span className="text-gray-600 cursor-not-allowed">Car Care Blog & Quests (Coming Soon)</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-400">Vehicle Handling Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-900 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} WOW Garages. All rights reserved.
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="primary" 
          className="rounded-full shadow-[0_10px_40px_rgba(250,204,21,0.3)] px-6 py-4 flex items-center group"
          onClick={() => window.open('https://wa.me/918095802170?text=Hi,%20I%20would%20like%20to%20book%20a%20service/schedule%20a%20pickup.', '_blank')}
        >
          <span className="hidden md:inline-block mr-2 font-extrabold group-hover:scale-105 transition-transform">Book a Service / Schedule Pick-up</span>
          <span className="md:hidden font-extrabold">Book Now</span>
          <ChevronRight size={20} className="ml-1 md:ml-2" />
        </Button>
      </div>
    </div>
  );
}
