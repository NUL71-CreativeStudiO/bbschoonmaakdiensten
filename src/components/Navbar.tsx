import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavItem } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.sectionId) {
      if (location.pathname === '/') {
        // We are on home, just scroll
        const elem = document.getElementById(item.sectionId);
        if (elem) {
          const headerOffset = 80;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else {
        // Navigate home with state to trigger scroll
        navigate('/', { state: { targetId: item.sectionId } });
      }
    } else {
      navigate(item.href);
    }
  };

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
          isScrolled || !isHome ? 'shadow-md py-2' : 'shadow-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group" onClick={(e) => handleNavClick(e, NAV_ITEMS[0])}>
            <img 
              src="https://bbschoonmaak.nul71.nl/wp-content/uploads/2025/12/cropped-BB-Trans-from-Photopea.png" 
              alt="B&B Schoonmaakdiensten" 
              className={`transition-all duration-300 ${isScrolled || !isHome ? 'h-10' : 'h-14'} w-auto`}
            />
            <span className={`font-heading font-bold text-slate-800 tracking-tight transition-all duration-300 ${isScrolled || !isHome ? 'text-lg' : 'text-xl'}`}>
              Schoonmaakdiensten
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-slate-600 font-heading font-semibold hover:text-secondary transition-colors text-sm uppercase tracking-wide cursor-pointer`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:0850473030"
              className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-sm flex items-center gap-2"
            >
              <Phone size={18} />
              <span>085 - 047 30 30</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-2xl font-heading font-bold text-slate-800 border-b border-slate-100 pb-4"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, NAV_ITEMS.find(n => n.sectionId === 'contact') || NAV_ITEMS[4])}
                className="w-full bg-secondary text-white text-center py-4 rounded-xl font-bold text-xl mt-4 block"
              >
                Offerte Aanvragen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};