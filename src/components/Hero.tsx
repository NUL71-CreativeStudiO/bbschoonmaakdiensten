import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { CheckCircle2, Users, Building2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HERO_SLIDES = [
  { 
    src: "https://raw.githubusercontent.com/NUL71-CreativeStudiO/bbschoonmaakdiensten/refs/heads/main/public/images/BB_image5.png",
    title: "Professioneel Team",
    subtitle: "Vakkundig en gecertificeerd.",
    icon: Users
  },
  { 
    src: "https://github.com/NUL71-CreativeStudiO/bbschoonmaakdiensten/blob/main/public/images/BB_image2.png?raw=true",
    title: "Representatieve Entrees",
    subtitle: "Een perfecte eerste indruk.",
    icon: Building2
  },
  { 
    src: "https://raw.githubusercontent.com/NUL71-CreativeStudiO/bbschoonmaakdiensten/refs/heads/main/public/images/BB_image1.png",
    title: "Grondige Reiniging",
    subtitle: "Oog voor elk detail.",
    icon: Sparkles
  },
];

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
];

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
    // Z-20 ensures it sits above the next section (About) so drops can overlay it.
    <div id="home" className="relative w-full min-h-[92vh] flex items-center bg-slate-50 pt-24 lg:pt-0 z-20">
      
      {/* 1. BACKGROUND: Office Company Faded + Blue Tint for Water Drop Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
            <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop" 
            alt="Office Background" 
            className="w-full h-full object-cover opacity-30"
            />
            {/* Blue tint to suit the waterdrop */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-color"></div>
        </motion.div>
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/70 to-slate-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-slate-50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pb-20 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Typography & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 max-w-xl"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200 backdrop-blur-sm shadow-sm mb-8">
               <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
               <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">Schoonmaak & Onderhoud</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              De kunst van <br />
              <span className="text-primary whitespace-nowrap">
                schoon werken.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              B&B Schoonmaakdiensten zorgt voor een representatieve en hygiënische omgeving. 
              Betrouwbaar maatwerk voor de moderne zakelijke markt.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <Button 
                onClick={() => navigate('/offerte-aanvragen')} 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-xl shadow-primary/15 transform hover:-translate-y-0.5 transition-all"
              >
                OFFERTE AANVRAGEN
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  const el = document.getElementById('services');
                  if(el) el.scrollIntoView({ behavior: 'smooth'});
                }}
                className="bg-white/50 backdrop-blur-sm border border-slate-300 text-slate-600 hover:border-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide"
              >
                BEKIJK DIENSTEN
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
               <div className="flex items-center gap-2.5">
                 <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle2 size={16} className="text-secondary" />
                 </div>
                 <span className="text-sm font-bold text-slate-700">OSB Gecertificeerd & Erkend</span>
               </div>
               <div className="w-px h-8 bg-slate-300 hidden md:block"></div>
               <div className="flex items-center gap-2.5">
                 <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle2 size={16} className="text-secondary" />
                 </div>
                 <span className="text-sm font-bold text-slate-700">Ervaren en vast team</span>
               </div>
            </div>
          </motion.div>

          {/* RIGHT: WATER DROP IMAGE CONTAINER */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center py-12 lg:py-0">
             
             {/* The Drop Shape Wrapper */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 50 }}
               className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
             >
                {/* Background Glow */}
                <div className="absolute inset-4 bg-primary/30 blur-3xl rounded-full transform translate-y-8"></div>

                {/* THE DROP CONTAINER */}
                <motion.div 
                   animate={{ 
                     y: [0, -15, 0],
                     rotate: 45 // Enforce 45deg rotation during animation
                   }}
                   initial={{ rotate: 45 }}
                   transition={{ 
                     y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                     rotate: { duration: 0 } // Static rotation
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
                          initial={{ opacity: 0, rotate: -45, scale: 1.5 }}
                          animate={{ opacity: 1, rotate: -45, scale: 1.5 }}
                          exit={{ opacity: 0, rotate: -45, scale: 1.5 }}
                          transition={{ duration: 1.5 }} 
                          className="w-full h-full object-cover"
                          style={{ objectPosition: "center" }}
                       />
                    </AnimatePresence>

                    {/* GLOSS / REFLECTION OVERLAY */}
                    <div 
                        className="absolute inset-0 pointer-events-none z-10"
                        style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                            mixBlendMode: "overlay"
                        }}
                    ></div>
                    
                    {/* Specular Highlight */}
                    <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-60 rounded-full blur-2xl filter transform -translate-x-1/4 -translate-y-1/4"></div>
                </motion.div>

                {/* Floating Info Badge - NEW DESIGN */}
                <motion.div 
                   key={`info-${currentSlideIndex}`}
                   initial={{ opacity: 0, y: 20, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: -10, scale: 0.95 }}
                   transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                   className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 w-max max-w-[95%]"
                >
                   <div className="flex items-center gap-4 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-white">
                      <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                         <CurrentIcon size={24} strokeWidth={2} />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-base font-bold text-slate-900 leading-tight mb-0.5">
                          {HERO_SLIDES[currentSlideIndex].title}
                        </p>
                        <p className="text-sm text-slate-500 font-medium">
                          {HERO_SLIDES[currentSlideIndex].subtitle}
                        </p>
                      </div>
                   </div>
                </motion.div>

             </motion.div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM WAVE TRANSITION (Kept Static) --- */}
      <div className="absolute bottom-0 left-0 right-0 z-50 pointer-events-none">
        <svg 
          className="relative w-full h-16 md:h-24 text-white fill-current block z-10" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          {/* Smooth liquid wave */}
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

    </div>
  );
};