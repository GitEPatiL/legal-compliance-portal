import NavBar from '@/components/NavBar';
import FooterSitemap from '@/components/FooterSitemap';
import { Calendar, CheckCircle, Bell, AlertTriangle, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Mock Data
const upcomingEvents = [
  { date: '15 Mar', title: 'Advance Tax Payment', category: 'Tax', urgent: true },
  { date: '31 Mar', title: 'Income Tax Return (ITR-U)', category: 'Tax', urgent: true },
  { date: '10 Apr', title: 'GSTR-1 Filling', category: 'GST', urgent: false },
  { date: '20 Apr', title: 'GSTR-3B Filling', category: 'GST', urgent: false },
];

const checklistItems = [
  { id: 1, text: 'Register for GST', completed: true },
  { id: 2, text: 'Open Current Bank Account', completed: true },
  { id: 3, text: 'Appoint Auditor', completed: false },
  { id: 4, text: 'Issue Share Certificates', completed: false },
  { id: 5, text: 'File Commencement of Business (INC-20A)', completed: false },
];

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <NavBar />

      <section className="pt-32 pb-12 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Compliance Hub</h1>
              <p className="text-slate-300 text-lg max-w-2xl">
                Track upcoming filings, manage legal obligations, and stay penalty-free.
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              <Bell className="w-4 h-4" /> Set Reminders
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Compliance Calendar */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2 dark:text-white">
                  <Calendar className="w-5 h-5 text-blue-600" /> Upcoming Deadlines
                </h2>
                <Link href="#" className="text-sm text-blue-600 hover:underline">
                  View Full Calendar
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors border border-gray-100 dark:border-slate-800 group"
                  >
                    <div
                      className={`p-3 rounded-lg text-center min-w-[70px] ${event.urgent ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' : 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'}`}
                    >
                      <span className="block text-xs font-bold uppercase">
                        {event.date.split(' ')[1]}
                      </span>
                      <span className="block text-xl font-bold">{event.date.split(' ')[0]}</span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 px-2 py-1 rounded-md mt-1 inline-block">
                        {event.category}
                      </span>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Updates */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-800">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                <Bell className="w-5 h-5 text-orange-500" /> Recent Regulatory Updates
              </h2>
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="border-l-4 border-orange-500 pl-4 py-1">
                    <p className="text-xs text-gray-500 mb-1">12 Feb, 2026</p>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      MCA amends rules for Private Limited incorporation
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      The Ministry of Corporate Affairs has simplified the SPICe+ form process...
                    </p>
                    <Link
                      href="#"
                      className="text-sm text-blue-600 font-medium mt-2 inline-block hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Health Score */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl shadow-blue-900/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Compliance Score
              </h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-bold">85</span>
                <span className="text-xl text-blue-200 mb-1">/ 100</span>
              </div>
              <p className="text-sm text-blue-100 mb-6">
                Your business is mostly compliant. 2 urgent actions required.
              </p>
              <div className="w-full bg-blue-900/30 h-2 rounded-full overflow-hidden">
                <div className="bg-white w-[85%] h-full rounded-full"></div>
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                New Business Checklist
              </h3>
              <ul className="space-y-3">
                {checklistItems.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${item.completed ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 dark:border-gray-600'}`}
                    >
                      {item.completed && <CheckCircle className="w-3.5 h-3.5" />}
                    </div>
                    <span
                      className={`text-sm ${item.completed ? 'text-gray-400 line-through' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 py-2 border border-gray-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                View All Checklists
              </button>
            </div>

            {/* Document Vault CTA */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 border border-dashed border-slate-300 dark:border-slate-600 text-center">
              <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                <FileText className="w-6 h-6 text-slate-500" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Document Vault</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Securely store and access your incorporation documents.
              </p>
              <button className="text-sm text-blue-600 font-bold hover:underline">
                Access Vault
              </button>
            </div>
          </div>
        </div>
      </section>

      <FooterSitemap />
    </main>
  );
}
