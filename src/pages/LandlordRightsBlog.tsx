import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, Users, ClipboardCopy, HelpCircle, Heart, Key, Home, Coins, Trash2, Calendar, Gavel, FileCheck, Eye, ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function LandlordRightsBlog() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Kopyalanabilir Ev Sahibi İhtarname Bildirim Taslağı
  const warningLetterTemplate = `İHTARNAME (KİRA BORCUNUN ÖDENMESİ VE TAHLİYE TALEBİ HAKKINDA)

İHTAR EDEN (KİRAYA VEREN):
Adı Soyadı      : [Ev Sahibinin Adı Soyadı]
T.C. Kimlik No  : [........................]
Adresi          : [Ev Sahibinin Tam Tebligat Adresi]

MUHATAP (KİRACI):
Adı Soyadı      : [Kiracının Adı Soyadı]
T.C. Kimlik No  : [........................]
Adresi          : [Kiralanan Taşınmazın Açık Adresi]

KONU            : Ödenmemiş Kira Bedellerinin Ödenmesi ve Aksi Halde Kira Sözleşmesinin Feshi ile Tahliye İhtarıdır.

AÇIKLAMALAR     :

1- Muhatap, yukarıda yazılı olan adreste bulunan taşınmazımda [Gün/Ay/Yıl] başlangıç tarihli kira sözleşmesi uyarınca kiracı olarak ikamet etmektedir.

2- Söz konusu sözleşme gereğince, muhatabın her ayın en geç ...'inci gününe kadar ödemesi gereken aylık kira bedeli net [........] TL'dir.

3- Ancak muhatap taraf; 
   - [Örn: 2026 Yılı Nisan Ayı] kira bedeli olan [........] TL'yi,
   - [Örn: 2026 Yılı Mayıs Ayı] kira bedeli olan [........] TL'yi,
   hiç ödememiş ya da eksik ödemiştir. Muhatabın şu an itibarıyla şahsıma toplam [........] TL muaccel kira borcu bulunmaktadır.

4- Türk Borçlar Kanunu Madde 315 uyarınca; işbu ihtarın muhataba tebliğ edildiği tarihten itibaren başlamak üzere, muhataba **30 (OTUZ) GÜNLÜK** yasal ödeme süresi tanınmıştır.

SONUÇ VE İSTEM  :
Yukarıda açıklanan nedenlerle, ödenmemiş olan toplam [........] TL kira borcunuzu, işbu ihtarnamenin tarafınıza tebliğinden itibaren **30 (otuz) gün** içerisinde, kira sözleşmesinde belirtilen banka hesabıma tam ve net olarak yatırmanızı; aksi takdirde yasal süre sonunda kira sözleşmesinin feshedilerek hakkınızda tahliye davası açılacağını, mülkten tahliye işlemlerine başlanacağını ve tüm yargılama harçları ile vekâlet ücretinin tarafınıza yükleneceğini ihtaren ve ihbaren bildiririm.

İHTAR EDEN (Kiraya Veren)
[Ev Sahibinin Adı Soyadı]
İmza: ...................

Tebliğ Tarihi: ... / ... / 2026`;

  const handleCopy = () => {
    navigator.clipboard.writeText(warningLetterTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.landlordRightsTitle')}
        description={t('blogPage.landlordRightsSeoDesc')}
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
            <Gavel className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Gayrimenkul Hukuku 2026</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8 text-white"
          >
            Ev Sahibinin Hakları 2026 — Bilmeniz Gereken Her Şey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Türk Borçlar Kanunu çerçevesinde kira artış hakları, yasal tahliye gerekçeleri, kendi mülkünü kullanma dinamikleri ve ev sahiplerini güvenceye alan yasal korumalar.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Kiralama ekosistemi, son yıllarda yaşanan ekonomik dalgalanmalar ve yasal düzenlemeler nedeniyle sürekli değişen hassas bir dengede ilerliyor. 
              Uzun süre uygulanan %25'lik kira artış sınırlamasının sona ermesi ve arabuluculuk şartının devreye alınması gibi tarihi gelişmelerin ardından, mülk sahipleri de kendi yasal haklarını net adımlarla bilmek istiyor. 
              Gerek yatırım amaçlı satın alınan konutların değerini ve gelirini korumak, gerekse kiracı ile hukuki zeminlerde sağlıklı diyaloglar kurmak için yasalara hakim olmak artık lüks değil, zorunluluktur. 
              Evinizi kiraya verirken ya da mevcut kiracınız ile yeni dönem anlaşmaları imzalarken elinizde hangi hukuki araçlar ve yasal güvenceler bulunuyor? 
              Türkiye'de güncel mevzuat kapsamında **ev sahibi hakları 2026** yılında nasıl şekillenmiştir? 
              Mülk sahiplerinin yasal kira artışı hakkı ne kadardır, tahliye şartları ve mülk kullanımı sınırları nasıl belirlenmiştir? 
              Tüm tarafları koruyacak en net yasal çözümleri, Yargıtay standardında ihtarname örneğimizi ve merak ettiğiniz yasal cevapları bu detaylı kılavuzda bir araya getirdik.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. 2026 Kira Artış Hakkı: %25 Sınırı Sonrası Yeni Kurallar</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bilindiği üzere, Türkiye'de konut kiralarında uygulanan geçici %25'lik sabit artış sınırı tamamen yürürlükten kalkmıştır. 
              Peki bu durum, ev sahiplerinin kirayı dilediği gibi, fahiş oranda artırabileceği anlamına mı gelir? 
              Kesinlikle hayır. Hukuk sistemimizde kira artışlarının yasal bir tavan limiti her zaman mevcuttur.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Türk Borçlar Kanunu (TBK) Madde 344 uyarınca; tarafların kira sözleşmelerinde yapacakları artış oranı, **Tüketici Fiyat Endeksi'ndeki (TÜFE) on iki aylık ortalamalara göre değişim oranını geçemez**. 
              Kira sözleşmesinde daha yüksek bir artış oranı yazılmış olsa bile, yasal üst tavan her zaman TÜFE on iki aylık ortalaması olarak uygulanır. 
              Ancak taraflar sözleşmede yasal oranın altında bir oran kararlaştırdıysa, kira o düşük oranda artırılmak zorundadır.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start font-sans">
              <Coins className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">5. Yıldan Sonra Kira Tespit Davası Hakkı</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Kira bedeli uzun yıllar boyunca sadece TÜFE oranında artırıldığında, evin kirası çevredeki emsal fiyatların çok gerisinde (güdük) kalabilir. 
                  Bu durumda ev sahibi, **kira ilişkisinin 5. yılı doldurmasının ardından** mahkemeye başvurarak yeni dönem kirasının emsal rayiç değerlere göre tespit edilmesini talep edebilir. 
                  Buna hukukta "Kira Tespit Davası" denir ve hakim bu davada TÜFE sınırlamasına bağlı kalmaksızın, bölgedeki gerçek piyasa değerlerine göre adil bir kira bedeli belirler.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Yasal Tahliye Gerekçeleri: Ev Sahibi Kiracıyı Nasıl Çıkarabilir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmeleri, Borçlar Kanunu’nun koruyucu yapısı nedeniyle kiracı lehine uzayan sözleşmelerdir. 
              Belirli süreli (örneğin 1 yıllık) bir kira kontratı bittiğinde, kiracı mülkten çıkmak istemiyorsa, ev sahibi "Sözleşme süresi bitti" diyerek kiracıyı evden çıkaramaz. Kontrat yasal olarak otomatik şekilde 1'er yıl uzar. 
              Ancak kanunun ev sahibine tanıdığı bazı **haklı tahliye nedenleri** bulunmaktadır. İşte **ev sahibi hakları 2026** kapsamında öne çıkan yasal gerekçeler:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">A) İhtiyaç Sebebiyle Tahliye (Gereksinim Nedeni)</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Ev sahibinin kendisi, eşi, altsoyu (çocukları, torunları), üstsoyu (anne, babası, büyükanne ve büyükbabası) veya kanunen bakmakla yükümlü olduğu diğer kişilerin konut ya da işyeri ihtiyacı varsa, tahliye davası açılabilir. 
              Bu ihtiyacın **samimi, gerçek ve zorunlu** olması gerekir. 
              İhtiyaç nedeniyle tahliye edilen bir mülk, yasal olarak **3 yıl boyunca** haklı bir sebep olmaksızın eski kiracıdan başkasına kiralanamaz; aksi takdirde eski kiracıya tazminat ödenmesi söz konusu olur.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">B) Kira Borcunun Ödenmemesi ve "İki Haklı İhtar" ile Tahliye</h3>
            <p className="text-gray-655 leading-relaxed mb-6">
              Kiracı, bir kira yılı içinde kirasını vaktinde ödemez ve ev sahibi de buna istinaden farklı aylara ait **iki adet haklı yazılı ihtarname** gönderirse; ev sahibi kira döneminin bitiminden itibaren 1 ay içinde tahliye davası açabilir. 
              Gönderilecek ihtarnamelerin hukuki usule tam uygun olması ve ispat şartı taşıması hayati derecede önemlidir.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">C) Yazılı Tahliye Taahhütnamesi Var Olması</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kiracının, mülke girdikten sonra (tercihen teslim tarihinden makul bir süre sonra) mülkü belirli bir tarihte boşaltacağını yazılı olarak taahhüt ettiği belgeye "Tahliye Taahhütnamesi" denir. 
              Eğer elinizde geçerli ve ıslak imzalı bir tahliye taahhüdü varsa; belirtilen tarihten itibaren **1 ay içerisinde** icraya başvurarak veya dava açarak kiracının tahliye edilmesini sağlayabilirsiniz.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">D) 10 Yıllık Uzama Süresinin Dolması (Gerekçesiz Tahliye)</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmelerinde 10 yıllık uzama süresi dolan ev sahipleri, **herhangi bir gerekçe veya neden göstermeksizin** kiracıyı tahliye etme hakkına sahiptir. 
              10 yıllık uzama süresinin bitiminden en az 3 ay önce kiracıya yazılı bir fesih bildirimi göndererek, yeni dönem başında mülkü boşaltmasını yasal olarak talep edebilirsiniz.
            </p>

            <div className="bg-yellow-500/10 p-8 rounded-3xl border-l-8 border-yellow-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center font-serif">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                Zorunlu Arabuluculuk Süreci
              </h4>
              <p className="text-sm text-gray-750 leading-relaxed m-0">
                Kira uyuşmazlıklarında (kira tespiti, tahliye veya alacak talepleri) doğrudan dava açılması yasal olarak mümkün değildir. 
                Dava açılmadan önce **zorunlu adliye arabuluculuk bürosuna** başvurulması şarttır. Arabuluculukta anlaşma sağlanamazsa dava yoluna gidilebilir.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Mülk Kullanımı ve İnceleme Hakları</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Mülk sahibi, evi kiracıya teslim ettikten sonra mülk üzerindeki mutlak kullanım hakkını kiracıya devretmiş olur. 
              Ancak ev sahibinin mülkün geleceğini korumak adına elinde bulundurduğu kullanım ve kontrol hakları mevcuttur:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">A) Mülkü Özenle Kullanma ve Eski Hale Getirme Talebi</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kiracı, mülkü "iyi ve özenli bir şekilde" kullanmak zorundadır. Mülke kalıcı zararlar veremez, duvarları yıkamaz ya da oda yapısını izinsiz değiştiremez. 
              Ev sahibi, kira sözleşmesi sonunda mülkün olağan dışı eskimeler ve zararlar bakımından tazminini talep edebilir ya da mülkün eski haline getirilmesini isteyebilir. 
              Hasarların onarım bedeli kiracının teslim ettiği depozitodan kesilebilir.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">B) Evi Makul Zamanlarda Gösterme Hakkı</h3>
            <p className="text-gray-655 leading-relaxed mb-6">
              Ev sahibi mülkü satmak veya kontrat bitiminde başka bir kiracıya kiralamak istiyorsa, kiracı evin gösterilmesine engel olamaz. 
              Kiracı; **makul gün ve saatlerde**, önceden bildirim yapılması şartıyla potansiyel alıcı veya kiracı adaylarının evi gezmesine müsaade etmekle yükümlüdür.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Mülk Sahibini Güvenceye Alan 4 Kritik Yasal Koruma</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Ev sahipleri kiralama başlangıcında doğru hukuki adımları atarak kendilerini olası uyuşmazlıklara karşı tam garanti altına alabilirler. 
              İşte uygulamanız gereken 4 hayati yasal zırh:
            </p>

            <ul className="space-y-4 text-gray-650 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Müteaddit Kira Yılı İçin "Kefil" Ekleyin:</strong> Kira kontratına mutlaka "müteselsil kefil" sıfatıyla üçüncü bir güvenilir kişiyi dahil edin. 2026 Borçlar Kanunu standartlarına göre kefilin el yazısıyla azami kefalet limitini ve tarihini yazması zorunludur. Kiracı kirayı ödemezse doğrudan kefilden icra ile tahsil edebilirsiniz.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Depozitoyu Yasal Vadeli Banka Hesabına Yatırın:</strong> TBK Madde 342 uyarınca, depozito doğrudan ev sahibinin şahsi hesabına değil, kiracı adına açılan ve ev sahibinin onayı olmadan çekilemeyen ortak bir vadeli mevduat hesabına yatırılmalıdır. Bu sayede faiz kaybı önlenir ve iki tarafın da hakkı korunur.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Abonelikleri Kiracı Üzerine Devredin:</strong> Elektrik, su, doğal gaz ve internet gibi faturalı abonelikleri kesinlikle kendi üzerinizde bırakmayın. Kiracının mülke taşınmadan önce bu abonelikleri kendi adına açtırmasını yasal şart koşun. Böylece kiracının ödemediği faturalar nedeniyle icralık durumlarla karşılaşmazsınız.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Ayrıntılı Demirbaş ve Fotoğraf listesi Tanzim Edin:</strong> Evin teslim anındaki durumunu (boya rengi, parkelerin durumu, aktif eşyalar) detaylandırıp fotoğraflarını çekerek sözleşme eki (Zeyilname) haline getirin. Tahliye anında hak kaybını %100 önlersiniz.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6 font-serif">Kira Artış ve Tahliye Hakları Karşılaştırma Matrisi</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Yasal Hak Türü</th>
                    <th className="p-4">Geçerlilik ve Zamanlama</th>
                    <th className="p-4 rounded-tr-2xl">Yasal Tavan / Hak Sınırı</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Yıllık Olağan Kira Artışı</td>
                    <td className="p-4">Her yeni kira dönemi başlangıcında</td>
                    <td className="p-4 text-green-700 font-bold">TÜFE 12 Aylık Ortalama Değişim Oranı (Yasal Tavan)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Kira Tespit Davası</td>
                    <td className="p-4">5. kira yılı doldurulduktan sonra</td>
                    <td className="p-4 text-green-700 font-bold">TÜFE sınırı olmaksızın Bölgesel Emsal Rayiç Değeri</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Gerekçesiz Serbest Tahliye</td>
                    <td className="p-4">10 yıllık uzama süresi sonunda</td>
                    <td className="p-4 text-green-705 font-semibold font-sans">Sebebini açıklamaksızın 3 ay önceden bildirimle tahliye</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Gereksinim / İhtiyaç Tahliyesi</td>
                    <td className="p-4">Kira sözleşme süresinin sonunda</td>
                    <td className="p-4 text-red-650 font-semibold">Kendisi veya birinci derece yakınların somut ihtiyacı</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Çözüm: Sözleşmeyi Yasaya Uygun Oluşturmak</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira uyuşmazlıklarının ezici çoğunluğu, kiralama başında internetten indirilen eski, kopyala-yapıştır formatındaki güvencesiz sözleşme taslaklarından kaynaklanmaktadır. 
              Ev sahibi olarak haklarınızı eksiksiz korumak, yasal tebligat sürelerini ve kira artış oranlarını tam kontrol altına almak için profesyonel bir kira sözleşmesi tanzim etmeniz gerekir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Platformumuz, Türk Borçlar Kanunu standartlarına birebir uyumlu, kefalet maddeleri ve tahliye ihtarname düzenekleri tam entegre edilmiş, kişiselleştirilmiş kira sözleşmelerini adımlar halinde saniyeler içinde ücretsiz üretmenizi sağlar.
            </p>

            {/* Kopyalanabilir Ev Sahibi Evrak Paneli */}
            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Ev Sahibi Haklı İhtarname Bildirim Taslağı</h3>
            <p className="text-gray-655 leading-relaxed mb-4">
              Aylık kira borcunu vaktinde yatırmayan kiracınıza yasal takip başlatabilmeniz için Yargıtay standartlarında hazırladığımız örnek ihtarname taslağını ücretsiz kopyalayabilirsiniz:
            </p>

            <div className="bg-gray-100 hover:bg-gray-150/50 transition-colors p-8 rounded-[40px] border border-gray-200 my-10 font-mono text-sm relative">
              <button 
                onClick={handleCopy}
                className="absolute top-6 right-6 flex items-center bg-primary text-white hover:bg-black font-sans font-bold text-xs py-2 px-4 rounded-xl shadow transition-colors"
              >
                <ClipboardCopy className="h-4 w-4 mr-2" />
                {copied ? "Kopyalandı!" : "Metni Kopyala"}
              </button>
              <pre className="whitespace-pre-wrap overflow-x-auto text-gray-750 font-mono leading-relaxed max-h-[350px]">
                {warningLetterTemplate}
              </pre>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl font-sans">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileCheck className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Yasal Haklarınızı Şansa Bırakmayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  2026 yılı güncel kiraya veren yasal korumaları ve Borçlar Kanunu standartlarına tam uyumlu profesyonel kira sözleşmesini dakikalar içinde hazırlayın.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Şimdi Yasal Sözleşme Üret
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
                    Kira sözleşmesinde yazan artış oranından daha azını ödeyen kiracı tahliye edilebilir mi?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Evet. Eğer kiracı sözleşmede kararlaştırılan ve yasal sınır olan TÜFE 12 aylık ortalamayı geçmeyen artış oranını uygulamayıp kirayı eski bedelden yatırmaya devam ederse; yatırılan eksik tutar kira borcu olarak kabul edilir. Ev sahibi, eksik kira borcu nedeniyle kiracıya 30 günlük ihtarname çekebilir ve ödeme yapılmazsa tahliye süreci başlatabilir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Ev sahibinin kira miktarını keyfi olarak artırma hakkı var mıdır?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Hayır. Kiralama ilişkisinin ilk 5 yılında ev sahibi kira miktarını hiçbir şekilde keyfi veya piyasa fiyatlarının yükseldiğini iddia ederek TÜFE on iki aylık değişim ortalamasının üzerinde artıramaz. Ancak 5. kira yılı doldurulduktan sonra mahkemeden emsal piyasa şartlarına göre objektif kira tespiti talep edebilir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Kiracı eve aidat veya ortak gider borcu takarsa ne yapılabilir?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Borçlar Kanunu uyarınca apartman aidatı, ısıtma gideri ve temizlik gibi tali masraflar kiracının yasal borcudur. Eğer kiracı aidat giderlerini ödemezse; ev sahibi bu borcu kiracıya yazılı ihtar göndererek **30 gün içinde** ödemesini isteyebilir. Kiracı aidatı 30 günde ödemezse, kira borcunu ödememiş gibi yasal "tahliye ve icra" tehlikesi ile karşı karşıya kalır.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 4 Haziran 2026</span>
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
            <Link to="/kira-sozlesmesinde-olmasi-gereken-maddeler" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesinde 10 Madde</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesinde olması gereken 10 koruyucu madde, özel klozlar ve tarafları koruma altına alan yasal kurallar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-sozlesmesiz-oturmak-riskli-mi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesiz Oturmak</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesi tanzim etmeden bir gayrimenkulde yaşamanın getireceği yasal riskler, ispat zorlukları ve tehlikeler...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/ortak-kiraci-sozlesmesi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Ortak Kiracı Sözleşmesi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Birden fazla kiracı içeren kontratların yasal boyutu, müteselsil borçluluk, ev arkadaşı sözleşmesi kuralları...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
