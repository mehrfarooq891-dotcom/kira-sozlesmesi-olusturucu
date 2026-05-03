import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Calculator, HelpCircle, ShieldCheck, Menu, X, Download, CheckCircle2, Globe, Users, Mail, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import GeneratorContainer from './components/Generator/GeneratorContainer';
import HowToFill from './pages/HowToFill';
import RentIncreaseCalculator from './pages/RentIncreaseCalculator';
import SamplePDF from './pages/SamplePDF';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogGuide from './pages/BlogGuide';
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
    { name: t('nav.home'), path: '/', icon: FileText },
    { name: t('nav.about'), path: '/hakkimizda', icon: Users },
    { name: t('nav.blog'), path: '/kira-sozlesmesi-rehberi', icon: BookOpen },
    { name: t('nav.contact'), path: '/iletisim', icon: Mail },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-xl shadow-lg rotate-3">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-serif font-black text-primary tracking-tight">KiraSözleşmesi</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 text-sm font-bold transition-all rounded-xl",
                  location.pathname === item.path ? "text-primary bg-primary/5" : "text-gray-500 hover:text-primary hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-gray-100 mx-4" />
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-bold text-gray-500 hover:text-primary hover:bg-gray-50 rounded-xl transition-all"
            >
              <Globe className="h-4 w-4" />
              <span>{i18n.language === 'tr' ? 'TR' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-500 hover:text-primary transition-colors"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-500 hover:text-primary transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-4 text-base font-bold rounded-xl transition-colors",
                    location.pathname === item.path ? "text-primary bg-primary/5" : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
              <Link
                to="/olustur"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary text-white px-4 py-4 rounded-xl text-lg font-bold mt-6 shadow-lg"
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
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <div className="bg-accent p-2 rounded-xl shadow-lg">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <span className="text-3xl font-serif font-black text-white tracking-tight">KiraSözleşmesi</span>
            </Link>
            <p className="text-blue-100/60 text-lg leading-relaxed max-w-md font-sans">
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h4 className="text-accent font-black uppercase tracking-widest text-sm mb-8">{t('footer.links')}</h4>
            <ul className="space-y-4 text-lg text-blue-100">
              <li><Link to="/" className="hover:text-accent transition-colors font-bold">{t('nav.home')}</Link></li>
              <li><Link to="/hakkimizda" className="hover:text-accent transition-colors font-bold">{t('nav.about')}</Link></li>
              <li><Link to="/iletisim" className="hover:text-accent transition-colors font-bold">{t('nav.contact')}</Link></li>
              <li><Link to="/olustur" className="hover:text-accent transition-colors font-bold">{t('nav.create')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-accent font-black uppercase tracking-widest text-sm mb-8">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-blue-100">
              <li className="text-sm font-bold uppercase tracking-tight text-accent">{t('company.name')}</li>
              <li className="text-sm leading-relaxed opacity-70">{t('company.address')}</li>
              <li className="text-sm">Tel: {t('company.phone')}</li>
              <li className="text-blue-100/40 font-mono text-sm">{t('company.email')}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-accent font-black uppercase tracking-widest text-sm mb-8">Bilgi Merkezi</h4>
            <ul className="space-y-4 text-lg text-blue-100">
              <li><Link to="/kira-sozlesmesi-rehberi" className="hover:text-accent transition-colors font-bold">Kira Sözleşmesi Rehberi</Link></li>
              <li><Link to="/kira-sozlesmesi-nasil-doldurulur" className="hover:text-accent transition-colors font-bold">{t('nav.howTo')}</Link></li>
              <li><Link to="/gizlilik-politikasi" className="hover:text-accent transition-colors font-bold">Gizlilik Politikası</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100/40">
          <p className="font-bold uppercase tracking-widest leading-loose">{t('footer.rights')}</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors font-bold uppercase tracking-widest">Twitter</a>
            <a href="#" className="hover:text-accent transition-colors font-bold uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors font-bold uppercase tracking-widest">Instagram</a>
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
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/kira-sozlesmesi-nasil-doldurulur" element={<HowToFill />} />
          <Route path="/2026-kira-artisi-hesaplama" element={<RentIncreaseCalculator />} />
          <Route path="/kira-sozlesmesi-ornegi-pdf" element={<SamplePDF />} />
          <Route path="/kira-sozlesmesi-rehberi" element={<BlogGuide />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
