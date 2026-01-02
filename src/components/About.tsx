import React from 'react';
import { Section } from './ui/Section';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import { Users, Award, ThumbsUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const About: React.FC = () => {
  const location = useLocation();
  const isPage = location.pathname === '/over-ons';

  return (
    <Section id="about" className={`bg-white ${isPage ? 'pt-32' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Content - Grid of Images */}
        <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="/BB_image4_1.png" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12"
                alt="Clean office meeting room"
              />
              <motion.img 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="/BB_image5.png" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
                alt="Cleaning professional"
              />
            </div>
            {/* Brand Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-xl">
                 B&B
               </div>
            </div>
        </div>

        {/* Text Content */}
        <div>
          <span className="text-secondary font-bold uppercase tracking-wider text-sm">Over B&B Schoonmaakdiensten</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mt-2 mb-6">
            {ABOUT_TEXT.title}
          </h2>
          
          <div className="prose prose-lg text-slate-600 mb-8">
            <p className="mb-4">{ABOUT_TEXT.paragraph1}</p>
            <p>{ABOUT_TEXT.paragraph2}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                <Users className="text-primary mb-2" size={32} />
                <span className="font-bold text-slate-900">Vast Team</span>
             </div>
             <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                <Award className="text-primary mb-2" size={32} />
                <span className="font-bold text-slate-900">Gecertificeerd</span>
             </div>
             <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                <ThumbsUp className="text-primary mb-2" size={32} />
                <span className="font-bold text-slate-900">Betrouwbaar</span>
             </div>
          </div>
        </div>

      </div>
    </Section>
  );
};