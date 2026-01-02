import React, { useState, useEffect, useRef } from 'react';
import { Section } from './ui/Section';
import { useForm } from 'react-hook-form';
import { Button } from './ui/Button';
import { JobApplicationFormData } from '../types';
import { CheckCircle, ArrowLeft, UploadCloud, AlertCircle, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { sendJobApplication } from '../utils/formSubmission';

export const OpenApplicationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<{name: string, content: string, type: string} | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm<JobApplicationFormData>();

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Het bestand is te groot. Maximaal 5MB toegestaan.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const content = base64String.split(',')[1];
      
      setSelectedFile({
        name: file.name,
        type: file.type,
        content: content
      });
    };
    reader.readAsDataURL(file);
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (data: JobApplicationFormData) => {
    setSubmitError(null);
    
    if (selectedFile) {
      data.attachment = selectedFile;
    }

    try {
      await sendJobApplication(data, "Open Sollicitatie");
      setIsSubmitted(true);
      reset();
      setSelectedFile(null);
    } catch (error) {
      if (error instanceof Error && error.message.includes("CONFIGURATION_ERROR")) {
        setSubmitError("Configuratiefout: De ontwikkelaar moet de AWS URL instellen in de code.");
      } else {
        setSubmitError("Er is iets misgegaan bij het versturen. Probeer het later opnieuw.");
      }
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <Section id="open-application-form" noPadding>
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
          
          <button 
            onClick={() => navigate('/', { state: { targetId: 'vacancies' } })}
            className="flex items-center gap-2 text-slate-500 hover:text-primary mb-8 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Terug naar vacatures
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-primary text-white p-8 md:p-10">
              <span className="inline-block bg-secondary/20 text-secondary-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Open Sollicitatie
              </span>
              <h1 className="text-3xl font-heading font-extrabold mb-2">Jouw Toekomst bij B&B</h1>
              <p className="text-blue-100">Staat jouw droombaan er niet tussen? Vertel ons wat je zoekt.</p>
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Bedankt voor je interesse!</h2>
                    <p className="text-slate-600 max-w-md mb-8 text-lg">
                      We hebben je open sollicitatie ontvangen. We zullen kijken of er passende mogelijkheden zijn en nemen contact met je op.
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
                        <label className="block text-sm font-bold text-slate-700 mb-2">Volledige Naam <span className="text-red-500">*</span></label>
                        <input 
                          {...register("fullName", { required: "Naam is verplicht" })}
                          placeholder="Bijv. Jan Jansen"
                          className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium ${errors.fullName ? 'border-red-500' : 'border-slate-200'}`}
                        />
                        {errors.fullName && <span className="text-red-500 text-xs mt-1 block">{errors.fullName.message}</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Woonplaats <span className="text-red-500">*</span></label>
                        <input 
                          {...register("city", { 
                            required: "Woonplaats is verplicht",
                            pattern: {
                              value: /^[a-zA-Z\u00C0-\u017F\s'-]{2,}$/,
                              message: "Voer een geldige plaatsnaam in (geen cijfers of symbolen)"
                            }
                          })}
                          placeholder="Bijv. Leiden"
                          className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium ${errors.city ? 'border-red-500' : 'border-slate-200'}`}
                        />
                        {errors.city && <span className="text-red-500 text-xs mt-1 block">{errors.city.message}</span>}
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
                          placeholder="jan@voorbeeld.nl"
                          className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
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
                          className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium ${errors.phone ? 'border-red-500' : 'border-slate-200'}`}
                        />
                        {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Motivatie & Wensen</label>
                      <textarea 
                        rows={5}
                        {...register("motivation", { required: "Vertel ons kort wat je zoekt" })}
                        placeholder="Vertel ons naar wat voor soort werk je op zoek bent en waarom je bij ons wilt werken..."
                        className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium ${errors.motivation ? 'border-red-500' : 'border-slate-200'}`}
                      ></textarea>
                      {errors.motivation && <span className="text-red-500 text-xs mt-1 block">{errors.motivation.message}</span>}
                    </div>

                    {/* Functional Upload UI */}
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="hidden"
                    />

                    {!selectedFile ? (
                      <div 
                        onClick={handleFileClick}
                        className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:bg-slate-50 hover:border-primary/50 transition-all cursor-pointer group"
                      >
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          <UploadCloud size={24} />
                        </div>
                        <p className="text-sm text-slate-600 font-medium group-hover:text-primary">Klik om CV te uploaden (Optioneel)</p>
                        <p className="text-xs text-slate-400 mt-1">PDF, Word (Max 5MB)</p>
                      </div>
                    ) : (
                      <div className="border-2 border-solid border-green-100 bg-green-50 rounded-lg p-4 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 shadow-sm">
                              <FileText size={20} />
                           </div>
                           <div>
                             <p className="text-sm font-bold text-slate-800 line-clamp-1">{selectedFile.name}</p>
                             <p className="text-xs text-green-600">Gereed voor verzending</p>
                           </div>
                         </div>
                         <button 
                           type="button" 
                           onClick={removeFile}
                           className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                         >
                            <X size={20} />
                         </button>
                      </div>
                    )}

                    {submitError && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-start gap-2">
                         <AlertCircle size={16} className="mt-0.5 shrink-0" />
                         <span>{submitError}</span>
                      </div>
                    )}

                    <div className="pt-4">
                      <Button type="submit" fullWidth disabled={isSubmitting} className="text-lg py-4">
                        {isSubmitting ? 'Versturen...' : 'Open Sollicitatie Versturen'}
                      </Button>
                    </div>
                    
                    <p className="text-xs text-slate-400 text-center">
                      Door te solliciteren ga je akkoord met onze privacyverklaring. Je gegevens worden vertrouwelijk behandeld.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};