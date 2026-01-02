import { NavItem, Service, Job } from './types';
import { Sparkles, Building2, UserCheck, Wind, Droplets, PaintBucket } from 'lucide-react';

// CONFIGURATION NOTE: Change this URL back to 'https://www.bbschoonmaakdiensten.nl' when going live.
export const BASE_URL = 'https://bbschoonmaak.nul71.nl';

export const DEFAULT_SEO_IMAGE = '/public/BB_logo_trans.png';

export const GOOGLE_REVIEW_URL = 'https://www.google.com/search?sca_esv=58ed6498840539ce&hl=en&sxsrf=AE3TifPR-yL9jvSRGMFl1gsr8wNATVzFSA:1767363116921&q=b%26b+schoonmaakdiensten+&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EzFFYVXZ9bl9iNMNxVmR6uk1QYOulobS1-VFDTFh5L8SNiXxdPh75aEScjYXfJsiA9lqnaU%3D&uds=AOm0WdEpNcp6pEjRdta6g1dVDwXuGn2ASQc_i8vTEziX_JW1sIUObXA98RKHGaXP8clSBG20R8XKV7HEpBTK47PiKYX5ZTz0WlDrzP_wb4E8pysSdG5ta3Kl9JQZZxsSYNJiUdxQ8n9r&sa=X&ved=2ahUKEwiEtZfWhO2RAxUNzgIHHUNOANAQ3PALegQIQBAF&biw=2056&bih=1286&dpr=2';

// TO ENABLE LIVE REVIEWS LATER: Add your API Key and Place ID here
export const GOOGLE_API_KEY = ""; 
export const GOOGLE_PLACE_ID = "";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', sectionId: 'home' },
  { label: 'Over Ons', href: '/#about', sectionId: 'about' },
  { label: 'Diensten', href: '/#services', sectionId: 'services' },
  { label: 'Vacatures', href: '/#vacancies', sectionId: 'vacancies' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    slug: 'schoonmaakonderhoud',
    title: 'Schoonmaakonderhoud',
    description: 'Dagelijks en periodiek schoonmaakonderhoud van kantoren, scholen, en instellingen. Wij zorgen voor een schone werkplek.',
    details: 'Een schone werkomgeving is het visitekaartje van uw organisatie en draagt direct bij aan de productiviteit en het welzijn van uw medewerkers. Bij B&B Schoonmaakdiensten verzorgen wij het dagelijks en periodiek onderhoud van kantoren, scholen, zorginstellingen en VvE’s. Wij werken met vaste teams en duidelijke werkprogramma’s, zodat u altijd weet waar u aan toe bent. Van het legen van prullenbakken en het afnemen van bureaus tot sanitaire reiniging; wij ontzorgen u volledig.',
    icon: Sparkles,
    span: true,
  },
  {
    id: 's2',
    slug: 'glasbewassing',
    title: 'Glasbewassing',
    description: 'Specialistische glasbewassing voor elk type pand. Van traditioneel ladderwerk tot tuckerpole systemen.',
    details: 'Schone ramen geven uw pand een frisse en verzorgde uitstraling. Onze gespecialiseerde glazenwassers beheersen alle technieken: van traditioneel ladderwerk voor de lagere etages tot geavanceerde tuckerpole-systemen (telewash) voor veilig werken op hoogte. Ook voor hoogwerkers draaien wij onze hand niet om. Wij reinigen niet alleen het glas, maar nemen standaard ook de kozijnen mee voor een perfect resultaat.',
    icon: Droplets,
    span: false,
  },
  {
    id: 's3',
    slug: 'vloeronderhoud',
    title: 'Vloeronderhoud',
    description: 'Conserveren, polymeren en dieptereiniging van alle soorten vloeren. Wij verlengen de levensduur.',
    details: 'Vloeren hebben het zwaar te verduren. Of het nu gaat om linoleum, marmoleum, PVC, tapijt of natuursteen; elke vloer vereist specifiek onderhoud om de levensduur te verlengen en de uitstraling te behouden. B&B Schoonmaakdiensten is expert in het machinaal schrobben, conserveren (in de was zetten/polymeren) en sprayen van harde vloeren. Ook voor dieptereiniging van tapijten bent u bij ons aan het juiste adres.',
    icon: PaintBucket,
    span: false,
  },
  {
    id: 's4',
    slug: 'bouwopruiming',
    title: 'Bouwopruiming',
    description: 'Grondige opleveringsschoonmaak bij nieuwbouw of renovatie. Direct gebruiksklaar.',
    details: 'Een bouw- of renovatieproject levert veel stof en restmateriaal op. Voordat een pand in gebruik genomen kan worden, is een grondige bouwschoonmaak essentieel. Wij verwijderen bouwstof, cementsluiers, verfresten en stickers, en zorgen dat ramen, vloeren en sanitair brandschoon zijn. Zo kan de oplevering soepel verlopen en kunnen de gebruikers direct in een frisse omgeving aan de slag.',
    icon: Building2,
    span: false,
  },
  {
    id: 's5',
    slug: 'gevelreiniging',
    title: 'Gevelreiniging',
    description: 'Verwijderen van graffiti, alg en aanslag voor een representatieve uitstraling.',
    details: 'De gevel is het eerste wat bezoekers zien. Weersinvloeden, algen, mossen en graffiti kunnen de uitstraling van uw pand flink aantasten. Met onze gevelreinigingsdiensten herstellen wij uw gevel in oude glorie. Wij gebruiken verantwoorde reinigingstechnieken die effectief zijn tegen vuil maar zacht voor de ondergrond. Een schone gevel verhoogt niet alleen de waarde van uw pand, maar voorkomt ook bouwkundige schade op de lange termijn.',
    icon: Wind,
    span: true,
  },
];

export const JOBS: Job[] = [
  {
    id: 'j1',
    title: 'Schoonmaakmedewerker',
    location: 'Regio Leiden',
    hours: 'Parttime / Fulltime',
    description: 'Voor diverse locaties zoeken wij gemotiveerde schoonmaakmedewerkers. Ervaring is een pré, maar enthousiasme is belangrijker.',
  },
];

export const ABOUT_TEXT = {
  title: "Betrouwbaar, Flexibel en Vakkundig.",
  paragraph1: "B&B Schoonmaakdiensten is een dynamisch schoonmaakbedrijf dat staat voor kwaliteit en persoonlijk contact. Wij nemen de zorg voor uw pand volledig uit handen, zodat u zich kunt richten op uw eigen werkzaamheden.",
  paragraph2: "Met een team van goed opgeleide en betrokken medewerkers bedienen wij een breed scala aan opdrachtgevers: van kantoren en VvE's tot scholen en bouwprojecten. Wij werken met korte communicatielijnen en heldere afspraken, want afspraak is bij ons ook écht afspraak.",
};

export const REVIEWS = [
  {
    id: 1,
    author: "Hans de Vries",
    rating: 5,
    text: "Fantastische service! De ramen zijn streeploos schoon en de kozijnen worden ook altijd netjes meegenomen. Vriendelijke glazenwassers die hun afspraken nakomen.",
    date: "1 maand geleden"
  },
  {
    id: 2,
    author: "L. van den Berg",
    rating: 5,
    text: "Wij maken zakelijk gebruik van B&B Schoonmaakdiensten voor ons kantoorpand. Zeer tevreden over de communicatie en de kwaliteit van het schoonmaakwerk. Een aanrader.",
    date: "2 maanden geleden"
  },
  {
    id: 3,
    author: "Pieter Janssen",
    rating: 5,
    text: "Na de verbouwing een bouwopruiming laten doen. Wat een verademing! Alles was binnen no-time stofvrij en schoon. Keurig werk geleverd.",
    date: "3 maanden geleden"
  }
];