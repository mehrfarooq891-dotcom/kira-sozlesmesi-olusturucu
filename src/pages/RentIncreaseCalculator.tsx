import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, Info, AlertCircle, Scale } from 'lucide-react';
import { formatCurrency } from '../lib/utils';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

export default function RentIncreaseCalculator() {
  const [currentRent, setCurrentRent] = useState<string>('');
  const [tufeRate, setTufeRate] = useState<string>('65.07'); // Example rate
  const [result, setResult] = useState<{ newRent: number; increaseAmount: number } | null>(null);
  const { t } = useTranslation();

  const calculate = () => {
    const rent = parseFloat(currentRent);
    const rate = parseFloat(tufeRate);
    if (!isNaN(rent) && !isNaN(rate)) {
      const increase = (rent * rate) / 100;
      setResult({
        newRent: rent + increase,
        increaseAmount: increase,
      });
    }
  };

  return (
    <div className="py-20 bg-white">
      <SEO title={t('calcPage.title') + " | 2026"} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black text-[#1e3a5f] mb-6 tracking-tight">{t('calcPage.title')}</h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            {t('calcPage.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t('calcPage.rentLabel')}</label>
                <input
                  type="number"
                  value={currentRent}
                  onChange={(e) => setCurrentRent(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-4 focus:ring-blue-50 outline-none transition-all text-lg font-bold"
                  placeholder={t('calcPage.rentPlaceholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t('calcPage.rateLabel')}</label>
                <input
                  type="number"
                  step="0.01"
                  value={tufeRate}
                  onChange={(e) => setTufeRate(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-4 focus:ring-blue-50 outline-none transition-all text-lg font-bold"
                />
                <p className="text-xs text-gray-400 mt-2 font-medium">{t('calcPage.rateNote')}</p>
              </div>
              <button
                onClick={calculate}
                className="w-full py-5 bg-[#1e3a5f] text-white rounded-2xl font-bold text-lg hover:bg-[#2a4d7a] active:scale-95 transition-all shadow-lg"
              >
                {t('calcPage.button')}
              </button>
            </div>

            {result !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-10 p-8 bg-blue-50 rounded-2xl border border-blue-100"
              >
                <p className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wider mb-2">{t('calcPage.resultTitle')}</p>
                <p className="text-4xl font-black text-[#1e3a5f]">{formatCurrency(result.newRent)}</p>
                <p className="text-sm text-blue-600 mt-3 font-medium">{t('calcPage.resultIncrease')}: {formatCurrency(result.increaseAmount)}</p>
              </motion.div>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Scale className="h-6 w-6 text-[#1e3a5f] mr-2" />
                {t('calcPage.legalTitle')}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t('calcPage.legalDesc')}
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-amber-500 mr-2" />
                {t('calcPage.infoTitle')}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t('calcPage.infoDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
