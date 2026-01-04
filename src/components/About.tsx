import React from 'react';
import { Section } from './ui/Section';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import { Users, Award, ThumbsUp } from 'lucide-react';

export const About: React.FC = () => {
  // Optimized images: 400px width is plenty for these columns
  const img1 = "/BB_image5.webp";
  const img2 = "/BB_image6.webp";

  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Content - Grid of Images */}
        <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={img1}
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12 bg-slate-100"
                alt="Kantoor schoonmaak"
                width="400"
                height="320"
                loading="lazy"
              />
              <img 
                src={img2}
                className="rounded-2xl shadow-lg w-full h-64 object-cover bg-slate-100"
                alt="Schoonmaakster"
                width="400"
                height="320"
                loading="lazy"
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

          <div className="bg-slate-50 rounded-2xl p-4 md:bg-transparent md:p-0 grid grid-cols-3 gap-2 md:gap-6">
             <div className="flex flex-col items-center justify-center text-center gap-2 md:bg-slate-50 md:rounded-lg md:p-4">
                <Users className="text-primary shrink-0 w-6 h-6 md:w-8 md:h-8" />
                <span className="font-bold text-slate-900 text-xs md:text-base leading-tight">Vast Team</span>
             </div>
             
             <div className="flex flex-col items-center justify-center text-center gap-2 md:bg-slate-50 md:rounded-lg md:p-4 border-l border-r border-slate-200 md:border-0 px-2 md:px-0">
                <Award className="text-primary shrink-0 w-6 h-6 md:w-8 md:h-8" />
                <span className="font-bold text-slate-900 text-xs md:text-base leading-tight">Gecertificeerd</span>
             </div>
             
             <div className="flex flex-col items-center justify-center text-center gap-2 md:bg-slate-50 md:rounded-lg md:p-4">
                <ThumbsUp className="text-primary shrink-0 w-6 h-6 md:w-8 md:h-8" />
                <span className="font-bold text-slate-900 text-xs md:text-base leading-tight">Betrouwbaar</span>
             </div>
          </div>
        </div>

      </div>
    </Section>
  );
};