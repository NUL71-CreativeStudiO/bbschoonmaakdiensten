import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { useForm } from 'react-hook-form';
import { Button } from './ui/Button';
import { ContactFormData } from '../types';
import { Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { sendContactForm } from '../utils/formSubmission';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const location = useLocation();
  const isPage = location.pathname === '/contact';

  // Scroll to top on mount if it's a dedicated page visit
  useEffect(() => {
    if (isPage) {
      window.scrollTo(0, 0);
    }
  }, [isPage]);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      await sendContactForm(data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      if (error instanceof Error && error.message.includes("CONFIGURATION_ERROR")) {
        setSubmitError("Configuratiefout: De ontwikkelaar moet de AWS URL instellen in de code.");
      } else {
        setSubmitError("Er is iets misgegaan. Controleer uw verbinding en probeer het opnieuw.");
      }
    }
  };

  return (
    <Section id="contact" className="bg-primary text-white" noPadding>
      <div className={`container mx-auto px-4 md:px-6 py-16 md:py-20 lg:py-28 ${isPage ? 'pt-32' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          
          {/* Info */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-2">Contact</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 lg:mb-8">
              Klaar voor een <br/><span className="text-secondary">frisse start?</span>
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-8 lg:mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Neem contact op voor een kennismaking of vraag direct een offerte aan. Wij reageren doorgaans binnen één werkdag.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 bg-white/5 rounded-xl border border-white/10 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-blue-200 uppercase font-bold tracking-wider">Bel ons</div>
                  <a href="tel:0850473030" className="text-xl font-bold hover:text-secondary transition-colors">085 - 047 30 30</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 text-slate-800">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Stuur een bericht</h3>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-[400px] text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Bedankt!</h4>
                  <p className="text-slate-600">We hebben uw bericht ontvangen en nemen zo snel mogelijk contact op.</p>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-4 md:space-y-5"
                >
                  {/* Honeypot Field (Hidden) */}
                  <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("_honey")} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Naam</label>
                      <input 
                        {...register("name", { required: "Naam is verplicht" })}
                        className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium ${errors.name ? 'border-red-500' : 'border-slate-200'}`}
                      />
                      {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Tel. nummer</label>
                      <input 
                        {...register("phone", { 
                          required: "Telefoon is verplicht",
                          validate: (value) => {
                             const cleanNumber = value.replace(/[\s-]/g, '');
                             return /^06\d{8}$/.test(cleanNumber) || "Moet een geldig 06-nummer zijn (10 cijfers)";
                          }
                        })}
                        placeholder="06 12345678"
                        className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium ${errors.phone ? 'border-red-500' : 'border-slate-200'}`}
                      />
                      {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Email</label>
                    <input 
                      type="email"
                      {...register("email", { 
                        required: "Email is verplicht",
                        pattern: { 
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
                          message: "Ongeldig emailadres (bijv. naam@domein.nl)" 
                        }
                      })}
                      className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                    />
                     {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Uw Bericht</label>
                    <textarea 
                      rows={4}
                      {...register("message", { required: "Bericht is verplicht" })}
                      className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium ${errors.message ? 'border-red-500' : 'border-slate-200'}`}
                    ></textarea>
                     {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                  </div>

                  {submitError && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-start gap-2">
                       <AlertCircle size={16} className="mt-0.5 shrink-0" />
                       <span>{submitError}</span>
                    </div>
                  )}

                  <Button type="submit" fullWidth disabled={isSubmitting} className="mt-2">
                    {isSubmitting ? 'Versturen...' : 'Verstuur Bericht'}
                  </Button>

                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
};