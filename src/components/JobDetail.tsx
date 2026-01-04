import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MapPin, Clock, Briefcase, Euro, Calendar, CheckCircle } from 'lucide-react';
import { SEO } from './SEO';
import { BASE_URL } from '../constants';

export const JobDetail: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Job Posting Schema for Google Jobs
  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Schoonmaakmedewerker",
    "description": "Als schoonmaakmedewerker bij B&B schoonmaakdiensten ben je verantwoordelijk voor de schoonmaak en alles wat hierbij komt kijken binnen een tandartsenpraktijk, diverse studentenhuizen en andere leuke locaties.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "B&B Schoonmaakdiensten",
      "value": "JOB-001"
    },
    "datePosted": "2023-10-01",
    "validThrough": "2025-12-31",
    "employmentType": ["FULL_TIME", "PART_TIME"],
    "hiringOrganization": {
      "@type": "Organization",
      "name": "B&B Schoonmaakdiensten",
      "sameAs": BASE_URL,
      "logo": "/BB_logo_trans.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Facetlaan 35",
        "addressLocality": "Bleiswijk",
        "postalCode": "2665 NR",
        "addressCountry": "NL"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "value": 12.85,
        "unitText": "HOUR"
      }
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SEO 
        title="Vacature Schoonmaakmedewerker Leiden | B&B Schoonmaakdiensten" 
        description="Wij zoeken een schoonmaakmedewerker in regio Leiden. Goed salaris, training en uitzicht op vast contract. Solliciteer direct!"
        path="/vacatures/schoonmaakmedewerker"
        schema={jobSchema}
      />
      <Section id="job-header" className="bg-white border-b border-slate-100" noPadding>
        <div className="container mx-auto px-4 md:px-6 py-12">
            <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Vacature
            </span>
            {/* Updated Header Font Size */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-6 break-words hyphens-auto">
              Schoonmaakmedewerker
            </h1>
            
            <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="text-secondary" size={18} />
                Regio Leiden
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-secondary" size={18} />
                Parttime / Fulltime
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="text-secondary" size={18} />
                Vast dienstverband mogelijk
              </div>
              <div className="flex items-center gap-2">
                <Euro className="text-secondary" size={18} />
                €12,85 p/u (vanaf)
              </div>
            </div>
        </div>
      </Section>

      <div className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Functie omschrijving</h3>
            <p className="text-slate-600 leading-relaxed">
              Als schoonmaakmedewerker bij B&B schoonmaakdiensten ben je verantwoordelijk voor de schoonmaak en alles wat hierbij komt kijken binnen een tandartsenpraktijk, diverse studentenhuizen en andere leuke locaties. Je werkt volgens een vast werkrooster, je besteed aandacht aan je (schoonmaak)werk en heb je oog voor details.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Wij zorgen voor</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                <p><strong>Training & Opleiding:</strong> Wil je werken maar heb je geen ervaring maar wel een hoop motivatie? Dan zorgen wij voor trainingen en vakopleiding om doorgroeimogelijkheden te creëren.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                <p><strong>Uren uitbreiding:</strong> Heb je interesse in het uitbreiden van je werkuren dan gaan wij je hiermee helpen.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                <p><strong>Goed Salaris:</strong> Salaris conform CAO schoonmaak- en glazenwassersbedrijf, €12,85 afhankelijk van je leeftijd en ervaring. Hier bovenop krijg je nog eens 8% vakantietoeslag.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                <p><strong>Contract:</strong> Vooralsnog beginnen we met een tijdelijk contract van 6 maanden, en bij goed functioneren zicht op verlenging en/of vast dienstverband.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Wij zoeken iemand die</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-3">
                 <CheckCircle size={18} className="text-secondary shrink-0" />
                 <span>Die de Nederlandse taal spreekt, maar dit is niet vereist!</span>
              </li>
              <li className="flex items-center gap-3">
                 <CheckCircle size={18} className="text-secondary shrink-0" />
                 <span>Betrouwbaar, gemotiveerd en proactief is!</span>
              </li>
              <li className="flex items-center gap-3">
                 <CheckCircle size={18} className="text-secondary shrink-0" />
                 <span>Schoonmaakwerk leuk vind en oog voor details heeft!</span>
              </li>
              <li className="flex items-center gap-3">
                 <CheckCircle size={18} className="text-secondary shrink-0" />
                 <span>Woonachtig is in de regio Leiden!</span>
              </li>
              <li className="flex items-center gap-3">
                 <CheckCircle size={18} className="text-secondary shrink-0" />
                 <span>Vervoer is geregeld maar het liefst ben je in het bezit van rijbewijs B!</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="lg:col-span-1">
          <div className="bg-primary text-white p-8 rounded-xl shadow-lg sticky top-28">
            <h3 className="text-2xl font-bold mb-2">Solliciteer Direct</h3>
            <p className="text-blue-100 mb-6 text-sm">Interesse in deze functie? Vul het formulier in en wij nemen contact met je op.</p>
            
            <Button variant="white" fullWidth onClick={() => navigate('/vacatures/schoonmaakmedewerker/solliciteren')}>
              Ga naar Sollicitatieformulier
            </Button>
            
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-xs text-blue-200 mb-2">Vragen over deze vacature?</p>
              <a href="tel:0850473030" className="font-bold hover:text-secondary transition-colors">085 - 047 30 30</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};