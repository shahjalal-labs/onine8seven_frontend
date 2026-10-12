/* eslint-disable @typescript-eslint/no-explicit-any */
const getSiteUrl = () => process.env.NEXT_PUBLIC_SITE_URL || "https://hurakan.eu";

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${getSiteUrl()}/#organization`,
  name: "Equip HoReCa OÜ",
  alternateName: "Hurakan",
  url: getSiteUrl(),
  logo: {
    "@type": "ImageObject",
    url: `${getSiteUrl()}/assets/logo.png`,
    width: 229,
    height: 62
  },
  description: "Equip HoReCa OÜ is the official European distributor of Hurakan professional HoReCa equipment. Commercial kitchen solutions for dealers and distributors across Europe.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mustamäe tee 46",
    addressLocality: "Tallinn",
    addressRegion: "Harju maakond",
    postalCode: "10621",
    addressCountry: "EE"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+37258524201",
    contactType: "sales",
    email: "sales@equip.me",
    availableLanguage: ["English", "Russian", "Estonian", "French", "Romanian", "Serbian", "Croatian", "Czech"]
  },
  sameAs: [
    "https://www.facebook.com/EquipMeFoodServiceWholeSaler/",
    "https://www.instagram.com/equipgroup",
    "https://www.linkedin.com/company/equip-me-group/"
  ]
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${getSiteUrl()}/#website`,
  url: getSiteUrl(),
  name: "Hurakan",
  publisher: {
    "@id": `${getSiteUrl()}/#organization`
  },
  inLanguage: "en"
});

export const getHomeWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${getSiteUrl()}/#webpage`,
  url: `${getSiteUrl()}/`,
  name: "Hurakan: Professional HoReCa Equipment for Dealers in Europe",
  description: "Hurakan is a European brand of professional HoReCa equipment. Commercial kitchen solutions for dealers and distributors across Europe. Become a dealer today.",
  isPartOf: {
    "@id": `${getSiteUrl()}/#website`
  },
  about: {
    "@id": `${getSiteUrl()}/#organization`
  },
  inLanguage: "en"
});

export const getBrandWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${getSiteUrl()}/brand#webpage`,
  url: `${getSiteUrl()}/brand`,
  name: "Hurakan Brand | Reliable Professional Kitchen Equipment",
  description: "Professional kitchen equipment by Hurakan for HoReCa businesses. CE-certified commercial solutions at competitive prices for European dealers. View catalog.",
  isPartOf: {
    "@id": `${getSiteUrl()}/#website`
  },
  about: {
    "@id": `${getSiteUrl()}/#organization`
  },
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${getSiteUrl()}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hurakan Brand",
        item: `${getSiteUrl()}/brand`
      }
    ]
  }
});

export const getCompanyOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${getSiteUrl()}/company#organization`,
  name: "Equip HoReCa OÜ",
  alternateName: "Hurakan",
  url: getSiteUrl(),
  foundingDate: "1990",
  description: "Equip HoReCa OÜ is the official European distributor of Hurakan brand. We supply commercial kitchen equipment to professional dealers across Europe.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mustamäe tee 46",
    addressLocality: "Tallinn",
    addressRegion: "Harju maakond",
    postalCode: "10621",
    addressCountry: "EE"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+37258524201",
    contactType: "customer service",
    email: "sales@equip.me"
  },
  areaServed: "EU",
  knowsAbout: ["HoReCa equipment", "commercial kitchen equipment", "professional catering solutions"]
});

export const getCompanyWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${getSiteUrl()}/company#webpage`,
  url: `${getSiteUrl()}/company`,
  name: "About Hurakan & Equip HoReCa OÜ | B2B Kitchen Supplier",
  description: "Equip HoReCa OÜ is the official European distributor of Hurakan brand. We supply commercial kitchen equipment to professional dealers across Europe. Contact us.",
  isPartOf: {
    "@id": `${getSiteUrl()}/#website`
  },
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${getSiteUrl()}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Equip HoReCa OÜ",
        item: `${getSiteUrl()}/company`
      }
    ]
  }
});

export const getWarrantyWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${getSiteUrl()}/warranty#webpage`,
  url: `${getSiteUrl()}/warranty`,
  name: "Hurakan Warranty & Service | Professional After-Sales Support",
  description: "12-month warranty on all Hurakan equipment. Fast spare parts delivery, clear claims process and technical support for HoReCa dealers in Europe. Contact us.",
  isPartOf: {
    "@id": `${getSiteUrl()}/#website`
  },
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${getSiteUrl()}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Warranty and Service",
        item: `${getSiteUrl()}/warranty`
      }
    ]
  }
});

export const getHowToBuyWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${getSiteUrl()}/how-to-buy#webpage`,
  url: `${getSiteUrl()}/how-to-buy`,
  name: "How to Buy Hurakan Equipment | Dealer & Distributor Guide",
  description: "Become a Hurakan dealer: access wholesale prices, product catalogs and dedicated support. Join our European HoReCa equipment distributor network. Contact us.",
  isPartOf: {
    "@id": `${getSiteUrl()}/#website`
  },
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${getSiteUrl()}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "How to Buy",
        item: `${getSiteUrl()}/how-to-buy`
      }
    ]
  }
});

export const getHowToBuyHowToSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${getSiteUrl()}/how-to-buy#howto`,
  name: "How to Become a Hurakan Dealer",
  description: "Step-by-step guide to becoming an authorised Hurakan equipment dealer in Europe.",
  totalTime: "P3D",
  image: `${getSiteUrl()}/assets/home/howtobuy.jpg`,
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Submit your application",
      text: "Send us your company details or register on our portal. Fill out the trade account application with your company legal name, city, contact person name, email, and phone number.",
      url: `${getSiteUrl()}/how-to-buy#step-1`
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Approval",
      text: "Our team reviews your application. We work with legitimate restaurant kitchen equipment suppliers and wholesale commercial kitchen equipment businesses. Approval usually takes 1–3 business days.",
      url: `${getSiteUrl()}/how-to-buy#step-2`
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Partner portal access",
      text: "Once approved, you get dealer access to our partner portal with B2B pricing, wholesale price request options, real-time stock visibility, manuals and spare parts info, and ready-to-use product content for your website.",
      url: `${getSiteUrl()}/how-to-buy#step-3`
    }
  ]
});

export const getContactsLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${getSiteUrl()}/contacts#localbusiness`,
  name: "Equip HoReCa OÜ",
  alternateName: "Hurakan",
  url: getSiteUrl(),
  email: "sales@equip.me",
  telephone: "+37258524201",
  description: "Equip HoReCa OÜ — official European distributor of Hurakan professional HoReCa and commercial kitchen equipment.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mustamäe tee 46",
    addressLocality: "Tallinn",
    addressRegion: "Harju maakond",
    postalCode: "10621",
    addressCountry: "EE"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  currenciesAccepted: "EUR",
  areaServed: {
    "@type": "GeoShape",
    name: "European Union"
  }
});

export const getContactsWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${getSiteUrl()}/contacts#webpage`,
  url: `${getSiteUrl()}/contacts`,
  name: "Contact Hurakan | HoReCa Equipment Supplier in Europe",
  description: "Get in touch with the Hurakan team for dealer inquiries, product information and order support. Professional HoReCa equipment supplier in Europe. Contact us.",
  isPartOf: {
    "@id": `${getSiteUrl()}/#website`
  },
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${getSiteUrl()}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: `${getSiteUrl()}/contacts`
      }
    ]
  }
});

export const getCatalogLandingWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${getSiteUrl()}/catalog/#webpage`,
  url: `${getSiteUrl()}/catalog/`,
  name: "Hurakan Catalog | Professional HORECA Equipment Range",
  description: "Explore the full Hurakan catalog of professional HoReCa and commercial kitchen equipment. Fryers, grills, fridges and more for European dealers. Browse now.",
  isPartOf: {
    "@id": `${getSiteUrl()}/#website`
  },
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${getSiteUrl()}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hurakan Product Catalog",
        item: `${getSiteUrl()}/catalog/`
      }
    ]
  }
});

export const getCatalogLandingItemListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${getSiteUrl()}/catalog/#itemlist`,
  name: "Hurakan Product Catalog",
  description: "Full range of Hurakan professional HoReCa equipment categories.",
  url: `${getSiteUrl()}/catalog/`,
  numberOfItems: 13,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Bar Equipment", url: `${getSiteUrl()}/catalog/bar-equipment` },
    { "@type": "ListItem", position: 2, name: "Coffee Equipment", url: `${getSiteUrl()}/catalog/coffee-equipment` },
    { "@type": "ListItem", position: 3, name: "Washing Equipment", url: `${getSiteUrl()}/catalog/washing-equipment` },
    { "@type": "ListItem", position: 4, name: "Neutral Equipment", url: `${getSiteUrl()}/catalog/neutral-equipment` },
    { "@type": "ListItem", position: 5, name: "Fast Food Equipment", url: `${getSiteUrl()}/catalog/fast-food-equipment` },
    { "@type": "ListItem", position: 6, name: "Water Treatment Equipment", url: `${getSiteUrl()}/catalog/water-treatment-equipment` },
    { "@type": "ListItem", position: 7, name: "Servery Equipment", url: `${getSiteUrl()}/catalog/servery-equipment` },
    { "@type": "ListItem", position: 8, name: "Kitchen Tools and Cookware", url: `${getSiteUrl()}/catalog/kitchen-tools-and-cookware` },
    { "@type": "ListItem", position: 9, name: "Hygiene Equipment", url: `${getSiteUrl()}/catalog/hygiene-equipment` },
    { "@type": "ListItem", position: 10, name: "Cooking Equipment", url: `${getSiteUrl()}/catalog/cooking-equipment` },
    { "@type": "ListItem", position: 11, name: "Packaging Equipment", url: `${getSiteUrl()}/catalog/packaging-equipment` },
    { "@type": "ListItem", position: 12, name: "Refrigeration Equipment", url: `${getSiteUrl()}/catalog/refrigeration-equipment` },
    { "@type": "ListItem", position: 13, name: "Food Processing Equipment", url: `${getSiteUrl()}/catalog/food-processing-equipment` }
  ]
});

// Category schemas builder
export const getCategoryItemListSchema = (
  categorySlug: string,
  categoryName: string,
  description: string,
  productsList: any[]
) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${getSiteUrl()}/catalog/${categorySlug}#itemlist`,
  name: categoryName,
  description: description,
  url: `${getSiteUrl()}/catalog/${categorySlug}`,
  itemListElement: productsList.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.title,
    url: `${getSiteUrl()}/catalog/${categorySlug}/${product.id}`
  }))
});

export const getCategoryBreadcrumbSchema = (
  categorySlug: string,
  categoryName: string
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${getSiteUrl()}/`
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Catalog",
      item: `${getSiteUrl()}/catalog/`
    },
    {
      "@type": "ListItem",
      position: 3,
      name: categoryName,
      item: `${getSiteUrl()}/catalog/${categorySlug}`
    }
  ]
});

export const getProductSchema = (productInfo: any, canonicalUrl: string) => {
  let imageArray: string[] = [];

  if (productInfo.images && productInfo.images.length > 0) {
    const validImages = productInfo.images
      .map((img: any) => (typeof img === "string" ? img : img?.src))
      .filter(Boolean);
    if (validImages.length > 0) {
      imageArray = validImages;
    }
  } else if (productInfo.image) {
    const mainImg = typeof productInfo.image === "string" ? productInfo.image : productInfo.image?.src;
    if (mainImg) imageArray = [mainImg];
  }

  const modelMatch = productInfo.title.match(/HKN-[A-Z0-9\-]+/i);
  const model = modelMatch ? modelMatch[0] : productInfo.title;

  let availability = "https://schema.org/InStock";
  let hasStockData = false;
  if (productInfo.availability && productInfo.availability.length > 0) {
    hasStockData = true;
    const isOutOfStock = productInfo.availability.some(
      (a: any) =>
        a.status === "unavailable" &&
        (a.text.includes("0 pcs") || a.text.includes("Not expected") || a.text.toLowerCase().includes("out of stock"))
    );
    if (isOutOfStock) {
      availability = "https://schema.org/OutOfStock";
    }
  }

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: productInfo.title,
    description: productInfo.description,
    sku: productInfo.id?.toString() || "",
    model: model,
    brand: {
      "@type": "Brand",
      name: "Hurakan"
    },
    manufacturer: {
      "@type": "Organization",
      name: "Equip HoReCa OÜ"
    },
    mainEntityOfPage: canonicalUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      seller: {
        "@type": "Organization",
        name: "Equip HoReCa OÜ"
      }
    }
  };

  if (imageArray.length === 1) {
    schema.image = imageArray[0];
  } else if (imageArray.length > 1) {
    schema.image = imageArray.slice(0, 3);
  } else {
    schema.image = "";
  }

  if (hasStockData) {
    schema.offers.availability = availability;
  }

  return schema;
};

export const getProductBreadcrumbSchema = (
  categorySlug: string,
  categoryName: string,
  productName: string,
  canonicalUrl: string
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${getSiteUrl()}/`
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Catalog",
      item: `${getSiteUrl()}/catalog/`
    },
    {
      "@type": "ListItem",
      position: 3,
      name: categoryName,
      item: `${getSiteUrl()}/catalog/${categorySlug}`
    },
    {
      "@type": "ListItem",
      position: 4,
      name: productName,
      item: canonicalUrl
    }
  ]
});

export const getPrivacyPolicyWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${getSiteUrl()}/privacy-policy#webpage`,
  url: `${getSiteUrl()}/privacy-policy`,
  name: "Privacy Policy | Hurakan GDPR Compliance",
  description: "Read the Hurakan privacy policy and data protection terms. Full GDPR compliance for partners and dealers in the European Union.",
  isPartOf: {
    "@id": `${getSiteUrl()}/#website`
  },
  inLanguage: "en"
});

export const getNotFoundWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${getSiteUrl()}/404#webpage`,
  url: `${getSiteUrl()}/404`,
  name: "Page Not Found | Hurakan HoReCa Equipment",
  description: "This page could not be found. Browse the Hurakan product catalog or use search to find professional HoReCa equipment for dealers across Europe.",
  isPartOf: {
    "@id": `${getSiteUrl()}/#website`
  },
  inLanguage: "en"
});
