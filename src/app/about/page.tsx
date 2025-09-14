"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Navigation */}
      <nav className="bg-black border-b border-yellow-600/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg" 
                alt="Shobha Beauty Studio Logo" 
                className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1"
              />
              <div>
                <h1 className="font-bold text-xl text-white">Shobha Beauty Studio</h1>
                <p style={{color: '#C6A664'}} className="text-sm">& Nails • Since 2011</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+97143591532" 
                className="hidden md:flex items-center space-x-2 hover:text-white transition-colors" 
                style={{color: '#C6A664'}}
              >
                <span>📞</span>
                <span>+971 4 359 1532</span>
              </a>
              <Link 
                href="/" 
                className="px-6 py-2 rounded-full font-semibold transition-all" 
                style={{backgroundColor: '#C6A664', color: '#000000'}}
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #111111, #1a1a1a)'}}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            About Shobha Beauty Studio
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted beauty destination in the heart of Bur Dubai, dedicated to enhancing 
            your natural beauty with professional care and exceptional service since 2011.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
              Our <span style={{color: '#C6A664'}}>Story</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 text-left max-w-3xl mx-auto">
              <p>
                Founded in 2011 in the bustling heart of Meena Bazaar, Bur Dubai, 
                Shobha Beauty Studio & Nails began as a dream to provide exceptional 
                beauty services to the diverse and vibrant community of Dubai.
              </p>
              <p>
                What started as a small studio has grown into one of Bur Dubai's 
                most trusted beauty destinations, serving thousands of satisfied 
                clients over the past 13+ years. Our commitment to quality, 
                professionalism, and customer satisfaction has been the cornerstone 
                of our success.
              </p>
              <p>
                Today, we specialize in professional nail artistry, hair straightening, 
                expert blow drying, and intricate mehendi designs. Each service is 
                performed with meticulous attention to detail and a passion for perfection.
              </p>
              <p>
                We are proud to serve as a women-only beauty sanctuary, providing a 
                comfortable and private environment where our clients can relax and 
                enjoy their beauty treatments with complete peace of mind.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: '#C6A664', color: '#000000'}}>
                <div className="text-3xl font-bold mb-2">13+</div>
                <div className="text-sm font-medium">Years Since 2011</div>
              </div>
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: '#C6A664', color: '#000000'}}>
                <div className="text-3xl font-bold mb-2">8000+</div>
                <div className="text-sm font-medium">Happy Clients</div>
              </div>
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: '#C6A664', color: '#000000'}}>
                <div className="text-3xl font-bold mb-2">365</div>
                <div className="text-sm font-medium">Days Open</div>
              </div>
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: '#C6A664', color: '#000000'}}>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm font-medium">Women Only</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Our Mission & <span style={{color: '#C6A664'}}>Values</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Guided by our core values, we strive to provide exceptional beauty services 
              that enhance confidence and celebrate individual beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-600/50 transition-all text-center">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="font-serif font-semibold text-xl text-white mb-4">
                Excellence
              </h3>
              <p className="text-gray-300">
                We maintain the highest standards in all our services, using premium 
                products and advanced techniques to deliver outstanding results.
              </p>
            </div>

            {/* Trust */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-600/50 transition-all text-center">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="font-serif font-semibold text-xl text-white mb-4">
                Trust & Safety
              </h3>
              <p className="text-gray-300">
                Your safety and satisfaction are our top priorities. We maintain strict 
                hygiene standards and use only certified, safe products.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-600/50 transition-all text-center">
              <div className="text-5xl mb-6">💡</div>
              <h3 className="font-serif font-semibold text-xl text-white mb-4">
                Innovation
              </h3>
              <p className="text-gray-300">
                We stay updated with the latest beauty trends and techniques, 
                continuously improving our services to meet evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Excellence */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
            Our <span style={{color: '#C6A664'}}>Excellence</span>
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Professional Beauty Services
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We pride ourselves on delivering exceptional beauty services with a focus on 
                quality, hygiene, and customer satisfaction. Our team of skilled professionals 
                is dedicated to making every client feel beautiful and confident.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Specialized Expertise
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our specialty services include professional nail artistry, precision hair straightening, 
                expert blow dry styling, and traditional mehendi art. Each service is performed using 
                premium products and the latest techniques to ensure lasting, beautiful results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facility & Standards */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Our Premium <span style={{color: '#C6A664'}}>Facility</span>
            </h2>
            <p className="text-lg text-gray-300">
              A modern, comfortable space designed exclusively for women's beauty and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#C6A664'}}>
                  <span className="text-black text-lg">🏢</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Modern Equipment</h3>
              </div>
              <p className="text-gray-300">
                State-of-the-art professional equipment and tools for all our services, 
                ensuring the best results and complete comfort for our valued clients.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#C6A664'}}>
                  <span className="text-black text-lg">🧼</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Hygiene Standards</h3>
              </div>
              <p className="text-gray-300">
                Strict hygiene protocols with sanitized equipment, clean workspace, 
                and comprehensive safety measures for every service and client.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#C6A664'}}>
                  <span className="text-black text-lg">💺</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Comfortable Environment</h3>
              </div>
              <p className="text-gray-300">
                Relaxing atmosphere with comfortable seating, pleasant ambiance, 
                and a welcoming space designed for women's comfort and privacy.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#C6A664'}}>
                  <span className="text-black text-lg">📍</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Prime Location</h3>
              </div>
              <p className="text-gray-300">
                Conveniently located in Meena Bazaar, Bur Dubai, with easy access 
                and nearby parking facilities for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Certifications & <span style={{color: '#C6A664'}}>Recognition</span>
            </h2>
            <p className="text-lg text-gray-300">
              Our commitment to excellence recognized through professional certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="font-semibold text-white mb-2">Professional Certification</h3>
              <p className="text-sm text-gray-300">Certified beauty professionals with continuous training</p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-white mb-2">Safety Standards</h3>
              <p className="text-sm text-gray-300">Compliant with UAE health and safety regulations</p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-semibold text-white mb-2">Client Satisfaction</h3>
              <p className="text-sm text-gray-300">95% customer satisfaction rate and positive reviews</p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-semibold text-white mb-2">Community Trust</h3>
              <p className="text-sm text-gray-300">Trusted by Bur Dubai community since 2011 - 13+ years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #C6A664, #D4B570)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Join thousands of satisfied clients who trust Shobha Beauty Studio for their beauty needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors"
            >
              Book Your Visit
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}