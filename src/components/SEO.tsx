import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_URL, DEFAULT_SEO_IMAGE } from '../constants';

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'business';
  schema?: Record<string, any>; // JSON-LD Structured Data
  noIndex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  path = '', 
  image = DEFAULT_SEO_IMAGE,
  type = 'website',
  schema,
  noIndex = false 
}) => {
  const defaultDesc = "B&B Schoonmaakdiensten - Uw partner voor professionele schoonmaak, glasbewassing en vloeronderhoud in de regio Leiden.";
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description || defaultDesc} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="B&B Schoonmaakdiensten" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};