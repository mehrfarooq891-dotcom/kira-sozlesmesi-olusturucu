import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { BookOpen, ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Blog() {
  const { t } = useTranslation();

  const posts = [
    {
      title: "Kira Sözleşmesi Nasıl Yazılır? 2026 Güncel Rehber",
      excerpt: "Zorunlu maddeler, tarafların yasal hakları ve noter onayına dair bilinmesi gereken her şey.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "03 Mayıs 2026",
      path: "/kira-sozlesmesi-rehberi",
      category: "Rehber",
      readTime: "6 Dakika"
    },
    {
      title: "Kira Artış Oranı 2026 — TÜFE'ye Göre Hesaplama Rehberi",
      excerpt: "2026 yılında kira artışı nasıl hesaplanır? Yasal TÜFE sınırı ve hesaplama formülü.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "05 Mayıs 2026",
      path: "/2026-kira-artis-orani-rehberi",
      category: "Hukuk",
      readTime: "7 Dakika"
    },
    {
      title: "Kiracı Hakları 2026 — Bilmeniz Gereken Her Şey",
      excerpt: "Tahliye şartları, kira artışı yasal sınırı ve depozito iadesi gibi en kritik kiracı hakları rehberi.",
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "07 Mayıs 2026",
      path: "/kiraci-haklari-2026-rehberi",
      category: "Hukuk",
      readTime: "8 Dakika"
    },
    {
      title: "Depozito Ne Kadar Olabilir? Yasal Sınırlar ve Haklar",
      excerpt: "Depozito ne kadar olabilir? 3 aylık kira sınırı, iade şartları ve kiracı hakları.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "06 Mayıs 2026",
      path: "/depozito-ne-kadar-olmali-rehberi",
      category: "Haklarınız",
      readTime: "5 Dakika"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title="Kira Sözleşmesi Blog - Güncel Rehberler ve Hiyaku Bilgiler"
        description="Kira hukuku, sözleşme hazırlama, kira artış hesaplama ve depozito hakları hakkında en güncel bilgiler."
      />

      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-black mb-6"
          >
            Blog ve Rehberler
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100/60 max-w-2xl font-light leading-relaxed"
          >
            Kira dünyasına dair en güncel yasal düzenlemeler, pratik ipuçları ve detaylı rehberler.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, index) => (
              <motion.article 
                key={post.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={post.path}>
                  <div className="bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all flex flex-col h-full">
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-95 contrast-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                    </div>
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest leading-none">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-serif font-black text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          {post.date}
                        </div>
                        <div className="text-accent font-bold flex items-center text-sm">
                          Oku <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-[60px] shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-serif font-black text-primary mb-6">Aradığınızı Bulamadınız mı?</h2>
            <p className="text-gray-500 mb-10 text-lg">
              Kira sözleşmeleri veya kira hukuku hakkında özel bir sorunuz varsa bize çekinmeden yazabilirsiniz.
            </p>
            <Link 
              to="/iletisim" 
              className="inline-flex items-center bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl"
            >
              Bizimle İletişime Geçin
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
