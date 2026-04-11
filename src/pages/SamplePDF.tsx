import { Download, FileText, Eye, CheckCircle2, Info, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { initialData } from '../types';
import { getContractHTML } from '../constants/contractTemplate';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function SamplePDF() {
  const { t } = useTranslation();
  return (
    <div className="py-20 bg-white">
      <SEO title={t('samplePage.title') + " | 2026"} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-black text-[#1e3a5f] mb-6 tracking-tight">{t('samplePage.title')}</h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            {t('samplePage.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-inner relative overflow-hidden">
              <div className="absolute top-10 right-10 opacity-10">
                <FileText className="h-64 w-64 text-[#1e3a5f]" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">{t('samplePage.previewTitle')}</h3>
                  <div className="space-y-4 text-sm text-gray-600">
                    <div className="grid grid-cols-2 gap-4">
                      <p><span className="font-bold">{t('form.steps.tenant')}:</span> Ahmet Yılmaz</p>
                      <p><span className="font-bold">{t('form.steps.landlord')}:</span> Mehmet Demir</p>
                    </div>
                    <p><span className="font-bold">{t('form.fields.address')}:</span> Atatürk Mah. Cumhuriyet Cad. No:123 D:4 Çankaya/Ankara</p>
                    <p><span className="font-bold">{t('form.fields.monthlyRent')}:</span> 15.000 TL</p>
                    <p><span className="font-bold">{t('form.fields.startDate')}:</span> 1 Yıl (01.04.2026 - 01.04.2027)</p>
                    <div className="pt-4 border-t">
                      <p className="font-bold mb-2">{t('form.steps.special')}:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>{t('form.fields.paymentDay')}: 5</li>
                        <li>{t('form.fields.petProhibited')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1e3a5f] p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">{t('samplePage.whyTitle')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{t('samplePage.why1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{t('samplePage.why2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{t('samplePage.why3')}</span>
                </li>
              </ul>
              <button className="w-full mt-8 py-4 bg-white text-[#1e3a5f] rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center group">
                <Download className="mr-2 h-5 w-5" />
                {t('samplePage.downloadBtn')}
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Info className="h-6 w-6 text-blue-500" />
                <h4 className="text-lg font-bold text-gray-900">{t('samplePage.createOwnTitle')}</h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {t('samplePage.createOwnDesc')}
              </p>
              <Link
                to="/olustur"
                className="inline-flex items-center text-[#1e3a5f] font-bold hover:underline group"
              >
                {t('samplePage.createOwnBtn')}
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
