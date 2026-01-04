import React from 'react';
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const handleResetCookies = () => {
    // Dispatch event to open CookieConsent immediately
    window.dispatchEvent(new Event('bb-reset-cookie-consent'));
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/BB_logo_trans.png" 
                alt="B&B Schoonmaakdiensten Logo" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <span className="text-white font-heading font-bold text-xl tracking-tight">
                Schoonmaakdiensten B.V
              </span>
            </div>
            <p className="max-w-xs text-sm">
              Professionele schoonmaakdiensten voor bedrijven en instellingen. Kwaliteit en betrouwbaarheid staan bij ons voorop.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Snel naar</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/over-ons" className="hover:text-secondary transition-colors">Over Ons</Link></li>
              <li><Link to="/diensten" className="hover:text-secondary transition-colors">Diensten</Link></li>
              <li><Link to="/vacatures" className="hover:text-secondary transition-colors">Vacatures</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Contact</h4>
             <ul className="space-y-3 text-sm">
               <li className="flex items-start gap-3">
                 <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                 <span>Facetlaan 35<br/>2665 NR Bleiswijk</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone size={16} className="text-secondary shrink-0" />
                 <a href="tel:0850473030" className="hover:text-white">085 - 047 30 30</a>
               </li>
               <li className="flex items-center gap-3">
                 <Mail size={16} className="text-secondary shrink-0" />
                 <a href="mailto:info@bbschoonmaakdiensten.nl" className="hover:text-white">info@bbschoonmaakdiensten.nl</a>
               </li>
               <li className="flex items-center gap-3">
                 <FileText size={16} className="text-secondary shrink-0" />
                 <span>KvK: 89348621</span>
               </li>
             </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Volg ons</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/p/BB-Schoonmaakdiensten-61574751899880/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/b-b-schoonmaakdiensten/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/bbschoonmaakdiensten/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} B&B Schoonmaakdiensten. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacyverklaring</Link>
            <button 
              type="button"
              onClick={handleResetCookies}
              className="hover:text-white transition-colors text-slate-400 cursor-pointer"
            >
              Cookie Instellingen
            </button>
            <Link 
              to="/algemene-voorwaarden" 
              className="hover:text-white transition-colors"
            >
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};