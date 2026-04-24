import { motion } from 'motion/react';
import { Mail, ShieldCheck, FileText, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="font-sans bg-white min-h-screen">
      <SEO 
        title="İletişim - KiraSözleşmesi" 
        description="KiraSözleşmesi ekibiyle iletişime geçin. Soru ve önerileriniz için buradayız."
      />
      
      {/* Section 1 - Heading */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-black mb-6"
          >
            {t('contactPage.title', 'Contact Us')}
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            {t('contactPage.subtitle', 'Have a question or suggestion? We would love to hear from you.')}
          </p>
        </div>
      </section>

      {/* Section 2 - Contact Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-8 md:p-12"
          >
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-widest">
                  {t('contactPage.formName', 'Name')}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all font-medium"
                  placeholder={t('contactPage.formNamePlaceholder', 'Your Name')}
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-widest">
                  {t('contactPage.formEmail', 'Email')}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all font-medium"
                  placeholder={t('contactPage.formEmailPlaceholder', 'your@email.com')}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-widest">
                  {t('contactPage.formSubject', 'Subject')}
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all font-medium"
                  placeholder={t('contactPage.formSubjectPlaceholder', 'How can we help?')}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-widest">
                  {t('contactPage.formMessage', 'Message')}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all font-medium resize-none"
                  placeholder={t('contactPage.formMessagePlaceholder', 'Your message...')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center space-x-3"
              >
                <span>{t('contactPage.submit', 'Send Message')}</span>
                <Send className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-12 pt-12 border-t border-gray-100">
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent p-3 rounded-xl shadow-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-primary font-black text-lg">{t('contactPage.preferEmail', 'Prefer email?')}</h4>
                    <p className="text-primary/60 font-medium tracking-wide">contact@toolsvault.com</p>
                  </div>
                </div>
                <a 
                  href="mailto:contact@toolsvault.com"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md"
                >
                  Write to us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - SEO Text */}
      <footer className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            {t('contactPage.seo', 'Contact the team behind KiraSözleşmesi — a free rental agreement generator for Turkey.')}
          </p>
        </div>
      </footer>
    </div>
  );
}
