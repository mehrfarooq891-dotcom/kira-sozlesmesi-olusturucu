import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { BookOpen, ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Blog() {
  const { t } = useTranslation();

  const posts = [
    {
      title: "Kira Sözleşmesi Feshi Nasıl Yapılır?",
      excerpt: "Kira sözleşmesinin feshinde dikkat edilmesi gereken yasal süreçler, bildirim süreleri ve haklı sebepler. 2026 Borçlar Kanunu uyumlu örnek fesih ihtarnamesi dahildir.",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "24 Mayıs 2026",
      path: "/kira-sozlesmesi-feshi-rehberi",
      category: "Rehber",
      readTime: "13 Dakika"
    },
    {
      title: "Kira Borcunu Ödemeyen Kiracıya Ne Yapılır?",
      excerpt: "Kira borcunu ödemeyen kiracıya karşı uygulanacak yasal süreç adımları. Haklı ihtarname koşulları, icra takibi başlatma, tahliye davası süreleri ve 2026 en son mevzuat kural adımları.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "23 Mayıs 2026",
      path: "/kira-borcunu-odemeyen-kiraci",
      category: "Hukuk",
      readTime: "15 Dakika"
    },
    {
      title: "Kira Sözleşmesinde Olması Gereken 10 Madde",
      excerpt: "Kira sözleşmesi maddeleri nelerdir? Kira sözleşmesinde bulunması gereken zorunlu, yasal ve her iki tarafı koruyucu altın değerinde 10 madde ve örnek sözleşme taslağı.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "20 Mayıs 2026",
      path: "/kira-sozlesmesinde-olmasi-gereken-maddeler",
      category: "Rehber",
      readTime: "12 Dakika"
    },
    {
      title: "İşyeri Kira Sözleşmesi — Konut Kirasından Farkları",
      excerpt: "İşyeri kira sözleşmesi ile konut kirası arasındaki temel farklar. 2026 yasal mevzuat, stopaj vergisi, kira artış oranları ve tahliye şartları rehberi.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "18 Mayıs 2026",
      path: "/isyeri-kira-sozlesmesi-rehberi",
      category: "İşyeri",
      readTime: "14 Dakika"
    },
    {
      title: "Damga Vergisi Nedir? Kira Sözleşmesinde Hesaplama",
      excerpt: "Kira sözleşmesinde damga vergisi nedir, kim tarafından ödenir? 2026 güncel damga vergisi oranı, istisnaları, muafiyetleri ve adım adım hesaplama örnekleri.",
      image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "15 Mayıs 2026",
      path: "/damga-vergisi-kira-hesaplama",
      category: "Vergi",
      readTime: "12 Dakika"
    },
    {
      title: "Aidatı Kim Öder? Kiracı mı Ev Sahibi mi?",
      excerpt: "Konut ve işyeri kira ilişkilerinde apartman aidatını kim öder? Kiracının yasal sorumlulukları, ev sahibinin ödemekle yükümlü olduğu demirbaş giderleri ve 2026 Kat Mülkiyeti Kanunu kuralları.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "14 Mayıs 2026",
      path: "/aidat-kiraci-ev-sahibi-rehberi",
      category: "Giderler",
      readTime: "11 Dakika"
    },
    {
      title: "Kira Sözleşmesi Ne Zaman Yenilenmiş Sayılır?",
      excerpt: "Kira sözleşmesi ne zaman yenilenmiş sayılır? Güncel otomatik uzama kuralları, kiracının fesih bildirim süresi ve sözleşme sona erdirme şartları.",
      image: "https://images.unsplash.com/photo-1505664194779-8bebcb95c557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "13 Mayıs 2026",
      path: "/kira-sozlesmesi-yenileme-rehberi",
      category: "Mevzuat",
      readTime: "10 Dakika"
    },
    {
      title: "Kira Sözleşmesi Noter'de Mi Yapılmalıdır?",
      excerpt: "Kira sözleşmesinin noter huzurunda yapılması zorunlu mudur? Adi yazılı sözleşme geçerliliği, noter onayının avantajları ve yasal şartlar.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "10 Mayıs 2026",
      path: "/kira-sozlesmesi-noter-rehberi",
      category: "Mevzuat",
      readTime: "9 Dakika"
    },
    {
      title: "Tahliye Taahhütnamesi Nedir ve Nasıl Düzenlenir?",
      excerpt: "Tahliye taahhütnamesi nedir, ne zaman gereklidir ve nasıl doldurulur? 2026 yasal geçerlilik şartları ve Yargıtay kararları.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "12 Mayıs 2026",
      path: "/tahliye-taahhutnamesi-rehberi",
      category: "Mevzuat",
      readTime: "9 Dakika"
    },
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
      title: "Ev Sahibi Kiracıyı Ne Zaman Çıkarabilir? Yasal Şartlar",
      excerpt: "Ev sahibi kiracıyı ne zaman çıkarabilir? Yasal tahliye sebepleri, ihtar süreci, Sulh Hukuk Mahkemesi yolları ve kiracı korumaları.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "09 Mayıs 2026",
      path: "/ev-sahibi-kiraci-cikarma-rehberi",
      category: "Tahliye",
      readTime: "10 Dakika"
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
