import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const INITIAL_MESSAGES = [
  "Vragen? App ons gerust!",
  "Schoonmaakhulp nodig?",
  "Direct een offerte?",
  "Glasbewassing nodig?",
  "Advies voor uw pand?",
  "Kunnen wij u helpen?"
];

const RE_ENGAGEMENT_MESSAGES = [
  "Nog steeds op zoek?",
  "Twijfelt u ergens over?",
  "Wij denken graag mee!",
  "Direct antwoord?",
  "Vrijblijvend advies?",
  "Stuur ons een berichtje!"
];

// Configuration for "Smart Memory"
const STORAGE_KEY = 'bb_whatsapp_closed_ts';
const COOLDOWN_PERIOD = 24 * 60 * 60 * 1000; // 24 Hours in milliseconds

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '31850473030'; 
  const message = 'Hallo, ik heb een vraag over B&B Schoonmaakdiensten.';
  const [showBubble, setShowBubble] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isReEngagement, setIsReEngagement] = useState(false);
  
  // We use refs to handle timers to prevent memory leaks and ensure we can clear them properly
  const reEngagementTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rotationIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeMessages = isReEngagement ? RE_ENGAGEMENT_MESSAGES : INITIAL_MESSAGES;

  useEffect(() => {
    // 1. CHECK MEMORY: Has user closed this recently?
    const lastClosed = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();
    const isMuted = lastClosed && (now - parseInt(lastClosed) < COOLDOWN_PERIOD);

    if (isMuted) {
      // If muted, we do NOT show the bubble initially.
      return; 
    }

    // 2. If not muted, show the bubble after 4 seconds to grab attention
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      if (reEngagementTimerRef.current) clearTimeout(reEngagementTimerRef.current);
      if (rotationIntervalRef.current) clearInterval(rotationIntervalRef.current);
    };
  }, []);

  // Rotate messages every 6 seconds if bubble is visible
  useEffect(() => {
    if (!showBubble) return;

    rotationIntervalRef.current = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % activeMessages.length);
    }, 6000);

    return () => {
      if (rotationIntervalRef.current) clearInterval(rotationIntervalRef.current);
    };
  }, [showBubble, activeMessages]);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 1. Hide immediately
    setShowBubble(false);

    // 2. SAVE MEMORY: User explicitly closed it. Mute for 24 hours.
    localStorage.setItem(STORAGE_KEY, Date.now().toString());

    // Clear any existing re-engagement timers because user said "No"
    if (reEngagementTimerRef.current) clearTimeout(reEngagementTimerRef.current);
  };

  return (
    // Fixed container positioned at bottom right
    // Align items in a row on ALL screen sizes (mobile included)
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[50] flex flex-row items-center gap-4 pointer-events-none">
      
      {/* Chat Message Bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="pointer-events-auto bg-white text-slate-800 px-5 py-4 rounded-2xl shadow-xl border border-slate-100 max-w-[220px] md:max-w-[300px] relative flex flex-col justify-center min-h-[80px]"
          >
             {/* Close Button */}
             <button 
               onClick={handleClose}
               className="absolute -top-3 -left-3 bg-white text-slate-400 border border-slate-200 shadow-sm rounded-full p-1 hover:bg-slate-50 hover:text-red-500 transition-colors z-10"
               aria-label="Sluit bericht"
             >
               <X size={14} />
             </button>
             
             {/* Text Content */}
             <div>
               <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                 {isReEngagement ? "Wij zijn er nog" : "Wij helpen graag"}
               </p>
               <div className="min-h-[1.5rem] flex items-center">
                 <AnimatePresence mode="wait">
                   <motion.p
                     key={`${isReEngagement ? 're' : 'init'}-${messageIndex}`}
                     initial={{ opacity: 0, y: 5 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -5 }}
                     transition={{ duration: 0.2 }}
                     className="text-sm font-bold text-slate-800 leading-snug"
                   >
                     {activeMessages[messageIndex]}
                   </motion.p>
                 </AnimatePresence>
               </div>
             </div>

             {/* Arrow pointing to button (Right side of bubble) */}
             <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-l-[10px] border-l-white border-b-[8px] border-b-transparent drop-shadow-sm"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, rotate: -45 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
            // If they click the WhatsApp button, we hide the bubble but don't mute it for 24h necessarily (depends on preference, but usually good to hide)
            setShowBubble(false);
        }}
        className="pointer-events-auto flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-card hover:shadow-[#25D366]/40 transition-all duration-300 group relative"
        aria-label="Chat via WhatsApp"
      >
        {!showBubble && (
            <div className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-md text-sm font-bold opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none hidden md:block">
            WhatsApp ons
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent"></div>
            </div>
        )}

        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping group-hover:animate-none"></span>

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="white"
          className="relative z-10 w-7 h-7 md:w-8 md:h-8"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.297-.471-.421-.909-.421-.434 0-.967.161-1.472.718-.505.558-1.927 1.884-1.927 4.594 0 2.71 1.972 5.328 2.245 5.7.273.372 3.882 5.929 9.405 8.312 3.646 1.574 4.384 1.261 5.176 1.182.793-.079 1.758-.718 2.006-1.411.248-.693.248-1.288.173-1.412z"/>
        </svg>
      </motion.a>
    </div>
  );
};