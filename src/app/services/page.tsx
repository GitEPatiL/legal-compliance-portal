import NavBar from '@/components/NavBar';
import FooterSitemap from '@/components/FooterSitemap';
import {
  Search,
  ArrowRight,
  ShieldCheck,
  FileText,
  Globe,
  Calculator,
  Landmark,
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    id: 'start-business',
    title: 'Start Business',
    icon: RocketIcon,
    description: 'Turn your idea into a legal entity. Fast, fully online registration.',
    services: [
      'Private Limited Company',
      'Public Limited Company',
      'Limited Liability Partnership',
      'One Person Company',
      'Partnership Firm',
      'Proprietorship',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    icon: ShieldCheck,
    description: 'Protect your brand, logo, and inventions with our IP services.',
    services: [
      'Trademark Registration',
      'Copyright Registration',
      'Patent Registration',
      'Design Registration',
      'Trademark Objection',
      'Trademark Renewal',
    ],
  },
  {
    id: 'government-registration',
    title: 'Government Registration',
    icon: Landmark,
    description: 'Get necessary licenses and registrations to operate legally.',
    services: [
      'GST Registration',
      'FSSAI License',
      'Import Export Code',
      'Udyam Registration',
      'Shop & Establishment',
      'Professional Tax',
    ],
  },
  {
    id: 'compliance-tax',
    title: 'Compliance & Tax',
    icon: Calculator,
    description: 'Stay compliant with annual filings and tax returns.',
    services: [
      'GST Filing',
      'Income Tax Filing',
      'TDS Return',
      'Annual Compliance',
      'Accounting Services',
      'Payroll Management',
    ],
  },
  {
    id: 'legal-docs',
    title: 'Legal Documents',
    icon: FileText,
    description: 'Expert drafted contracts and agreements for your business.',
    services: [
      'Founders Agreement',
      'Non Disclosure Agreement',
      'Employment Agreement',
      'Shareholders Agreement',
      'Term Sheet',
      'Privacy Policy',
    ],
  },
  {
    id: 'international',
    title: 'International Business',
    icon: Globe,
    description: 'Expand your business globally with our international services.',
    services: [
      'US Company Incorporation',
      'Singapore Company Incorporation',
      'Dubai Company Incorporation',
      'UK Company Incorporation',
    ],
  },
];

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-900 border-b border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Explore Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            From incorporation to compliance, we provide end-to-end legal solutions for businesses
            of all sizes.
          </p>

          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search for a service (e.g. 'Private Limited', 'Trademark')"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700 backdrop-blur-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 border border-gray-800 group"
            >
              <div className="w-14 h-14 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <category.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{category.description}</p>

              <ul className="space-y-3 mb-8">
                {category.services.map((service) => (
                  <li key={service}>
                    <Link
                      href={`/${service.toLowerCase().replace(/ /g, '-')}`}
                      className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2.5"></div>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={`/category/${category.id}`}
                className="inline-flex items-center text-blue-400 font-semibold text-sm hover:text-blue-300"
              >
                View All {category.title} <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Our legal experts are here to help you navigate specific requirements.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">
            Talk to an Expert
          </button>
        </div>
      </section>

      <FooterSitemap />
    </main>
  );
}
