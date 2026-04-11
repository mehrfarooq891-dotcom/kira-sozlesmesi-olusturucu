import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Calculator, HelpCircle, ShieldCheck, Menu, X, Download, CheckCircle2, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import GeneratorContainer from './components/Generator/GeneratorContainer';
import HowToFill from './pages/HowToFill';
import RentIncreaseCalculator from './pages/RentIncreaseCalculator';
import SamplePDF from './pages/SamplePDF';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SEO from './components/SEO';
import { cn } from './lib/utils';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { name: t('nav.create'), path: '/olustur', icon: FileText },
    { name: t('nav.calculator'), path: '/2026-kira-artisi-hesaplama', icon: Calculator },
    { name: t('nav.howTo'), path: '/kira-sozlesmesi-nasil-doldurulur', icon: HelpCircle },
    { name: t('nav.sample'), path: '/kira-sozlesmesi-ornegi-pdf', icon: Download },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-[#1e3a5f] p-1.5 rounded-lg shadow-sm">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-[#1e3a5f] tracking-tight">KiraSözleşmesi</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-all rounded-lg hover:bg-gray-50",
                  location.pathname === item.path ? "text-[#1e3a5f] bg-blue-50/50" : "text-gray-500 hover:text-gray-900"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="h-4 w-px bg-gray-200 mx-2" />
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-50 rounded-lg transition-all"
            >
              <Globe className="h-4 w-4" />
              <span>{i18n.language === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN'}</span>
            </button>

            <Link
              to="/olustur"
              className="bg-[#1e3a5f] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#2a4d7a] active:scale-95 transition-all shadow-sm hover:shadow-md"
            >
              {t('nav.start')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-500 hover:text-[#1e3a5f]"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-500 hover:text-[#1e3a5f]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
              <Link
                to="/olustur"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#1e3a5f] text-white px-4 py-3 rounded-lg text-base font-medium mt-4"
              >
                Sözleşme Oluştur
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-[#1e3a5f] p-1 rounded-lg">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-[#1e3a5f]">KiraSözleşmesi</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">{t('footer.links')}</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/olustur" className="hover:text-[#1e3a5f] transition-colors">{t('nav.create')}</Link></li>
              <li><Link to="/2026-kira-artisi-hesaplama" className="hover:text-[#1e3a5f] transition-colors">{t('nav.calculator')}</Link></li>
              <li><Link to="/kira-sozlesmesi-ornegi-pdf" className="hover:text-[#1e3a5f] transition-colors">{t('nav.sample')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/kira-sozlesmesi-nasil-doldurulur" className="hover:text-[#1e3a5f] transition-colors">{t('nav.howTo')}</Link></li>
              <li><Link to="/gizlilik-politikasi" className="hover:text-[#1e3a5f] transition-colors">KVKK Gizlilik Politikası</Link></li>
              <li className="text-gray-400">destek@kirasozyardim.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>{t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#1e3a5f] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#1e3a5f] transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#1e3a5f] selection:text-white">
      <SEO />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/olustur" element={<GeneratorContainer />} />
          <Route path="/kira-sozlesmesi-nasil-doldurulur" element={<HowToFill />} />
          <Route path="/2026-kira-artisi-hesaplama" element={<RentIncreaseCalculator />} />
          <Route path="/kira-sozlesmesi-ornegi-pdf" element={<SamplePDF />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
