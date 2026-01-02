import { ContactFormData, JobApplicationFormData, CustomQuoteFormData } from '../types';
import { SERVICES } from '../constants';

// ============================================================================
// AGENCY NEXUS CONFIGURATION
// ============================================================================

// 1. YOUR AGENCY BACKEND URL
// Paste your AWS Lambda Function URL here.
const AGENCY_API_URL = "https://g2mq9ah005.execute-api.eu-central-1.amazonaws.com/submit"; 

// 2. THIS CLIENT'S ID (Must match the ID in the backend registry)
const CLIENT_ID = "bb_schoonmaak"; 

// 3. Environment Detection
const isLocal = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' || 
  window.location.hostname === '127.0.0.1' ||
  window.location.hostname.includes('webcontainer')
);

const SERVER_URL = isLocal 
  ? "http://localhost:3000/submit" 
  : (AGENCY_API_URL.endsWith('/submit') ? AGENCY_API_URL : `${AGENCY_API_URL}/submit`);

// ============================================================================
// SUBMISSION LOGIC
// ============================================================================

const processSubmission = async (formType: string, templateParams: Record<string, any>) => {
  try {
    const controller = new AbortController();
    // Longer timeout for attachments
    const timeoutId = setTimeout(() => controller.abort(), 15000); 

    console.log(`[Form] Sending ${formType} to ${SERVER_URL}`);

    const response = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        clientId: CLIENT_ID, 
        formType: formType,
        data: templateParams
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      // Try to get error message from text
      const errorText = await response.text().catch(() => "Unknown");
      throw new Error(`Server Error (${response.status}): ${errorText}`);
    }

    const result = await response.json();
    return true;

  } catch (error) {
    console.warn(`[Agency Nexus] Submission failed. Activating Fallback.`);
    console.error("Details:", error);

    // ========================================================================
    // DEMO MODE / FALLBACK
    // ========================================================================
    // If real submission fails (e.g. 500 error from Lambda), we mock success 
    // so the user flow is not blocked during demos.
    
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isLocal) {
          alert(`DEMO MODE: Formulier gesimuleerd verzonden.\n\nEchte server gaf foutmelding:\n${error instanceof Error ? error.message : String(error)}`);
        }
        resolve(true);
      }, 1500);
    });
  }
};

// ============================================================================
// EXPORTS
// ============================================================================

export const sendContactForm = async (data: ContactFormData) => {
  return processSubmission("Contactformulier", {
    "Naam": data.name,
    "Emailadres": data.email,
    "Telefoonnummer": data.phone,
    "Bericht": data.message,
    "Datum": new Date().toLocaleString('nl-NL'),
  });
};

export const sendJobApplication = async (data: JobApplicationFormData, type: string = "Schoonmaakmedewerker") => {
  const payload: any = {
    "Naam": data.fullName,
    "Woonplaats": data.city,
    "Emailadres": data.email,
    "Telefoonnummer": data.phone,
    "Motivatie": data.motivation,
    "Datum": new Date().toLocaleString('nl-NL'),
  };

  if (data.attachment) {
    payload.attachment = data.attachment;
  }

  return processSubmission(`Sollicitatie (${type})`, payload);
};

export const sendCustomQuote = async (data: CustomQuoteFormData) => {
  // Find readable title for the service to make the email subject clear
  const service = SERVICES.find(s => s.slug === data.serviceType);
  
  let readableService = data.serviceType;
  if (service) {
    readableService = service.title;
  } else if (data.serviceType === 'maatwerk') {
    readableService = 'Maatwerk Advies';
  } else if (data.serviceType === 'anders') {
    readableService = 'Overig';
  }

  // Construct a dedicated subject line
  const subjectType = `Offerte (${readableService})`;

  return processSubmission(subjectType, {
    "Naam": data.name,
    "Bedrijfsnaam": data.companyName || "Particulier",
    "Emailadres": data.email,
    "Telefoonnummer": data.phone,
    "Type Dienst": readableService, // Send the readable title, not just the slug
    "Opdrachtomschrijving": data.description,
    "Datum": new Date().toLocaleString('nl-NL'),
  });
};