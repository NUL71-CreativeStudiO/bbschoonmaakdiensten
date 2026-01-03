import React from 'react';
import { Section } from './ui/Section';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Services: React.FC = () => {
  const location = useLocation();
  const isPage = location.pathname === '/diensten';

  return (
    <Section id="services" className={`bg-slate-50 ${isPage ? 'pt-32' : ''}`}>
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <span className="text-secondary font-bold uppercase tracking-wider text-sm">Onze Expertise</span>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mt-2 mb-4">
          Compleet Schoonmaakbeheer
        </h2>
        <p className="text-slate-600 text-base md:text-lg">
          Wij bieden een breed scala aan professionele diensten, afgestemd op de specifieke behoeften van uw organisatie.
        </p>
      </div>

      {/* 
         Mobile: Horizontal Scroll (Flex) with no visible scrollbar
         Desktop: Grid
      */}
      <div className="flex flex-nowrap overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 no-scrollbar">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            // Mobile: fixed width, snap alignment
            className="min-w-[85vw] w-[85vw] md:min-w-0 md:w-auto flex-shrink-0 snap-center h-auto group bg-white rounded-xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300 border-b-4 border-transparent hover:border-secondary relative overflow-hidden flex flex-col"
          >
            {/* Hover Background Blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={24} className="md:w-7 md:h-7" />
              </div>
              
              <h3 className="text-lg md:text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              <Link to={`/diensten/${service.slug}`} className="flex items-center gap-2 text-sm font-bold text-secondary cursor-pointer group-hover:translate-x-2 transition-transform inline-block mt-auto">
                <span>Meer informatie</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom CTA */}
      <div className="mt-6 md:mt-16 text-center">
        <p className="text-slate-500 mb-2 md:mb-4 text-sm md:text-base">Staat uw gewenste dienst er niet tussen?</p>
        <Link to="/offerte-aanvragen" className="inline-block border-b-2 border-primary text-primary font-bold hover:text-primary-dark hover:border-primary-dark transition-colors pb-1">
          Neem contact op voor maatwerk &rarr;
        </Link>
      </div>
    </Section>
  );
};