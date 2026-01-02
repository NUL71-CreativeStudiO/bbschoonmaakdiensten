import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Vacancies } from './components/Vacancies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';
import { JobDetail } from './components/JobDetail';
import { JobApplicationForm } from './components/JobApplicationForm';
import { CustomQuoteForm } from './components/CustomQuoteForm';
import { OpenApplicationForm } from './components/OpenApplicationForm';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieConsent } from './components/CookieConsent';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import { Reviews } from './components/Reviews';
import { SEO } from './components/SEO';
import { BASE_URL, DEFAULT_SEO_IMAGE } from './constants';

// Component to handle scrolling logic
const ScrollHandler = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // If we have a targetId in state (from Navigation), scroll to it
    if (pathname === '/' && state && (state as any).targetId) {
      const targetId = (state as any).targetId;
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          const headerOffset = 80;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100); // Small delay to ensure DOM is ready
    } 
    // Otherwise, if it's a regular route change without specific scroll target, go to top
    else if (!state || !(state as any).targetId) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
}

// Structured Data for Local Business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "B&B Schoonmaakdiensten",
  "image": DEFAULT_SEO_IMAGE,
  "url": BASE_URL,
  "telephone": "+31850473030",
  "email": "info@bbschoonmaakdiensten.nl",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Facetlaan 35",
    "addressLocality": "Bleiswijk",
    "postalCode": "2665 NR",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.0121, 
    "longitude": 4.5268
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:30"
  },
  "priceRange": "$$"
};

// Homepage Component combining the sections
const Home = () => (
  <>
    <SEO 
      title="B&B Schoonmaakdiensten | Glasbewassing & Schoonmaak Leiden" 
      description="B&B Schoonmaakdiensten is uw partner voor professionele schoonmaak, glasbewassing en vloeronderhoud in de regio Leiden. Vraag direct een offerte aan."
      schema={localBusinessSchema}
      path="/"
    />
    <Hero />
    <About />
    <Services />
    <Reviews />
    <Vacancies />
    <Contact />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollHandler />
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/over-ons" element={<>
                <SEO 
                  title="Over Ons | B&B Schoonmaakdiensten" 
                  description="Leer meer over ons team, onze certificering en onze werkwijze." 
                  path="/over-ons"
                />
                <About />
              </>} />
              <Route path="/diensten" element={<>
                <SEO 
                  title="Diensten | B&B Schoonmaakdiensten" 
                  description="Bekijk ons aanbod: Schoonmaakonderhoud, Glasbewassing, Vloeronderhoud, Bouwopruiming en Gevelreiniging." 
                  path="/diensten"
                />
                <Services />
              </>} />
              <Route path="/diensten/:slug" element={<ServiceDetail />} />
              <Route path="/offerte-aanvragen" element={<CustomQuoteForm />} />
              <Route path="/vacatures" element={<>
                <SEO 
                  title="Vacatures | Werken bij B&B Schoonmaakdiensten" 
                  description="Op zoek naar een baan in de schoonmaak? Bekijk onze openstaande vacatures in regio Leiden." 
                  path="/vacatures"
                />
                <Vacancies />
              </>} />
              <Route path="/vacatures/schoonmaakmedewerker" element={<JobDetail />} />
              <Route path="/vacatures/schoonmaakmedewerker/solliciteren" element={<JobApplicationForm />} />
              <Route path="/vacatures/open-sollicitatie" element={<OpenApplicationForm />} />
              <Route path="/contact" element={<>
                <SEO 
                  title="Contact | B&B Schoonmaakdiensten" 
                  description="Neem contact op met B&B Schoonmaakdiensten. Bel 085 - 047 30 30 of stuur een bericht." 
                  path="/contact"
                />
                <Contact />
              </>} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/algemene-voorwaarden" element={<TermsConditions />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;