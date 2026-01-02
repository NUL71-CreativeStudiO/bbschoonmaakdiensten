import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { useForm } from 'react-hook-form';
import { Button } from './ui/Button';
import { CustomQuoteFormData } from '../types';
import { CheckCircle, ArrowLeft, ClipboardList, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { SERVICES } from '../constants';
import { sendCustomQuote } from '../utils/formSubmission';
import { SEO } from './SEO';

export const CustomQuoteForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Get preselected service data from navigation state (if available)
  const preselectedServiceSlug = location.state?.preselectedService;
  const preselectedServiceTitle = location.state?.serviceTitle;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm<CustomQuoteFormData>();

  // Pre-fill the dropdown if a service was passed
  useEffect(() => {
    if (preselectedServiceSlug) {
      setValue('serviceType', preselectedServiceSlug);
    }
  }, [preselectedServiceSlug, setValue]);

  const onSubmit = async (data: CustomQuoteFormData) => {
    setSubmitError(null);
    try {
      await sendCustomQuote(data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
       if (error instanceof Error && error.message.includes("CONFIGURATION_ERROR")) {
        setSubmitError("Configuratiefout: De ontwikkelaar moet de AWS URL instellen in de code.");
      } else {
        setSubmitError("Er is iets misgegaan bij het versturen. Probeer het later opnieuw.");
      }
    }
  };

  const handleBack = () => {
    if (preselectedServiceSlug) {
      // If we came from a specific service page, go back there
      navigate(`/diensten/${preselectedServiceSlug}`);
    } else {
      // Default behavior
      navigate('/', { state: { targetId: 'services' } });
    }
  };

  // Dynamic Title for the "Dedicated" Page feel
  const pageTitle = preselectedServiceTitle 
    ? `Offerte ${preselectedServiceTitle} | B&B Schoonmaakdiensten`
    : `Offerte Aanvragen | B&B Schoonmaakdiensten`;

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SEO 
        title={pageTitle} 
        description="Vraag direct een vrijblijvende offerte aan voor onze schoonmaakdiensten."
        path="/offerte-aanvragen"
      />
      <Section id="quote-form" noPadding>
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
          
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-slate-500 hover:text-primary mb-8 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            {preselectedServiceTitle ? `Terug naar ${preselectedServiceTitle}` : 'Terug naar diensten'}
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-secondary text-white p-8 md:p-10">
              <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Offerte Aanvraag
              </span>
              <h1 className="text-3xl font-heading font-extrabold mb-2">
                {preselectedServiceTitle ? `Offerte: ${preselectedServiceTitle}` : 'Maatwerk & Advies'}
              </h1>
              <p className="text-white/90">Vertel ons wat u nodig heeft, wij maken een passend voorstel.</p>
            </div>

            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-sm">
                      <CheckCircle size={48} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Aanvraag Verstuurd!</h2>
                    <p className="text-slate-600 max-w-md mb-8 text-lg">
                      Bedankt voor uw interesse in onze diensten. We analyseren uw aanvraag en nemen binnen één werkdag contact op.
                    </p>
                    <Button onClick={() => navigate('/')} variant="outline">
                      Terug naar Home
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-6"
                  >
                    {/* Honeypot Field (Hidden) */}
                    <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("_honey")} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Uw Naam <span className="text-red-500">*</span></label>
                        <input 
                          {...register("name", { required: "Naam is verplicht" })}
                          placeholder="J. Janssen"
                          className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-medium ${errors.name ? 'border-red-500' : 'border-slate-200'}`}
                        />
                        {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Bedrijfsnaam <span className="text-slate-400 font-normal">(Optioneel)</span></label>
                        <input 
                          {...register("companyName")}
                          placeholder="Bedrijf B.V."
                          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Emailadres <span className="text-red-500">*</span></label>
                        <input 
                          type="email"
                          {...register("email", { 
                            required: "Email is verplicht",
                            pattern: { 
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
                                message: "Ongeldig emailadres (bijv. naam@domein.nl)" 
                            }
                          })}
                          placeholder="naam@bedrijf.nl"
                          className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-medium ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Telefoonnummer <span className="text-red-500">*</span></label>
                        <input 
                          {...register("phone", { 
                            required: "Telefoonnummer is verplicht",
                            validate: (value) => {
                               const cleanNumber = value.replace(/[\s-]/g, '');
                               return /^06\d{8}$/.test(cleanNumber) || "Moet een geldig 06-nummer zijn (10 cijfers)";
                            }
                          })}
                          placeholder="06 12345678"
                          className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-medium ${errors.phone ? 'border-red-500' : 'border-slate-200'}`}
                        />
                        {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Type Dienstverlening</label>
                      <select 
                        {...register("serviceType")}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-medium text-slate-700 cursor-pointer"
                      >
                        <option value="maatwerk">Ik wil graag maatwerk advies</option>
                        {SERVICES.map(service => (
                          <option key={service.id} value={service.slug}>{service.title}</option>
                        ))}
                        <option value="anders">Anders, namelijk...</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Omschrijving van de opdracht <span className="text-red-500">*</span></label>
                      <textarea 
                        rows={5}
                        {...register("description", { required: "Omschrijving is verplicht" })}
                        placeholder="Beschrijf hier uw wensen, het type pand, de geschatte oppervlakte, etc..."
                        className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-medium ${errors.description ? 'border-red-500' : 'border-slate-200'}`}
                      ></textarea>
                      {errors.description && <span className="text-red-500 text-xs mt-1 block">{errors.description.message}</span>}
                    </div>

                    {submitError && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-start gap-2">
                         <AlertCircle size={16} className="mt-0.5 shrink-0" />
                         <span>{submitError}</span>
                      </div>
                    )}

                    <div className="pt-4">
                      <Button type="submit" variant="secondary" fullWidth disabled={isSubmitting} className="text-lg py-4">
                        {isSubmitting ? 'Versturen...' : 'Offerte Aanvragen'}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-8 text-slate-400">
             <div className="flex items-center gap-2 text-sm">
                <ClipboardList size={18} />
                <span>Vrijblijvend advies</span>
             </div>
             <div className="flex items-center gap-2 text-sm">
                <CheckCircle size={18} />
                <span>Binnen 24u reactie</span>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
};