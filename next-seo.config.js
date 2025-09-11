// next-seo.config.js
const defaultSEOConfig = {
  title: "Team Infinity | IT Solutions",
  description: "Team Infinity is your trusted IT Solutions partner, offering Website Development, E-Commerce Solutions, Custom Software, and Digital Services. Visit us at teaminfinity.uk.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://teaminfinity.uk/',
    site_name: 'Team Infinity | IT Solutions',
    images: [
      {
        url: 'https://teaminfinity.uk/og-image.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Team Infinity - IT Solutions',
      },
    ],
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'IT Solutions, Website Development, E-Commerce, Custom Software, Digital Services, Team Infinity, Shopify Development, ',
    },
    {
      name: 'author',
      content: 'Team Infinity',
    },
    {
      name: 'instagram',
      content: 'https://instagram.com/teaminfinity.uk',
    },
  ],
};

export default defaultSEOConfig;
