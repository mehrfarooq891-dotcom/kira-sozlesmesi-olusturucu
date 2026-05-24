import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, Award, Clock, FileWarning, ShieldAlert, BadgeAlert, Landmark, ClipboardCopy, Info, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function LeaseTerminationBlog() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const sampleNotice = `İHTARNAME

İHTAR EDEN (KİRAYA VEREN) : [Ad Soyad, T.C. Kimlik No, İletişim Bilgileri, Adres]
MUHATAP (KİRACI)           : [Ad Soyad, T.C. Kimlik No, İletişim Bilgileri, Adres]
KONU                       : Kira dönem sonu itibarıyla sözleşmenin yenilenmeyeceği ve tahliye bildirimine dair (TBK m. 347 uyarınca).

AÇIKLAMALAR :

1- Muhatap, mülkiyeti şahsıma ait olan ve yukarıda belirtilen adreste bulunan taşınmazda [Kira Başlangıç Tarihi] başlangıç tarihli kira sözleşmesi gereğince kiracı olarak ikamet etmektedir.

2- Söz konusu kira sözleşmesi [Sözleşme Bitiş Tarihi] tarihinde sona erecektir.

3- 6098 sayılı Türk Borçlar Kanunu’nun 347. maddesi uyarınca; kira sözleşmesinin süresinin bitiminden en az 15 (on beş) gün önce tarafınıza bildirimde bulunmak kaydıyla sözleşmeyi feshetme irademi beyan ediyorum. (Eğer 10 yıllık uzama süresi dolmuşsa veya yasal başka bir haklı sebep varsa buraya detaylıca yazılmalıdır.)

4- Bu itibarla, yenilenmeyecek olan kira sözleşmesi dönemi sonu olan [Sözleşme Bitiş Tarihi] tarihi itibarıyla taşınmazı tamamen boşaltarak, demirbaşları ile birlikte hasarsız ve borçsuz bir şekilde şahsıma teslim etmenizi ihtar ederim.

5- Belirtilen tarihte taşınmazın tahliye edilerek teslim edilmemesi halinde, aleyhinize yasal tahliye davaları açılacağını, icra takibi başlatılacağını, bu süreçte doğacak tüm mahkeme giderleri, arabuluculuk masrafları, icra harçları ve avukatlık vekalet ücretinin tarafınıza yükleneceğini ihtaren ve ihbaren bildiririm.

İHTAR EDEN: [Ad Soyad, İmza]

SAYIN NOTER;
Üç nüshadan ibaret işbu ihtarnamenin bir nüshasının muhataba tebliğini, bir nüshasının dairenizde saklanmasını, tebliğ şerhli diğer nüshasının ise tarafıma verilmesini talep ederim.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleNotice);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.leaseTerminationTitle') + " — 2026 Güncel Yasal Süreç"}
        description={t('blogPage.leaseTerminationSeoDesc')}
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
            <Scale className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Fesih & Tahliye Kılavuzu</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.leaseTerminationTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Hukuki bir sözleşmeyi usulüne uygun şekilde sona erdirmek, en az sözleşmeyi hazırlamak kadar mühimdir. İhtar süreleri, yasal haklar ve örnek fesihte ihtarname formatı.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Kira sözleşmeleri, sadece başlangıçta iki tarafı bir araya getiren birer belge değil, aynı zamanda bu birlikteliğin nasıl sona ereceğini de belirleyen yasal kılavuzlardır. 
              Gerek sosyal şartlar gerekse ekonomik gelişmeler nedeniyle taraflar sözleşmeyi vaktinden önce veya dönemi bitiminde sonlandırmak isteyebilir. 
              Ancak, Türk Borçlar Kanunu kapsamında <strong>kira sözleşmesi feshi</strong> işlemi rastgele bir bildirimle veya anahtarı bırakıp gitmekle gerçekleştirilemez. 
              Yasalar, kiracının barınma hakkını koruma altına alırken, ev sahibinin de mülkiyet haklarını dengeler. 
              Bu sebeple yasal bildirim sürelerine riayet edilmemesi, usule aykırı ihtar çekilmesi veya feshin haklı bir nedene dayandırılmaması, taraflara ağır tazminat yükümlülükleri ve uzayan hukuki ihtilaflar olarak geri dönebilir. 
              Bu kapsamlı rehberde, <strong>kira sözleşmesi feshi</strong> sürecini yasal koşulları, haklı nedenleri, bildirim süreleri ve örnek ihtarname taslağıyla birlikte mercek altına alıyoruz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Kira Sözleşmesi Feshi Nedir ve Hukuki Dayanağı Nedir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmesinin feshi, yürürlükte bulunan bir kira mukavelesinin yasal yollarla ve belirli kurallara dayanarak tek taraflı veya karşılıklı rıza ile sonlandırılmasıdır. 
              6098 sayılı Türk Borçlar Kanunu (TBK), konut ve çatılı işyeri kiralarında sözleşmenin feshini oldukça detaylı ve katı şartlara bağlamıştır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kanunun temel felsefesi "kiracıyı korumak" üzerine kuruludur. 
              Bu nedenle, belirli süreli bir kira sözleşmesinde sürenin dolmuş olması, sözleşmenin kendiliğinden sona erdiği anlamına gelmez. 
              Aksi bir bildirim yapılmadığı takdirde sözleşme her yıl yasal olarak **1 yıl süreyle otomatik olarak uzar**. 
              Bu bağımsız uzama döngüsünü kırabilmek ve fesih sürecini başlatabilmek için kanunun öngördüğü mekanizmaları adım adım uygulamak gerekir.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Karşılıklı İkale (Fesih) Protokolü</h4>
                <p className="text-gray-600 m-0 leading-relaxed">
                  Kanunun koyduğu sınırlamalara rağmen, tarafların bir araya gelerek özgür iradeleriyle imzalayacakları bir **"Hizmet/Kira İkale Protokolü"** (karşılıklı fesih sözleşmesi) ile her an kira ilişkisini sonlandırmaları mümkündür. 
                  Bu durumda yasal bekleme süreleri veya gerekçeler aranmaz.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Kira Sözleşmesi Fesih Sebepleri Nelerdir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira münasebetinin sonlanabilmesi için haklı veya yasal olarak tanınmış belirli sebeplerin bulunması şarttır. 
              Temel olarak fesih nedenlerini kiracı ve kiraya veren açısından iki ayrı kulvarda incelemek gerekir.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Kiracı Açısından Fesih Sebepleri</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Kiracı, sözleşmeyi sonlandırma konusunda ev sahibine göre çok daha geniş haklara sahiptir:
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Süre Bitimiyle Gerekçesiz Fesih:</strong> Kiracı, belirli süreli sözleşmelerde sürenin bitiminden en az **15 gün önce** yazılı bildirimde bulunarak hiçbir sebep göstermeden sözleşmeyi feshedebilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Önemli Sebeplerin Varlığı (Haklı Fesih):</strong> Taşınmazın kullanılmasını imkansız kılan veya ciddi ölçüde zorlaştıran ayıpların/arızaların (örneğin sürekli rutubet, yapısal çökmeler, ısınma sisteminin tamamen bozulması ve ev sahibinin bunu tamir etmemesi) bulunması durumunda kiracı mukaveleyi derhal feshedebilir.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Mülk Sahibi Açısından Tahliye ve Fesih Sebepleri</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Ev sahibi, kira sözleşmesi süresi doldu diye doğrudan fesih yapamaz. Ancak aşağıdaki haklı tahliye nedenlerinin varlığı halinde mahkeme yoluyla fesih talep edebilir:
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Gereksinim, Yeniden İnşa ve İmar:</strong> Ev sahibinin kendisi, eşi, çocukları, anne-babası veya bakmakla yükümlü olduğu kişilerin konut ya da işyeri ihtiyacı olması halinde (İhtiyaç Nedeniyle Tahliye). Ayrıca binanın esaslı tadilatı, yıkılıp yeniden yapılması durumunda tahliye davası açılabilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Yeni Malikin İhtiyacı:</strong> Taşınmazı satın alan yeni kişi, kendisi veya yasal yakınlarının ihtiyacı doğrultusunda, tapu devrinden itibaren en geç **1 ay içinde** kiracıya ihtarname göndererek 6 ay sonra tahliye davası açabilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Kira Borcunun Ödenmemesi (İki Haklı İhtar):</strong> Kiracının aynı kira dönemi içerisinde kiranın ödenmemesi nedeniyle iki farklı aya ait iki tane haklı noter ihtarı alması durumunda.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Özenle Kullanma ve Komşulara Saygı Borcuna Aykırılık:</strong> Kiracının mülke kasten büyük zararlar vermesi, apartmanda huzuru çekilmez derecede bozması durumunda en az 30 günlük süre verilerek tahliye ihtarı çekilebilir.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Kira Sözleşmesi Feshinde Bildirim Süreleri</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Sözleşmenin türü ve süresi, uygulanacak olan yasal bildirim sürelerini doğrudan belirler. Sürelere uymamak, feshin geçersiz sayılmasına neden olur.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Belirli Süreli Sözleşmelerde Bildirim Süresi</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Yukarıda da vurguladığımız üzere, belirli süreli sözleşmelerde kiracının, dönem sonundan en az **15 gün önce** ev sahibinin eline geçecek şekilde yazılı fesih beyanında bulunması gerekir. 
              Eğer bu 15 günlük süre kaçırılırsa sözleşme otomatikman 1 yıl uzar ve kiracı ancak bir sonraki yılın bitiminde bu hakkı kullanabilir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Ev sahibi için ise durum farklıdır. Belirli süreli kira sözleşmelerinde ev sahibi sırf süre bitti diye sözleşmeyi sonlandıramaz. 
              Ancak sözleşmenin başlangıcından itibaren **10 yıllık uzama süresi** tamamlandıktan sonra, her uzama yılının bitiminden en az **3 ay önce** bildirimde bulunmak kaydıyla sebepsiz fesih hakkı kazanır.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Belirsiz Süreli Sözleşmelerde Bildirim Süresi</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Başlangıçtan itibaren belirsiz süreli olarak kurulan veya sonradan bu niteliğe dönen sözleşmelerde hem kiracı hem ev sahibi, yasal **fesih bildirim dönemlerine** uymak zorundadır. 
              Borçlar Kanunu uyarınca, belirsiz süreli kiralamalarda her altı aylık dönemin sonu için, en az **3 ay önceden** fesih bildiriminde bulunması gerekmektedir.
            </p>

            <div className="bg-accent/10 p-8 rounded-3xl border-l-8 border-accent my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-accent mr-2" />
                Önemli Bildirim Kuralı (Yazılılık Şartı)
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed m-0">
                TBK m. 348 gereğince, konut ve çatılı işyeri kiralarında fesih bildiriminin geçerli olabilmesi için **kural olarak yazılı şekilde yapılması şarttır**. 
                Yazılı yapılmayan fesih bildirimleri (örneğin telefonla arayarak "evden çıkacağım" demek) tamamen hükümsüzdür. 
                Garanti açısından tebliğin noter kanalıyla ihtarname şeklinde gönderilmesi şiddetle tavsiye edilir.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Fesih Bildiriminin Yasal Şartları ve Tebligat Süreçleri</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Feshin yasal olarak sonuç doğurabilmesi için sadece süreye uymak yetmez; aynı zamanda bildirimin yasal olarak "muhatabın hakimiyet alanına" ulaşması gerekir. Hukuki terimle buna **tebliğ** denir.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              Örneğin, 15 günlük bildirim süresine uymak isteyen kiracı, ihtarnameyi dönemin bitmesine 16 gün kala notere teslim etmiş olabilir. 
              Ancak tebligat resmi olarak ev sahibinin adresine dönemin bitmesine 14 gün kala yani yasal sınırdan sonra ulaştıysa, bildirim geçersiz sayılacak ve sözleşme otomatik uzayacaktır. 
              Bu nedenle postadaki ve noter tebliğ kuryesindeki gecikme payları hesaba katılarak işlemler en az 1 ay önceden başlatılmalıdır.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Örnek Kira Sözleşmesi Fesih İhtarnamesi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmesini dönem sonunda yasal olarak sonlandırmak (feshetmek) için noter kanalıyla kullanabileceğiniz, Borçlar Kanunu standartlarına uygun kopyalanabilir ihtarname şablonu aşağıda sunulmuştur:
            </p>

            {/* Kopyalanabilir İhtar Kutusu */}
            <div className="bg-gray-100 hover:bg-gray-150/50 transition-colors p-8 rounded-[40px] border border-gray-200 my-10 font-mono text-sm relative">
              <button 
                onClick={handleCopy}
                className="absolute top-6 right-6 flex items-center bg-primary text-white hover:bg-black font-sans font-bold text-xs py-2 px-4 rounded-xl shadow transition-colors"
              >
                <ClipboardCopy className="h-4 w-4 mr-2" />
                {copied ? "Kopyalandı!" : "Metni Kopyala"}
              </button>
              <pre className="whitespace-pre-wrap overflow-x-auto text-gray-700 font-mono leading-relaxed max-h-[400px]">
                {sampleNotice}
              </pre>
            </div>

            <div className="bg-yellow-500/10 p-8 rounded-3xl border-l-8 border-yellow-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <Info className="h-5 w-5 text-yellow-605 mr-2" />
                Noterden Çekmenin Önemi
              </h4>
              <p className="text-sm text-gray-750 leading-relaxed m-0">
                Bu ihtarnameyi doğrudan tarafların kendi aralarında yazıp imzalaması da geçerlidir. 
                Ancak muhatabın "Bana böyle bir evrak gelmedi", "İmza bana ait değil" gibi inkar senaryolarına sığınmasını engellemek amacıyla, bildirimin mutlaka noter huzurunda ve noter kuryesi vasıtasıyla tebliğ edilmesi davanın kazanılmasındaki en önemli unsurdur.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Fesih Bildirim Yöntemleri ve Karşılaştırma Tablosu</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Yöntem</th>
                    <th className="p-4">Geçerlilik Derecesi</th>
                    <th className="p-4">Olası Hukuki Riskler</th>
                    <th className="p-4 rounded-tr-2xl">Önerilen Durum</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Noter İhtarnamesi</td>
                    <td className="p-4 text-green-700 font-bold">En Yüksek (%100)</td>
                    <td className="p-4">Maliyet (Harç ücretleri)</td>
                    <td className="p-4">Tüm resmi bildirimler ve süre takipleri için.</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">İadeli Taahhütlü Posta</td>
                    <td className="p-4 text-blue-755 font-semibold">Yüksek (%80)</td>
                    <td className="p-4">Zarfın içeriğinin ispat edilememesi riski</td>
                    <td className="p-4">Düşük maliyet istendiğinde acil durumlarda.</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">E-Devlet Bildirimi</td>
                    <td className="p-4 text-accent font-semibold">Tescilli Değil</td>
                    <td className="p-4">Henüz tebligat entegrasyonu tamamlanmamış olabilir</td>
                    <td className="p-4">Kontrat e-devlet üzerinde kurulduysa ek teyit olarak.</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Sözlü / SMS / WhatsApp</td>
                    <td className="p-4 text-red-650 font-bold">Geçersiz sayılır</td>
                    <td className="p-4">Yasaya aykırılık nedeniyle doğrudan davanın reddi</td>
                    <td className="p-4">Sadece ön görüşme ve nezaket bildirimleri için.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Sözleşmesinin Erken Feshi ve Cezai Sorumluluklar</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Sözleşme süresi devam ederken haklı bir gerekçe olmaksızın kiralananın boşaltılması **"erken tahliye"** veya **"haksız fesih"** olarak adlandırılır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Yerleşik Yargıtay içtihatlarına göre, kiracı evi veya işyerini erken boşaltsa bile, mülk sahibinin evi yeniden kiraya verebileceği **makul süre (makul boş kalma süresi)** boyunca kira ödemeye devam etmekle yükümlüdür. 
              Bu makul süre, Yargıtay tarafından bölgedeki kiralama dinamiklerine göre genellikle **3 ay** olarak kabul edilmektedir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6 font-bold text-primary">
              Örnek: 1 yıllık mukavelenin 6. ayında anahtarı teslim edip çıkan kiracı, mülk sahibi evi ertesi gün kiraya veremediyse, ev boş kaldığı sürece maksimum 3 aya kadar kira bedelini, aidatlarını ve vergisini ödemekle yükümlü olmaya devam eder.
            </p>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Hukuki Güvenceli Kira Sözleşmenizi Saniyeler İçinde Doldurun</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Fesih koşulları net kararlaştırılmış, erken tahliye cezai maddelerini barındıran ve Türk Borçlar Kanunu standartlarına tam uyumlu profesyonel sözleşmeleri ücretsiz indirin.
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

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Kira kontratının sözlü olarak feshedilmesi mümkün müdür?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Kira sözleşmesinin kurulması sözlü yapılabiliyor olsa da, Borçlar Kanunu'nun 348. maddesi konut ve çatılı işyeri kira sözleşmelerinin fesih bildiriminin **yazılı şekilde** yapılmasını emretmektedir. Dolayısıyla, sözlü olarak yapılan fesih beyanları hiçbir yasal geçerlilik taşımaz ve tarafları yasal sorumluluklardan kurtarmaz.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Tebligat elime ulaşmadı diyen kiracıya karşı süreç nasıl işler?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  İhtarnamelerin noter kanalıyla çekilmesinin en büyük faydası budur. Tebliğ memuru (PTT), muhatabı adreste bulamazsa muhtarlığa tebligat bırakır ve kapıya ihbarname yapıştırır. Tebligat Kanunu 21. Madde uyarınca, bu andan itibaren resmi olarak tebliğ yapılmış kabul edilir ve süreler işlemeye başlar. Kiracının "okumadım" veya "elime geçmedi" savunması mahkemede geçersiz sayılır.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Erken tahliye eden kiracıdan ne kadar tazminat istenebilir?
                  </h4>
                  <span className="shrink-5 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Kiracının haklı sebep olmaksızın dönem bitmeden evi boşaltması halinde, ev sahibinin mülkü benzer koşullarla yeniden kiraya verebileceği makul süre boyunca (genellikle 3 ay) kira ödeme yükümlülüğü devam eder. Eğer ev daha erken (örneğin 1 ay içinde) başka birine kiralanırsa, kiracının sorumluluğu evin yeni kiralandığı tarih itibarıyla anında sona erer. Çifte kira tahsilatı yapılamaz.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 24 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Av. Meltem Kılıç</span>
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
            <Link to="/kira-borcunu-odemeyen-kiraci" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Borcunu Ödemeyen Kiracı</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira ödemelerinde gecikme olduğunda mülk sahiplerinin izleyebileceği yasal adımlar, icra ve tahliye davaları...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-sozlesmesinde-olmasi-gereken-maddeler" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesinde 10 Madde</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesi maddeleri nelerdir? Güvence barındıran yasal 10 madde ve kapalı kural örnekleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/isyeri-kira-sozlesmesi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">İşyeri Kira Sözleşmesi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">İşyeri kiralarında vergi, stopaj ve KDV paylaşımları, kira artışı ve 2026 yasal haklar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
