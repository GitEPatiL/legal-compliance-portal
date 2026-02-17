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

  // 3. Add Static Pages (Fixed: about-us, contact-us, etc.)
  const staticPages = [
    { title: 'About Us', slug: 'about-us', desc: 'Learn about our company.' },
    { title: 'Contact Us', slug: 'contact-us', desc: 'Get in touch with us.' },
    { title: 'Privacy Policy', slug: 'privacy-policy', desc: 'Our privacy policy.' },
    { title: 'Terms and Conditions', slug: 'terms-and-conditions', desc: 'Terms of service.' },
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
            body: `<p>This is the ${p.title} page content.</p>`,
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
