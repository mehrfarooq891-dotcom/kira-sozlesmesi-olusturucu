import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, Gavel, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, HelpCircle, AlertCircle, Landmark, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotaryContractBlog() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.notaryContractTitle') + " — Yasal Şartlar & Avantajlar"}
        description={t('blogPage.notaryContractSeoDesc')}
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
            <Award className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Yasal Sözleşme Klavuzu</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.notaryContractTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Kira sözleşmesinin noter onayı yaptırılması zorunlu mudur? Adi yazılı kontrat yasal geçerliliği, imza inkarı riski, süre güvenceleri ve noter onayının tüm avantajları.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-accent pl-6">
              Kiralık bir ev veya işyeri bulup taraflar anlaştıktan sonra atılması gereken ilk somut adım kira sözleşmesi imzalamaktır. 
              Ancak bu aşamada hem kiracıların hem de mülk sahiplerinin aklına gelen en kritik soru şudur: <strong>Kira sözleşmesi noter</strong> huzurunda mı yapılmalıdır yoksa tarafların kendi aralarında imzalayacağı bir kağıt yasal koruma için yeterli midir? 
              Türkiye'de yaygın olan "anlaşmaların mutlaka noterde onaylatılması gerektiği" inancının yasal boyutu nedir? 
              Bu kapsamlı rehberimizde; kira sözleşmelerinin noter şartı, adi yazılı sözleşmelerin yasal geçerliliği, noter onaylı kontratların sunduğu yadsınamaz hukuki avantajları ve maliyet analizlerini en güncel 2026 kanuni çerçevesinde masaya yatıracağız.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Yasal Durum: Kira Sözleşmesi İçin Noter Şartı Var Mıdır?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Hukuk kuralları açısından bakıldığında, konut ve çatılı işyeri kira sözleşmelerinin kurulması için kanunun öngördüğü zorunlu bir resmi şekil şartı bulunmamaktadır. 
              Türk Borçlar Kanunu (TBK) Madde 12 kapsamında, aksine bir kanuni düzenleme bulunmadıkça sözleşmeler herhangi bir şekil serbestisine tabidir. 
              Yani, yasal açıdan bir <strong>kira sözleşmesi noter</strong> onaylı olmak zorunda değildir.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              Hatta daha çarpıcı bir gerçek şudur ki; Borçlar Kanunu'na göre kira sözleşmeleri şifahi (sözlü) olarak dahi kurulabilir. 
              Ev sahibinin anahtarı teslim etmesi ve kiracının her ay düzenli bir bedeli banka vasıtasıyla ödemesi, aralarında sözlü bir kira ilişkisinin yasal olarak başladığını gösterir. 
              Ancak sözlü sözleşmeler, uyuşmazlık anında şartların (kira bedeli, artış oranı, depozito miktarı gibi) kanıtlanması bakımından son derece zordur. 
              Bu nedenle, sözlü anlaşmalar yerine her halükarda yazılı bir sözleşme yapılması hayati bir öneme sahiptir.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Adi Yazılı Sözleşmenin Kanuni Karşılığı</h4>
                <p className="text-gray-600 m-0">
                  Tarafların noter aracı olmadan, kendi aralarında veya bir emlakçı vasıtasıyla kırtasiyeden aldıkları ya da online olarak oluşturup çıktısını aldıkları kira sözleşmelerine <strong>adi yazılı sözleşme</strong> denir. 
                  Adi yazılı sözleşmeler, iki tarafın (ve varsa kefillerin) ıslak imzalarını taşıdığı andan itibaren hukuken <strong>tamamen geçerli ve bağlayıcıdır</strong>. 
                  Bu sözleşmelerle mahkemelere başvurulabilir, icra takibi başlatılabilir ve kira tespiti veya tahliye davası yürütülebilir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Sözleşmesini Noter'de Yapmanın Sunduğu Yasal Avantajlar</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Madem adi yazılı sözleşmeler hukuken geçerlidir, o halde neden binlerce kişi her yıl <strong>kira sözleşmesi noter</strong> onaylı olarak yapmayı tercih etmektedir? 
              Bunun yanıtı bütünüyle "hukuki güvenlik" kavramında saklıdır. Noter aracılığıyla yapılan işlemler, olası uyuşmazlıklarda mülk sahibi veya kiracıya çok güçlü yasal kalkanlar sağlar. İşte o kritik avantajlar:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">1. İmza İtirazlarının ve Sahtecilik İddialarının Önlenmesi</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Adi yazılı sözleşmelerdeki en büyük risklerden biri "imza inkarıdır". 
              İleride yaşanacak bir uyuşmazlıkta (örneğin kiranın ödenmemesi veya tahliye davası durumunda) taraflardan biri "Ben böyle bir sözleşmeye imza atmadım, bu imza taklittir" diyerek süreci ciddi oranda uzatabilir. 
              İmza inkarı yapıldığında mahkeme bilirkişi incelemesi ister ve kriminoloji raporları beklendiği için davaların çözülmesi aylarca, bazen yıllarca gecikir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-4">
              Oysa <strong>kira sözleşmesi noter</strong> huzurunda düzenlendiğinde veya imzaları onaylatıldığında, noter yetkilisi her iki tarafın da kimlik tespitini (kimlik kartı doğrulaması ve biyometrik verileriyle) resmi olarak yapar. 
              Noter huzurunda atılan imzalar resmi senet hükmündedir. Dolayısıyla noter onaylı bir kontrattaki imzanın sahteliği veya "bana ait değil" savunması <strong>hukuken asla ileri sürülemez</strong>. Bu durum mülk sahibi için büyük bir zaman ve hak kaybını önler.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">2. İcra Takibi ve Doğrudan İlamsız Tahliye Kolaylığı</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Kira alacaklarının tahsili amacıyla icra dairesine gidildiğinde, adi yazılı kontrata dayanarak başlatılan icra takibine kiracı "böyle bir borcum yok" diyerek kolayca itiraz edebilir. Bu durumda ev sahibi, itirazın kaldırılması davası açarak borcu kanıtlamak zorundadır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-4">
              Eğer elinizde noter tarafından düzenlenen 'düzenleme şeklinde' bir kira kontratı varsa ve bu kontratta ödemelerle ilgili açık kayıtlar içeriyorsa, İcra İflas Kanunu hükümlerine göre bazı durumlarda doğrudan ilamlı icra gibi kuvvetli yasal takiplere başvurulabilir. 
              Kontratın noter tasdikli olması, icra dairesi nezdinde alacağın kesinliğini tevsik eden en güçlü delillerden biridir.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">3. Kira Tahliye Taahhütnamesinin Güvence Altına Alınması</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Mülk sahiplerinin en çok zorlandığı tahliye süreçlerinin başında, kiracının verdiği tahliye taahhütnamelerinin tarihi konusundaki itirazlar gelir. 
              Kiracı, "Ben tahliye taahhütnamesini imzalarken tarih kısmı boştu, ev sahibi sonradan kendi kafasına göre doldurmuş" veya "Bunu kontratı imzaladığım ilk gün imzaladım, dolayısıyla baskı altında verilmiştir ve geçersizdir" iddialarında sıklıkla bulunur. 
              Yargıtay kararlarına göre kira sözleşmesiyle tamamen aynı gün imzalanan taahhütnameler geçersiz kabul edilir.
            </p>
            <div className="bg-red-500/10 p-8 rounded-3xl border-l-8 border-red-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                Notersiz Taahhütnamelerin Riskleri vs. Noter Tasdiki
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed m-0">
                Tahliye taahhütnamesi <strong>noterlik kanalı ile yapıldığında</strong>, taahhüdün tam olarak hangi tarihte (sözleşmeden makul bir süre sonra) ve kim tarafından imzalandığı noter kaydıyla kesinleşmiş olur. 
                Kiracı artık "bu imza benim değil" veya "tarih sahtedir" diyemez. Tahliye günü geldiğinde icra dairesi aracılığıyla tahliye işlemleri haftalar içinde tamamlanır.
              </p>
            </div>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">4. Kesin Tarih Güvencesi</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Sözleşmenin imza tarihi özellikle vergi borçları, yabancılar için oturma izni (ikametgah) başvuruları, şirket kuruluşları ve tapuya kira şerhi verilmesi durumunda yasal bir önem taşır. 
              Noter onayı, sözleşmenin geri dönük olarak sahte bir tarihle değiştirilmesini imkansız kılar. Noterin bastığı mühür üzerindeki tarih, devlet eliyle tasdiklenmiş kesin ve sarsılmaz tarihi simgeler.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Maliyet Analizi: Noter Onayı Ne Kadar Tutar?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Noter onayının bu denli büyük avantajlarının yanında tek yadsınamaz dezavantajı **maliyet** faktörüdür. 
              <strong>Kira sözleşmesi noter</strong> onayı yapıldığında, ödenecek tutarlar birkaç farklı başlık altında toplanır:
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Noter Harç ve Hizmet Ücreti:</strong> Sözleşmedeki sayfa sayısı, taraf sayısı (kiracı, ev sahibi, kefil) ve işlem türüne (onaylama veya düzenleme) göre hesaplanan maktu ve nispi ücretlerdir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Damga Vergisi:</strong> Sözleşmede kararlaştırılan yıllık kira toplamı üzerinden alınan yasal bir vergidir. Sözleşmede kefil bulunması veya depozito limitlerine göre bu oran değişir. Genel olarak adi yazılı sözleşmelerde de damga vergisi mükellefiyeti vardır ancak noterde bu tutar peşin tahsil edilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Değerli Kağıt Bedeli:</strong> Noterlikler tarafından kullanılan resmi kağıtların standart matbu ücretleridir.</span>
              </li>
            </ul>
            <p className="text-gray-650 leading-relaxed mb-6">
              Özetle, noter işlemleri bütçeye ek bir yük getirebilmektedir. 
              Maliyetlerin kime ait olacağı kanunen tarafların rızasına bırakılmıştır. 
              Ancak teamüller gereği, noter onayını kim talep ediyorsa (çoğunlukla mülkünü güvenceye almak isteyen ev sahipleri) masrafları üstlenmesi beklenir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Noter Onaylı Sözleşme Türleri: "Onaylama" vs "Düzenleme"</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Notere gittiğinizde size iki farklı işlem seçeneği sunulacaktır. Hukuki kuvvetleri ve maliyetleri birbirinden farklı olan bu iki yöntemi bilmek önemlidir:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 flex flex-col">
                <span className="font-serif font-black text-primary text-xl mb-4 block">İmzası Onaylanan Sözleşme</span>
                <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                  Taraflar sözleşmeyi kendileri (veya sitemiz gibi bir platformda) hazırlayıp çıktı alarak notere götürür. 
                  Noter sadece tarafların kimliklerini kontrol eder ve imzaların onların huzurunda atıldığını onaylar. 
                  Sözleşme içeriğinin yasalara uygunluğunu denetlemez. 
                  Maliyeti, düzenleme şeklinde yapılana göre nispeten daha uygundur.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 flex flex-col">
                <span className="font-serif font-black text-primary text-xl mb-4 block">Düzenleme Şeklinde Sözleşme</span>
                <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                  Sözleşme bizzat noter memuru veya katibi tarafından, tarafların beyanları doğrultusunda baştan sona noterlik sisteminde yazılır. 
                  İçeriğin Türk Borçlar Kanunu emredici normlarına %100 uyumluluğu noter güvencesindedir. 
                  İcra kabiliyeti ve ispat kuvveti en yüksek sözleşme türüdür, ancak harç ve memuriyet maliyetleri daha yüksektir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Noter Onaylı Kontrat ile Adi Yazılı Kontrat Karşılaştırması</h2>
            <div className="overflow-x-auto my-10">
              <table className="w-full text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Özellik</th>
                    <th className="p-4">Adi Yazılı Kira Sözleşmesi</th>
                    <th className="p-4 rounded-tr-2xl">Noter Onaylı Kira Sözleşmesi</th>
                  </tr>
                </thead>
                <tbody className="text-gray-650">
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Yasal Geçerlilik</td>
                    <td className="p-4">Tam Geçerli ve Yasal Bağlayıcı</td>
                    <td className="p-4">Tam Geçerli ve Yasal Bağlayıcı</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">İmza Güvencesi</td>
                    <td className="p-4">İnkar edilebilir, bilirkişi incelemesi gerektirebilir</td>
                    <td className="p-4">Resmi tasdikli, asla inkar edilemez</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Maliyet durumu</td>
                    <td className="p-4">Ücretsiz (veya sadece maktu damga vergisi)</td>
                    <td className="p-4">Harc, Damga Vergisi ve Noter masrafları vardır</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Hazırlama Hızı</td>
                    <td className="p-4">Dakikalar içinde (Online oluşturucu ile anında)</td>
                    <td className="p-4">Noter sırasında işlem ve onay süresi gerektirir</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Tahliye Taahhüdü Güveni</td>
                    <td className="p-4">Tarih ve imza itirazlarına açıktır</td>
                    <td className="p-4">Tarih ve imzası devlet tasdikli, kesindir</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Üçüncü Kişilere Karşı Güç</td>
                    <td className="p-4">Zayıf (Tarih ispatı zorluğu vardır)</td>
                    <td className="p-4">Çok güçlü (Kesin takvim tarihi güvencesi)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kira sözleşmesini noterde yapmazsak cezası var mı?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Hayır, kira sözleşmesini kendi aranızda adi yazılı yapmanızın yasal veya idari hiçbir cezası bulunmamaktadır. Sözlü kira dahi cezai işleme tabi değildir. Yalnızca vergilendirme açısından yıllık damga vergisinin beyan edilmesi gerekmektedir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Ev sahibi noter sözleşmesini tek taraflı feshedebilir mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Hayır. İster adi yazılı ister noter onaylı olsun, hiçbir kira sözleşmesi ev sahibi tarafından tek taraflı olarak keyfi feshedilemez. Fesih ve tahliye işlemleri için ancak Borçlar Kanunu'nda sayılan haklı tahliye nedenlerinin bulunması ve yasal süreçlerin işletilmesi gerekir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Yabancılar için ikamet izni (oturma izni) alırken noter tasdikli kira kontratı şart mıdır?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Evet. Göç İdaresi Başkanlığı'nın güncel mevzuat kurallarına göre, yabancı uyruklu kişilerin kira ilişkisine dayanarak ikametgah (oturma) izni alabilmeleri için ibraz edecekleri kira sözleşmesinin mutlaka <strong>noterde imzaları onaylanmış (noter onaylı)</strong> olması zorunludur. Adi yazılı kontratlar ikamet başvurularında kabul edilmemektedir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kırtasiye mukavelesi ile online hazırlanan sözleşme arasında fark var mıdır?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  İkisi de 'adi yazılı' statüsündedir ancak içerik kalitesi farkı hayati öneme sahiptir. Kırtasiye mukaveleleri genellikle çok eski kanunlara göre basılmış, güncel 2026 yılı haklarını korumayan ve boşlukları belirsizlik yaratan formlardır. Online sözleşme oluşturucumuz ise Borçlar Kanunu'na tam uyumlu, güncel ve modern korumaları içerecek şekilde dinamik olarak hazırlanır.
                </p>
              </details>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Hukuka Tam Uyumlu Sözleşmenizi Ücretsiz Oluşturun</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  İster kendi aranızda adi yazılı imzalayın, ister noter onayına hazırlık taslağı olarak kullanın; 
                  Borçlar Kanunu'na %100 entegre akıllı kira sözleşmesi oluşturucumuzla haklarınızı en üst düzeyde güvence altına alın. 
                  Üstelik tamamen ücretsiz!
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
              <span>Son Güncelleme: 10 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Av. Elif Şahin</span>
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
            <Link to="/ev-sahibi-kiraci-cikarma-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Ev Sahibi Kiracı Çıkarma</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Yasal çıkartma nedenleri, haklı ihtarname çekme usulleri ve dava süreleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kiraci-haklari-2026-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kiracı Hakları 2026</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">2026 yılı en güncel kiracı hakları, korunma şartları ve hukuki limitler...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/depozito-ne-kadar-olmali-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Depozito Yasal Sınırları</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Depozito ne kadar olabilir? 3 aylık kira sınırı ve iade güvenceleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
