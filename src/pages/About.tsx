import { motion } from 'motion/react';
import { ShieldCheck, Zap, Globe, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="font-sans bg-white min-h-screen">
      <SEO 
        title="Hakkımızda - KiraSözleşmesi" 
        description="KiraSözleşmesi hakkında daha fazla bilgi edinin. Türkiye için ücretsiz ve hızlı kira sözleşmesi oluşturucu."
      />

      {/* Section 1 — Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full -ml-48 -mb-48 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-black mb-8"
          >
            {t('aboutPage.heroTitle', 'About KiraSözleşmesi')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-blue-100 max-w-3xl mx-auto font-medium tracking-wide uppercase"
          >
            {t('aboutPage.heroSubtext', 'Free. Instant. No signup required.')}
          </motion.p>
        </div>
      </section>

      {/* Section 2 — What We Do */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-black text-primary mb-10 uppercase tracking-widest">{t('aboutPage.whatWeDoTitle', 'What We Do')}</h2>
          <p className="text-2xl text-gray-600 leading-relaxed font-sans">
            {t('aboutPage.whatWeDoText', 'KiraSözleşmesi provides a professional and secure way to generate rental agreements in minutes. We help tenants and landlords in Turkey create legally compliant contracts without any cost or technical complexity.')}
          </p>
        </div>
      </section>

      {/* Section 3 — Why We Built This */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-black text-primary mb-10 uppercase tracking-widest">{t('aboutPage.whyBuiltTitle', 'Why We Built This')}</h2>
          <div className="bg-white p-12 md:p-20 rounded-[50px] shadow-2xl border border-gray-100">
            <p className="text-3xl md:text-4xl font-serif italic text-primary/80 leading-tight">
              "{t('aboutPage.whyBuiltText', 'Most financial tools are locked behind paywalls or require creating an account just to see a number. We believe useful tools should be free and instant for everyone.')}"
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Three value cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Zap className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-black text-primary mb-4">{t('aboutPage.card1Title')}</h3>
              <p className="text-gray-500 font-sans leading-relaxed">{t('aboutPage.card1Desc')}</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Lock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-black text-primary mb-4">{t('aboutPage.card2Title')}</h3>
              <p className="text-gray-500 font-sans leading-relaxed">{t('aboutPage.card2Desc')}</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Globe className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-black text-primary mb-4">{t('aboutPage.card3Title')}</h3>
              <p className="text-gray-500 font-sans leading-relaxed">{t('aboutPage.card3Desc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 — Profile */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="w-full aspect-square rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/FRs09xPc/Av-Elif-Sahin.png" 
                    alt="Av. Elif Şahin" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-3xl flex items-center justify-center shadow-xl">
                  <ShieldCheck className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-serif font-black text-primary mb-4">{t('company.founder')}</h2>
              <p className="text-accent font-bold tracking-widest uppercase mb-6">Kurucu & Hukuk Danışmanı</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                İstanbul Barosu'na kayıtlı bir gayrimenkul hukuku uzmanıdır. 12 yıldır kira hukuku alanında hem kiracılara hem ev sahiplerine danışmanlık vermektedir. KiraSözleşmesi platformunu, vatandaşların yasal süreçlere kolay erişimi için geliştirmiştir.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Şirket</p>
                  <p className="text-primary font-bold">{t('company.name')}</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Kuruluş</p>
                  <p className="text-primary font-bold">{t('company.founded')}</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Vergi No</p>
                  <p className="text-primary font-bold">{t('company.taxId')}</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Email</p>
                  <p className="text-primary font-bold">{t('company.email')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Small SEO text */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            {t('aboutPage.seo', 'KiraSözleşmesi is a free online rental agreement generator for Turkey. Use it anytime with no registration required.')}
          </p>
        </div>
      </footer>
    </div>
  );
}
