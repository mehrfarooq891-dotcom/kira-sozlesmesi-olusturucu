import { motion } from 'motion/react';
import { Mail, ShieldCheck, FileText, Send, Building, MapPin, Phone } from 'lucide-react';
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

      {/* Section 2 - Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 space-y-8">
                <div>
                  <h3 className="text-primary font-black text-xl mb-4 flex items-center">
                    <Building className="mr-2 h-6 w-6 text-accent" />
                    {t('company.name')}
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p className="flex items-start">
                      <MapPin className="mr-3 h-5 w-5 text-accent shrink-0 mt-1" />
                      {t('company.address')}
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-3 h-5 w-5 text-accent" />
                      {t('company.phone')}
                    </p>
                    <p className="flex items-center">
                      <Mail className="mr-3 h-5 w-5 text-accent" />
                      {t('company.email')}
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-primary font-black text-xl mb-4 flex items-center">
                    <ShieldCheck className="mr-2 h-6 w-6 text-accent" />
                    Kurumsal
                  </h3>
                  <div className="space-y-3 text-gray-600 text-sm">
                    <p><strong>Kuruluş:</strong> {t('company.founded')}</p>
                    <p><strong>Vergi No:</strong> {t('company.taxId')}</p>
                    <p><strong>Kurucu:</strong> {t('company.founder')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-[40px] shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -m-8 h-32 w-32 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/40 transition-all"></div>
                <h3 className="text-2xl font-serif font-black mb-4 relative z-10">{t('contactPage.writeToUs')}</h3>
                <p className="text-blue-100/60 mb-6 relative z-10">Sorularınız için doğrudan e-posta adresimize de yazabilirsiniz.</p>
                <a href={`mailto:${t('company.email')}`} className="inline-block text-accent font-bold underline hover:text-white transition-colors relative z-10">{t('company.email')}</a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-8 md:p-12 h-full"
              >
                <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      rows={6}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all font-medium resize-none"
                      placeholder={t('contactPage.formMessagePlaceholder', 'Your message...')}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-auto bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center space-x-3"
                  >
                    <span>{t('contactPage.submit', 'Send Message')}</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
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
