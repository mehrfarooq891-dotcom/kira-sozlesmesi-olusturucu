import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, Info, ArrowRight, FileText, ShieldCheck, Scale, BookOpen, HelpCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function HowToFill() {
  const { t } = useTranslation();
  return (
    <div className="py-20 bg-white">
      <SEO title={t('howToPage.title') + " | 2026"} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 text-[#1e3a5f] mb-6">
            <BookOpen className="h-4 w-4 mr-2" />
            {t('howToPage.badge')}
          </span>
          <h1 className="text-5xl font-black text-gray-900 mb-8 tracking-tight">{t('howToPage.title')}</h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            {t('howToPage.subtitle')}
          </p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Scale className="mr-3 h-8 w-8 text-[#1e3a5f]" />
              {t('howToPage.sec1Title')}
            </h2>
            <p>
              {t('howToPage.sec1Desc')}
            </p>
          </section>

          <section className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="mr-3 h-8 w-8 text-[#1e3a5f]" />
              {t('howToPage.sec2Title')}
            </h2>
            <p className="mb-6">{t('howToPage.sec2Desc')}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              <li className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>{t('howToPage.sec2Item1')}</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>{t('howToPage.sec2Item2')}</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>{t('howToPage.sec2Item3')}</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>{t('howToPage.sec2Item4')}</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <HelpCircle className="mr-3 h-8 w-8 text-[#1e3a5f]" />
              {t('howToPage.sec3Title')}
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-[#1e3a5f] pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('howToPage.sec3Step1Title')}</h3>
                <p>{t('howToPage.sec3Step1Desc')}</p>
              </div>
              <div className="border-l-4 border-[#1e3a5f] pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('howToPage.sec3Step2Title')}</h3>
                <p>{t('howToPage.sec3Step2Desc')}</p>
              </div>
              <div className="border-l-4 border-[#1e3a5f] pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('howToPage.sec3Step3Title')}</h3>
                <p>{t('howToPage.sec3Step3Desc')}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="mr-3 h-8 w-8 text-amber-500" />
              {t('howToPage.sec4Title')}
            </h2>
            <p>
              {t('howToPage.sec4Desc')}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <X className="mr-3 h-8 w-8 text-red-500" />
              {t('howToPage.sec5Title')}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-red-500 font-bold text-xs">!</span>
                </div>
                <span>{t('howToPage.sec5Error1')}</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-red-500 font-bold text-xs">!</span>
                </div>
                <span>{t('howToPage.sec5Error2')}</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-red-500 font-bold text-xs">!</span>
                </div>
                <span>{t('howToPage.sec5Error3')}</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-24 text-center">
          <Link
            to="/olustur"
            className="inline-flex items-center px-10 py-5 bg-[#1e3a5f] text-white rounded-2xl font-bold text-xl hover:bg-[#2a4d7a] transition-all shadow-xl hover:shadow-2xl active:scale-95 group"
          >
            {t('howToPage.ctaBtn')}
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
