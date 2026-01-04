import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavItem } from '../types';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

// 6KB WebP Logo
const LOGO_URL = "/BB_logo_trans.webp";

export const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.sectionId) {
      if (location.pathname === '/') {
        const elem = document.getElementById(item.sectionId);
        if (elem) {
          const headerOffset = 80;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      } else {
        navigate('/', { state: { targetId: item.sectionId } });
      }
    } else {
      navigate(item.href);
    }
  };

  const isHome = location.pathname === '/';
  const navClasses = isScrolled || !isHome || mobileMenuOpen ? 'shadow-md py-3' : 'shadow-sm py-4 md:py-5';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm ${navClasses}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group relative z-50" onClick={(e) => {
             if(mobileMenuOpen) setMobileMenuOpen(false);
             handleNavClick(e, NAV_ITEMS[0]);
          }}>
            <img 
              src={LOGO_URL} 
              alt="B&B Schoonmaakdiensten" 
              width="56"
              height="56"
              className={`transition-all duration-300 ${isScrolled || !isHome || mobileMenuOpen ? 'h-9 w-auto' : 'h-10 md:h-14 w-auto'} object-contain`}
            />
            <span className={`font-heading font-bold text-slate-800 tracking-tight transition-all duration-300 ${isScrolled || !isHome || mobileMenuOpen ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
              Schoonmaakdiensten
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-slate-600 font-heading font-semibold hover:text-secondary transition-colors text-sm uppercase tracking-wide cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:0850473030"
              className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-sm flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={18} />
              <span>085 - 047 30 30</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-primary z-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 pb-6 flex flex-col h-[100svh]"
          >
            <div className="flex flex-col gap-6 overflow-y-auto flex-grow">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-2xl font-heading font-bold text-slate-800 border-b border-slate-100 pb-4 active:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-auto space-y-4 pt-6 border-t border-slate-100">
               <a href="tel:0850473030" className="w-full flex items-center justify-center gap-3 border-2 border-slate-200 text-slate-700 py-3 rounded-xl font-bold text-lg">
                <Phone size={20} className="text-secondary" />
                <span>085 - 047 30 30</span>
              </a>

              <a href="/#contact" onClick={(e) => handleNavClick(e, NAV_ITEMS.find(n => n.sectionId === 'contact') || NAV_ITEMS[4])} className="w-full bg-secondary text-white flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg shadow-lg">
                Offerte Aanvragen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};