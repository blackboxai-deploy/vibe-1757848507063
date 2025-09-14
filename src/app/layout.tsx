import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair", 
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shobha Beauty Studio & Nails | Premium Nail Artistry in Bur Dubai",
  description: "Your one-stop beauty destination in Bur Dubai, Meena Bazaar. Specializing in stunning nail art, hair straightening, mehendi, and beauty services. Open daily 10 AM - 10 PM.",
  keywords: ["Beauty Studio Bur Dubai", "Nail Studio Meena Bazaar", "Press-on Nails Dubai", "Mehendi Dubai"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Shobha Beauty Studio & Nails",
  "url": "https://www.shobhabeautystudio.com",
  "telephone": "+971 4 359 1532",
  "email": "Shobhabeautysaloon@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Meena Bazaar",
    "addressLocality": "Bur Dubai", 
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "10:00",
    "closes": "22:00"
  },
  "sameAs": ["https://instagram.com/shobhasaloon"],
  "foundingDate": "2011"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}