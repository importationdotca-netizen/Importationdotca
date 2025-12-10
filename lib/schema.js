const WEBSITE_NAME = 'ImportationDotCA Inc.';
const WEBSITE_URL = 'https://importationdot.ca';
const DEFAULT_LANGUAGE = 'en-CA';

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: WEBSITE_NAME,
  legalName: WEBSITE_NAME,
  url: WEBSITE_URL,
  logo: `${WEBSITE_URL}/media/logo.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hawkesbury',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Israel' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Japan' },
    { '@type': 'Country', name: 'South Korea' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'Mexico' },
    {
      '@type': 'AdministrativeArea',
      name: 'European Union',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'South America',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Africa',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Worldwide',
      except: ['Palestinian Territories', 'North Korea', 'Iran'],
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'info@importationdot.ca',
      telephone: '+1-800-226-2488',
      contactType: 'customer service',
      areaServed: ['Worldwide'],
      availableLanguage: ['en', 'fr'],
    },
  ],
});

export const webPageSchema = ({ name, description, url, type = 'WebPage', primaryImage } = {}) => {
  if (!name || !description || !url) {
    throw new Error('webPageSchema requires name, description, and url');
  }

  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    inLanguage: DEFAULT_LANGUAGE,
    isPartOf: {
      '@type': 'WebSite',
      name: WEBSITE_NAME,
      url: WEBSITE_URL,
    },
    ...(primaryImage
      ? {
          primaryImageOfPage: {
            '@type': 'ImageObject',
            contentUrl: primaryImage,
          },
        }
      : {}),
  };
};

export const serviceSchema = ({
  name,
  description,
  serviceType,
  url,
  areaServed = [
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Israel' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Japan' },
    { '@type': 'Country', name: 'South Korea' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'Mexico' },
    {
      '@type': 'AdministrativeArea',
      name: 'European Union',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'South America',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Africa',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Worldwide',
      except: ['Palestinian Territories', 'North Korea', 'Iran'],
    },
  ],
  offers,
} = {}) => {
  if (!name || !description || !url) {
    throw new Error('serviceSchema requires name, description, and url');
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: serviceType || name,
    provider: {
      '@type': 'Organization',
      name: WEBSITE_NAME,
      url: WEBSITE_URL,
    },
    areaServed,
    url,
    ...(offers
      ? {
          offers,
        }
      : {}),
  };
};

export const breadcrumbSchema = (items = []) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
};

export const faqSchema = (faqs = []) => {
  if (!Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const productSchema = ({ name, description, image, sku, category, url, offers }) => {
  if (!name || !description) {
    throw new Error('productSchema requires name and description');
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: WEBSITE_NAME,
    ...(image ? { image } : {}),
    ...(sku ? { sku } : {}),
    ...(category ? { category } : {}),
    ...(url ? { url } : {}),
    ...(offers
      ? {
          offers,
        }
      : {}),
  };
};

export const localBusinessSchema = ({
  name = WEBSITE_NAME,
  address,
  telephone,
  email,
  url,
  openingHours,
  priceRange,
} = {}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    ...(address
      ? {
          address: {
            '@type': 'PostalAddress',
            ...address,
          },
        }
      : {}),
    ...(telephone ? { telephone } : {}),
    ...(email ? { email } : {}),
    ...(url ? { url } : {}),
    ...(openingHours ? { openingHours } : {}),
    ...(priceRange ? { priceRange } : {}),
  };
};


