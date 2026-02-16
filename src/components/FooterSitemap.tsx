'use client';
import Link from 'next/link';
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

export default function FooterSitemap() {
  return (
    <footer className="bg-black border-t border-gray-800 pt-20 pb-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-1.5 bg-blue-600 rounded-lg text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Legal<span className="text-blue-500">Hub</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Making legal compliance simple, accessible, and affordable for businesses across
              India. Your trusted partner for all corporate legal needs.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all border border-gray-800"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-500 hover:text-gray-300">
              <li>
                <Link href="/about-us" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-blue-400 transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Legal Blog
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/company-registration"
                  className="hover:text-blue-400 transition-colors"
                >
                  Company Registration
                </Link>
              </li>
              <li>
                <Link href="/gst-registration" className="hover:text-blue-400 transition-colors">
                  GST Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/trademark-registration"
                  className="hover:text-blue-400 transition-colors"
                >
                  Trademark Filing
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-blue-400 transition-colors">
                  Annual Compliance
                </Link>
              </li>
              <li>
                <Link href="/licenses" className="hover:text-blue-400 transition-colors">
                  Business Licenses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>123 Business Park, Sector 44, Gurgaon, Haryana 122003</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>support@legalhub.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 LegalHub Services. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
