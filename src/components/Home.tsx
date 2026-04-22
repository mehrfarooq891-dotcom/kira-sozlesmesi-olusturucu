import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  ShieldCheck, 
  Download, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ClipboardList, 
  Printer, 
  Clock,
  User,
  MapPin,
  Calendar,
  Wallet,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { faqs } from '../constants/faq';
import { cn } from '../lib/utils';
import GeneratorContainer from './Generator/GeneratorContainer';

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
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-primary group-hover:text-accent transition-colors">{question}</span>
        <ChevronDown className={cn("h-5 w-5 text-gray-400 transition-transform duration-300", isOpen && "rotate-180 text-accent")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed font-sans">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const generatorRef = useRef<HTMLDivElement>(null);

  const scrollToGenerator = () => {
    generatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold mb-8 animate-fade-in uppercase tracking-wider">
                <span className="mr-2">🇹🇷</span> Türkiye'nin En Hızlı Kira Sözleşmesi Platformu
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-black text-primary tracking-tight mb-8 leading-tight">
                Dakikalar İçinde Profesyonel <br />
                <span className="text-accent underline decoration-accent/30 underline-offset-8">Kira Sözleşmesi</span> Oluşturun
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                Ücretsiz, hızlı ve güvenli. <br />
                Verileriniz asla sunucularımıza iletilmez.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-16">
                {[
                  "Tamamen Ücretsiz",
                  "Verileriniz Cihazınızda Kalır",
                  "Anında PDF İndir",
                  "50.000+ Sözleşme Oluşturuldu"
                ].map((badge, i) => (
                  <span key={i} className="flex items-center text-sm font-semibold text-primary/70">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-accent" /> {badge}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                  onClick={scrollToGenerator}
                  className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-xl font-bold text-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl flex items-center justify-center group"
                >
                  Hemen Başla
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/kira-sozlesmesi-ornegi-pdf"
                  className="w-full sm:w-auto px-12 py-5 bg-white text-primary border-2 border-primary/10 rounded-xl font-bold text-xl hover:bg-gray-50 hover:border-accent hover:text-accent active:scale-95 transition-all flex items-center justify-center"
                >
                  Örnek PDF Gör
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* How It Works */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">Nasıl Çalışır?</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-8 inline-block">
                <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform">
                  <ClipboardList className="h-10 w-10 text-accent" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-xl">1</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Bilgileri Girin</h3>
              <p className="text-blue-100/70 text-lg">Taraf bilgileri ve kira detayları</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-8 inline-block">
                <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center -rotate-3 group-hover:-rotate-6 transition-transform">
                  <Settings className="h-10 w-10 text-accent" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-xl">2</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Sözleşme Oluşturulur</h3>
              <p className="text-blue-100/70 text-lg">Sistem otomatik hazırlar</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center group"
            >
              <div className="relative mb-8 inline-block">
                <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform">
                  <Printer className="h-10 w-10 text-accent" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-xl">3</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">PDF İndirin</h3>
              <p className="text-blue-100/70 text-lg">Tek tıkla profesyonel PDF</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all h-full">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                <Wallet className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Tamamen Ücretsiz</h3>
              <p className="text-gray-600 leading-relaxed">Hiçbir ücret ödemeden sınırsız sözleşme oluşturun.</p>
            </div>

            <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all h-full">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Verileriniz Cihazınızda</h3>
              <p className="text-gray-600 leading-relaxed">Kişisel verileriniz asla sunucularımıza iletilmez.</p>
            </div>

            <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all h-full">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                <Download className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Anında PDF İndir</h3>
              <p className="text-gray-600 leading-relaxed">Tek tıkla PDF olarak kaydedin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section ref={generatorRef} className="py-24 bg-gray-50 overflow-hidden" id="generator-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-6">Sözleşme Oluştur</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aşağıdaki formu doldurarak yasalara tam uyumlu kira sözleşmenizi hemen hazırlayın.
            </p>
          </div>
          
          <div className="relative">
            <GeneratorContainer />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-primary mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-500 font-sans tracking-wide">Merak ettiğiniz her şey ve daha fazlası.</p>
          </div>
          <div className="bg-white">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-2xl shrink-0">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Av. Elif Şahin" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-1 font-serif">Av. Elif Şahin</h3>
                  <span className="text-accent font-semibold tracking-wider">Gayrimenkul Hukuku Uzmanı</span>
                </div>
                <p className="text-lg text-blue-100/80 mb-8 font-sans leading-relaxed max-w-2xl">
                  İstanbul Barosu'na kayıtlı bir gayrimenkul hukuku uzmanıdır. 12 yıldır kira hukuku 
                  alanında hem kiracılara hem ev sahiplerine danışmanlık vermektedir. KiraSözleşmesi 
                  platformunu, vatandaşların yasal süreçlere kolay erişimi için geliştirmiştir.
                </p>
                <blockquote className="text-2xl md:text-3xl font-serif italic leading-tight text-white border-l-4 border-accent pl-6">
                  "Sözleşmesiz kira ilişkisi her iki taraf için de risk oluşturur. Haklarınızı koruyun."
                </blockquote>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck className="w-64 h-64 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden group">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-12 relative z-10">
              Karmaşık yasal süreçlerle <br /> uğraşmayın.
            </h2>
            <button
              onClick={scrollToGenerator}
              className="inline-flex items-center px-12 py-6 bg-primary text-white rounded-2xl font-bold text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl relative z-10"
            >
              Ücretsiz Başlat
              <ArrowRight className="ml-2 h-7 w-7" />
            </button>
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="mt-12 text-center text-gray-400 text-sm italic">
            Bu platform hukuki danışmanlık hizmeti vermez.
          </div>
        </div>
      </section>
    </div>
  );
}
