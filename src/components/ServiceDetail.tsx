import React, { useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { SERVICES, BASE_URL } from '../constants';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CheckCircle } from 'lucide-react';
import { SEO } from './SEO';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/diensten" replace />;
  }

  // Generate Service Schema for Rich Results
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "B&B Schoonmaakdiensten"
    },
    "description": service.description,
    "areaServed": {
      "@type": "City",
      "name": "Leiden"
    },
    "url": `${BASE_URL}/diensten/${service.slug}`
  };

  const handleQuoteRequest = () => {
    // Navigate to quote form with the specific service pre-selected
    navigate('/offerte-aanvragen', { 
      state: { 
        preselectedService: service.slug,
        serviceTitle: service.title 
      } 
    });
  };

  return (
    <div className="pt-24 min-h-screen">
      <SEO 
        title={`${service.title} | B&B Schoonmaakdiensten`} 
        description={service.description} 
        path={`/diensten/${service.slug}`}
        schema={serviceSchema}
      />
      <div className="bg-primary text-white py-12 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-2 block">Onze Expertise</span>
          {/* Updated Font Size & Word Breaking for Mobile */}
          <h1 className="text-xl sm:text-3xl md:text-5xl font-heading font-extrabold mb-6 break-words">
            {service.title}
          </h1>
          <p className="text-base md:text-xl text-blue-100 max-w-2xl leading-relaxed">{service.description}</p>
        </div>
      </div>

      <Section id="service-detail" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
             <div className="prose prose-lg text-slate-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Over deze dienst</h3>
                <p className="leading-relaxed whitespace-pre-line">{service.details}</p>
             </div>

             <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                 <CheckCircle className="text-secondary" />
                 <span className="font-semibold text-slate-700">Gecertificeerd personeel</span>
               </div>
               <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                 <CheckCircle className="text-secondary" />
                 <span className="font-semibold text-slate-700">Gebruik van A-merken</span>
               </div>
               <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                 <CheckCircle className="text-secondary" />
                 <span className="font-semibold text-slate-700">Duidelijke afspraken</span>
               </div>
               <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                 <CheckCircle className="text-secondary" />
                 <span className="font-semibold text-slate-700">Milieubewust</span>
               </div>
             </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 sticky top-28">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Interesse?</h3>
              <p className="text-slate-600 mb-6 text-sm">Neem contact met ons op voor een vrijblijvende offerte of advies op maat.</p>
              <div className="flex flex-col gap-3">
                <Button fullWidth onClick={handleQuoteRequest}>
                  Offerte Aanvragen
                </Button>
                <Button variant="outline" fullWidth onClick={() => window.location.href = 'tel:0850473030'}>
                  085 - 047 30 30
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};