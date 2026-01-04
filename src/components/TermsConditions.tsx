import React, { useEffect } from 'react';
import { Section } from './ui/Section';
import { SEO } from './SEO';

export const TermsConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SEO 
        title="Algemene Voorwaarden | B&B Schoonmaakdiensten" 
        description="De algemene leveringsvoorwaarden van B&B Schoonmaakdiensten B.V."
        path="/algemene-voorwaarden"
      />
      <Section id="terms" className="bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="border-b border-slate-100 pb-8 mb-8">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Juridisch</span>
            {/* Updated Header Font Size */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-slate-900 mt-2 uppercase leading-tight break-words">
              Algemene Leveringsvoorwaarden<br />
              B&B Schoonmaakdiensten B.V.
            </h1>
            <p className="text-slate-500 mt-2 font-medium">
              KVK nr. 89348621
            </p>
          </div>
          
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-8">
            
            <p className="italic text-slate-500">
              Deze algemene leveringsvoorwaarden, hierna te noemen ‘de algemene voorwaarden’, hebben betrekking op alle glasbewassing- en/of schoonmaak- en/of regieovereenkomsten, alsmede op alle overeenkomsten van bruikleen of levering van goederen tussen B&B Schoonmaakdiensten B.V. ingeschreven bij de Kamer van Koophandel onder nummer 89348621 hierna te noemen “het schoonmaakbedrijf” en opdrachtgever.
            </p>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 1. Begripsomschrijvingen en offerte</h3>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">1. Opdrachtgever:</span> de natuurlijke of rechtspersoon, ten behoeve van wie op basis van deze voorwaarden werkzaamheden worden verricht. Niet als opdrachtgever in de zin van deze voorwaarden kan worden beschouwd de natuurlijke of rechtspersoon ten behoeve van wie in onderaanneming schoonmaakwerkzaamheden en/of andere bedrijfsdiensten worden verricht, terwijl die werkzaamheden door hemzelf zijn aangenomen.
                </p>
                <ul className="list-[lower-alpha] pl-8 space-y-2 mb-4">
                  <li><strong>Werkzaamheden:</strong> schoonmaakwerkzaamheden en/of andere bedrijfsdiensten.</li>
                  <li><strong>Partijen:</strong> Het schoonmaakbedrijf en opdrachtgever.</li>
                  <li><strong>Werkprogramma:</strong> een formulier waarop de aannemer in overleg met de opdrachtgever een werkomschrijving heeft aangegeven, zo mogelijk met vermelding van plaats, tijd en frequentie van de verschillende soorten werkzaamheden.</li>
                  <li><strong>Object:</strong> het schoon te houden gebouw, schip, bus, trein, sanitair etc.</li>
                </ul>
                <p>
                  <span className="font-semibold">1.1 Aannemer:</span> de natuurlijke of rechtspersoon, die op basis van deze voorwaarden ten behoeve van de opdrachtgever werkzaamheden uitvoert.
                </p>
                <p>
                  <span className="font-semibold">1.2 Offerte:</span> alle offertes zijn vrijblijvend, tenzij schriftelijk anders is vermeld.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 2. Opdrachtbevestiging</h3>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">2.1</span> Nadat door het schoonmaakbedrijf de inhoud van de overeenkomst is bevestigd door toezending aan de opdrachtgever, mag het schoonmaakbedrijf ervan uitgaan, dat de opdrachtgever zich met de opdrachtbevestiging en het werkprogramma volledig akkoord heeft verklaard.
                </p>
                <p>
                  <span className="font-semibold">2.2</span> Bij eenmalige werkzaamheden wordt de opdrachtgever geacht met de opdrachtbevestiging en de werkomschrijving te zijn akkoord gegaan, doordat hij deze heeft ondertekend, of doordat hij heeft toegestaan dat met de uitvoering der werkzaamheden wordt begonnen.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 3. Inhoud van de overeenkomst</h3>
              <p>
                <span className="font-semibold">3.1</span> Op de overeenkomst, die is vastgelegd in de opdrachtbevestiging, zijn van toepassing de algemene voorwaarden, het bij de overeenkomst behorende werkprogramma en de bepalingen van de CAO voor het Schoonmaak- en Glazenwassersbedrijf.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 4. Wijzigingen in de overeenkomst</h3>
              <p>
                <span className="font-semibold">4.1</span> Wijzigingen in de overeenkomst zoals neergelegd in de opdrachtbevestiging, behoudens de gevallen hierna genoemd in art. 9, slechts bindend, indien partijen deze schriftelijk zijn overeengekomen in de vorm van een aanvullingsclausule op de oorspronkelijke opdrachtbevestiging.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 5. Onderaanneming</h3>
              <p>
                <span className="font-semibold">5.1</span> Het schoonmaakbedrijf zal slechts met schriftelijke toestemming van de opdrachtgever de uitvoering van de overeenkomst geheel of gedeeltelijk door derden laten verrichten. Indien zulks naar de mening van het schoonmaakbedrijf een goede en efficiënte uitvoering van de opdracht bevordert.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 6. Uitvoering van de werkzaamheden</h3>
              <div className="space-y-4">
                <p><span className="font-semibold">6.1</span> De werkzaamheden zullen overeenkomstig het overeengekomen werkprogramma worden uitgevoerd.</p>
                <p><span className="font-semibold">6.2</span> De werkzaamheden zullen worden uitgevoerd op werkdagen van maandag tot en met vrijdag op de normale dagelijkse arbeidstijden, te weten tussen 06:00 en 24:00 uur. Op zaterdag, zon- en feestdagen worden geen werkzaamheden uitgevoerd, tenzij dit in de offerte is opgenomen. Het door het schoonmaakbedrijf door te betalen loon bij het niet werken op een feestdag (een werkdag waarop normaliter zou worden gewerkt) is in de prijs opgenomen. De overeenkomst betreffende scholen zijn aangegaan voor de periode van 42 weken per jaar. E.e.a. in verband met sluitingsdagen scholen.</p>
                <p><span className="font-semibold">6.3</span> Indien tijdens de uitvoering van het werkprogramma blijkt, dat kleine afwijkingen noodzakelijk, wenselijk of mogelijk zijn, kan het schoonmaakbedrijf zonder dat prijsaanpassing plaatsvindt, de uitvoering naar haar inzicht wijzigen. Zulks is echter uitsluitend toegestaan, indien de aldus gewijzigde werkzaamheden tenminste een gelijke kwaliteit garanderen en de afwijkingen aan de opdrachtgever worden medegedeeld.</p>
                <p><span className="font-semibold">6.4</span> Indien het schoonmaakbedrijf tijdens de uitvoering van de overeenkomst mocht blijken dat blijvende afwijkingen van het overeengekomen noodzakelijk zijn en indien de afwijkingen zodanig zijn dat zij gepaard dienen te gaan met prijsaanpassing, zal die prijsaanpassing geschieden in overleg tussen partijen en met inachtneming van het bepaalde in artikel 4.</p>
                <p><span className="font-semibold">6.5</span> Het personeel van het schoonmaakbedrijf dient zich voor zover bekend en mogelijk te houden aan de regels die op het object van de opdrachtgever gelden.</p>
                <p><span className="font-semibold">6.6</span> Uitvoering van een opdracht geschiedt binnen de gangbare, daarvoor ingeplande tijd. Oponthoud of vertraging is niet voor rekening van het schoonmaakbedrijf, tenzij door haar schuld veroorzaakt. Indien een opdracht moet worden bespoedigd kunnen overwerk en/of andere eventueel extra gemaakte kosten in rekening worden gebracht. De opdrachtgever geeft het schoonmaakbedrijf enige speling ten aanzien van de uitvoeringstermijn. De termijn geldt slechts als onherroepelijk en fataal indien de opdrachtgever het schoonmaakbedrijf bij het geven van de opdracht schriftelijk over de gevolgen van de vertraging heeft ingelicht en deze zaak door het schoonmaakbedrijf schriftelijk is bevestigd.</p>
                <div className="pl-0">
                  <p className="mb-2"><span className="font-semibold">6.7</span> Ten aanzien van de uitvoering van schoonmaakwerkzaamheden geldt verder dat:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Computers, toetsenborden, monitors, computerschermen, administratieve- en andersoortige apparatuur zullen door het uitvoerende personeel van het schoonmaakbedrijf niet worden schoongemaakt ter voorkoming van eventuele schade of storingen.</li>
                    <li>Volle, onopgeruimde bureaus en tafels worden eveneens niet schoongemaakt in verband met eventueel zoekraken van belangrijke stukken.</li>
                    <li>Uitsluitend dat wat in de papierbakken ligt, wordt door het uitvoerende personeel van het schoonmaakbedrijf verwijderd. Dozen, karton en of lege ordners alleen in overleg met de opdrachtgever.</li>
                    <li>Bij het op verzoek van de opdrachtgever afsluiten van het gebouw d.m.v. een alarmcode, rust de verantwoordelijkheid bij de opdrachtgever. Bij het per ongeluk verkeerd intoetsen van een alarmcode, waar eventuele kosten van een beveiligingsbedrijf aan verbonden zijn, komen deze kosten voor rekening van de opdrachtgever.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 7. Contractnaleving / Reclame</h3>
              <div className="space-y-4">
                <p><span className="font-semibold">7.1</span> De opdrachtgever heeft het recht te verlangen, dat het personeel van het schoonmaakbedrijf dat niet aan de door opdrachtgever in redelijkheid te stellen eisen voldoet, door het schoonmaakbedrijf wordt gecorrigeerd en desnoods vervangen, een en ander met inachtneming van de wettelijke regels.</p>
                <p><span className="font-semibold">7.2</span> De opdrachtgever dient in het geval van (on)zichtbare gebreken bij het schoonmaakbedrijf op straffe van verval van rechten onverwijld na vaststelling van dergelijke zichtbare en onzichtbare gebreken schriftelijk te reclameren.</p>
                <p><span className="font-semibold">7.3</span> Reclames geven geen recht om de betaling op te schorten.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 8. Hulpmiddelen en materialen</h3>
              <div className="space-y-4">
                <p><span className="font-semibold">8.1</span> Alle kosten van de voor de uitvoering van de voor de overeenkomst benodigde hulp- en reinigingsmiddelen zijn bij de prijs inbegrepen (exclusief plastic zakken). Het schoonmaakbedrijf is vrij in haar keuze van hulp- en reinigingsmiddelen, tenzij anders is overeengekomen.</p>
                <p><span className="font-semibold">8.2</span> In afwijking van het hierboven onder punt 8.1 bepaalde, zal de opdrachtgever voldoende afsluitbare werkkasten alsmede het voor de werkzaamheden benodigde water, gas en elektriciteit kosteloos ter beschikking stellen. De opdrachtgever geeft eveneens kosteloos gebruik van voorzieningen die aan het object aanwezig zijn ten behoeve van de glasbewassing.</p>
                <p><span className="font-semibold">8.3</span> De levering van plastic zakken en sanitaire voorzieningen zoals toiletpapier, zeep, handdoeken, luchtverfrissers e.d. kan worden verzorgd door het schoonmaakbedrijf. Dit wordt apart aan opdrachtgever gefactureerd tenzij anders overeengekomen in de door ons uitgebrachte offerte en/of overeenkomst.</p>
                <p><span className="font-semibold">8.4</span> De levering van diverse accessoires/hulpmiddelen/gereedschappen noodzakelijk bij het uitvoeren van de glasbewassing, zoals bijvoorbeeld hoogwerker kosten of kosten ten behoeven van een tuckerpoolsysteem kunnen worden verzorgd door het schoonmaakbedrijf en zullen eveneens apart worden gefactureerd tenzij anders overeengekomen in de door ons uitgebrachte offerte.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 9. Prijs</h3>
              <div className="space-y-4">
                <p><span className="font-semibold">9.1</span> De aanneemsom is gebaseerd op de bij de opname van de werkzaamheden aanwezige, opgegeven of aangenomen oppervlakte, hoeveelheid, bezetting, aankleding, inventaris, gebruik en bestemming van het object.</p>
                <p><span className="font-semibold">9.2</span> Indien de in lid 1 van dit artikel genoemde omstandigheden wijzigingen optreden die naar het oordeel van het schoonmaakbedrijf prijsaanpassingen noodzakelijk maken, zal die prijsaanpassing in overleg met de opdrachtgever en met inachtneming van artikel 4 geschieden.</p>
                <p><span className="font-semibold">9.3</span> Indien na het sluiten van de overeenkomst blijkt, dat het schoonmaakbedrijf op grond van het bepaalde van het Burgerlijk Wetboek, dan wel op grond van de voor het Schoonmaak- en Glazenwassersbedrijf toepasselijke Cao-bepaling inzake werkgelegenheid bij contract wisseling, dan wel op grond van enige andere wettelijke bepaling en/of op grond van enige rechterlijke uitspraak personeel heeft overgenomen, zijn alle met dit personeel verband houdende loonkosten die de loonkosten waarmee door het schoonmaakbedrijf in de offerte rekening is gehouden, overstijgen alsmede de kosten van eventuele afvloeiingsregelingen van dit personeel, voor rekening van de opdrachtgever.</p>
                <p><span className="font-semibold">9.4</span> Indien tijdens de looptijd van de overeenkomst een wijziging plaatsvindt in de loon- en/of andere kosten van het schoonmaakbedrijf, ten gevolge van wijzigingen in de betrokken CAO, dan wel als gevolg van wetten, besluiten of beschikkingen van overheidswege van een dwingend karakter, materialen, transportmiddelen, en dergelijke, zal een aanpassing van de contractprijs plaatsvinden, in beginsel overeenkomstig de door het Ministerie van Economische Zaken bij schriftelijke toegestaan maximale prijswijziging. Bij het ontbreken van een prijzenbeschikking als hierboven bedoeld, vindt een wijziging van de contractprijs plaats met een stijgingspercentage van de kosten hier bedoeld, overeenkomstig de rapportage, door een registeraccountant op te maken, hetwelk representatief is voor de bedrijfstak.</p>
                <p><span className="font-semibold">9.5</span> De wijzigingen in de aanneemsom zal aan de opdrachtgever kenbaar worden gemaakt door middel van een prijswijzigingsbrief.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 10. Betaling</h3>
              <div className="space-y-4">
                <p><span className="font-semibold">10.1</span> Facturering vindt plaats per maand. Betaling dient te geschieden binnen 14 dagen na factuurdatum. Tenzij anders overeengekomen in de offerte en/of overeenkomst.</p>
                <p><span className="font-semibold">10.2</span> Alle bedragen genoemd in offertes zijn exclusief BTW tenzij uitdrukkelijk anders vermeld.</p>
                <p><span className="font-semibold">10.3</span> Indien betaling na deze termijn geschiedt zal de wettelijke (handels)rente in rekening worden gebracht.</p>
                <p><span className="font-semibold">10.4</span> Het schoonmaakbedrijf is bevoegd de werkzaamheden op te schorten, indien de opdrachtgever ondanks sommatie weigert te voldoen aan de betalingsverplichtingen.</p>
                <p><span className="font-semibold">10.5</span> In geval van gerechtelijke of buitengerechtelijke incasso na ingebrekestelling, komen de incassokosten, inclusief die van de advocaat of gemachtigde van het schoonmaakbedrijf, voor rekening van de opdrachtgever.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 11. Aansprakelijkheid</h3>
              <div className="space-y-4">
                <p><span className="font-semibold">11.1</span> Het schoonmaakbedrijf heeft voor zich en zijn ondergeschikten een aansprakelijkheidsverzekering gesloten voor schade aan derden en goederen van derden toegebracht tot een bedrag van maximaal € 1.500.000,00 per gebeurtenis, tenzij anders overeengekomen.</p>
                <p><span className="font-semibold">11.2</span> De aansprakelijkheid voor schade veroorzaakt door het schoonmaakbedrijf is beperkt tot het bedrag waarvoor de aansprakelijkheidsverzekering dekking biedt. Het schoonmaakbedrijf is nimmer aansprakelijk voor indirecte- of vervolgschade en niet voor bedrijfsschade.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 12. Concurrentiebeding</h3>
              <p><span className="font-semibold">12.1</span> Het is de opdrachtgever verboden om gedurende de overeenkomst tussen het schoonmaakbedrijf en zijn personeel en gedurende een periode van zes maanden na afloop van die arbeidsovereenkomst, personeel van het schoonmaakbedrijf in dienst te nemen of op enigerlei wijze direct of indirect zonder toestemming van het schoonmaakbedrijf werkzaam te doen zijn in haar bedrijf, zulks op straffe van een niet voor matiging vatbare boete van € 2.000,00 voor elke overtreding per week dat de overtreding voortduurt.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 13. Duur van de overeenkomst</h3>
              <div className="space-y-4">
                <p><span className="font-semibold">13.1</span> De overeenkomst gaat in op de ingangsdatum die in de opdrachtbevestiging is vermeld. Indien in de opdrachtbevestiging een duur van de overeenkomst en de mogelijkheid/wijze van opzegging is bepaald, gelden die afspraken.<br />
                Bij het ontbreken daarvan gaat de overeenkomst in op de datum van ondertekening of de eerste datum van kennisgeving van aanvang der werkzaamheden en geldt voor de duur van een jaar met stilzwijgende verlenging van telkenmale een jaar. De overeenkomst kan door elk der partijen bij aangetekende brief worden opgezegd met inachtneming van een opzegtermijn van zes maanden tegen het einde van een het overeengekomen (verlengde) contractjaar.</p>
                <p><span className="font-semibold">13.2</span> Indien tussentijds het werkprogramma of de prijsstelling wijzigt (anders dan algemene prijscorrecties zoals bedoeld in art. 9.4), leidt dit tot de aanvang van een nieuwe duur van de overeenkomst van een jaar (of andere bepaalde tijd die is overeengekomen) die – behoudens opzegging conform art. 13.1 – steeds weer stilzwijgend wordt verlengd met de duur van een jaar.</p>
                <p><span className="font-semibold">13.3</span> Indien de opdrachtgever niet aan zijn betalingsverplichtingen voldoet of surséance van betaling aanvraagt of in staat van faillissement wordt gesteld, zijn alle openstaande facturen direct opeisbaar en heeft het schoonmaakbedrijf het recht de overeenkomst zonder rechtelijke tussenkomst te ontbinden.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 14. Contractwisseling en werkgelegenheid</h3>
              <div className="space-y-4">
                <p><span className="font-semibold">14.1</span> Het schoonmaakbedrijf zal zijn personeel belonen conform de geldende Cao-bepalingen. Zij zal alle inhoudingen en afdrachten verrichten voor Loonbelasting, premie Sociale Verzekeringswetten, A.O.W., etc. Het schoonmaakbedrijf vrijwaart de opdrachtgever voor alle aanspraken dienaangaande.</p>
                <p><span className="font-semibold">14.2</span> Het schoonmaakbedrijf verbindt zicht jegens de opdrachtgever te gedragen conform het bepaalde omtrent werkgelegenheid bij contractwisseling in de Collectieve Arbeidsovereenkomst in het Schoonmaak- en Glazenwassersbedrijf. Het schoonmaakbedrijf zal derhalve zowel bij het aangaan van de overeenkomst met de opdrachtgever, als ook bij beëindiging ervan –voor zover hierbij sprake is van contractwisseling- in overleg treden met het andere in het geding zijnde schoonmaakbedrijf, teneinde zoveel mogelijk werkgelegenheid te behouden en om uitvoering te geven aan een mogelijk op een van beide schoonmaakbedrijven rustende verplichting tot overname van schoonmaakpersoneel.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 15. Overmacht</h3>
              <p><span className="font-semibold">15.1</span> Indien de overeengekomen werkzaamheden door overmacht, dat wil zeggen bijzondere weersomstandigheden, waardoor geen openbaar vervoer rijdt, bommeldingen, brand, oorlogsomstandigheden, burgeroorlog, opstand of werkstaking, niet, niet tijdig of slechts gedeeltelijk worden uitgevoerd, geeft zulks geen recht op vermindering van de overeengekomen aanneemsom gedurende de eerste zestien weken waarin de overmacht duurt. Indien de overmacht langer voortduurt, kunnen het schoonmaakbedrijf en de opdrachtgever voor de resterende overmacht periode een andere aanneemsom overeenkomen.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artikel 16. Geschillen</h3>
              <p><span className="font-semibold">16.1</span> Geschillen, voortvloeiende uit deze overeenkomst of uit overeenkomsten, die met deze overeenkomst verband houden, worden ter berechting voorgelegd aan de bevoegde rechter. Een geschil is aanwezig als een van de partijen verklaart, dat zulks het geval is. Nederlands recht is van toepassing.</p>
            </section>

          </div>
        </div>
      </Section>
    </div>
  );
};