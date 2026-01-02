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
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-secondary font-bold uppercase tracking-wider text-sm">Onze Expertise</span>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mt-2 mb-4">
          Compleet Schoonmaakbeheer
        </h2>
        <p className="text-slate-600 text-lg">
          Wij bieden een breed scala aan professionele diensten, afgestemd op de specifieke behoeften van uw organisatie.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border-b-4 border-transparent hover:border-secondary relative overflow-hidden flex flex-col h-full"
          >
            {/* Hover Background Blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6 flex-1">
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
      <div className="mt-16 text-center">
        <p className="text-slate-500 mb-4">Staat uw gewenste dienst er niet tussen?</p>
        <Link to="/offerte-aanvragen" className="inline-block border-b-2 border-primary text-primary font-bold hover:text-primary-dark hover:border-primary-dark transition-colors pb-1">
          Neem contact op voor maatwerk &rarr;
        </Link>
      </div>
    </Section>
  );
};