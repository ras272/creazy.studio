"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://creazy.studio/#organization",
        name: "Creazy Studio",
        url: "https://creazy.studio",
        logo: {
          "@type": "ImageObject",
          url: "https://creazy.studio/logo.png",
          width: 300,
          height: 100
        },
        description: "Agencia de desarrollo web, diseño de apps y marketing digital en Paraguay. Especialistas en crear experiencias digitales únicas para empresas y startups.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PY",
          addressRegion: "Central",
          addressLocality: "Asunción"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -25.2637,
          longitude: -57.5759
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Paraguay"
          },
          {
            "@type": "City",
            name: "Asunción"
          }
        ],
        serviceType: [
          "Desarrollo Web",
          "Diseño de Aplicaciones Móviles",
          "Marketing Digital",
          "Diseño UX/UI",
          "E-commerce",
          "Branding",
          "SEO",
          "Redes Sociales"
        ],
        sameAs: [
          "https://www.instagram.com/creazystudio",
          "https://www.linkedin.com/company/creazystudio",
          "https://www.facebook.com/creazystudio"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://creazy.studio/#website",
        url: "https://creazy.studio",
        name: "Creazy Studio - Desarrollo Web Paraguay",
        description: "Agencia de desarrollo web y marketing digital en Paraguay",
        publisher: {
          "@id": "https://creazy.studio/#organization"
        },
        inLanguage: "es-PY",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://creazy.studio/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://creazy.studio/#localbusiness",
        name: "Creazy Studio",
        image: "https://creazy.studio/logo.png",
        telephone: "+595-XXX-XXXXXX",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Asunción",
          addressLocality: "Asunción",
          addressRegion: "Central",
          postalCode: "1209",
          addressCountry: "PY"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -25.2637,
          longitude: -57.5759
        },
        url: "https://creazy.studio",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            opens: "08:00",
            closes: "18:00"
          }
        ],
        priceRange: "$$",
        servesCuisine: "Digital Services",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "47"
        }
      },
      {
        "@type": "Service",
        "@id": "https://creazy.studio/#service",
        name: "Desarrollo Web Paraguay",
        description: "Servicios profesionales de desarrollo web, diseño de aplicaciones móviles y marketing digital en Paraguay",
        provider: {
          "@id": "https://creazy.studio/#organization"
        },
        areaServed: {
          "@type": "Country",
          name: "Paraguay"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Digitales",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Desarrollo Web",
                description: "Creación de sitios web modernos y responsivos"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diseño de Apps Móviles",
                description: "Desarrollo de aplicaciones móviles nativas e híbridas"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Marketing Digital",
                description: "Estrategias de marketing digital y gestión de redes sociales"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "E-commerce",
                description: "Tiendas online y plataformas de comercio electrónico"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}