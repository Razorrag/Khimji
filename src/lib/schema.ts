const BASE_URL = 'https://www.khemjiwire.in';

const COMPANY = {
  name: 'Khemji Wire & Wire Pvt. Ltd.',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  telephone: ['+91-9829277869', '+91-141-2954144'],
  email: 'info@khemjiwire.in',
  foundingDate: '1988',
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: 'F-153, Sarna Doongar, RIICO Industrial Area',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302012',
    addressCountry: 'IN',
  },
};

const PRODUCT_DATA = {
  'Hot Dip Galvanized Mild Steel Wire': {
    standard: 'IS 280:2006',
    material: 'Galvanized Steel',
    diameter: '1.25 mm to 4.00 mm',
    tensile: '300–550 MPa',
    coating: 'Light (60–100 g/m²), Medium (150–200 g/m²), Heavy (250+ g/m²)',
  },
  'Cable Armouring Round Wire': {
    standard: 'IS 3975:1999',
    material: 'Galvanized Steel',
    diameter: '1.25 mm to 4.00 mm',
    tensile: '300–500 MPa',
    resistivity: 'Max 14.5 × 10⁻⁶ Ohm-cm',
  },
  'Cable Armouring Formed Wire (Strip)': {
    standard: 'IS 3975:1999',
    material: 'Galvanized Steel',
    diameter: '4.00 mm × 0.80 mm',
    tensile: '300–500 MPa',
    resistivity: 'Max 14.5 × 10⁻⁶ Ohm-cm',
  },
};

export function generateBreadcrumbs(items: { name: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem" as const,
        "position": i + 2,
        "name": item.name,
        ...(item.href ? { "item": `${BASE_URL}${item.href}` } : {}),
      })),
    ],
  };
}

export function generateProductSchema(name: keyof typeof PRODUCT_DATA, description: string, extraProperties?: Record<string, string>) {
  const data = PRODUCT_DATA[name];
  if (!data) return null;

  const properties: { "@type": "PropertyValue"; name: string; value: string }[] = [
    { "@type": "PropertyValue", "name": "Standard", "value": data.standard },
    { "@type": "PropertyValue", "name": "Diameter Range", "value": data.diameter },
    { "@type": "PropertyValue", "name": "Tensile Strength", "value": data.tensile },
  ];

  if ('coating' in data) {
    properties.push({ "@type": "PropertyValue", "name": "Zinc Coating", "value": data.coating });
  }
  if ('resistivity' in data) {
    properties.push({ "@type": "PropertyValue", "name": "Resistivity", "value": data.resistivity });
  }

  if (extraProperties) {
    for (const [k, v] of Object.entries(extraProperties)) {
      properties.push({ "@type": "PropertyValue", "name": k, "value": v });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "brand": { "@type": "Brand", "name": COMPANY.name },
    "manufacturer": { "@type": "Organization", "name": COMPANY.name, "@id": `${BASE_URL}/#organization` },
    "material": data.material,
    "additionalProperty": properties,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": COMPANY.name },
    },
  };
}

export function generateHowToSchema(name: string, description: string, steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "name": s.name,
      "position": i + 1,
      "text": s.text,
    })),
  };
}

export function generatePersonSchema(name: string, jobTitle: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "worksFor": { "@type": "Organization", "name": COMPANY.name },
  };
}

export function generateDefinedTermSchema(name: string, description: string, termCode?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": name,
    "description": description,
    "inDefinedTermSet": `${BASE_URL}/glossary`,
    ...(termCode ? { "termCode": termCode } : {}),
  };
}

export const organizationSchemaEnriched = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  "name": COMPANY.name,
  "alternateName": ["Khemji Wire", "Khemji Wire Industries"],
  "url": COMPANY.url,
  "logo": COMPANY.logo,
  "image": COMPANY.logo,
  "description": "Manufacturer of Galvanized Iron Wire, Hot Dip Galvanized MS Wire and Formed Wire for Cable Armouring. IS 280 and IS 3975 certified. Established 1988.",
  "foundingDate": COMPANY.foundingDate,
  "numberOfEmployees": "50+",
  "telephone": COMPANY.telephone,
  "email": COMPANY.email,
  "address": COMPANY.address,
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "27.0206",
    "longitude": "75.7172",
  },
  "areaServed": {
    "@type": "Country",
    "name": "India",
  },
  "knowsAbout": [
    "Galvanized Iron Wire",
    "Cable Armouring Wire",
    "IS 280",
    "IS 3975",
    "Hot Dip Galvanizing",
    "Mild Steel Wire",
    "Formed Wire",
    "Wire Manufacturing",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wire Products",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Hot Dip Galvanized Mild Steel Wire" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Cable Armouring Round Wire" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Cable Armouring Formed Wire" } },
    ],
  },
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "BIS Certification IS 280" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "BIS Certification IS 3975" },
  ],
  "sameAs": [],
};
