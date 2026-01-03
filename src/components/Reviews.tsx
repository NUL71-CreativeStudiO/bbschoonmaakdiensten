import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { Star, BadgeCheck } from 'lucide-react';
import { REVIEWS, GOOGLE_REVIEW_URL, GOOGLE_API_KEY, GOOGLE_PLACE_ID } from '../constants';
import { Button } from './ui/Button';

// Simple Google G Logo Component
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

interface Review {
  id: string | number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      // If no keys are configured, stay with manual fallback
      if (!GOOGLE_API_KEY || !GOOGLE_PLACE_ID) return;

      setLoading(true);
      try {
        // NOTE FOR DEVELOPER:
        // The Google Places API does not support CORS for client-side requests (browser -> google).
        // To make this work in production, you must route this request through a proxy server or 
        // your own backend API that hides the API key and handles CORS.
        //
        // Example URL structure with proxy: 
        // const proxyUrl = "https://your-proxy-server.com/";
        // const targetUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}&language=nl`;
        // const response = await fetch(proxyUrl + targetUrl);
        
        // For now, we define the direct URL. If this fails due to CORS, the catch block triggers the fallback.
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}&language=nl`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
           throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.result && data.result.reviews) {
          // Transform Google API data to our format
          const apiReviews: Review[] = data.result.reviews.map((r: any, index: number) => ({
            id: `google-api-${index}`,
            author: r.author_name,
            rating: r.rating,
            text: r.text,
            date: r.relative_time_description
          }));

          // Strict Filter: ONLY 5-star reviews
          const fiveStarOnly = apiReviews.filter(r => r.rating === 5);
          
          // Only update if we actually got valid 5-star reviews
          if (fiveStarOnly.length > 0) {
            setReviews(fiveStarOnly);
          }
        }
      } catch (error) {
        // Silently fail to console and keep manual reviews
        console.warn("Google Reviews Live Fetch failed (using manual fallback):", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  // Filter ONLY 5-star reviews (Applied to both manual and fetched data for safety)
  const displayReviews = reviews.filter(review => review.rating === 5);

  return (
    <Section id="reviews" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-secondary font-bold uppercase tracking-wider text-sm">Ervaringen</span>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mt-2 mb-4">
          Wat klanten over ons zeggen
        </h2>
        
        <div 
          onClick={() => window.open(GOOGLE_REVIEW_URL, '_blank')}
          className="inline-flex items-center justify-center gap-3 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group"
        >
           <GoogleLogo />
           <div className="flex flex-col items-start leading-none">
              <span className="font-bold text-slate-700 text-sm group-hover:text-blue-600 transition-colors">Google Reviews</span>
              <div className="flex gap-0.5 mt-1">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-[#FBBC05] text-[#FBBC05]" />
                 ))}
              </div>
           </div>
        </div>
      </div>

      <div className="flex flex-nowrap overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 md:gap-6 lg:gap-8 relative min-h-[200px] md:overflow-visible md:pb-0 md:mx-0 md:px-0 no-scrollbar">
        {/* Loading Overlay (Optional: only visible if fetching takes > 0ms and we want to show it) */}
        {loading && (
           <div className="absolute inset-0 bg-white/80 z-10 flex items-center justify-center">
             <div className="w-8 h-8 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
           </div>
        )}

        {displayReviews.slice(0, 3).map((review) => (
           <div key={review.id} className="min-w-[85vw] w-[85vw] md:min-w-0 md:w-auto flex-shrink-0 snap-center bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full">
              {/* Google Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-50">
                <div className="flex items-center gap-2">
                   <GoogleLogo />
                   <span className="text-xs font-bold text-slate-500">Google Review</span>
                </div>
                <span className="text-xs text-slate-400">{review.date}</span>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-3">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />
                 ))}
              </div>
              
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm md:text-base">"{review.text}"</p>
              
              <div className="flex items-center gap-3 mt-auto">
                 <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-sm">
                    {review.author.charAt(0)}
                 </div>
                 <div className="flex flex-col">
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-1">
                      {review.author}
                      <BadgeCheck size={14} className="text-blue-500" />
                    </div>
                    <div className="text-xs text-green-600 font-medium">Geverifieerde Review</div>
                 </div>
              </div>
           </div>
        ))}
      </div>

      <div className="mt-0 md:mt-12 text-center">
         <Button 
            variant="outline" 
            onClick={() => window.open(GOOGLE_REVIEW_URL, '_blank')}
            className="border-slate-200 text-slate-600 hover:border-primary hover:text-primary hover:bg-white"
         >
            Bekijk alle reviews op Google
         </Button>
      </div>
    </Section>
  )
}