const fs = require('fs');
const path = require('path');

const services = [
  'Private Limited Company',
  'LLP Registration',
  'One Person Company',
  'Company Registration',
  'GST Registration',
  'Trademark Registration',
  'FSSAI License',
  'Startup India Registration',
  'MSME Registration',
  'Import Export Code',
  'Patent Registration',
  'Copyright Registration',
  'Partnership Firm Registration',
  'Shop and Establishment License',
  'Professional Tax Registration',
  'Digital Signature Certificate',
  'Section 8 Company',
  'Nidhi Company',
  'Producer Company',
  'Trust Registration',
];

const locations = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Pune',
  'Hyderabad',
  'Kolkata',
  'Ahmedabad',
  'Jaipur',
  'Surat',
  'Lucknow',
  'Kanpur',
  'Nagpur',
  'Indore',
  'Thane',
  'Bhopal',
  'Visakhapatnam',
  'Pimpri-Chinchwad',
  'Patna',
  'Vadodara',
  'Ghaziabad',
  'Ludhiana',
  'Agra',
  'Nashik',
  'Faridabad',
  'Meerut',
  'Rajkot',
  'Kalyan-Dombivli',
  'Vasai-Virar',
  'Varanasi',
  'Srinagar',
  'Aurangabad',
  'Dhanbad',
  'Amritsar',
  'Navi Mumbai',
  'Allahabad',
  'Howrah',
  'Ranchi',
  'Gwalior',
  'Jabalpur',
  'Coimbatore',
  'Vijayawada',
  'Jodhpur',
  'Madurai',
  'Raipur',
  'Kota',
  'Guwahati',
  'Chandigarh',
  'Solapur',
  'Hubli-Dharwad',
];

const categories = [
  'Legal',
  'Tax',
  'Compliance',
  'Services',
  'IP',
  'Finance',
  'Startup',
  'General',
];

const adjectives = [
  'Fast',
  'Affordable',
  'Online',
  'Best',
  'Trusted',
  'Professional',
  'Expert',
  'Quick',
];

const categoryImages = {
  Legal: [
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73',
    'https://images.unsplash.com/photo-1505664194779-8beaceb93744',
    'https://images.unsplash.com/photo-1589578527966-fdac0f44566c',
  ],
  Tax: [
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    'https://images.unsplash.com/photo-1611974765270-ca12586343bb',
    'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f',
  ],
  Finance: [
    'https://images.unsplash.com/photo-1565514020176-db79330b6ea8',
    'https://images.unsplash.com/photo-1628172825852-6e273f55ba62',
    'https://images.unsplash.com/photo-1579532557861-335ce87653bf',
  ],
  Startup: [
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216',
    'https://images.unsplash.com/photo-1556742046-63b1157125c1',
  ],
  IP: [
    'https://images.unsplash.com/photo-1627993079870-13f86e336e4f',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
  ],
  General: [
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
    'https://images.unsplash.com/photo-1486406140926-c627a92ad1ab',
  ],
};

function getRandomImage(category) {
  const images = categoryImages[category] || categoryImages['General'];
  return images[Math.floor(Math.random() * images.length)];
}

function getRandomExample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePages() {
  const pages = [];

  // 1. Generate core service pages (already exist mostly, but we'll regenerate/expand)
  // 2. Generate Service + Location combinations (20 services * 50 locations = 1000 pages)

  services.forEach((service) => {
    locations.forEach((location) => {
      const adjective = getRandomExample(adjectives);
      const title = `${service} in ${location} - ${adjective} Service`;
      const slug = `${service.toLowerCase().replace(/\s+/g, '-')}-in-${location.toLowerCase().replace(/\s+/g, '-')}`;
      const category = getRandomExample(categories);

      // Generate consistent tags
      const tags = [
        service.split(' ')[0].toLowerCase(),
        'services',
        location.toLowerCase(),
        category.toLowerCase(),
      ];

      // Content blocks similar to home page examples
      const content_blocks = [
        {
          type: 'hero',
          style: 'split',
          content: {
            heading: `${service} in ${location}`,
            subheading: `Get professional ${service} services in ${location}. ${adjective} and reliable processing.`,
            cta_text: 'Get Started',
            cta_url: '/contact-us',
            image: getRandomImage(category),
            image_alt: `${service} services in ${location}`,
          },
        },
        {
          type: 'text',
          style: 'default',
          content: {
            heading: `Why Choose Us for ${service}?`,
            body: `<p>We provide top-notch <strong>${service}</strong> services specifically tailored for businesses and individuals in <strong>${location}</strong>. Our team of experts ensures a hassle-free experience.</p>`,
          },
        },
        {
          type: 'two_column',
          style: 'card',
          content: {
            heading: 'Our Advantages',
            left_content:
              '<h3>Local Expertise</h3><p>We understand the local regulations and requirements in ' +
              location +
              '.</p>',
            right_content:
              '<h3>Online Process</h3><p>Complete the entire process from the comfort of your home or office.</p>',
            left_image: getRandomImage('General'),
            right_image: getRandomImage('Startup'),
          },
        },
        {
          type: 'faq',
          style: 'default',
          content: {
            heading: 'Common Questions',
            questions: [
              {
                question: `Is physical presence required in ${location}?`,
                answer: 'No, our process is completely online.',
              },
              {
                question: 'How long does it take?',
                answer: 'Typically 3-5 working days depending on government processing times.',
              },
            ],
          },
        },
        {
          type: 'cta',
          style: 'default',
          content: {
            heading: `Ready to start your ${service}?`,
            description: `Contact our ${location} team today.`,
            cta_text: 'Apply Now',
            cta_url: '/contact-us',
          },
        },
      ];

      pages.push({
        slug,
        page_name: title,
        title,
        meta: {
          description: `Best ${service} services in ${location}. ${adjective}, reliable and affordable. Contact us for expert assistance.`,
          keywords: tags,
          canonical: `https://example.com/${slug}`,
        },
        theme: {
          color_palette: ['#1a56db', '#7c3aed'], // Blue/Purple default
          font_pair: 'Inter',
          card_style: 'elevated',
        },
        content_blocks,
        category,
        tags,
        last_modified: new Date().toISOString(),
        published: true,
      });
    });
  });

  // 2. Generate Base Service Pages (without location)
  services.forEach((service) => {
    const slug = service.toLowerCase().replace(/\s+/g, '-');
    const category = getRandomExample(categories);
    const title = `${service} - Professional Services`;

    // Check if page already exists in static pages or handled by app directory
    // (We will overwrite if needed to ensure consistency, but app directory takes precedence for routing if file exists)

    pages.push({
      slug,
      page_name: title,
      title,
      meta: {
        description: `Expert ${service} services. Fast, online, and affordable. Get started today.`,
        keywords: [service.toLowerCase(), 'services', 'legal'],
        canonical: `https://example.com/${slug}`,
      },
      theme: {
        color_palette: ['#1a56db', '#7c3aed'],
        font_pair: 'Inter',
        card_style: 'elevated',
      },
      content_blocks: [
        {
          type: 'hero',
          style: 'split',
          content: {
            heading: service,
            subheading: `India's most trusted platform for ${service}. 100% Online process.`,
            cta_text: 'Get Started',
            cta_url: '/contact-us',
            image: getRandomImage(category),
            image_alt: `${service} services`,
          },
        },
        {
          type: 'text',
          style: 'default',
          content: {
            heading: `About ${service}`,
            body: `<p>We offer comprehensive <strong>${service}</strong> solutions. Whether you are a startup or an established business, our team can help you with all your requirements.</p>`,
          },
        },
        {
          type: 'two_column',
          style: 'card',
          content: {
            heading: 'Why Choose Us?',
            left_content: '<h3>Expert Team</h3><p>Qualified professionals handling your case.</p>',
            right_content:
              '<h3>Best Pricing</h3><p>Transparent pricing with no hidden charges.</p>',
            left_image: getRandomImage('General'),
            right_image: getRandomImage('Startup'),
          },
        },
        {
          type: 'faq',
          style: 'default',
          content: {
            heading: 'Frequently Asked Questions',
            questions: [
              {
                question: `What documents are needed for ${service}?`,
                answer:
                  'The documents vary based on specific requirements. Contact us for a detailed checklist.',
              },
              {
                question: 'How can I track my application?',
                answer: 'You can track your application status through our online dashboard.',
              },
            ],
          },
        },
        {
          type: 'cta',
          style: 'default',
          content: {
            heading: 'Get Expert Assistance',
            description: 'Talk to our legal advisors today.',
            cta_text: 'Contact Us',
            cta_url: '/contact-us',
          },
        },
      ],
      category,
      tags: [service.split(' ')[0].toLowerCase(), 'service'],
      last_modified: new Date().toISOString(),
      published: true,
    });
  });

  // 3. Add Static Pages (Fixed: about-us, contact-us, etc.)
  const staticPages = [
    { title: 'About Us', slug: 'about-us', desc: 'Learn about our company.' },
    { title: 'Contact Us', slug: 'contact-us', desc: 'Get in touch with us.' },
    { title: 'Privacy Policy', slug: 'privacy-policy', desc: 'Our privacy policy.' },
    { title: 'Terms and Conditions', slug: 'terms-and-conditions', desc: 'Terms of service.' },
    { title: 'Disclaimer', slug: 'disclaimer', desc: 'Legal disclaimer.' },
    { title: 'Careers', slug: 'careers', desc: 'Join our team.' },
    { title: 'Blog', slug: 'blog', desc: 'Latest legal updates and news.' },
    { title: 'Sitemap', slug: 'sitemap', desc: 'Site navigation.' },
  ];

  staticPages.forEach((p) => {
    pages.push({
      slug: p.slug,
      page_name: p.title,
      title: p.title,
      meta: {
        description: p.desc,
        keywords: [p.title.toLowerCase(), 'legal'],
        canonical: `https://example.com/${p.slug}`,
      },
      theme: {
        color_palette: ['#1a56db', '#7c3aed'],
        font_pair: 'Inter',
        card_style: 'simple',
      },
      content_blocks: [
        {
          type: 'hero',
          style: 'simple',
          content: {
            heading: p.title,
            subheading: p.desc,
          },
        },
        {
          type: 'text',
          style: 'default',
          content: {
            heading: p.title,
            body: `<p>This is the ${p.title} page content. Coming soon.</p>`,
          },
        },
      ],
      category: 'General',
      tags: ['general'],
      last_modified: new Date().toISOString(),
      published: true,
    });
  });

  console.log(`Generated ${pages.length} pages.`);

  const outputPath = path.join(__dirname, '..', 'data', 'pages_manifest.json');
  fs.writeFileSync(outputPath, JSON.stringify(pages, null, 2));
  console.log(`Saved to ${outputPath}`);

  // Generate lightweight search index
  const searchIndex = pages.map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    tags: p.tags,
    description: p.meta.description,
  }));

  const searchIndexPath = path.join(__dirname, '..', 'data', 'search_index.json');
  fs.writeFileSync(searchIndexPath, JSON.stringify(searchIndex, null, 2));
  console.log(
    `Saved search index to ${searchIndexPath} (Size: ${(JSON.stringify(searchIndex).length / 1024).toFixed(2)} KB)`
  );
}

generatePages();
