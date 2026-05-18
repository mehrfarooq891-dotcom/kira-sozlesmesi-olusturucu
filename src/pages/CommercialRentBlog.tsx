import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, Gavel, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, Landmark, Award, Building2, Store, CreditCard, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function CommercialRentBlog() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.commercialRentTitle') + " — 2026 Güncel Yasal Ayrım"}
        description={t('blogPage.commercialRentSeoDesc')}
      />

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-8 border border-accent/20"
          >
            <Building2 className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Ticari Gayrimenkul Rehberi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.commercialRentTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            İşyeri kiralamalarında yasal mevzuat, konut kiralamalarından temel noktalarda ayrılır. Vergi yükümlülüklerinden kira artış sınırlarına kadar tüm detaylar.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-accent pl-6">
              Gayrimenkul kiralamalarında "kiralanan yerin kullanım amacı", yasal olarak hangi kurallara tabi olacağınızı belirleyen en temel kriterdir. 
              6098 sayılı Türk Borçlar Kanunu (TBK), kiralamaları "Konut ve Çatılı İşyeri Kiraları" başlığı altında toplasa da, işyerleri için getirilen düzenlemeler ve vergi kanunlarındaki karşılıklar oldukça farklıdır. 
              <strong>İşyeri kira sözleşmesi</strong> imzalarken konut kirasındaki alışkanlıklarla ilerlemek, ileride telafisi güç mali ve hukuki sorunlara yol açabilir. 
              Peki, bir dükkan, ofis veya depo kiralarken hangi detaylara dikkat etmeli? Kira artış oranları nasıl belirlenir? Stopaj vergisi nedir? 2026 yılı güncel mevzuatı ışığında tüm cevaplar bu rehberde.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Yasal Çerçeve: Konut ve İşyeri Ayrımı Neden Önemli?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Hukuk sistemimizde "çatılı işyeri" kavramı, ticari faaliyetlerin yürütüldüğü, etrafı ve üstü kapalı olan alanları ifade eder. 
              Bir yerin işyeri mi yoksa konut mu olduğu genellikle tapu kaydındaki "cins" hanesine göre belirlense de, fiili kullanım amacı da yasal süreçlerde (özellikle tahliye davalarında) belirleyici olur.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Konut kiralarında sosyal devlet ilkesi gereği kiracı "barınma hakkı" çerçevesinde daha sıkı korunurken; işyeri kiralarında "ticari serbestlik" ve tarafların tacir olması durumunda "sözleşme özgürlüğü" daha plandadır. 
              Bu nedenle <strong>işyeri kira sözleşmesi</strong> maddeleri, konut sözleşmelerine göre daha detaylı ve esnek olabilir.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Tacirler İçin Özel Durum</h4>
                <p className="text-gray-600 m-0">
                  Eğer hem kiracı hem de kiraya veren "tacir" ise veya "kamu tüzel kişisi" ise, Borçlar Kanunu'nun bazı maddelerinin uygulanması 2020 yılına kadar ertelenmişti. 
                  2026 yılı itibarıyla tüm maddeler yürürlükte olsa da, tacirler arasındaki sözleşmelerde "basiretli iş insanı" prensibi gereği hata payı daha az tolerans görür.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Vergisel Farklılıklar: Stopaj ve KDV Dengesi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              İşyeri kiralamalarını konuttan ayıran en büyük mali kalem **vergi** yükümlülükleridir. 
              Konut kirasında kiracı sadece kirasını öderken, işyeri kirasında devletin payı da işin içine girer.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Kira Stopajı (Gelir Vergisi Tevkifatı)</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Eğer işyerini kiralayan taraf bir şirket, serbest meslek erbabı veya esnaf ise; ödediği brüt kira bedeli üzerinden gelir vergisi kesintisi yapmak zorundadır. 
              Buna "stopaj" denir. 2026 yılı itibarıyla standart stopaj oranı **%20**'dir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6 italic">
              Örnek: Net 8.000 TL kira için anlaştıysanız, brüt kira 10.000 TL olur. 8.000 TL ev sahibine, 2.000 TL stopaj olarak vergi dairesine ödenir.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">KDV'li Kiralama</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Eğer işyerinin sahibi bir şahıs değil de bir "şirket" ise, stopaj değil **KDV** (Katma Değer Vergisi) doğar. 
              Bu durumda şirket size kira faturası keser. İşyerleri için KDV oranı genellikle **%20**'dir. 
              Sözleşme imzalanırken bedelin "KDV dahil" mi yoksa "KDV hariç" mi olduğu mutlaka netleştirilmelidir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Kira Artış Oranı ve Sınırlar</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Konut kiralarında uygulanan "%25 sabit sınır" gibi radikal müdahaleler işyeri kiralarında genellikle uygulanmaz. 
              İşyeri kira artışlarında baz alınan yasal sınır **TÜFE on iki aylık ortalamalardır**.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Ancak işyerlerinde artış oranı konusunda sözleşmede farklı bir endeks (örneğin döviz bazlı artış veya sabit bir oran) kararlaştırılabilir. 
              Eğer sözleşmede artış oranı belirtilmemişse, otomatik olarak TÜFE ortalaması uygulanır. 
              Dövizle yapılan kiralamalarda ise 5 yıl geçmedikçe genellikle kira artışı yapılamaz (7161 sayılı Kanun ile gelen sınırlamalar saklı kalmak kaydıyla).
            </p>

            <div className="bg-accent/10 p-8 rounded-3xl border-l-8 border-accent my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-accent mr-2" />
                Dövizle Kiralama Yasağına Dikkat!
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed m-0">
                Türkiye'de yerleşik kişiler arasındaki gayrimenkul kiralama sözleşmelerinde bedelin döviz cinsinden veya dövize endeksli kararlaştırılması (bazı istisnalar hariç) yasaktır. 
                İşyerlerinde bu yasağın kapsamı geniştir; yasağa uyulmaması durumunda idari para cezaları ile karşılaşılabilir.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Tahliye Şartları ve Sözleşme Feshi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              İşyeri kiralarında "tahliye" süreci, konutlara göre daha stratejik bir öneme sahiptir. 
              Zira taşınma süreci sadece eşyaları değil, tabelayı, müşteri portföyünü ve ruhsatı da etkiler.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">İşyeri İhtiyacı Nedeniyle Tahliye</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Mülk sahibi, kendisi, eşi, altsoyu (çocukları/torunları) veya üstsoyu (anne/babası) için kiralanan yerin işyeri olarak kullanılması zorunluysa tahliye davası açabilir. 
              Ancak burada "gerçek ve samimi bir işyeri ihtiyacı" ispatlanmalıdır. 
              Eğer mülk sahibi ihtiyacı sebebiyle kiracıyı çıkarıp, orayı başkasına kiralarsa (yasal sınırlama dahilinde), eski kiracıya tazminat ödeme yükümlülüğü doğabilir.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">10 Yıllık Uzama Süresi</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Hem konut hem de işyeri kiralarında geçerli olan bu kurala göre; kira sözleşmesi üzerinden 10 yıllık uzama süresi (toplamda 1+10 yıl) geçtiğinde, mülk sahibi herhangi bir gerekçe göstermeksizin sözleşmeyi sona erdirebilir. 
              Ancak bu süreçte bildirim sürelerine (en az 3 ay önceden ihtar) titizlikle uyulmalıdır.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Karşılaştırmalı Özet Tablosu</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Özellik</th>
                    <th className="p-4">Konut Kirası</th>
                    <th className="p-4 rounded-tr-2xl">İşyeri Kirası</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Vergi</td>
                    <td className="p-4">Vergi yok (Sadece mal sahibi beyan eder)</td>
                    <td className="p-4 text-accent font-semibold">%20 Stopaj veya %20 KDV</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Kira Artış Sınırı</td>
                    <td className="p-4">TÜFE 12 Aylık Ortalaması</td>
                    <td className="p-4">TÜFE 12 Aylık Ortalaması (Farklı endeks seçilebilir)</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Tahliye Taahhütü</td>
                    <td className="p-4">Geçerli ve Yaygın</td>
                    <td className="p-4">Geçerli ve Yaygın</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Depozito Sınırı</td>
                    <td className="p-4">Max 3 Aylık Kira</td>
                    <td className="p-4">Max 3 Aylık Kira</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Tadilat İzni</td>
                    <td className="p-4">Sınırlı (Yazılı izin gerekir)</td>
                    <td className="p-4">Ticari ihtiyaca göre daha geniş (Sözleşme belirler)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">İşyeri Kira Sözleşmesinde Mutlaka Bulunması Gereken Maddeler</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Profesyonel bir **işyeri kira sözleşmesi** şu özel maddeleri içermelidir:
            </p>
            <ul className="space-y-4 text-gray-650 mb-12 list-decimal pl-6 font-sans text-base">
              <li><strong>Faaliyet Konusu:</strong> İşyerinde hangi işin yapılacağı (Örn: Restoran, Ofis, Tekstil Atölyesi) net yazılmalıdır. Ruhsat alımında bu madde kritiktir.</li>
              <li><strong>Alt Kiralama Yetkisi:</strong> Ticari olarak ihtiyaç duyulabilir. Verilip verilmediği açıkça belirtilmelidir.</li>
              <li><strong>Tadilat ve Dekorasyon:</strong> İşyeri girişinde yapılan masrafların kira bedelinden düşülüp düşülmeyeceği veya tahliye ederken sökülüp sökülmeyeceği yazılmalıdır.</li>
              <li><strong>Aidat ve Ortak Giderler:</strong> AVM veya site içerisindeki dükkanlarda yönetim giderlerinin dağılımı detaylandırılmalıdır.</li>
            </ul>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <Store className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Profesyonel İşyeri Sözleşmenizi Bugün Hazırlayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Şirketiniz veya dükkanınız için yasal riskleri minimize eden, stopaj ve KDV uyumlu, ticari kira başlıklarına sahip profesyonel sözleşmeleri ücretsiz oluşturun.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Sözleşme Oluşturmaya Başla
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 18 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Av. Murat Aydın</span>
            </div>
            <div className="flex items-center space-x-6">
              <button className="hover:text-accent flex items-center transition-colors"><Share2 className="h-4 w-4 mr-2" /> Paylaş</button>
              <button className="hover:text-accent flex items-center transition-colors"><Printer className="h-4 w-4 mr-2" /> Yazdır</button>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Posts */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-black text-primary mb-12 text-center decoration-accent decoration-4 underline underline-offset-8">Diğer Popüler Rehberler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/damga-vergisi-kira-hesaplama" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Damga Vergisi Hesaplama</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesinde damga vergisi nedir, kim tarafından ve nasıl ödenir? 2026 güncel oranlar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/aidat-kiraci-ev-sahibi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Aidatı Kim Öder?</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Konut ve işyeri kira ilişkilerinde apartman aidatını kim öder? Hangisi demirbaş gideridir...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/2026-kira-artis-orani-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">2026 Kira Artış Oranı</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Yasal TÜFE sınırı ve hesaplama formülü. Konut ve işyeri için güncel artış kuralları...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
