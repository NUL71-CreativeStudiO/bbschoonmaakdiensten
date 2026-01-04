import React, { useEffect } from 'react';
import { Section } from './ui/Section';
import { SEO } from './SEO';
import { BASE_URL } from '../constants';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resetCookies = () => {
    // Dispatch event to open CookieConsent immediately
    window.dispatchEvent(new Event('bb-reset-cookie-consent'));
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SEO 
        title="Privacyverklaring | B&B Schoonmaakdiensten" 
        description="Lees hoe B&B Schoonmaakdiensten omgaat met uw privacy, cookies en persoonsgegevens."
        path="/privacy"
      />
      <Section id="privacy-policy" className="bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Updated Header Font Size */}
          <h1 className="text-xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-8 break-words">
            Privacyverklaring
          </h1>
          
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p className="lead text-xl text-slate-700 mb-8 font-medium">
              B&B Schoonmaakdiensten respecteert de privacy van alle gebruikers van haar website en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Welke gegevens verzamelen wij?</h3>
            <p className="mb-4">
              Wij verwerken persoonsgegevens die u zelf aan ons verstrekt via de formulieren op onze website. Dit betreft:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li><strong>Contactformulier & Offerte Aanvragen:</strong> Naam, telefoonnummer, e-mailadres en de inhoud van uw bericht.</li>
              <li><strong>Sollicitaties:</strong> Naam, adresgegevens, contactgegevens, motivatie en uw CV (indien geüpload).</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Waar wordt deze informatie opgeslagen?</h3>
            <p className="mb-4">
              Uw gegevens worden veilig verwerkt en opgeslagen op de volgende locaties:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
               <li><strong>E-mail:</strong> Ingevulde formulieren worden via een beveiligde verbinding (AWS SES) direct doorgestuurd naar onze administratie (info@bbschoonmaakdiensten.nl). Wij bewaren deze e-mails niet langer dan noodzakelijk voor de afhandeling van uw vraag of verzoek.</li>
               <li><strong>Lokale Opslag (Uw Browser):</strong> Wij gebruiken 'Local Storage' in uw browser om uw voorkeuren te onthouden. Dit blijft op uw eigen apparaat staan en wordt niet met ons gedeeld.
                  <ul className="list-circle pl-5 mt-2 space-y-1 text-sm text-slate-500">
                      <li><code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">bb_cookie_consent</code>: Onthoudt of u de cookiebanner heeft geaccepteerd of geweigerd.</li>
                      <li><code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">bb_whatsapp_closed_ts</code>: Onthoudt of u de WhatsApp-knop heeft gesloten, zodat deze u niet blijft storen.</li>
                  </ul>
               </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Cookies & Google Analytics</h3>
            <p className="mb-4">
              Wij gebruiken Google Analytics om bij te houden hoe bezoekers onze website gebruiken. 
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Als u klikt op <strong>"Accepteren"</strong> in de cookiebanner, wordt er een analytische cookie geplaatst. Google slaat geanonimiseerde statistieken op (zoals welke pagina's bezocht worden).</li>
                <li>Als u klikt op <strong>"Weigeren"</strong>, worden er geen tracking cookies geplaatst. De website blijft volledig functioneel.</li>
            </ul>
            <p className="mb-6">
              Wij hebben Google Analytics privacyvriendelijk ingesteld volgens de handleiding van de Autoriteit Persoonsgegevens. Dit betekent dat IP-adressen worden geanonimiseerd en gegevens niet worden gedeeld voor advertentiedoeleinden.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Uw Rechten</h3>
            <p className="mb-6">
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Omdat wij uw formuliergegevens alleen als e-mail ontvangen, kunt u hiervoor contact opnemen via <a href="mailto:info@bbschoonmaakdiensten.nl" className="text-primary hover:underline">info@bbschoonmaakdiensten.nl</a>.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-10">
               <h4 className="text-lg font-bold mb-2 text-slate-900">Cookie Voorkeuren Aanpassen</h4>
               <p className="text-sm mb-4">Heeft u spijt van uw keuze? U kunt uw cookie-instellingen hieronder resetten. De banner verschijnt dan opnieuw.</p>
               <button 
                 type="button"
                 onClick={resetCookies}
                 className="bg-secondary text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-secondary-dark transition-colors shadow-sm"
               >
                 Reset Cookie Keuze
               </button>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
};