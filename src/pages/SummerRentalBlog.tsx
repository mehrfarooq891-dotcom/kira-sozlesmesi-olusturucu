import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Sun, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, ClipboardCopy, HelpCircle, Calendar, ShieldAlert, Waves, Home, Receipt } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function SummerRentalBlog() {
  const { t } = useTranslation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const keyClauses = [
    {
      title: "Mevsimlik Kullanım Süresi ve Otomatik Uzama Yasağı",
      detail: "Sözleşmenin sadece yazlık ve mevsimlik amaçla (Örn: 15 Haziran 2026 - 15 Eylül 2026 tarihleri arasında) kiralandığını, bu sürenin sonunda mülkün tahliye edileceğini ve sözleşmenin otomatik olarak uzamayacağını şerh eden belirli süreli kloz."
    },
    {
      title: "Aidat, Fatura ve Havuz Giderleri Sorumluluğu",
      detail: "Kiralama süresi boyunca elektrik, su, internet, tüp gaz maliyetleri ile varsa havuz bakımı, site aidatı veya bahçıvan masraflarının hangi tarafça karşılanacağını (Örn: 'Kira bedeline dahildir' veya 'Kullanım miktarına göre depozitodan mahsup edilecektir') belirleyen net finansal kloz."
    },
    {
      title: "Kişi Sayısı ve Alt Kiralama (Sublease) Engeli",
      detail: "Günübirlik ve kısa vadeli kiralamalarda mülkte konaklayacak maksimum kişi sayısının (Örn: 'En fazla 6 yetişkin konaklayabilir') tespiti ve mülkün üçüncü şahıslara parayla veya ücretsiz olarak devredilemeyeceğini belirten güvenlik klozu."
    },
    {
      title: "Cezai Şart ve Cayma Protokolü",
      detail: "Kiracının vaktinden önce evi terk etmesi veya mülk sahibinin rezervasyonu haklı sebep olmaksızın iptal etmesi durumunda ödenecek tazminat bedelini ve ön ödeme (kapora) iade şartlarını sabitleyen cayma klozu."
    }
  ];

  const handleCopyClause = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.summerRentalTitle')}
        description={t('blogPage.summerRentalSeoDesc')}
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
            <Sun className="h-4 w-4 animate-spin-slow" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Mevsimlik ve Turizm Amaçlı Kiralama Rehberi 2026</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8 text-white"
          >
            Yazlık Kiralama Sözleşmesi — Mevsimlik Kira Rehberi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Tatilinizi yasal güvenceye alın. Yaz döneminde villa, yazlık konut veya mevsimlik daire kiralarken kaparo dolandırıcılığından korunmanın yolları, depozito güvenceleri ve eksiksiz teslim tutanağı kuralları.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Yaz aylarının gelmesiyle birlikte Ege, Akdeniz ve Marmara kıyılarındaki yazlık konutlara, villalara ve resort tipi dairelere olan talep zirve noktaya ulaşmaktadır. 
              Gerek aile tatilleri gerekse grup etkinlikleri için tercih edilen bu mülkler genellikle "mevsimlik" veya "haftalık/aylık" gibi periyotlarla kiralanır. 
              Ancak, otel konseptinden farklı olarak şahıslardan kiralanan bu mülklerde yasal bir **yazlık kiralama sözleşmesi** tanzim edilmemesi uyuşmazlıklara en sık davetiye çıkaran konulardandır. 
              Sözlü anlaşmalar, kaparo dolandırıcılıkları, elektrik-su faturalarının paylaşımından kaynaklanan kavgalar ve çıkışta depozito iade edilmemesi gibi sorunlar, bir yıllık biriken yorgunluğu atmak için çıkılan tatili adeta bir kabusa dönüştürebilir. 
              Hukuken korunaklı ve huzurlu bir yaz dönemi geçirmenin yegane aşısı; Türk Borçlar Kanunu kurallarına ve yeni mevzuatlara uyumlu, mevsimlik dinamikleri gözeten bir kiralama protokolü hazırlamaktan geçer. 
              Bu mufassal rehberimizde, yazlık kiralamaların yasal sınırlarını, turizm kiralama kuralları kapsamındaki kısa dönem kiralamayı, tarafların uyması gereken mevsimlik şartları ve eşya hasarlarını önleyecek demirbaş teslim tutanağı adımlarını en ince hukuki detayına kadar ele aldık.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Yazlık Kiralamalarda Yeni Yasal Mevzuat ve "Kısa Dönem Kira" Sınırları</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Öncelikle, Türkiye'de kısa dönemli gayrimenkul kiralama pazarı son yıllarda radikal bir dönüşüm geçirmiştir. 
              Kamuoyunda "Airbnb Yasası" ya da "Turizm Amaçlı Konut Kiralanması Kanunu" olarak bilinen 7464 sayılı Kanun, yazlık kiralamaları doğrudan birinci dereceden etkilemektedir. 
              Bu kanuna göre; **100 gün veya daha kısa süreli** yapılan tüm konut kiralamaları "Turizm Amaçlı Konut Kiralama" statüsüne alınmıştır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Eğer bir mülk sahibi, evi sezonluk olarak 1-2 haftalık veya aylık periyotlarla (toplamda 100 günden az) kiraya veriyorsa, Kültür ve Turizm Bakanlığı'ndan turizm amaçlı kiralama izin belgesi almak, binadaki tüm kat maliklerinden oy birliğiyle rıza almak ve kapıya tescilli plaket asmak zorundadır. 
              Ayrıca, kimlik bildirim kanunu uyarınca konaklayan kişilerin verilerini emniyete bildirmekle yükümlüdür. 
              Bakanlık izin belgesi bulunmayan yerlerin yasa dışı olarak kısa dönemli kiralanması durumunda mülk sahiplerine ve aracı olanlara çok ağır idari para cezaları uygulanmaktadır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              **101 Gün ve Üzeri Kiralamalarda Durum Nedir?**  
              Eğer yazlık mülk sezonda kesintisiz olarak 101 gün veya daha uzun süreli olarak (örneğin 1 Haziran - 15 Eylül tarihleri arasını kapsayacak şekilde 3.5 aylığına) tek bir aileye kiralanacaksa, bu kiralama işlemi turizm kanununun istisna sınırları içerisine girer. 
              Bu tip kiralamalarda doğrudan Türk Borçlar Kanunu’nun (TBK) "Belirli Süreli Konut Kiralaması" hükümleri uygulanır. 
              Bu nedenle, sözleşmedeki kiralama süresinin başlangıç ve bitiş tarihlerinin gün bazında titizlikle hesaplanması ve kontrata açıkça dökülmesi cezai yaptırımlardan kaçınmak adına büyük önem arz etmektedir.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start font-sans">
              <Waves className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Turizm İzin Belgesi Olmayan Evlerde Kiralama Riski</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Kısa süreli (100 günün altında) bir **yazlık kiralama sözleşmesi** tanzim edilirken, mülkün Turizm Bakanlığı izin belgesi olup olmadığını sorgulamalısınız. 
                  İzin belgesi olmayan bir mülkün denetlenmesi durumunda mülk mühürlenebilir ve tatilinizin tam ortasında evi tahliye etmek zorunda kalarak ciddi mağduriyetler yaşayabilirsiniz.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Yazlık Sözleşmelerinde Belirlenmesi Gereken Mevsimlik Şartlar</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Normal konut kiralamaları genellikle boş konutların uzun süreli barınma ihtiyacını karşılaması üzerine kurgulanırken, yazlıklarda durum bütünüyle farklıdır. 
              Yazlıklar genellikle mobilyalı, beyaz eşyalı, havuzlu ve lüks donanımlı mülklerdir. 
              Bu nedenle, mevsimlik kiralama şartlarının en küçük detayına kadar yazılı metne dökülmesi hukuken zorunludur. 
              Kontratta bulunması kaçınılmaz olan majör **mevsimlik şartlar** şunlardır:
            </p>

            <ul className="space-y-4 text-gray-650 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Fatura ve Sarfiyat Yönetimi:</strong> Yazlık evlerde sıcak yaz aylarında kesintisiz çalışan klimaların, havuz devridaim motorlarının ve sulama sistemlerinin elektrik tüketimi faturayı astronomik seviyelere taşıyabilmektedir. Sözleşmede, "Kira süresi boyunca harcanan elektrik ve su bedeli, sayaç okuması yapılarak kiracı tarafından ödenecektir ve depozitodan düşülecektir" ya da "Elektrik-su faturaları kiralama bedeline dahildir" ibaresinin açık yüreklilikle ilan edilmesi gerekir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Havuz ve Bahçe Bakım Hizmetleri:</strong> Müstakil bahçeli ve havuzlu villalarda havuz kimyasallarının temizliği ve klor testi günlük olarak yapılmalıdır. Bu profesyonel bakım hizmetinin maliyetinin ve eve giriş çıkış saatlerinin (örn: Bahçıvan kimsenin mahremiyetini bozmadan sabah 07:00-08:00 arası gelecektir) sözleşmeyle tanzim edilmesi uyuşmazlıkları başlamadan bitirir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Yedekleme ve Rezervasyon İptal Şartları:</strong> Yazlık kiralamalar aylar öncesinden rezerve edildiği için tarafların planları değişebilir. Kiracının erken cayması durumunda kapora iade oranları, mücbir sebep halleri (doğal afet, havuz borusu patlaması, binanın elektriğinin kesilmesi vb.) durumunda mülk sahibinin sağlayacağı alternatif barınma çözümleri kontrata kloz olarak eklenmelidir.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Yazlık Kiralamada Depozito Güvencesi ve Finansal Korunma</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Yazlık bölgedeki villaların ve eşyalı dairelerin iç donanımları (akıllı televizyonlar, ankastre setler, klimalar, lüks mobilyalar, şezlonglar) yüksek maddi değere sahiptir. 
              Mülk sahipleri, bu eşyaların hasar görme ihtimaline karşı haklı olarak ciddi miktarlarda **depozito** talep etmektedir. 
              Ancak tatil sonunda, kiracı evden ayrılırken ev sahiplerinin "Koltuk lekelenmiş", "Tabak kırılmış", "Kumanda kayıp" gibi bahanelerle aldıkları depozitonun üstüne yatmaya çalışması en yaygın tatil uyuşmazlıkları arasındadır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Depozito güvencesini iki taraflı korumanın en akıllıca hukuki yöntemleri şunlardır:
            </p>

            <ul className="space-y-4 text-gray-650 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Bankadan "Bloke" ya da "Hasar Güvencesi" Açıklamalı Transfer:</strong> Depozitonun elden verilmesi ispat zorluğu doğurur. Banka havalesi yaparken "15 Haziran - 15 Eylül kiralama dönemine ait hasar ve zayiat güvence (depozito) bedelidir" şeklinde açık ve hukuki bir açıklama yazmalısınız.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Depozito İade Süresi Sınırı:</strong> Sözleşmeye "Depozito bedeli, mülkün tahliye edildiği gün yapılacak fiziki incelemede hasar saptanmaması halinde en geç 3 (üç) iş günü içerisinde kiracıya iade edilir" maddesi eklenmelidir. Bu sayede ev sahibinin iade sürecini haftalarca rölantiye alması engellenir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Kullanım Esaslı Yıpranma Sınırı:</strong> Borçlar Kanunu uyarınca, kiracı eşyaların olağan kullanımından (zamanla eskimeler, boyanın güneşten solması vb.) ötürü sorumlu tutulamaz. Yalnızca kazaen, ihmalen veya kasıtlı verilen olağan dışı hasarlar (kırılma, yırtılma, yanma) depozitodan düşülebilir.</span>
              </li>
            </ul>

            <div className="bg-red-500/5 p-8 rounded-[40px] border border-red-500/10 my-10 flex items-start font-sans">
              <ShieldAlert className="h-10 w-10 text-red-600 shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-red-950 mb-2">Dolandırıcılık Tehlikesine Karşı Tapu Sorgulaması Yapın</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Yaz aylarında sosyal medya veya sahte ilan siteleri üzerinden başkalarına ait lüks villa fotoğraflarını kullanarak "yarı fiyatına kiralık yazlık" ilanı açan dolandırıcılara kaparo adı altında para kaptıran binlerce mağdur vardır. 
                  Sözleşme imzalamadan ve kaparo göndermeden önce mutlaka e-devlet tapu sorgulama veya tapu örneğini isteyerek hesap sahibinin mülk sahibiyle uyuşup uyuşmadığını kontrol edin.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Demirbaş ve Detaylı Eşya Teslim Tutanağının Önemi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Yazlık kiralama sözleşmesinin vazgeçilmez en önemli eki, yüksek hukuki ispat değerine sahip olan **teslim tutanağı** belgesidir. 
              Evi teslim alırken her iki tarafın imzasıyla tanzim edilecek bu tutanak, çıkışta yaşanacak uyuşmazlıklarda adeta bir hakem görevi görür.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kusursuz bir teslim tutanağı hazırlamak için şu adımları mutlaka izlemelisiniz:
            </p>

            <ul className="space-y-4 text-gray-650 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Eşyaları Kalem Kalem Listeyin:</strong> Evdeki beyaz eşyaların markaları, televizyonlar, klima kumandaları, mutfaktaki kahve makineleri, şezlonglar, şemsiyeler, nevresim takımları ve mevcutsa mutfak araç gereçleri adetleriyle birlikte listelenmelidir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Mevcut Hasarları Yazılı Olarak Belirtin:</strong> Eve girdiğinizde koltuğun köşesinde yırtık, masada derin bir çizik veya klimanın çalışmasında bir aksaklık varsa bunu tutanağa "Deri koltuk oturma alanında yaklaşık 5 cm çapında eski bir yırtık mevcuttur; bu haliyle teslim alınmıştır" şeklinde yazmalısınız.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Dijital Fotoğraflı Kanıt Arşivi Oluşturun:</strong> Giriş günü evin tüm odalarının, mobilyalarının ve beyaz eşyalarının durumunu gösteren yüksek çözünürlüklü fotoğraflar ve video kayıtları alın. Bu görsel dosyaları bulut sistemine yükleyerek tarih damgalı (zaman damgası) bir kanıt haline getirin. Çıkışta yaşanabilecek haksız suçlamalara karşı bu dijital arşiv en güçlü hukuki kalkanınız olacaktır.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Uzun Dönem Kira vs. Yazlık (Mevsimlik) Kira Karşılaştırma Tablosu</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Kira Türü Kriterleri</th>
                    <th className="p-4">Standart Uzun Dönem Kira</th>
                    <th className="p-4 rounded-tr-2xl">Yazlık (Mevsimlik) Kira</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Sözleşme Süresi</td>
                    <td className="p-4 text-gray-500">Genellikle Asgari 1 Yıl (Otomatik uzama haklı)</td>
                    <td className="p-4 text-green-700 font-bold">Mevsim sınırlarına tabi (Haftalık, aylık veya 101 gün)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Yasal Bildirim Kuralları</td>
                    <td className="p-4 text-gray-500">Kiracı 15 gün önce ihtar vermezse otomatik uzar</td>
                    <td className="p-4 text-green-700 font-semibold font-sans">Süre sonunda kendiliğinden sona erer (Belirli süreli tahliye)</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Eşya ve Demirbaş Durumu</td>
                    <td className="p-4 text-gray-500">Genellikle boş konut teslimi</td>
                    <td className="p-4 text-green-700 font-bold">Tam eşyalı, beyaz eşyalı, bahçe ve havuz ekipmanlı teslim</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Fatura Sorumlulukları</td>
                    <td className="p-4 text-gray-500">Aboneliklerin kiracı üzerine alınması şarttır</td>
                    <td className="p-4 text-green-700 font-semibold">Abonelikler mal sahibinde kalır, sayaç bazlı fatura mahsubu yapılır</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Yazlık Kira Sözleşmesine Eklenmesi Gereken 4 Kritik Kloz</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Mevsimlik yazlık kiralarken hem kiracının hem de mülk sahibinin haklarını dengeli bir şekilde koruyan ve online sözleşmenizin "Özel Şartlar" alanına kolayca kopyalayıp yapıştırabileceğiniz yasal cümle kalıpları aşağıda hazırlanmıştır:
            </p>

            <div className="space-y-6 my-10 font-sans">
              {keyClauses.map((clause, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-200 hover:border-accent transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-black uppercase text-accent tracking-wider block mb-2">{clause.title}</span>
                    <span className="text-sm font-sans text-gray-750 block">{clause.detail}</span>
                  </div>
                  <button
                    onClick={() => handleCopyClause(`${clause.title}\n${clause.detail}`, idx)}
                    className="shrink-0 bg-primary hover:bg-black text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center transition-colors shadow-sm"
                  >
                    <ClipboardCopy className="h-4 w-4 mr-2" />
                    {copiedIndex === idx ? "Kopyalandı!" : "Metni Kopyala"}
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl font-sans">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <Sun className="h-16 w-16 text-accent mx-auto mb-6 animate-spin-slow" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Güvenli Yazlık Kira Sözleşmenizi Şimdi Hazırlayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Kanunlarımıza %100 uyumlu, depozito iadeli ve eşya hasar koruma güvenceli örnek yazlık kira sözleşmesini online formumuzla saniyeler içinde hazırlayın, PDF olarak indirin.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Şimdi Yazlık Kira Sözleşmesi Oluştur
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6 text-center lg:text-left">Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Yazlık evde bulunan klimalar, havuz motoru veya derin dondurucu arızalanırsa masrafı kim öder?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Klima gazının bitmesi, cihazın motorunun ömrünü tamamlamış olması veya su tesisatının eskilikten patlaması gibi olağan donanım arızalarından tamamen mülk sahibi sorumludur. Kiracı ev sahibini derhal bilgilendirerek tamir edilmesini talep edebilir. Tamir süresi uzarsa ve kiracı mülkü tam verimle kullanamazsa (örneğin sıcak yaz gününde akdeniz sıcağında klimasız kalırsa), kira bedelinde hakkaniyete uygun indirim talep edebilir. Ancak kiracının hatalı kullanımıyla (kumandaya basıp cihazı aşırı zorlamak, üzerine sıvı dökmek) oluşan arızalarda masraf kiracıya aittir ve depozitodan tahsil edilir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Yazlık evde gürültü sebebiyle komşulardan veya siteden şikayet gelirse cezası kimedir?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Borçlar Kanunu’nun "Kiracının Komşulara Saygı Gösterme Sorumluluğu" (TBK m. 316) uyarınca, kiracı kaldığı süre boyunca site kurallarına ve gürültü yönetmeliklerine harfiyen uymakla yükümlüdür. Çevreyi rahatsız edecek düzeyde yüksek gürültü yapılması durumunda kesilecek idari para cezaları doğrudan cezayı doğuran fiili işleyen kiracıya aittir. Ayrıca bu durum mülk sahibi açısından sözleşmenin haklı feshi ve tahliye sebebi sayılabilmektedir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Mevsimlik kiralama rezervasyonunda gönderilen 'kaparo' yasal olarak güvencede midir?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Kanun anlamında kaparo (cayma akçesi veya bağlanma parası), tarafların rızasıyla kurulan sözleşmenin ispatıdır. Sözlü yapılan anlaşmalarda gönderilen kaparoların dolandırıcılıklara konu olması durumunda ispatlanması oldukça güçtür. En sağlıklı yöntem, taraflar imzalayacakları yazılı zeyilname veya yazlık kiralama sözleşmesi üzerine alacakları kaparo miktarını netleştirerek "Kalan tutar tahliye ve mülk girişinde elden/havale yoluyla ödenecektir" şeklinde kayıt almalıdır.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 11 Haziran 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Av. Meltem Şen (Girişimci ve Gayrimenkul Hukukçusu)</span>
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
            <Link to="/kiraci-degisikligi-devir-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kiracı Değişikliği Devir</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Mevcut kira kontratına yeni kiracı dahil etme kuralları, üçlü devir protokolü hazırlamanın yolları ve ev sahibi rızası...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/ogrenci-kira-sozlesmesi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors font-sans">Öğrenci Kira Sözleşmesi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Akademik takvime uygun öğrenci kira kontratları, paylaşımlı öğrenci evi hakları ve depozito iade tavsiyeleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-sozlesmesi-pdf-kaydetmek" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesi PDF</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira kontratının PDF formatında saklanmasının ispat avantajları, güvenli arşivleme ve e-imza geçerliliği...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
