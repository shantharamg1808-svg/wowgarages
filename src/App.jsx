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
  Activity,
  Shield,
  ThumbsUp,
  Wrench as Tool,
  Users,
  Truck,
  FileText,
  CalendarCheck,
  Sun,
  Moon
} from 'lucide-react';

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', isDark = true, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg transition-all duration-300 transform active:scale-95";
  const variants = {
    primary: "bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-lg hover:shadow-xl",
    secondary: isDark 
      ? "bg-gray-800 text-white hover:bg-gray-700 border border-gray-600" 
      : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300",
    outline: isDark 
      ? "bg-transparent text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900" 
      : "bg-transparent text-yellow-600 border-2 border-yellow-500 hover:bg-yellow-400 hover:text-gray-900",
    whatsapp: "bg-green-500 text-white hover:bg-green-600 shadow-lg"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const ReviewMarquee = ({ isDark }) => {
  const reviews = [
    "Polite and helpful staff! Excellent service.",
    "Neat and clean work done with washing and polishing. Highly recommend.",
    "No upselling or unwanted replacements. Very honest garage.",
    "Best ceramic coating in Bangalore! My SUV looks brand new.",
    "Fixed my AC perfectly in record time."
  ];

  return (
    <div className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border-y py-3 overflow-hidden relative flex items-center transition-colors duration-300`}>
      <div className={`absolute left-0 z-10 w-16 h-full bg-gradient-to-r ${isDark ? 'from-gray-900' : 'from-gray-50'} to-transparent pointer-events-none`}></div>
      <div className={`absolute right-0 z-10 w-16 h-full bg-gradient-to-l ${isDark ? 'from-gray-900' : 'from-gray-50'} to-transparent pointer-events-none`}></div>
      
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        {[...reviews, ...reviews, ...reviews].map((review, i) => (
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
      {/* After Image (Background) */}
      <img src={afterImage} alt="After Repair" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      
      {/* Before Image (Foreground, Clipped) */}
      <img 
        src={beforeImage} 
        alt="Before Repair" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />

      {/* Slider Line */}
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

// --- Main Views ---

const HomeView = ({ setView, isDark }) => (
  <div className="animate-in fade-in duration-500">
    {/* Hero Section */}
    <div className={`relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden transition-colors duration-300`}>
      <div className={`absolute inset-0 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <img 
          src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Premium Garage Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-950 via-gray-900/60 to-gray-900/40' : 'from-white via-white/80 to-white/40'}`}></div>
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
          <Button isDark={isDark} onClick={() => window.open('https://wa.me/918095802170?text=Hi,%20I%20want%20to%20book%20an%20appointment.', '_blank')} className="text-lg px-8 py-4">
            <CalendarCheck size={20} className="mr-2" /> Book Appointment
          </Button>
          <Button isDark={isDark} variant="outline" className={`text-lg px-8 py-4 backdrop-blur-sm ${isDark ? 'bg-gray-900/50' : 'bg-white/50'}`} onClick={() => window.open('https://wa.me/918095802170', '_blank')}>
            <Phone size={20} className="mr-2" /> 080958 02170
          </Button>
        </div>
      </div>
    </div>

    <ReviewMarquee isDark={isDark} />

    {/* Service Quick Links */}
    <div className={`py-24 transition-colors duration-300 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Expertise</h2>
          <p className={`max-w-2xl mx-auto transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Comprehensive automotive solutions delivered with precision engineering and care.</p>
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

    {/* Brands Serviced Marquee */}
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

const ServicePricingView = ({ isDark }) => {
  const plans = [
    { type: 'Hatchback', price: '₹3,499', popular: false },
    { type: 'Sedan', price: '₹4,499', popular: true },
    { type: 'SUV / Premium', price: '₹5,999', popular: false }
  ];

  return (
    <div className={`pt-32 pb-24 min-h-screen animate-in fade-in duration-500 transition-colors ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2 block">Mechanical Repair</span>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Periodic Service Packages</h1>
          <p className={`max-w-2xl mx-auto text-lg transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Transparent pricing. No hidden fees. 40-point diagnostic health scan included with every service.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, idx) => (
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
                {[
                  "Engine Oil Flushing & Replacement",
                  "Oil Filter Upgrade",
                  "Air & Cabin Filter Replacement",
                  "Coolant Top-up",
                  "40-Point Diagnostic Scan",
                  "Brake Pad Inspection & Skimming"
                ].map((feature, i) => (
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
            {[
              "General Car Service", "Engine Repair & Overhauling", "Computer Scanning & Diagnostics", 
              "Brake Service", "Suspension & Steering Work", "Oil Change & Maintenance", 
              "Car AC Service", "Battery & Tyre Replacement", "Wheel Alignment & Balancing", 
              "Denting & Painting", "Insurance Claim Assistance"
            ].map((item, idx) => (
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
          <Button isDark={isDark} variant="whatsapp" className="shrink-0" onClick={() => window.open('https://wa.me/918095802170?text=Hi%20WOW%20Garages,%20I%20need%20a%20price%20estimate%20for%20a%20service.', '_blank')}>
            <MessageCircle size={20} className="mr-2" />
            Get Free Price Estimate
          </Button>
        </div>
      </div>
    </div>
  );
};

const BodyShopView = ({ isDark }) => (
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
            <Button isDark={isDark} onClick={() => window.open('https://wa.me/918095802170?text=Hi,%20I%20want%20a%20quote%20for%20paint/dent%20repair.%20Here%20are%20my%20photos...', '_blank')}>
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

const AccessoriesView = ({ isDark }) => (
  <div className={`pt-32 pb-24 min-h-screen animate-in fade-in duration-500 transition-colors ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2 block">Upgrades & Mods</span>
        <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Customisation Hub</h1>
        <p className={`max-w-2xl mx-auto text-lg transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Premium audio, infotainment upgrades, and custom cabin enhancements.</p>
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
          <div key={idx} className={`group relative rounded-2xl overflow-hidden aspect-[4/3] border transition-colors ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'}`}>
            <img src={item.img} alt={item.title} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100 ${isDark ? 'opacity-70' : 'opacity-90'}`} />
            <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-950' : 'from-gray-900/90'} via-transparent to-transparent`}></div>
            <h3 className={`absolute bottom-6 left-6 text-xl font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button isDark={isDark} onClick={() => window.open('https://wa.me/918095802170?text=Hi,%20I%20want%20to%20enquire%20about%20fitment%20compatibility%20for%20my%20car.', '_blank')} className="text-lg">
          Enquire About Fitment Compatibility
        </Button>
      </div>
    </div>
  </div>
);

const ContactSection = ({ isDark }) => (
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
                <a href="tel:+918095802170" className={`flex items-center font-bold transition-colors ${isDark ? 'text-black-300 hover:text-yellow-400' : 'text-gray-900 hover:text-yellow-600'}`}>
  <Phone size={18} className="mr-2" /> 080958 02170
</a>
              </div>
            </div>
          </div>
          
          <Button 
            isDark={isDark}
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

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

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
    <div className={`min-h-screen font-sans selection:bg-yellow-400 selection:text-gray-900 transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (isDark ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm') : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center relative shadow-lg">
                <Car size={24} className="text-gray-900 absolute" />
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center border-2 border-yellow-400 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                  <Wrench size={10} className={isDark ? "text-white" : "text-gray-900"} />
                </div>
              </div>
              <div>
                <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? (isDark ? 'text-white' : 'text-gray-900') : 'text-white'}`}>WOW</span>
                <span className={`text-sm font-bold tracking-widest ml-2 uppercase transition-colors ${scrolled ? (isDark ? 'text-yellow-400' : 'text-yellow-500') : 'text-yellow-400'}`}>Garages</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
  {navItems.map((item) => (
    <button
      key={item.id}
      onClick={() => handleNavClick(item.id)}
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
        activeTab === item.id 
          ? (isDark ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-100 text-yellow-700')
          : (isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' : 'text-gray-900 hover:text-black hover:bg-gray-100')
      }`}
    >
      {item.label}
    </button>
  ))}
</div>

            <div className="hidden lg:flex items-center gap-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-colors ${scrolled ? (isDark ? 'text-gray-400 hover:bg-gray-800 hover:text-yellow-400' : 'text-gray-500 hover:bg-gray-100 hover:text-yellow-500') : 'text-gray-300 hover:bg-white/10 hover:text-yellow-400'}`}
                title="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a href="tel:+918095802170" className={`flex items-center font-bold transition-colors ${scrolled ? (isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600') : 'text-gray-300 hover:text-yellow-400'}`}>
                <Phone size={18} className="mr-2" /> 080958 02170
              </a>
              <Button isDark={isDark} onClick={() => window.open('https://wa.me/918095802170', '_blank')} className="py-2 px-5 text-sm">
                Book Now
              </Button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-colors ${scrolled ? (isDark ? 'text-gray-400' : 'text-gray-500') : 'text-gray-300'}`}
              >
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button 
                className={`p-2 transition-colors ${scrolled ? (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900') : 'text-gray-300 hover:text-white'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden absolute top-full left-0 w-full border-b shadow-2xl animate-in slide-in-from-top-2 ${isDark ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
  <button
    key={item.id}
    onClick={() => handleNavClick(item.id)}
    className={`px-4 py-3 text-left rounded-lg text-lg font-semibold ${
      activeTab === item.id 
        ? (isDark ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-50 text-yellow-700')
        : (isDark ? 'text-gray-300 hover:bg-gray-900' : 'text-gray-900 hover:text-black hover:bg-gray-50')
    }`}
  >
    {item.label}
  </button>
))}
              <div className={`pt-4 mt-2 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                <Button isDark={isDark} className="w-full justify-center" onClick={() => window.open('https://wa.me/918095802170', '_blank')}>
                  <Phone size={18} className="mr-2" /> Call 080958 02170
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main>
        {activeTab === 'home' && <HomeView setView={handleNavClick} isDark={isDark} />}
        {activeTab === 'service' && <ServicePricingView isDark={isDark} />}
        {activeTab === 'bodyshop' && <BodyShopView isDark={isDark} />}
        {activeTab === 'accessories' && <AccessoriesView isDark={isDark} />}
      </main>

      <ContactSection isDark={isDark} />

      {/* Footer */}
      <footer className={`py-12 border-t transition-colors duration-300 ${isDark ? 'bg-black border-gray-900' : 'bg-gray-100 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-2xl font-black transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>WOW</span>
              <span className={`text-sm font-bold uppercase transition-colors ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Garages</span>
            </div>
            <p className={`text-sm max-w-sm mb-6 transition-colors ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              Premier multi-brand car service in Bettadasanapura, Electronic City Phase 1. Specializing in mechanical repair, detailing, ceramic coating, and accessories.
            </p>
            <div className={`text-xs transition-colors ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              <p>SEO Tags: Multi-brand car service Bettadasanapura, Car wash Electronic City Phase 1, Best ceramic coating Bangalore, Car mechanics near me.</p>
            </div>
          </div>
          <div>
            <h4 className={`font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className={`space-y-2 text-sm transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><button onClick={() => handleNavClick('service')} className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Services & Pricing</button></li>
              <li><button onClick={() => handleNavClick('bodyshop')} className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Body Shop & Spa</button></li>
              <li><button onClick={() => handleNavClick('accessories')} className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Customisation</button></li>
              <li><span className={`cursor-not-allowed ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Car Care Blog & Quests (Coming Soon)</span></li>
            </ul>
          </div>
          <div>
            <h4 className={`font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Legal</h4>
            <ul className={`space-y-2 text-sm transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Privacy Policy</a></li>
              <li><a href="#" className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Terms of Service</a></li>
              <li><a href="#" className={isDark ? "hover:text-yellow-400" : "hover:text-yellow-600"}>Vehicle Handling Policy</a></li>
            </ul>
          </div>
        </div>
        <div className={`max-w-7xl mx-auto px-4 mt-12 pt-8 border-t text-center text-sm transition-colors ${isDark ? 'border-gray-900 text-gray-600' : 'border-gray-200 text-gray-500'}`}>
          © {new Date().getFullYear()} WOW Garages. All rights reserved.
        </div>
      </footer>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          isDark={isDark}
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
