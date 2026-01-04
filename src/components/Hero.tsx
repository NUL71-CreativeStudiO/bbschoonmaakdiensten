import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { CheckCircle2, Users, Building2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Optimized Images via Weserv CDN (Converts to WebP, Resizes, Compresses)
const HERO_SLIDES = [
  { 
    src: "/BB_image1.png?w=1000&h=1000&fit=cover&q=80&output=webp",
    title: "Professioneel Team",
    subtitle: "Vakkundig en gecertificeerd.",
    icon: Users
  },
  { 
    src: "/BB_image3.png?w=1000&h=1000&fit=cover&q=80&output=webp",
    title: "Representatieve Entrees",
    subtitle: "Een perfecte eerste indruk.",
    icon: Building2
  },
  { 
    src: "/BB_image4.png?w=1000&h=1000&fit=cover&q=80&output=webp",
    title: "Grondige Reiniging",
    subtitle: "Oog voor elk detail.",
    icon: Sparkles
  },
];

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=60&w=800&auto=format&fit=crop"
];

const OPTIMIZED_BG = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=50&w=1200&auto=format&fit=crop&fm=webp";

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  // Slow rotation (8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      setImgError(false);
    }, 8000); 
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = HERO_SLIDES[currentSlideIndex].icon;

  return (
    // Updated min-h to svh (Small Viewport Height) for better mobile browser support
    <div id="home" className="relative w-full min-h-[100svh] md:min-h-[92vh] flex items-center bg-slate-50 pt-20 lg:pt-0 z-20 overflow-hidden">
      
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
            <img 
              src={OPTIMIZED_BG}
              alt="Kantoor Achtergrond" 
              className="w-full h-full object-cover opacity-30"
              width="1200"
              height="800"
              loading="eager" 
              decoding="async"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-color"></div>
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/70 to-slate-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-slate-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10 pb-16 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Typography & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-1 max-w-xl mx-auto lg:mx-0 text-center lg:text-left pt-6 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200 backdrop-blur-sm shadow-sm mb-6 lg:mb-8">
               <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
               <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">Schoonmaak & Onderhoud</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-slate-900 leading-[1.1] mb-4 lg:mb-6 tracking-tight">
              De kunst van <br />
              <span className="text-primary whitespace-nowrap">
                schoon werken.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 lg:mb-10 leading-relaxed font-medium px-2 lg:px-0">
              B&B Schoonmaakdiensten zorgt voor een representatieve en hygiënische omgeving. 
              Betrouwbaar maatwerk voor de moderne zakelijke markt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 mb-8 lg:mb-10 justify-center lg:justify-start">
              <Button 
                onClick={() => navigate('/offerte-aanvragen')} 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 md:py-4 rounded-xl font-bold text-sm tracking-wide shadow-xl shadow-primary/15 transform hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                OFFERTE AANVRAGEN
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  const el = document.getElementById('services');
                  if(el) el.scrollIntoView({ behavior: 'smooth'});
                }}
                className="bg-white/50 backdrop-blur-sm border border-slate-300 text-slate-600 hover:border-primary hover:bg-primary hover:text-white px-8 py-3.5 md:py-4 rounded-xl font-bold text-sm tracking-wide w-full sm:w-auto"
              >
                BEKIJK DIENSTEN
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 md:gap-8">
               <div className="flex items-center gap-2">
                 <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle2 size={14} className="text-secondary" />
                 </div>
                 <span className="text-sm font-bold text-slate-700">OSB Gecertificeerd</span>
               </div>
               <div className="hidden md:block w-px h-6 bg-slate-300"></div>
               <div className="flex items-center gap-2">
                 <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle2 size={14} className="text-secondary" />
                 </div>
                 <span className="text-sm font-bold text-slate-700">Vast & Ervaren Team</span>
               </div>
            </div>
          </motion.div>

          {/* RIGHT: IMAGE CONTAINER */}
          <div className="hidden md:flex order-2 lg:order-2 justify-center lg:justify-end items-center py-4 lg:py-0">
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 50 }}
               className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]"
             >
                <div className="absolute inset-4 bg-primary/30 blur-3xl rounded-full transform translate-y-8"></div>

                <motion.div 
                   animate={{ 
                     y: [0, -15, 0],
                     rotate: 45 
                   }}
                   initial={{ rotate: 45 }}
                   transition={{ 
                     y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                     rotate: { duration: 0 } 
                   }}
                   className="relative w-full h-full overflow-hidden bg-blue-50 border-4 border-white/50"
                   style={{
                       borderRadius: "0% 50% 50% 50%", 
                       boxShadow: `
                         10px 10px 40px rgba(0,75,141,0.25), 
                         inset 20px 20px 60px rgba(255,255,255,0.8),
                         inset -20px -20px 60px rgba(0,0,0,0.1)
                       `
                   }}
                >
                    <AnimatePresence mode="wait">
                       <motion.img 
                          key={currentSlideIndex}
                          src={imgError ? FALLBACK_IMAGES[0] : HERO_SLIDES[currentSlideIndex].src}
                          onError={() => setImgError(true)}
                          alt="Schoonmaak"
                          width="450"
                          height="450"
                          // Critical LCP Fix: High priority for first image
                          fetchPriority={currentSlideIndex === 0 ? "high" : "auto"}
                          // Critical LCP Fix: No initial fade-in for the first slide to speed up paint
                          initial={currentSlideIndex === 0 ? { opacity: 1, rotate: -45, scale: 1.5 } : { opacity: 0, rotate: -45, scale: 1.5 }}
                          animate={{ opacity: 1, rotate: -45, scale: 1.5 }}
                          exit={{ opacity: 0, rotate: -45, scale: 1.5 }}
                          transition={{ duration: 1.5 }} 
                          className="w-full h-full object-cover"
                          style={{ objectPosition: "center" }}
                       />
                    </AnimatePresence>

                    <div 
                        className="absolute inset-0 pointer-events-none z-10"
                        style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                            mixBlendMode: "overlay"
                        }}
                    ></div>
                    
                    <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-60 rounded-full blur-2xl filter transform -translate-x-1/4 -translate-y-1/4"></div>
                </motion.div>

                <motion.div 
                   key={`info-${currentSlideIndex}`}
                   initial={{ opacity: 0, y: 20, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: -10, scale: 0.95 }}
                   transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                   className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 z-20 w-max max-w-[90%]"
                >
                   <div className="flex items-center gap-3 md:gap-4 bg-white/95 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-white">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                         <CurrentIcon size={20} className="md:w-6 md:h-6" strokeWidth={2} />
                      </div>
                      <div className="flex flex-col text-left">
                        <p className="text-sm md:text-base font-bold text-slate-900 leading-tight mb-0.5">
                          {HERO_SLIDES[currentSlideIndex].title}
                        </p>
                        <p className="text-xs md:text-sm text-slate-500 font-medium">
                          {HERO_SLIDES[currentSlideIndex].subtitle}
                        </p>
                      </div>
                   </div>
                </motion.div>

             </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-50 pointer-events-none">
        <svg 
          className="relative w-full h-12 md:h-16 lg:h-24 text-white fill-current block z-10" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

    </div>
  );
};