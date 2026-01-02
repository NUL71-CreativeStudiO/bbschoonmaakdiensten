import React from 'react';
import { Section } from './ui/Section';
import { JOBS } from '../constants';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Vacancies: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isPage = location.pathname === '/vacatures';

  return (
    <Section id="vacancies" className={`bg-surface-alt ${isPage ? 'pt-32' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-4">
            Werken bij B&B
          </h2>
          <p className="text-slate-600">
            Word onderdeel van ons enthousiaste team. Wij zijn altijd op zoek naar gemotiveerde collega's.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {JOBS.map((job) => (
            <div 
              key={job.id} 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-secondary" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-secondary" />
                    {job.hours}
                  </div>
                </div>
                <p className="text-slate-600 text-sm">{job.description}</p>
              </div>

              <div className="shrink-0">
                <Button variant="outline" className="w-full md:w-auto text-sm py-2" onClick={() => navigate('/vacatures/schoonmaakmedewerker')}>
                  Bekijk Vacature
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Geen passende vacature?</h3>
                <p className="text-blue-100 text-sm">Stuur ons een open sollicitatie.</p>
              </div>
              <Button variant="white" onClick={() => navigate('/vacatures/open-sollicitatie')}>
                Solliciteer Direct
              </Button>
           </div>
           {/* Decor */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>
    </Section>
  );
};