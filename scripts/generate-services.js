const fs = require('fs');
const path = require('path');

const SERVICES = [
  {
    slug: 'private-limited-company',
    title: 'Private Limited Company Registration',
    category: 'Start Business',
    description:
      'Register your Private Limited Company in India entirely online. fast, affordable, and 100% compliant.',
    hero_heading: 'Private Limited Company Registration',
    hero_subheading:
      'The most popular legal structure for businesses in India. Get incorporated in 7-10 days.',
    benefits: [
      {
        title: 'Limited Liability',
        desc: 'Protect your personal assets from business liabilities.',
      },
      { title: 'Easy Fundraising', desc: 'Preferred structure for VCs and angel investors.' },
      { title: 'Separate Legal Entity', desc: 'The company is a distinct entity from its owners.' },
    ],
    faq: [
      {
        question: 'What is the minimum capital required?',
        answer: 'There is no minimum capital requirement for a Private Limited Company.',
      },
      {
        question: 'How many directors are needed?',
        answer: 'A minimum of 2 directors are required.',
      },
    ],
  },
  {
    slug: 'llp-registration',
    title: 'LLP Registration',
    category: 'Start Business',
    description:
      'Register your Limited Liability Partnership (LLP) online. Low compliance cost and limited liability protection.',
    hero_heading: 'Limited Liability Partnership (LLP) Registration',
    hero_subheading:
      'Ideal for professional firms and small businesses. Enjoy low compliance costs.',
    benefits: [
      {
        title: 'Low Compliance',
        desc: 'Requires fewer annual filings compared to a Private Limited Company.',
      },
      { title: 'No Minimum Capital', desc: 'Start with any amount of capital.' },
      { title: 'Tax Benefits', desc: 'Save on dividend distribution tax.' },
    ],
    faq: [
      {
        question: 'Is audit mandatory for LLP?',
        answer:
          'Audit is only mandatory if turnover exceeds ₹40 Lakhs or contribution exceeds ₹25 Lakhs.',
      },
      {
        question: 'Can an LLP convert to Pvt Ltd?',
        answer:
          'Yes, but the process is complex. It is better to start as Pvt Ltd if you plan to raise funds.',
      },
    ],
  },
  {
    slug: 'one-person-company',
    title: 'One Person Company (OPC) Registration',
    category: 'Start Business',
    description:
      'Start a company with just one person. Get the benefits of a Private Limited Company with less compliance.',
    hero_heading: 'One Person Company (OPC) Registration',
    hero_subheading: 'Perfect for solo entrepreneurs who want limited liability.',
    benefits: [
      { title: 'Single Owner', desc: 'Complete control with 100% ownership.' },
      { title: 'Limited Liability', desc: 'Your personal assets are safe.' },
      { title: 'Corporate Status', desc: 'Better credibility than a proprietorship.' },
    ],
    faq: [
      {
        question: 'Who can be a nominee?',
        answer: 'Any Indian citizen residing in India can be a nominee.',
      },
      {
        question: 'Can OPC raise funding?',
        answer:
          'OPCs are not ideal for VC funding. You must convert to Pvt Ltd to issue shares to investors.',
      },
    ],
  },
  {
    slug: 'partnership-firm',
    title: 'Partnership Firm Registration',
    category: 'Start Business',
    description:
      'Register a partnership firm easily. Drafting of partnership deed and registration guidance.',
    hero_heading: 'Partnership Firm Registration',
    hero_subheading: 'Simple structure for 2 or more partners to start a business together.',
    benefits: [
      { title: 'Easy to Start', desc: 'Minimal formalities and costs.' },
      { title: 'Shared Responsibility', desc: 'Partners share duties and risks.' },
      { title: 'Quick Changes', desc: 'Easy to change partners or dissolve.' },
    ],
    faq: [
      {
        question: 'Is registration mandatory?',
        answer: 'No, but unregistered firms cannot sue third parties.',
      },
      {
        question: 'What is a Partnership Deed?',
        answer: 'It is a legal agreement outlining the rights and duties of partners.',
      },
    ],
  },
  {
    slug: 'gst-registration',
    title: 'GST Registration',
    category: 'Tax & GST',
    description:
      'Get your GSTIN number online. Mandatory for businesses with turnover above ₹20/40 Lakhs.',
    hero_heading: 'Online GST Registration',
    hero_subheading: 'Get your GST number in 3-7 working days. 100% Online Process.',
    benefits: [
      { title: 'Legal Recognition', desc: 'Authorized to collect tax from customers.' },
      { title: 'Input Tax Credit', desc: 'Claim credit for tax paid on purchases.' },
      { title: 'E-commerce Ready', desc: 'Mandatory for selling online.' },
    ],
    faq: [
      {
        question: 'Who needs GST?',
        answer: 'Businesses with turnover > ₹40L (₹20L for services) or selling interstate.',
      },
      {
        question: 'What documents are needed?',
        answer: 'PAN, Aadhaar, Business Address Proof, and Bank details.',
      },
    ],
  },
  {
    slug: 'income-tax-filing',
    title: 'Income Tax Return Filing',
    category: 'Tax & GST',
    description:
      'Expert assisted ITR filing for individuals and businesses. Maximize your refunds.',
    hero_heading: 'Income Tax Return (ITR) Filing',
    hero_subheading: 'File your taxes accurately and on time with CA assistance.',
    benefits: [
      { title: 'Expert Review', desc: 'Filed by experienced tax professionals.' },
      { title: 'Maximum Refund', desc: 'We identify all eligible deductions.' },
      { title: 'Audit Support', desc: 'Guidance in case of income tax notice.' },
    ],
    faq: [
      {
        question: 'What is the due date?',
        answer: 'Usually July 31st for individuals and Oct 31st for audit cases.',
      },
      {
        question: 'Can I file late?',
        answer: 'Yes, with a late fee. Belated returns can be filed till Dec 31st.',
      },
    ],
  },
  {
    slug: 'tds-return-filing',
    title: 'TDS Return Filing',
    category: 'Tax & GST',
    description: 'Quarterly TDS return filing for businesses. Avoid penalties and interest.',
    hero_heading: 'TDS Return Filing Service',
    hero_subheading: 'Timely filing of Forms 24Q, 26Q, 27Q & 27EQ.',
    benefits: [
      { title: 'Penalty Protection', desc: 'Avoid late fees of ₹200 per day.' },
      { title: 'Reconciliation', desc: 'Match TDS with Challans.' },
      { title: 'Correction Filing', desc: 'Support for revising returns.' },
    ],
    faq: [
      {
        question: 'Who prepares TDS return?',
        answer: 'Anyone who deducts TDS must file returns quarterly.',
      },
      { question: 'What forms are used?', answer: '24Q (Salary), 26Q (Non-Salary), 27Q (NRIs).' },
    ],
  },
  {
    slug: 'professional-tax',
    title: 'Professional Tax Registration',
    category: 'Tax & GST',
    description:
      'Professional Tax Registration and Enrolment (PTEC/PTRC) for employers and professionals.',
    hero_heading: 'Professional Tax Registration',
    hero_subheading: 'Compliance with state-level professional tax laws.',
    benefits: [
      { title: 'State Compliance', desc: 'Avoid state penalties.' },
      { title: 'Mandatory', desc: 'Required for all employers and professionals.' },
      { title: 'Easy Process', desc: 'Online registration in most states.' },
    ],
    faq: [
      {
        question: 'Is it applicable in all states?',
        answer: 'No, only in states like Maharashtra, Karnataka, West Bengal, etc.',
      },
      {
        question: 'Difference between PTEC & PTRC?',
        answer: 'PTEC is for the business/person, PTRC is to deduct from employees.',
      },
    ],
  },
  {
    slug: 'trademark-registration',
    title: 'Trademark Registration',
    category: 'Legal & IP',
    description: 'Protect your brand name and logo. File Trademark application online.',
    hero_heading: 'Online Trademark Registration',
    hero_subheading: 'Secure your brand identity within 24 hours (Application Filing).',
    benefits: [
      { title: 'Brand Protection', desc: 'Exclusive rights to use your brand name.' },
      { title: 'Asset Creation', desc: 'Intangible asset improving valuation.' },
      { title: 'Legal Remedy', desc: 'Right to sue for infringement.' },
    ],
    faq: [
      {
        question: 'What is a Trademark Class?',
        answer: 'Goods/Services are categorized into 45 classes.',
      },
      { question: 'How long is it valid?', answer: '10 years, renewable indefinitely.' },
    ],
  },
  {
    slug: 'copyright-registration',
    title: 'Copyright Registration',
    category: 'Legal & IP',
    description: 'Copyright your creative works - literary, artistic, musical, or software.',
    hero_heading: 'Copyright Registration',
    hero_subheading: 'Legal protection for your creative content and software.',
    benefits: [
      { title: 'Proof of Ownership', desc: 'Prima facie evidence in court.' },
      { title: 'Lifetime Validity', desc: 'Valid for author’s life + 60 years.' },
      { title: 'International Protection', desc: 'Protected in 170+ countries.' },
    ],
    faq: [
      {
        question: 'What can be copyrighted?',
        answer: 'Books, music, software code, videos, paintings, etc.',
      },
      {
        question: 'Can I copyright an idea?',
        answer: 'No, only the expression of an idea can be copyrighted.',
      },
    ],
  },
  {
    slug: 'patent-registration',
    title: 'Patent Registration',
    category: 'Legal & IP',
    description: 'File provisional and complete patent specifications. Protect your inventions.',
    hero_heading: 'Patent Registration Service',
    hero_subheading: 'Protect your novel inventions and technology.',
    benefits: [
      { title: 'Monopoly Rights', desc: 'Exclusive right to manufacture/sell for 20 years.' },
      { title: 'Highest Value', desc: 'Patents significantly increase company valuation.' },
      { title: 'Licensing Revenue', desc: 'Earn royalties by licensing your invention.' },
    ],
    faq: [
      {
        question: 'What is a provisional patent?',
        answer: 'Specifically to secure a priority date before filing complete details.',
      },
      { question: 'How long does it take?', answer: 'Grant usually takes 2-4 years in India.' },
    ],
  },
  {
    slug: 'legal-notice',
    title: 'Send Legal Notice',
    category: 'Legal & IP',
    description: 'Draft and send professional legal notices for recovery, defamation, or disputes.',
    hero_heading: 'Draft & Send Legal Notice',
    hero_subheading: 'Formal communication to resolve disputes before litigation.',
    benefits: [
      { title: 'Formal Warning', desc: 'Shows seriousness to resolve the issue.' },
      { title: 'Evidence', desc: 'Critical evidence in court if case is filed.' },
      { title: 'Quick Settlement', desc: 'Often leads to settlement without court.' },
    ],
    faq: [
      { question: 'When to send a notice?', answer: 'Ideally before filing any civil suit.' },
      {
        question: 'Do I need a lawyer?',
        answer: 'Yes, a notice sent by a lawyer carries more weight.',
      },
    ],
  },
];

const PAGES_DIR = path.join(process.cwd(), 'public', 'pages');
const MANIFEST_PATH = path.join(PAGES_DIR, 'manifest.json');

function generatePageContent(service) {
  return {
    slug: service.slug,
    page_name: service.title,
    title: service.title,
    meta: {
      description: service.description,
      keywords: [service.category, service.slug.replace(/-/g, ' '), 'legal services', 'India'],
      canonical: `http://localhost:3000/${service.slug}`,
    },
    theme: {
      color_palette: ['#1a56db', '#7c3aed'],
      font_pair: 'Inter',
      card_style: 'elevated',
    },
    content_blocks: [
      {
        type: 'hero',
        style: 'default',
        content: {
          heading: service.hero_heading,
          subheading: service.hero_subheading,
          cta_text: 'Get Started',
          cta_url: '/contact-us',
          image: '/images/hero-bg.jpg', // Placeholder
        },
      },
      {
        type: 'three_column', // Using features grid
        style: 'card',
        content: {
          heading: 'Why Choose This Service?',
          left_content: `<h3>${service.benefits[0].title}</h3><p>${service.benefits[0].desc}</p>`,
          right_content: `<h3>${service.benefits[1].title}</h3><p>${service.benefits[1].desc}</p>`,
          center_content: `<h3>${service.benefits[2].title}</h3><p>${service.benefits[2].desc}</p>`, // Note: BlockRenderer might need update for center_content or use props
        },
        // Fallback for TwoColumn if three_column not fully supported in logic but schema allows
        props: {
          columns: 3,
          items: service.benefits,
        },
      },
      {
        type: 'step', // Assuming a process block or using text for now
        style: 'process',
        content: {
          heading: 'Registration Process',
          steps: [
            { title: 'Submit Details', desc: 'Fill our simple form.' },
            { title: 'Document Draft', desc: 'We prepare the documents.' },
            { title: 'Filing', desc: 'We file with the authority.' },
            { title: 'Approval', desc: 'Get your certificate.' },
          ],
        },
        // Using 'process' type which was in BlockRenderer
        type: 'process',
      },
      {
        type: 'faq',
        style: 'accordion',
        content: {
          heading: 'Frequently Asked Questions',
          questions: service.faq,
        },
      },
      {
        type: 'cta',
        style: 'highlight',
        content: {
          heading: 'Ready to move forward?',
          description: 'Our experts are available to guide you.',
          cta_text: 'Consult Now',
          cta_url: '/contact-us',
        },
      },
    ],
    category: service.category,
    published: true,
    last_modified: new Date().toISOString(),
  };
}

async function main() {
  console.log('Reading manifest...');
  let manifest = [];
  try {
    const data = fs.readFileSync(MANIFEST_PATH, 'utf8');
    manifest = JSON.parse(data);
  } catch (err) {
    console.error('Error reading manifest, creating new:', err);
  }

  const existingSlugs = new Set(manifest.map((p) => p.slug));
  let updated = false;

  SERVICES.forEach((service) => {
    const pageData = generatePageContent(service);
    const filePath = path.join(PAGES_DIR, `${service.slug}.json`);

    // Write individual page file
    fs.writeFileSync(filePath, JSON.stringify(pageData, null, 2));
    console.log(`Generated: ${service.slug}.json`);

    // Update manifest if new
    if (!existingSlugs.has(service.slug)) {
      manifest.push({
        slug: service.slug,
        page_name: service.title,
        title: service.title,
        meta: pageData.meta,
        theme: pageData.theme,
        category: service.category,
        tags: [service.category],
        last_modified: new Date().toISOString(),
        published: true,
        // Note: manifest ideally keeps a summary, but for now we follow the structure
      });
      existingSlugs.add(service.slug);
      updated = true;
      console.log(`Added to manifest: ${service.slug}`);
    }
  });

  if (updated) {
    console.log('Writing updated manifest...');
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
    console.log('Manifest updated successfully.');
  } else {
    console.log('Manifest already up to date.');
  }
}

main().catch(console.error);
