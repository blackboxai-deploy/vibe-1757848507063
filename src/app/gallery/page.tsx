"use client";

import { useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Enhanced nail gallery with MORE professional nail images
  const nailDesigns = [
    // NAIL ART COLLECTION - 20+ DESIGNS
    {
      id: 1,
      category: "nails",
      title: "Elegant French Manicure",
      description: "Classic French tips with gold accent details",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/79713e42-5b7c-4133-a408-660ac0d79781.png",
      alt: "Elegant French manicure with gold accents and professional finish"
    },
    {
      id: 2,
      category: "nails",
      title: "Glamorous Stiletto Nails",
      description: "Long stiletto nails with rhinestone embellishments",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/905e1ed0-8ae0-4fde-b7aa-2815fb0d4615.png",
      alt: "Glamorous long stiletto nails with golden patterns and rhinestones"
    },
    {
      id: 3,
      category: "nails",
      title: "Ombre Gradient Design",
      description: "Professional acrylic nails with smooth color transitions",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/74dc1982-c735-44c7-85eb-883e95aaddab.png",
      alt: "Professional ombre gradient nail design with smooth transitions"
    },
    {
      id: 4,
      category: "nails",
      title: "Matte Black & Gold",
      description: "Luxury press-on nails with matte finish and gold leaf",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8445ae53-89ef-4ef7-b4a3-203b7da4d520.png",
      alt: "Luxury matte black nails with delicate gold leaf details"
    },
    {
      id: 5,
      category: "nails",
      title: "Crystal Elegance",
      description: "Swarovski crystals embedded in gel polish",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f8939cb-79b4-40e4-966e-61a6cd097a5c.png",
      alt: "Crystal elegance nails with Swarovski crystals"
    },
    {
      id: 6,
      category: "nails",
      title: "Holographic Coffin Nails",
      description: "Trendy coffin shape with holographic finish",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/85653eb3-c305-4c28-94b9-e7800e7615b0.png",
      alt: "Holographic coffin shaped nails with rainbow finish"
    },
    {
      id: 7,
      category: "nails",
      title: "Classic Red Elegance",
      description: "High-gloss red nails with perfect cuticle care",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/37a4d72b-60f0-4c7b-a2dd-d458c3bf4f6a.png",
      alt: "Classic red nails with high-gloss finish and perfect cuticles"
    },

    {
      id: 9,
      category: "nails",
      title: "3D Flower Art",
      description: "Hand-sculpted 3D flowers with pearl centers",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6ba4818f-f3dc-4322-97c1-b39c0634a8cf.png",
      alt: "3D flower nail art with hand-sculpted petals and pearl centers"
    },
    {
      id: 10,
      category: "nails",
      title: "Glitter Galaxy",
      description: "Sparkling glitter nails with cosmic design",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d5f4a567-f075-4870-91ae-e4049aaccd12.png",
      alt: "Glitter galaxy nails with cosmic design and sparkles"
    },
    {
      id: 11,
      category: "nails",
      title: "Marble Masterpiece",
      description: "Hand-painted marble effect with gold veining",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f5afabc9-df95-400d-b3bc-6af0ec8525ce.png",
      alt: "Hand-painted marble effect nails with gold veining"
    },
    {
      id: 12,
      category: "nails",
      title: "Geometric Modern",
      description: "Contemporary geometric patterns in black and gold",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3073bbf4-0d18-4c13-91e1-3271659f00ac.png",
      alt: "Modern geometric nail art with black and gold patterns"
    },
    {
      id: 13,
      category: "nails",
      title: "Floral Fantasy",
      description: "Delicate hand-painted flowers with vine details",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4fc7af98-83ca-4a32-b2e1-612c39da1e30.png",
      alt: "Floral fantasy nails with hand-painted flowers and vines"
    },
    {
      id: 14,
      category: "nails",
      title: "Chrome Mirror Finish",
      description: "Ultra-modern chrome nails with mirror-like shine",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03803763-b773-4ff2-9985-71c73c2e7ed0.png",
      alt: "Chrome mirror finish nails with ultra-modern shine"
    },
    {
      id: 15,
      category: "nails",
      title: "Vintage Lace Pattern",
      description: "Intricate lace-inspired designs with pearl accents",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/34084dcd-dae0-4edb-b73e-00f6bf86d70d.png",
      alt: "Vintage lace pattern nails with pearl accents"
    },
    {
      id: 16,
      category: "nails",
      title: "Tropical Paradise",
      description: "Palm leaves and sunset gradient design",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1803abc7-a8e6-4595-9e44-b06d85ac1650.png",
      alt: "Tropical paradise nails with palm leaves and sunset"
    },
    {
      id: 17,
      category: "nails",
      title: "Royal Blue & Gold",
      description: "Deep blue base with intricate gold patterns",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a233357a-5561-473b-b5c0-f9ee3f0644e8.png",
      alt: "Royal blue nails with intricate gold patterns"
    },
    {
      id: 18,
      category: "nails",
      title: "Pastel Rainbow",
      description: "Soft pastel colors in rainbow gradient",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/12514bcc-a7e8-4667-a296-a31b6cc7d406.png",
      alt: "Pastel rainbow gradient nails with soft colors"
    },
    {
      id: 19,
      category: "nails",
      title: "Diamond Dust Effect",
      description: "Shimmering diamond dust over clear base",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd188a15-e7f9-4a8b-b4f8-3fdbec1da8fe.png",
      alt: "Diamond dust effect nails with shimmering finish"
    },
    {
      id: 20,
      category: "nails",
      title: "Abstract Art",
      description: "Modern abstract patterns with bold colors",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4abb6bd-e703-4034-afe6-88e24e15e7a6.png",
      alt: "Abstract art nails with modern patterns and bold colors"
    },
    {
      id: 21,
      category: "bridal",
      title: "Bridal Nail Art",
      description: "White base with intricate gold floral patterns",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/729ed7d1-d583-4a4e-bd94-5da25672c2bb.png",
      alt: "Bridal nail art with white base and gold floral patterns"
    },
    {
      id: 22,
      category: "bridal",
      title: "Wedding Day Special",
      description: "Elegant bridal nails with pearl and crystal accents",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0d204d19-b49c-4dd0-ab71-d8331c592367.png",
      alt: "Wedding day special nails with pearl and crystal accents"
    },
    {
      id: 23,
      category: "bridal",
      title: "Henna-Inspired Nails",
      description: "Nail art inspired by traditional mehendi patterns",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f07b11a-ba58-4424-adae-0b73f201cc8f.png",
      alt: "Henna-inspired nail art with traditional mehendi patterns"
    },
    {
      id: 24,
      category: "hair",
      title: "Hair Straightening Result",
      description: "Before and after hair straightening transformation",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/75852f94-5d47-49e4-8f9e-65ad4611cacc.png",
      alt: "Hair straightening transformation showing before and after results"
    },
    {
      id: 25,
      category: "hair",
      title: "Professional Blow Dry",
      description: "Volume and style blow dry finishing",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a6c26193-964e-4be6-bc94-56b216318294.png",
      alt: "Professional blow dry with volume and style finishing"
    },
    {
      id: 26,
      category: "mehendi",
      title: "Traditional Mehendi",
      description: "Intricate traditional henna patterns for celebrations",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3dd9b292-18d5-4d5d-a886-1e2e87382e03.png",
      alt: "Traditional mehendi with intricate henna patterns"
    },
    {
      id: 27,
      category: "mehendi",
      title: "Bridal Mehendi Design",
      description: "Elaborate bridal henna with floral motifs",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/82787929-69db-4fa9-a4aa-514588dcb1e5.png",
      alt: "Bridal mehendi design with elaborate floral motifs"
    },
    {
      id: 28,
      category: "mehendi",
      title: "Contemporary Henna",
      description: "Modern geometric henna designs",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e85856bd-ec11-4ade-bfc4-f0d8e67db929.png",
      alt: "Contemporary henna with modern geometric designs"
    }
  ];

  const filters = [
    { id: "all", name: "All Work", count: nailDesigns.length },
    { id: "nails", name: "Nail Art", count: nailDesigns.filter(item => item.category === "nails").length },
    { id: "bridal", name: "Bridal", count: nailDesigns.filter(item => item.category === "bridal").length },
    { id: "hair", name: "Hair", count: nailDesigns.filter(item => item.category === "hair").length },
    { id: "mehendi", name: "Mehendi", count: nailDesigns.filter(item => item.category === "mehendi").length }
  ];

  const filteredDesigns = activeFilter === "all" 
    ? nailDesigns 
    : nailDesigns.filter(design => design.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Navigation */}
      <nav className="bg-black border-b border-yellow-600/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img src="https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg" 
                   alt="Shobha Beauty Studio Logo" 
                   className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1" />
              <div>
                <h1 className="font-bold text-xl text-white">Shobha Beauty Studio</h1>
                <p style={{color: '#C6A664'}} className="text-sm">& Nails • Since 2011</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/book" className="px-6 py-2 rounded-full font-semibold transition-all" style={{backgroundColor: '#C6A664', color: '#000000'}}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="py-16" style={{background: 'linear-gradient(135deg, #111111, #1a1a1a)'}}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Our Work Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the beautiful transformations we create every day. From stunning nail art 
            to complete beauty makeovers, see the quality that makes us Bur Dubai's premier destination.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'text-black shadow-lg'
                    : 'text-gray-300 border-2 hover:text-white'
                }`}
                style={{
                  backgroundColor: activeFilter === filter.id ? '#C6A664' : 'transparent',
                  borderColor: '#C6A664'
                }}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDesigns.map((design) => (
              <div key={design.id} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105" style={{backgroundColor: '#1a1a1a'}}>
                <div className="relative overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/24ec7eef-5bb6-4e3d-9504-e5c7eb92988d.png '+')}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-lg font-semibold text-white mb-1">
                        {design.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {design.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-black" style={{backgroundColor: '#C6A664'}}>
                    {design.category.charAt(0).toUpperCase() + design.category.slice(1)}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-white mb-2">
                    {design.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {design.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16" style={{background: 'linear-gradient(135deg, #C6A664, #D4B570)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Book your appointment today and let us create your perfect look
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
            >
              Book Appointment
            </Link>
            <a
              href="https://wa.me/97143591532?text=Hello!%20मुझे%20nail%20art%20appointment%20book%20करनी%20है।%20Gallery%20देखकर%20बहुत%20अच्छा%20लगा।%20कृपया%20availability%20बताएं।%20Thank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all duration-300"
            >
              WhatsApp Book Now
            </a>
          </div>
        </div>
      </section>

      {/* PREMIUM NAIL ART SHOWCASE */}
      <section className="py-20 bg-gradient-to-r from-yellow-600/10 via-yellow-600/5 to-yellow-600/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              💅 <span style={{color: '#C6A664'}}>Our Nail Art Specialties</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover our signature nail designs that make Shobha Beauty Studio the premier destination for nail artistry in Bur Dubai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Nail Designs */}
            {[
              {
                title: "Signature Press-on Collection",
                description: "Our most popular press-on nail designs with instant glamour",
                image: "https://storage.googleapis.com/workspace-ai-generated/image-signature-press-on-collection.jpg",
                count: "50+ Designs"
              },
              {
                title: "Custom Hand-Painted Art",
                description: "Unique artistic designs created specifically for each client",
                image: "https://storage.googleapis.com/workspace-ai-generated/image-custom-hand-painted-art.jpg",
                count: "Unlimited Creativity"
              },
              {
                title: "Bridal Nail Perfection",
                description: "Elegant bridal nail art for your special day",
                image: "https://storage.googleapis.com/workspace-ai-generated/image-bridal-nail-perfection.jpg",
                count: "Wedding Specialists"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2e0fef63-9f39-4ce8-b6d5-42da1ac31806.png '+')}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-yellow-600/30">
                    <h3 className="font-serif text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 font-semibold text-sm">{feature.count}</span>
                      <Link href="/book" className="bg-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-all">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Integration */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Follow Us for More Inspiration
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get daily beauty inspiration and see our latest work on Instagram
          </p>
          <a
            href="https://instagram.com/shobhasaloon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            style={{background: 'linear-gradient(45deg, #E1306C, #833AB4)', color: '#FFFFFF'}}
          >
            <span className="text-2xl">📸</span>
            <span>@shobhasaloon</span>
          </a>
        </div>
      </section>

    </div>
  );
}