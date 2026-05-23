import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, Gavel, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, Award, Clock, Coins, FileWarning, ShieldAlert, BadgeAlert, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function UnpaidRentBlog() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.unpaidRentTitle') + " — 2026 Hukuki Yol Haritası"}
        description={t('blogPage.unpaidRentSeoDesc')}
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
            <span className="text-sm font-bold uppercase tracking-widest">Hukuk & Uyuşmazlık Rehberi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.unpaidRentTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Kira ödemelerinde gecikme yaşandığında ev sahibi ve kiracı arasındaki hukuki adımlar. İhtarname, icra takibi, tahliye davası ve arabuluculuk süreçleri.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Gayrimenkul sektöründe karşılaşılan en sancılı ihtilafların başında, ödeme yükümlülüğünün yerine getirilmemesi gelmektedir. 
              <strong>Kira borcu kiracı</strong> tarafından zamanında veya hiç ödenmediğinde, mülk sahibi ciddi nakit akış sorunlarıyla karşılaşırken; süreci hatalı yönetmek yasal hakların kaybına yol açabilmektedir. 
              Borçlar Kanunu mülk sahiplerine çeşitli tahliye ve tahsilat imkanları tanımış olsa da, bu mekanizmaların işletilmesi sıkı şekil şartlarına ve sürelere tabidir. 
              Öfkeli adımlar atmak yerine, hukuka uygun şekilde hareket etmek hem zamandan tasarruf sağlar hem de haklılığınızı tescil ettirir. 
              Peki, birikmiş <strong>kira borcu kiracı</strong> tarafından ödenmediğinde yasal süreç nasıl başlatılır? Adım adım ihtar, icra takibi ve tahliye davası yöntemlerini tüm yasal detaylarıyla inceliyoruz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Giriş: Borçlar Kanunu Kapsamında Kiracının Asli Yükümlülüğü</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              6098 sayılı Türk Borçlar Kanunu (TBK) Madde 313 uyarınca; kiracının asli borcu, kararlaştırılan kira bedelini ve gerekiyorsa yan giderleri (aidat, ısıtma, ortak alan vb.) zamanında ödemektir. 
              Ödeme zamanı sözleşmede açıkça kararlaştırılmamışsa, her ayın sonunda ve en geç kira süresinin bitiminde ödenmesi yasal kuraldır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Sözleşmede belirlenen ödeme vadesi (örneğin "Her ayın 1'i ile 5'i arası") geçtiği an borç muaccel olur. 
              Ancak mülk sahibi ödeme yapılmadığı gerekçesiyle kiracıyı doğrudan kapı dışarı edemez veya mülkün kilidini değiştiremez. 
              Fiziki müdahaleler Türk Ceza Kanunu kapsamında "konut dokunulmazlığını ihlal" ve "hakkı olmayan yere tecavüz" gibi ağır suçları doğurur. 
              Mülk sahibinin izlemesi gereken yasal basamaklar şunlardır:
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Yasa Ne Diyor? (TBK Madde 315)</h4>
                <p className="text-gray-600 m-0 leading-relaxed">
                  Kiracı, kiralananın tesliminden sonra muaccel olan kira bedelini veya yan gideri ödeme borcunu ifa etmezse; kiraya veren, kiracıya yazılı bir süre verip bu süre içinde de ifa etmeme durumunda, sözleşmeyi feshedeceğini bildirebilir. 
                  Bu süre konut ve çatılı işyeri kiraları için **en az otuz gündür**.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Adım: Noter Aracılığıyla Haklı İhtarname Çekilmesi</h2>
            <p className="text-gray-655 leading-relaxed mb-6">
              Ödenmeyen <strong>kira borcu kiracı</strong> için temerrüt (gecikme) oluşturur. 
              Yasal takip başlatmanın en klasik ve ilk yöntemi noter vasıtasıyla ihtarname göndermektir. 
              Sıradan bir SMS, WhatsApp veya e-posta mesajı, ispat aracı olarak kabul edilse de temerrüt tahliyesine yasal zemin hazırlamak açısından noter ihtarnamesinin yerini tutamaz.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Temerrüt İhtarnamesinin Taşıması Gereken Şartlar</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Noterden çekilecek ihtarnamenin hukuken geçerli olması ve tahliye davasına temel oluşturabilmesi için şu hususları içermesi mecburidir:
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Net Tutar Belirtilmelidir:</strong> Hangi aya ait olduğu ve ne kadarlık bir borç olduğu (Örn: "2026 yılı Nisan ayı net kira borcu olan 15.000 TL") açıkça rakamla yazılmalıdır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>30 Günlük Süre Tanınmalıdır:</strong> İhtarnamenin tebliğ edildiği tarihten itibaren başlamak üzere, borcun ödenmesi için konutlarda **en az 30 gün** yasal süre verilmelidir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Fesih ve Tahliye İhtarı:</strong> Metinde "Söz konusu tutarın 30 gün içinde ödenmemesi halinde kira sözleşmesinin feshedileceği ve tahliye davası açılacağı" ihtar olunmalıdır.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">İki Haklı İhtar Yoluyla Sözleşme Sonu Tahliye</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Eğer kiracı, bir kira yılı veya dönemi içerisinde iki farklı ayın kirasını geç öder ve her iki gecikme için de noterden usulüne uygun haklı ihtarname alırsa; mülk sahibi kira döneminin bitiminden itibaren **1 ay içinde** Sulh Hukuk Mahkemesi’nde doğrudan "İki Haklı İhtar Nedeniyle Tahliye Davası" açabilir. 
              Bu dava türünde, kiracı sonradan borcunu ödemiş olsa dahi, iki kez ihtar edilerek ödeme disiplinini bozduğu için tahliye kararı verilmesi neredeyse kesindir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Adım: Örnek No: 13 Tahliye Talepli İcra Takibi başlatılması</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Noterden ihtar çekmek sadece mahkemeye zemin hazırlar, borcu doğrudan zorla tahsil etmez. 
              Hem birikmiş parayı icra yoluyla tahsil etmek hem de en hızlı şekilde tahliye hakkı kazanmak isteyen mülk sahipleri için en etkili yol **Örnek 13 İlamsız İcra Takibi** başlatmaktır.
            </p>

            <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/10 my-10 font-sans">
              <span className="text-xs font-black uppercase tracking-widest text-accent mb-4 block">İcra Takibinin İşleyiş Süreci</span>
              <div className="space-y-4 text-base text-gray-750">
                <div className="flex items-center"><Landmark className="h-5 w-5 text-accent mr-3 shrink-0" /> <strong>Mülk Sahibi İcra Müdürlüğü'ne başvurarak ödeme emri düzenletir.</strong></div>
                <div className="flex items-center"><Clock className="h-5 w-5 text-accent mr-3 shrink-0" /> <strong>Kiracıya gönderilen tebligatla birlikte süreler başlar.</strong></div>
                <div className="flex items-center"><FileWarning className="h-5 w-5 text-accent mr-3 shrink-0" /> <strong>Yasal Süreler: İtiraz için 7 gün, Ödeme için 30 gün.</strong></div>
              </div>
            </div>

            <p className="text-gray-650 leading-relaxed mb-6">
              Ödeme emri kiracıya ulaştığı andan itibaren iki önemli hak düşürücü süre başlar:
            </p>
            <ol className="space-y-4 text-gray-650 mb-8 list-decimal pl-6 font-sans text-base">
              <li><strong>7 Günlük İtiraz Süresi:</strong> Kiracı borcu olmadığını, borcu zaten ödediğini ya da kira miktarının yanlış olduğunu düşünüyorsa 7 gün içinde icra dairesine giderek itiraz edebilir. İtiraz takibi durdurur.</li>
              <li><strong>30 Günlük Ödeme Süresi:</strong> Kiracı takibe itiraz etmeyecekse, tebliğden itibaren en geç 30 gün içerisinde borcun tamamını, faizi ve icra giderleriyle birlikte icra dosyasına ödemek zorundadır.</li>
            </ol>

            <p className="text-gray-650 leading-relaxed mb-6">
              Eğer kiracı 7 gün içinde itiraz etmez ve 30 günün sonunda da parayı icra dairesine yatırmazsa, mülk sahibi İcra Hukuk Mahkemesi'ne başvurarak **Tahliye ve Alacağın Tahsili için Haciz kararı** talep etme hakkı kazanır. 
              Bu dava, olağan tahliye davalarına göre çok daha hızlı sonuçlanır.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Adım: Zorunlu Arabuluculuk Süreci (2026 Güncel Uygulaması)</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Eylül 2023'ten bu yana yürürlükte olan ve 2026 yılında da kararlılıkla sürdürülen mevzuat uyarınca; kira ilişkilerinden kaynaklanan uyuşmazlıklarda davanın açılabilmesi için öncelikle **Arabuluculuk** kurumuna müracaat edilmesi hukuki bir zorunluluktur.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Arabuluculuk Olmadan Dava Açılabilir Mi?</strong> 
              Hayır. Mahkemeye sunulan dava dilekçesinin ekine arabuluculuk son tutanağının aslı eklenmezse davanız usulden (başvuru şartı yokluğu sebebiyle) doğrudan reddedilir. 
              Mülk sahibi adliyelerdeki Arabuluculuk Bürosu'na ücretsiz şekilde başvurarak süreci tetikler. 
              Arabulucu tarafları müzakerelere çağırır. Taraflar borcun yapılandırılması veya tahliye takvimi üzerinde uzlaşabilirlerse bu karar ilan niteliğindedir. 
              Anlaşma sağlanamaması halindeyse arabulucu "anlaşmazlık tutanağı" tutar ve artık dava açma hakkınız doğar.
            </p>

            <div className="bg-red-500/10 p-8 rounded-3xl border-l-8 border-red-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <ShieldAlert className="h-5 w-5 text-red-500 mr-2" />
                Arabuluculuk İstisnası: İcra Hukuk Davaları
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed m-0">
                Tahliye talepli icra takibine (Örnek 13) istinaden açılacak olan "İcra Hukuk Mahkemesi Tahliye Davası" bir takip hukuku davası olduğu için **arabuluculuk şartına tabi değildir**. 
                Dolayısıyla icra takibinde 30 gün geçmesine rağmen para ödenmemişse doğrudan İcra Hukuk Mahkemesi'nde arabulucu şartı aramadan hızlı dava açılabilir.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Adım: Sulh Hukuk Mahkemesinde Tahliye Davası</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira borcunun ödenmemesi ve ihtara rağmen ödememe halinin sabit olması dolayısıyla açılan tahliye davaları Sulh Hukuk Mahkemesi'nde görülür.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              <strong>Yargılama Süreci:</strong> 
              Sulh Hukuk Mahkemesi'nde mülk sahibi, kiracının ihtara veya ödeme emrine rağmen 30 gün içinde borcunu ödemediğini ispatlar (Banka dökümleri, kontrat örneği vb.). 
              Mahkeme kiracının haklı bir savunması olmadığını (mücbir sebep vb.) gördüğünde tahliye kararı verir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Kararın İcrası ve Fiili Tahliye:</strong> 
              Mahkeme kararının kesinleşmesi beklenmeden tahliye işlemi icra müdürlüğü vasıtasıyla yerine getirilebilir. 
              Tahliye karanını alan mülk sahibi, kararı icra dairesine sunarak kiracıya mülkü tahliye etmesi için 10 gün daha süre tanıtır. 
              Bu sürenin sonunda hala boşaltılmayan mülk, icra memurları ve gerektiğinde çilingir yardımıyla polis eşliğinde fiili olarak boşaltılarak mal sahibine teslim edilir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Alacağı ve Tahliye Karşılaştırmalı Yasal Süreç Tablosu</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Aşama / Yöntem</th>
                    <th className="p-4">Gerekli Süreler</th>
                    <th className="p-4 rounded-tr-2xl">Sağladığı Avantajlar</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Noter İhtarnamesi</td>
                    <td className="p-4">30 gün ödeme süresi</td>
                    <td className="p-4 text-green-700 font-semibold">Tarih ispatı sağlar, iki haklı ihtara taban hazırlar.</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">İcra Takibi (Örnek 13)</td>
                    <td className="p-4">7 gün itiraz, 30 gün ödeme süresi</td>
                    <td className="p-4 text-green-700 font-semibold">Doğrudan haciz ve hızlı tahliye davası açma imkanı verir.</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Zorunlu Arabuluculuk</td>
                    <td className="p-4">Ortalama 3-4 hafta sürer</td>
                    <td className="p-4 text-green-700 font-semibold">Davasız bir şekilde uzlaşı, hızlı tahliye protokolü.</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Tahliye Davası (Sulh Hukuk)</td>
                    <td className="p-4">Mahkeme yoğunluğuna göre değişir</td>
                    <td className="p-4 text-green-700 font-semibold">Kesin tahliye ilamı verir, fiili tahliyeyi tetikler.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Mülk Sahiplerinin ve Kiracıların Yapmaması Gereken 4 Hatalı Davranış</h2>
            <ul className="space-y-4 text-gray-650 mb-12 list-decimal pl-6 font-sans text-base">
              <li><strong>Fiziki Engellemeler:</strong> Kiracının elektrik, su veya doğalgaz aboneliklerini iptal ettirmek konut dokunulmazlığını ihlal ve hakkı olmayan yere tecavüz suçunu doğurur.</li>
              <li><strong>Tehdit ve Hakaret:</strong> Sözlü uyarılarda bulunurken tehditkar ifadeler kullanmak ceza davalarında aleyhinize delil olarak yer alır.</li>
              <li><strong>Eksik Tutar Beyanları:</strong> İcra takibi başlatırken borç miktarını kontrat harici veya ispat edilemeyecek masraflarla (depozito, gayriresmi paralar) şişirirseniz takibe haklı itiraz hakkı doğar.</li>
              <li><strong>Yazısız Sözleşme Değişiklikleri:</strong> Kiracının "Bu ay kiranın yarısını elden verdim" savunmalarına karşı elden alınan paralar için yazılı makbuz verilmemesi mülk sahibinin alacağını talep etmesini zorlaştırır.</li>
            </ul>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <Gavel className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Hukuken Tam Korunaklı Kira Sözleşmesi Hazırlayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Olası ödememe durumlarında doğrudan icra yoluna gidebileceğiniz, yasal uyuşmazlıklara karşı haklarınızı güvenceye alan profesyonel kira sözleşmelerini ücretsiz doldurun.
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
                  <h4 className="text-lg font-bold text-primary m-0">Kira borcunu ödemeyen kiracı ödemesini yaparsa tahliye davası düşer mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  İcra takibinde veya noter ihtarnamesinde tanınan 30 günlük yasal süre içinde borcun tamamı faizleriyle birlikte ödenirse mülk sahibinin temerrüt nedeniyle anında tahliye davası açma hakkı sona erer. Ancak ödeme yasal sürenin sonrasında yani 31. gün yapıldıysa, kiracı borcu kapatmış olsa bile mal sahibi tahliye davasını sürdürebilir ve tahliye kararı alabilir. Ayrıca bu durum "iki haklı ihtar" şartlarından birini oluşturur.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kira borcu ödenmediğinde kefilden doğrudan tahsilat yapılabilir mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Sözleşmede yer alan kefalet türüne göre değişir. Eğer kefalet "Adi Kefalet" ise öncelikle asıl borçluya (kiracıya) gidilmesi ve borcun tahsil edilememesi aranır. Fakat kefil "Müteselsil Kefil" sıfatıyla imzaladıysa, mülk sahibi kiracı ile kefile aynı anda ya da dilerse doğrudan sadece müteselsil kefile icra takibi ve ihtar yönelterek borcun tamamını tahsil edebilir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kiracı sadece aidatı ödemezse de tahliye davası açılabilir mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Evet. Borçlar Kanunu kapsamında "yan giderler" (aidat, ortak gider vb.) de kira bedelinin bir parçası kabul edilir. Kiracının ortak alan aidat tutarlarını ödememesi, kira bedelini ödememesiyle eşdeğer temerrüt şartlarını doğurur. Aidat borcunun ödenmesi üzerine de 30 günlük ihtar yollanarak ödenmediğinde tahliye süreci başlatılabilir.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 23 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Av. Kemal Özkan</span>
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
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesi maddeleri nelerdir? Güvence barındıran yasal 10 madde ve kapalı kural örnekleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/isyeri-kira-sozlesmesi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">İşyeri Kira Sözleşmesi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">İşyeri kiralarında vergi, stopaj ve KDV paylaşımları, kira artışı ve 2026 yasal haklar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/damga-vergisi-kira-hesaplama" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Damga Vergisi Hesaplama</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesinde damga vergisi nedir, kim tarafından ve nasıl ödenir? 2026 güncel oranlar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
