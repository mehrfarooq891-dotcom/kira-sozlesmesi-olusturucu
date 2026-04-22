import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, BookOpen, Scale, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { icon: Clock, label: t('aboutPage.expertise') },
    { icon: Users, label: t('aboutPage.users') },
    { icon: Scale, label: t('aboutPage.baro') },
    { icon: Award, label: t('aboutPage.free') }
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-black mb-6"
          >
            {t('aboutPage.title')}
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            {t('aboutPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3"
            >
              <div className="relative">
                <div className="w-full aspect-square rounded-[40px] overflow-hidden border-8 border-gray-50 shadow-2xl">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Av. Elif Şahin" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-3xl flex items-center justify-center shadow-xl">
                  <ShieldCheck className="h-12 w-12 text-primary" />
                </div>
              </div>
            </motion.div>

            <div className="flex-1">
              <h2 className="text-3xl font-serif font-black text-primary mb-6">Av. Elif Şahin</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 font-sans">
                {t('aboutPage.bio')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: BookOpen, text: t('aboutPage.expertise') },
                  { icon: Users, text: t('aboutPage.users') },
                  { icon: Scale, text: t('aboutPage.baro') },
                  { icon: Award, text: t('aboutPage.free') }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <stat.icon className="h-6 w-6 text-accent" />
                    <span className="font-bold text-primary">{stat.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-primary mb-8">{t('aboutPage.missionTitle')}</h2>
          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-xl border border-gray-100 italic text-3xl md:text-4xl font-serif text-primary/80 leading-tight">
            "{t('aboutPage.missionText')}"
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-[40px] p-10 md:p-16 border border-primary/10">
            <h3 className="text-2xl font-serif font-black text-primary mb-6 flex items-center">
              <ShieldCheck className="mr-3 h-7 w-7 text-accent" />
              {t('aboutPage.disclaimerTitle')}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-sans">
              {t('aboutPage.disclaimerText')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
