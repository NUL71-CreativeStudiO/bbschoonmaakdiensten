import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'bb_cookie_consent';
// PLACEHOLDER: Replace with your actual Google Analytics ID (e.g., G-XXXXXXXXXX)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; 

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Initial Check on Mount
    const consent = localStorage.getItem(STORAGE_KEY);
    
    if (consent === null) {
      // Show banner if no choice made yet
      // Small delay to not overwhelm user immediately on load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      // If already accepted, load GA immediately
      loadGoogleAnalytics();
    }
  }, []);

  // 2. Listen for Reset Events (from Footer or Privacy Policy)
  useEffect(() => {
    const handleReset = () => {
      localStorage.removeItem(STORAGE_KEY);
      setIsVisible(true);
    };

    window.addEventListener('bb-reset-cookie-consent', handleReset);
    return () => window.removeEventListener('bb-reset-cookie-consent', handleReset);
  }, []);

  const loadGoogleAnalytics = () => {
    // Prevent loading twice
    if (document.getElementById('google-analytics-script')) return;

    // 1. Load the Script
    const script = document.createElement('script');
    script.id = 'google-analytics-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // 2. Initialize GTag
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(inlineScript);
    
    console.log("Analytics Loaded via Cookie Consent");
  };

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setIsVisible(false);
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] p-4 md:p-6"
        >
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full hidden sm:block">
                <Cookie className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-lg mb-1">
                  Wij gebruiken cookies
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                  B&B Schoonmaakdiensten gebruikt cookies om uw ervaring op de website te verbeteren en anonieme statistieken bij te houden (Google Analytics). Wij respecteren uw privacy.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button 
                onClick={handleDecline}
                className="px-6 py-3 rounded-lg font-bold text-slate-500 hover:bg-slate-100 transition-colors text-sm w-full md:w-auto"
              >
                Weigeren
              </button>
              <Button 
                onClick={handleAccept}
                className="w-full md:w-auto text-sm shadow-lg shadow-primary/20"
              >
                Accepteren
              </Button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};