import { motion, AnimatePresence } from 'motion/react';
import { FileText, ShieldCheck, Download, CheckCircle2, ArrowRight, HelpCircle, ChevronDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { faqs } from '../constants/faq';
import { cn } from '../lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  key?: React.Key;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <ChevronDown className={cn("h-5 w-5 text-gray-500 transition-transform", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl md:text-7xl font-black text-[#1e3a5f] tracking-tight mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm font-medium text-gray-400">
                <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> {t('hero.badge1')}</span>
                <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> {t('hero.badge2')}</span>
                <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> {t('hero.badge3')}</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/olustur"
                  className="w-full sm:w-auto px-10 py-4 bg-[#1e3a5f] text-white rounded-2xl font-bold text-lg hover:bg-[#2a4d7a] active:scale-95 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  {t('nav.start')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/kira-sozlesmesi-ornegi-pdf"
                  className="w-full sm:w-auto px-10 py-4 bg-white text-gray-600 border border-gray-200 rounded-2xl font-bold text-lg hover:border-gray-300 hover:bg-gray-50 active:scale-95 transition-all flex items-center justify-center"
                >
                  {t('nav.sample')}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: CheckCircle2, title: t('trust.badge1.title'), desc: t('trust.badge1.desc') },
              { icon: ShieldCheck, title: t('trust.badge2.title'), desc: t('trust.badge2.desc') },
              { icon: Download, title: t('trust.badge3.title'), desc: t('trust.badge3.desc') }
            ].map((badge, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-100 transition-colors">
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <badge.icon className="h-6 w-6 text-[#1e3a5f]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('faq.title')}</h2>
            <p className="text-gray-600">{t('faq.subtitle')}</p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            {[
              { q: t('faq.q1'), a: t('faq.a1') },
              { q: t('faq.q2'), a: t('faq.a2') },
              { q: t('faq.q3'), a: t('faq.a3') },
              { q: t('faq.q4'), a: t('faq.a4') },
              { q: t('faq.q5'), a: t('faq.a5') },
              { q: t('faq.q6'), a: t('faq.a6') },
              { q: t('faq.q7'), a: t('faq.a7') },
              { q: t('faq.q8'), a: t('faq.a8') }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{t('cta.title')}</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Link
            to="/olustur"
            className="inline-flex items-center px-10 py-5 bg-white text-[#1e3a5f] rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-xl"
          >
            {t('cta.button')}
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
