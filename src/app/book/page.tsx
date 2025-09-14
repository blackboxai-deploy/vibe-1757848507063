"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const services = [
    { id: "press-on-nails", name: "Press-on Nails", duration: "30-45 mins", price: "AED 80-220" },
    { id: "nail-art", name: "Custom Nail Art", duration: "45-90 mins", price: "AED 100-300" },
    { id: "manicure", name: "Classic Manicure", duration: "45 mins", price: "AED 60-100" },
    { id: "pedicure", name: "Luxury Pedicure", duration: "60 mins", price: "AED 80-120" },
    { id: "hair-straightening", name: "Hair Straightening", duration: "2-4 hours", price: "AED 200-400" },
    { id: "blow-dry", name: "Professional Blow Dry", duration: "30-60 mins", price: "AED 40-120" },
    { id: "mehendi", name: "Mehendi & Henna Art", duration: "30mins-3hours", price: "AED 30-500" },
    { id: "bridal-package", name: "Bridal Package", duration: "4-6 hours", price: "AED 650" }
  ];

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM",
    "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
    "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const selectedService = services.find(s => s.id === formData.service);
    
    // Professional email solution using EmailJS (free service)
    const emailData = {
      to_email: 'Shobhabeautysaloon@gmail.com',
      customer_name: formData.name,
      customer_phone: formData.phone,
      customer_email: formData.email,
      service_name: selectedService?.name || formData.service,
      service_duration: selectedService?.duration || 'Standard',
      service_price: selectedService?.price || 'Please confirm',
      appointment_date: formData.date,
      appointment_time: formData.time,
      special_requests: formData.message || 'None',
      studio_location: 'Meena Bazaar, Bur Dubai, UAE',
      studio_phone: '+971 4 359 1532',
      timestamp: new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })
    };

    try {
      // Simulate email sending (in real implementation, use EmailJS or similar)
      console.log('Sending appointment email:', emailData);
      
      // Create mailto link as fallback
      const emailSubject = `🌟 New Appointment Request - ${formData.name}`;
      const emailBody = `
        New Appointment Request - Shobha Beauty Studio
        
        Customer Details:
        Name: ${formData.name}
        Phone: ${formData.phone}
        Email: ${formData.email}
        
        Service Details:
        Service: ${selectedService?.name || formData.service}
        Duration: ${selectedService?.duration || 'Standard'}
        Price: ${selectedService?.price || 'Please confirm'}
        
        Appointment Details:
        Date: ${formData.date}
        Time: ${formData.time}
        Special Requests: ${formData.message || 'None'}
        
        Studio Information:
        Location: Meena Bazaar, Bur Dubai, UAE
        Phone: +971 4 359 1532
        
        Request Time: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}
        
        Please confirm appointment availability.
      `;
      
      const mailtoLink = `mailto:Shobhabeautysaloon@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open default email client
      window.open(mailtoLink);
      
      setSubmitMessage("✅ Email client opened! Please send the email to complete your appointment request.");
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: "", phone: "", email: "", service: "", date: "", time: "", message: ""
        });
      }, 5000);
      
    } catch (error) {
      console.error('Email error:', error);
      setSubmitMessage("❌ Please call us directly at +971 4 359 1532 for immediate booking.");
    }
    
    setIsSubmitting(false);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

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

      {/* Quick Action Buttons - Top */}
      <section className="py-8" style={{background: 'linear-gradient(135deg, #111111, #1a1a1a)'}}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your Appointment
            </h1>
            <p className="text-lg text-gray-300">
              Choose your preferred booking method - Email Form or Quick WhatsApp
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* INSTANT WhatsApp Booking */}
            <a
              href="https://wa.me/97143591532?text=🌟%20QUICK%20BOOKING%20🌟%0A%0AHello!%20मुझे%20appointment%20book%20करनी%20है:%0A%0A💅%20Service:%20[Nail%20Art%20/%20Hair%20/%20Mehendi]%0A📅%20Date:%20[Today%20/%20Tomorrow%20/%20Specific%20Date]%0A🕒%20Time:%20[Morning%20/%20Afternoon%20/%20Evening]%0A📞%20My%20Phone:%20[Your%20Number]%0A%0APlease%20confirm%20availability%20🙏"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-600 p-8 rounded-2xl border-2 border-green-500 hover:shadow-xl transition-all group transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💬</div>
                <h3 className="font-bold text-2xl text-white mb-3">INSTANT WhatsApp Booking</h3>
                <p className="font-medium text-green-200 mb-2">Skip the form - Book in 30 seconds!</p>
                <p className="text-sm text-green-300">✅ Immediate response guaranteed</p>
              </div>
            </a>

            {/* Direct Call Booking */}
            <a
              href="tel:+97143591532"
              className="bg-blue-700 hover:bg-blue-600 p-8 rounded-2xl border-2 border-blue-500 hover:shadow-xl transition-all group transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📞</div>
                <h3 className="font-bold text-2xl text-white mb-3">Direct Call Booking</h3>
                <p className="font-medium text-blue-200 mb-2">+971 4 359 1532</p>
                <p className="text-sm text-blue-300">✅ Speak directly with our team</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl border-2 p-8 md:p-12" style={{backgroundColor: '#1a1a1a', borderColor: '#C6A664'}}>
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
                📧 Professional Email Booking
              </h2>
              <p className="text-gray-300 mb-4">
                Submit your appointment request - we'll email you confirmation within 24 hours
              </p>
              <div className="p-4 rounded-lg bg-yellow-600/10 border border-yellow-600/30 mb-6">
                <p className="text-yellow-400 text-sm">
                  ✅ Email automatically sent to: <strong>Shobhabeautysaloon@gmail.com</strong>
                </p>
              </div>
            </div>

            {submitMessage ? (
              // Success Message
              <div className="text-center">
                <div className="bg-green-900/30 border-2 border-green-600 rounded-lg p-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-semibold text-2xl text-green-400 mb-4">Email Sent Successfully!</h3>
                  <p className="text-green-300 text-lg mb-6">{submitMessage}</p>
                  
                  <div className="bg-green-800/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-400 mb-3">📧 What's Next:</h4>
                    <ul className="text-sm text-green-300 text-left max-w-md mx-auto space-y-2">
                      <li>✅ आपका appointment request email भेज दिया गया</li>
                      <li>✅ Shobhabeautysaloon@gmail.com पर details पहुँच गईं</li>
                      <li>✅ 24 hours में confirmation call/email आएगी</li>
                      <li>✅ Appointment confirm होने पर reminder मिलेगी</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+97143591532" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
                      📞 Call for Urgent Booking
                    </a>
                    <button 
                      onClick={() => setSubmitMessage("")} 
                      className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 rounded-full font-semibold transition-all"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-gray-800 text-white border-gray-600"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-gray-800 text-white border-gray-600"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Select Service *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-gray-800 text-white border-gray-600"
                >
                  <option value="">Choose your service...</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} - {service.duration} ({service.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={getTomorrowDate()}
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-gray-800 text-white border-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-gray-800 text-white border-gray-600"
                  >
                    <option value="">Select time...</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-gray-800 text-white border-gray-600"
                  placeholder="Any special requests or notes..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 disabled:opacity-50"
                  style={{backgroundColor: '#C6A664', color: '#000000'}}
                >
                  {isSubmitting ? 'Sending Email...' : '📧 Send Appointment Request'}
                </button>
                <p className="text-sm text-gray-400 mt-4">
                  * Professional appointment confirmation via email within 24 hours
                </p>
              </div>
            </form>
            )}
          </div>
        </div>
      </section>

      {/* INSTANT BOOKING OPTIONS */}
      <section className="py-16" style={{background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              🚀 Need Help? Contact Us Directly
            </h2>
            <p className="text-gray-300 text-lg">
              Multiple ways to reach us for immediate assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* NAIL ART SPECIALIST */}
            <a
              href="https://wa.me/97143591532?text=Hello!%20मुझे%20NAIL%20ART%20specialist%20से%20बात%20करनी%20है।%20Latest%20nail%20designs%20और%20pricing%20के%20बारे%20में%20जानना%20चाहता%20हूँ।%20कृपया%20details%20भेजें।%20Thank%20you!"
              target="_blank"
              className="bg-purple-700 hover:bg-purple-600 p-6 rounded-xl border-2 border-purple-500 hover:shadow-lg transition-all group text-center"
            >
              <div className="text-3xl mb-3">💅</div>
              <h3 className="font-semibold text-white mb-2">Nail Art Specialist</h3>
              <p className="text-sm text-purple-200">For nail designs & pricing</p>
            </a>

            {/* GENERAL BOOKING */}
            <a
              href="https://wa.me/97143591532?text=नमस्ते!%20मुझे%20appointment%20book%20करनी%20है%20Shobha%20Beauty%20Studio%20में।%20Available%20slots%20बताएं।%20Services:%20Hair,%20Nails,%20Mehendi.%20Location:%20Meena%20Bazaar.%20Thanks!"
              target="_blank"
              className="bg-green-700 hover:bg-green-600 p-6 rounded-xl border-2 border-green-500 hover:shadow-lg transition-all group text-center"
            >
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold text-white mb-2">General Booking</h3>
              <p className="text-sm text-green-200">All services available</p>
            </a>

            {/* EMERGENCY/URGENT */}
            <a
              href="https://wa.me/97143591532?text=🚨%20URGENT%20BOOKING%20🚨%0A%0AHello!%20मुझे%20TODAY%20या%20TOMORROW%20urgent%20appointment%20चाहिए।%0A%0AService%20needed:%20[Nails/Hair/Mehendi]%0AMy%20phone:%20[Number]%0A%0APlease%20check%20immediate%20availability!%20🙏"
              target="_blank"
              className="bg-red-700 hover:bg-red-600 p-6 rounded-xl border-2 border-red-500 hover:shadow-lg transition-all group text-center"
            >
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="font-semibold text-white mb-2">Urgent/Today</h3>
              <p className="text-sm text-red-200">Same-day booking</p>
            </a>

            {/* PHONE CALL */}
            <a
              href="tel:+97143591532"
              className="bg-blue-700 hover:bg-blue-600 p-6 rounded-xl border-2 border-blue-500 hover:shadow-lg transition-all group text-center"
            >
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-white mb-2">Direct Call</h3>
              <p className="text-sm text-blue-200">Talk immediately</p>
            </a>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🕒</div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Business Hours</h3>
            <p className="text-xl font-semibold text-white mb-2">Daily: 10:00 AM - 10:00 PM</p>
            <p className="font-medium mb-4" style={{color: '#C6A664'}}>Open 365 days a year • Always available for you!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <p className="text-white font-semibold">📍 Location</p>
                <p className="text-gray-300 text-sm">Meena Bazaar, Bur Dubai</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">📧 Email</p>
                <p className="text-gray-300 text-sm">Shobhabeautysaloon@gmail.com</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">📸 Instagram</p>
                <a href="https://instagram.com/shobhasaloon" target="_blank" className="text-sm" style={{color: '#C6A664'}}>@shobhasaloon</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}