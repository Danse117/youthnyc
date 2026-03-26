import { siteConfig } from "@/data/content";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/image01.png`,
  description:
    "Brooklyn nonprofit empowering youth through sports, education, language classes, and after-school programs in Bay Ridge.",
  email: siteConfig.email,
  telephone: "+1-718-866-0666",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Brooklyn, New York",
  },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CommunityCenter",
  name: siteConfig.name,
  image: `${siteConfig.url}/images/image01.png`,
  telephone: "+1-718-866-0666",
  email: siteConfig.email,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.6275,
    longitude: -74.0214,
  },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
