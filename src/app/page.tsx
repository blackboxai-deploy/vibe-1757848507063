"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from "next/link";

// Beautiful Nails Slider Component
function NailsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nailImages = [
    {
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=800&fit=crop",
      alt: "Elegant French manicure with gold accents and detailed nail art design"
    },
    {
      src: "https://images.unsplash.com/photo-1599948128020-9bf05d3b33d4?w=1200&h=800&fit=crop",
      alt: "Glamorous long stiletto nails with intricate golden patterns"
    },
    {
      src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1200&h=800&fit=crop",
      alt: "Professional acrylic nails with ombre gradient design"
    },
    {
      src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=1200&h=800&fit=crop",
      alt: "Luxury press-on nails with matte black finish and gold details"
    },
    {
      src: "https://images.unsplash.com/photo-1604654894312-df8cc99c3d0a?w=1200&h=800&fit=crop",
      alt: "Bridal nail art with white base and gold floral patterns"
    },
    {
      src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=1200&h=800&fit=crop",
      alt: "Trendy coffin shaped nails with holographic finish"
    },
    {
      src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1200&h=800&fit=crop",
      alt: "Classic red nails with high-gloss finish"
    },
    {
      src: "https://images.unsplash.com/photo-1604654894378-bda4c2c0e5d1?w=1200&h=800&fit=crop",
      alt: "Modern nude nails with minimalist gold stripe accent"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % nailImages.length);
  }, [nailImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + nailImages.length) % nailImages.length);
  }, [nailImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Mobile touch/swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    
    if (distance > 50) {
      nextSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
    if (distance < -50) {
      prevSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  };

  return (
    <div className="relative w-full h-[45vh] md:h-[60vh] overflow-hidden rounded-2xl shadow-2xl group bg-gray-900 mb-12">
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {nailImages.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b97810f-491e-493c-aae5-ad2979c715fa.png + 1}`;
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border" style={{color: '#C6A664', borderColor: '#C6A664'}}>
              {index + 1} / {nailImages.length}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop navigation arrows */}
      <button
        onClick={() => { prevSlide(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 5000); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm p-3 rounded-full hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block border"
        style={{color: '#C6A664', borderColor: '#C6A664'}}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      <button
        onClick={() => { nextSlide(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 5000); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm p-3 rounded-full hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block border"
        style={{color: '#C6A664', borderColor: '#C6A664'}}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {nailImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border ${
              index === currentSlide 
                ? 'shadow-lg scale-125'
                : 'bg-white/60 hover:bg-white/80 hover:scale-110'
            }`}
            style={{
              backgroundColor: index === currentSlide ? '#C6A664' : undefined,
              borderColor: '#C6A664'
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
        <div 
          className="h-full transition-all duration-300"
          style={{ 
            backgroundColor: '#C6A664',
            width: `${((currentSlide + 1) / nailImages.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
}

// Professional Navigation
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b shadow-lg sticky top-0 z-50" style={{borderColor: '#C6A664'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg"
              alt="Shobha Beauty Studio & Nails Logo"
              className="h-14 w-14 object-contain rounded-lg bg-white/10 p-1 group-hover:bg-white/20 transition-all"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-white group-hover:transition-colors" style={{color: isMenuOpen ? '#C6A664' : '#FFFFFF'}}>
                Shobha Beauty Studio
              </span>
              <span className="font-sans text-sm -mt-1" style={{color: '#C6A664'}}>
                & Nails • Since 2011
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {['Services', 'Pricing', 'Gallery', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white font-medium transition-colors hover:text-yellow-400"
                style={{'--hover-color': '#C6A664'} as any}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+97143591532"
              className="font-medium transition-colors flex items-center space-x-2 hover:text-white"
              style={{color: '#C6A664'}}
            >
              <span>📞</span>
              <span>+971 4 359 1532</span>
            </a>
            <Link
              href="/book"
              className="px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:bg-yellow-500"
              style={{backgroundColor: '#C6A664', color: '#000000'}}
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
            style={{color: '#C6A664'}}
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {['Services', 'Pricing', 'Gallery', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block px-4 py-3 text-white transition-colors rounded-lg hover:bg-white/5"
                style={{'--hover-color': '#C6A664'} as any}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a href="tel:+97143591532" className="block px-4 py-2 font-medium" style={{color: '#C6A664'}}>
                📞 +971 4 359 1532
              </a>
              <Link href="/book" className="block mx-4 mt-3 px-6 py-3 rounded-full font-semibold text-center"
                    style={{backgroundColor: '#C6A664', color: '#000000'}}
                    onClick={() => setIsMenuOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function HomePage() {
  const services = [
    { name: 'Hair Services', icon: '💇‍♀️', description: 'Cutting, coloring, styling, and treatments for all hair types.' },
    { name: 'Makeup', icon: '💄', description: 'Professional makeup for everyday, events, and bridal occasions.' },
    { name: 'Nails', icon: '💅', description: 'Manicures, pedicures, nail art, and press-on nail applications.' },
    { name: 'Facial', icon: '✨', description: 'Deep cleansing, hydrating, and rejuvenating facial treatments.' },
    { name: 'Waxing', icon: '🕯️', description: 'Professional hair removal services for smooth, silky skin.' },
    { name: 'Threading', icon: '🧵', description: 'Precise eyebrow shaping and facial hair removal.' },
    { name: 'Bridal', icon: '👰', description: 'Complete bridal beauty packages for your special day.' }
  ];

  const specialties = [
    { name: 'Hair Straightening', desc: 'Keratin treatments & chemical straightening', price: 'Starting AED 200' },
    { name: 'Blow Dry', desc: 'Professional styling with lasting hold', price: 'Starting AED 50' },
    { name: 'Mehendi', desc: 'Traditional & contemporary henna designs', price: 'Starting AED 30' },
    { name: 'Press-on Nails', desc: 'Instant glamorous nail transformations', price: 'Starting AED 80' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* HERO SECTION - NAILS SLIDER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <NailsSlider />
          
          {/* HEADLINES + CTAs */}
          <div className="text-center space-y-6 fade-in">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Your Beauty Destination
              </h1>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mt-4 font-medium" style={{color: '#C6A664'}}>
                in Bur Dubai
              </h3>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Experience premium beauty services at Shobha Beauty Studio & Nails in Meena Bazaar. 
              Specializing in stunning nail artistry and complete beauty transformations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link
                href="/book"
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:bg-yellow-500"
                style={{backgroundColor: '#C6A664', color: '#000000'}}
              >
                Book Appointment
              </Link>
              <a
                href="tel:+97143591532"
                className="border-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:text-black"
                style={{borderColor: '#C6A664', color: '#C6A664'}}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#C6A664'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span style={{color: '#C6A664'}}>Shobha Beauty Studio</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Expert Professionals', desc: '13+ years experience since 2011' },
              { icon: '🕒', title: 'Always Open', desc: 'Daily 10 AM - 10 PM, 365 days a year' },
              { icon: '✨', title: 'Premium Products', desc: 'High-quality, internationally acclaimed brands' },
              { icon: '📍', title: 'Prime Location', desc: 'Convenient location in Meena Bazaar, Bur Dubai' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold mb-3" style={{color: '#C6A664'}}>{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span style={{color: '#C6A664'}}>Services</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-2" style={{'--hover-border-color': '#C6A664'} as any}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3" style={{color: index === 2 ? '#C6A664' : '#C6A664'}}>
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="py-20" style={{background: 'linear-gradient(90deg, rgba(198,166,100,0.1) 0%, rgba(198,166,100,0.05) 50%, rgba(198,166,100,0.1) 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span style={{color: '#C6A664'}}>Specialties</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-300">
                <h3 className="font-serif text-xl font-semibold mb-2" style={{color: '#C6A664'}}>
                  {specialty.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {specialty.desc}
                </p>
                <p className="font-semibold text-lg" style={{color: '#C6A664'}}>
                  {specialty.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & BOOKING */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Visit Our <span style={{color: '#C6A664'}}>Studio</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl" style={{color: '#C6A664'}}>📍</span>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-300">Meena Bazaar, Bur Dubai, UAE</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-2xl" style={{color: '#C6A664'}}>📞</span>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+97143591532" className="font-semibold hover:text-yellow-400" style={{color: '#C6A664'}}>
                      +971 4 359 1532
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-2xl" style={{color: '#C6A664'}}>🕒</span>
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <p className="text-gray-300">Daily: 10:00 AM - 10:00 PM</p>
                    <p className="text-sm" style={{color: '#C6A664'}}>Open 365 days a year</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Link
                  href="/book"
                  className="block w-full text-center px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:bg-yellow-500"
                  style={{backgroundColor: '#C6A664', color: '#000000'}}
                >
                  📅 Book Appointment
                </Link>
                <a
                  href="https://wa.me/97143591532?text=Hello!%20मुझे%20appointment%20book%20करनी%20है%20Shobha%20Beauty%20Studio%20में।%20कृपया%20availability%20बताएं।%20Thank%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border-2 text-center px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black"
                  style={{borderColor: '#C6A664', color: '#C6A664'}}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#C6A664'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
            
            <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5441087465467!2d55.26834641501438!3d25.259869483905426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xa5286883d5dd8594!2sMeena%20Bazaar%2C%20Bur%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                title="Shobha Beauty Studio Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg"
                  alt="Shobha Beauty Studio Logo"
                  className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1"
                />
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Shobha Beauty Studio & Nails</h3>
                  <p className="text-sm" style={{color: '#C6A664'}}>Since 2011</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted beauty destination in Bur Dubai, specializing in nail artistry and complete beauty transformations.
              </p>
              <a href="https://instagram.com/shobhasaloon" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400" style={{color: '#C6A664'}}>
                📸 @shobhasaloon
              </a>
            </div>
            
            <div>
              <h4 className="font-serif text-lg font-semibold mb-4" style={{color: '#C6A664'}}>Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 Meena Bazaar, Bur Dubai, UAE</p>
                <p>📞 <a href="tel:+97143591532" className="hover:text-yellow-400" style={{color: '#C6A664'}}>+971 4 359 1532</a></p>
                <p>✉️ <a href="mailto:Shobhabeautysaloon@gmail.com" className="hover:text-yellow-400" style={{color: '#C6A664'}}>Shobhabeautysaloon@gmail.com</a></p>
                <p>🕒 Daily: 10 AM - 10 PM</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg font-semibold mb-4" style={{color: '#C6A664'}}>Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</Link></li>
                <li><Link href="/pricing" className="text-gray-300 hover:text-yellow-400 transition-colors">Pricing</Link></li>
                <li><Link href="/gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">Gallery</Link></li>
                <li><Link href="/book" className="hover:text-yellow-400 transition-colors" style={{color: '#C6A664'}}>Book Appointment</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shobha Beauty Studio & Nails. All rights reserved.</p>
            <p className="mt-2 text-sm" style={{color: '#C6A664'}}>🌐 www.shobhabeautystudio.com • Serving Since 2011</p>
          </div>
        </div>
      </footer>
    </div>
  );
}