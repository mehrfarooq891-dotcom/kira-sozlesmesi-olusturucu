import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, Award, Clock, ClipboardCopy, Info, HelpCircle, Key, Eye, ClipboardCheck, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function TenantHandoverBlog() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Kopyalanabilir Anahtar Teslim Tutanağı Taslağı
  const handoverTemplate = `ANAHTAR TESLİM ve BORÇSUZLUK TUTANAĞI

TESLİM EDİLEN TAŞINMAZ GAYRİMENKUL
Adresi                   : [Mahalle, Sokak, Bina No, Daire No, İl/İlçe]
Kira Başlangıç Tarihi    : ....../....../20...
Kira Bitiş (Teslim) Tar. : ....../....../2026

TARAFLAR
KİRAYA VEREN / MALİK     : [Ad Soyad, T.C. Kimlik No, İletişim, Adres]
KİRACI                   : [Ad Soyad, T.C. Kimlik No, İletişim, Adres]

AÇIKLAMALAR ve TESLİM ŞARTLARI:

1- Yukarıda açık adresi belirtilen taşınmaza ilişkin, taraflar arasında akdedilmiş olan ....../....../20... başlangıç tarihli kira sözleşmesi, kiracının taşınmazı boşaltması ve anahtarları teslim etmesi suretiyle tarafların karşılıklı rızasıyla bugün itibarıyla sona erdirilmiştir.

2- Kiracı, taşınmazın fiziki anahtarlarını (toplam ...... adet) mal sahibine eksiksiz teslim etmiştir. Bu aşamadan itibaren taşınmazın zilyetliği tamamen kiraya verene geçmiştir.

3- HASAR TESPİTİ ve DEMİRBAŞ DURUMU:
   Taşınmaz ve ekindeki demirbaşlar (Kombi, ankastre ürünler, kapılar vb.) kiraya veren tarafından yerinde incelenmiş olup, aşağıda belirtilen istisnalar dışında gayrimenkulün esasa müteallik bir hasar barındırmadığı, temiz ve özenle kullanma borcuna uygun teslim edildiği onaylanmıştır.
   İstisnai hususlar (Eğer varsa): ................................................................

4- BORÇ DURUMU:
   Kiracının teslim tarihine kadar olan tüm kira bedelleri, apartman ortak gider / aidat borçları ile elektrik, su, doğalgaz vb. abonelik fatura borçları tamamen kapatılmıştır. Tarafların birbirlerinden bu kalemlere ilişkin hiçbir alacağı kalmamıştır.

5- DEPOZİTO İADESİ:
   Mal sahibi, teslim aldığı gayrimenkulde olağan dışı kullanım hasarı veya borç bulunmadığını beyan ederek, kiracının başlangıçta vermiş olduğu [Tutar] depozitonun tamamını kiracının [IBAN No] numaralı banka hesabına en geç 3 iş günü içinde iade edeceğini kabul ve taahhüt eder.

İşbu tutanak iki nüsha olarak tarafların hür iradeleriyle imzalanmış ve yürürlüğe girmiştir. ....../....../2026

MAL SAHİBİ (İmza)                   KİRACI (İmza)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(handoverTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.tenantHandoverTitle') + " — 2026 Güncel Haklar & Örnek Tutanak"}
        description={t('blogPage.tenantHandoverSeoDesc')}
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
            <Key className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Çıkış & Teslim Kılavuzu</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.tenantHandoverTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Kira ilişkisini sorunsuz sonlandırmak ve depozitoyu kuruşu kuruşuna geri almak için yasal tahliye adımları. Fotoğraf tescili, hasar tespit kuralları ve kopyalanabilir teslim tutanağı.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Kira sözleşmeleri, sadece bir eve yerleşirken değil, o evden ayrılırken de her iki tarafın haklarını koruyan yasal çerçevelerdir. 
              Pek çok kiracı için taşınma süreci son derece streslidir; ancak yeni evin heyecanına kapılıp eski evi teslim ederken yapılan dikkatsizlikler, uzun vadede can sıkıcı hukuki uyuşmazlıklara ve ciddi maddi kayıplara neden olabilir. 
              Özellikle mülk sahipleri ile yaşanan "çıkış ihtilaflarının" büyük bir kısmı usulüne uygun yapılmayan <strong>kiracı ev teslimi</strong> süreçlerinden kaynaklanmaktadır. 
              Depozitonun zamanında iade edilmemesi, sonradan uydurulan hasar faturaları veya anahtarı teslim etmenize rağmen devam eden kira borçları gibi krizlerin önüne geçebilmek tamamen sizin elinizde. 
              Türk Borçlar Kanunu’nun 330. ve devamındaki maddeleri kiracının teslim borçlarını kurala bağlarken, haklarınızı koruyacak yasal boşlukları da netleştirmiştir. 
              Peki, bir kiracı evden ayrılırken depozitosunu eksiksiz nasıl kurtarır? <strong>Kiracı ev teslimi</strong> esnasında atılması gereken yasal adımlar, fotoğraf ve videoların hayati önemi, tarafsız hasar analizi ve resmi imzasız geçilemeyecek anahtar teslim tutanağının tüm detayları bu rehberimizde!
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Hasar Tespiti: Olağan Kullanım ile Hasar Arasındaki Yasal Sınır</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira ilişkisi bittiğinde, kiracı kiraladığı şeyi teslim aldığı durumda geri vermekle yükümlüdür. 
              Ancak Türk Borçlar Kanunu m. 334 gereğince, kiracı sözleşmeye uygun olağan kullanımdan dolayı meydana gelen eskime ve yıpranmalardan sorumlu tutulamaz.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Buradaki felsefi sınır şudur: Evde 3 yıl oturan birinin parkelerindeki hafif matlaşma, duvarların zamanla kirlenmesi, jaluzi iplerinin gevşemesi veya musluk contalarının yıpranması "olağan kullanım" (yıpranma) kapsamındadır ve bunların yenilenme bedeli depozitodan kesilemez. 
              Buna mukabil kırık bir oda kapısı, parkelerdeki derin sigara yanıkları, kasten sökülmüş mutfak dolapları veya kırılmış bir banyo lavabosu "olağan dışı hasar" sınıfına girer ve kiracı bunun tazminini yapmak zorundadır.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Yasa Ne Diyor? (TBK m. 334)</h4>
                <p className="text-gray-600 m-0 leading-relaxed font-sans text-sm">
                  Borçlar Kanunu uyarınca; kiracının sözleşmeye aykırı kullanımı sebebiyle oluşan hasarların giderilmesi talep edilebilir. 
                  Ancak mülk sahibi bu hasarları, teslim alma anından itibaren **en geç birkaç gün içinde** yazılı olarak bildirmek zorundadır. 
                  Aksi takdirde evi o haliyle kabul etmiş sayılır (gizli ayıplar hariç).
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Görsel Kanıtların Gücü: Fotoğraf ve Video Çekiminin Önemi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Kiracı ev teslimi</strong> yaparken elinizdeki en büyük ve sarsılmaz kalkan, görsel kanıtlardır. 
              Evin tamamen boşaltılmasından ve temizliğinden hemen sonra, evdeki tüm odaları, zeminleri, pencereleri, banyoyu ve özellikle mutfak tezgahı ile beyaz eşyaları yüksek çözünürlüklü fotoğraflarla ve kesintisiz geniş açılı bir video kaydıyla arşivleyin.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              Fotoğrafların çekim tarihlerinin dijital metadata (EXIF) bilgilerinde tescilli olmasına dikkat edin. 
              Hatta imkanınız varsa fotoğraf çekerken o günün ulusal bir gazetesini kadraja sokmak veya e-devletten tarihli bir belge ekranını göstermek, kanıtın doğruluğunu şüphe götürmez kılar. 
              Olası bir dava durumunda mahkemeye veya icra dairesine sunacağınız bu görsel deliller, ev sahibinin "Evimi harabeye çevirip kaçmışlar" şeklindeki yersiz iddialarını saniyeler içinde çürütür.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Hayat Kurtaran Belge: Anahtar Teslim Tutanağı</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Evden çıkarken eşyaları kamyona yükleyip anahtarı apartman görevlisine bırakmak veya posta kutusuna atıp gitmek, bir kiracının yapabileceği en ölümcül hukuki hatadır. 
              Zira anahtar teslim edilmediği sürece kira ilişkisi yasal olarak devam eder ve ev sahibi siz fiilen oturmasanız dahi aylar boyu adınıza kira borcu tahakkuk ettirebilir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Evin teslim edildiğini ispatlamanın tek yasal yolu, ıslak imzalı bir **"Anahtar Teslim ve Borçsuzluk Tutanağı"** düzenlemektir. 
              Bu belge ile ev sahibi anahtarları aldığını, evi kontrol ettiğini ve taraflar arasında herhangi bir uyuşmazlığın bulunmadığını yazılı beyan etmiş olur. 
              Eğer ev sahibi tutanak imzalamaktan kaçınırsa, anahtarı noter vasıtasıyla tebliğ etmek (tevdi mahalli tayini) en güvenilir alternatif yoldur.
            </p>

            {/* Kopyalanabilir Tutanak Kutusu */}
            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Ücretsiz Anahtar Teslim Tutanağı Şablonu</h3>
            <p className="text-gray-655 leading-relaxed mb-4">
              Özenle hazırlanmış yasal geçerliliğe sahip aşağıdaki şablonu kopyalayıp yazdırarak, çıkış gününde ev sahibinizle birlikte imza altına alabilirsiniz:
            </p>

            <div className="bg-gray-100 hover:bg-gray-150/50 transition-colors p-8 rounded-[40px] border border-gray-200 my-10 font-mono text-sm relative">
              <button 
                onClick={handleCopy}
                className="absolute top-6 right-6 flex items-center bg-primary text-white hover:bg-black font-sans font-bold text-xs py-2 px-4 rounded-xl shadow transition-colors"
              >
                <ClipboardCopy className="h-4 w-4 mr-2" />
                {copied ? "Kopyalandı!" : "Metni Kopyala"}
              </button>
              <pre className="whitespace-pre-wrap overflow-x-auto text-gray-750 font-mono leading-relaxed max-h-[400px]">
                {handoverTemplate}
              </pre>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Depozito İade Süreci ve Yasal Haklarınız</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Depozito, genellikle ev sahipleri tarafından bir "çıkış karı" gibi görülse de yasal olarak kiracının mülküne emanet ettiği bir teminattır. 
              Eğer ev kiralarken depozitoyu yasalara uygun olarak bankadaki ortak vadeli hesaba yatırdıysanız süreç kolaydır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Ev sahibi, kira sözleşmesinin bitiminden itibaren **3 ay içinde** size karşı bir tazminat veya hasar davası açtığını ya da icra takibi başlattığını bankaya yazılı olarak belgelemezse, banka talebiniz üzerine depozitoyu (faiz geliriyle birlikte) **ev sahibinin rızası aranmaksızın doğrudan size iade eder**. 
              Eğer depozito elden verilmişse ve ev sahibi haklı bir neden olmadan iade etmiyorsa, elinizdeki teslim tutanağı ile birlikte İlçe Tüketici Hakem Heyeti'ne veya doğrudan icra dairesine başvurarak ilamsız takip başlatabilirsiniz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Aboneliklerin İptali ve Son Borçların Ödenmesi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Evden çıkmadan önce tüm aboneliklerinizi (Elektrik, Doğalgaz, Su, Fiber İnternet) kapatmalı ve sayaçlardaki son endeks değerlerini fotoğraf çekerek ilgili kurumlardan ilişik kesme işlemlerini tamamlamalısınız.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              Aboneliklerin kapatılmaması durumunda, sizden sonra eve taşınan yeni kiracının harcayacağı tüm enerji ve altyapı bedellerinden yasal olarak siz sorumlu tutulursunuz. 
              Ayrıca abonelik feshiyle birlikte güvence bedellerini (depozitolarını) ilgili dağıtım şirketlerinden PTT veya IBAN aracılığıyla geri almayı unutmayın.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">6. Boya ve Badana Sorumluluğu: Evi Boyatıp mı Çıkmalısınız?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Emlak piyasasında en çok suistimal edilen konulardan biri "Evi boyalı aldın, kesinlikle boyatıp teslim edeceksin" şartıdır. 
              Hukuken bu şart her zaman geçerli değildir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6 font-bold text-accent">
              Yargıtay kararlarına göre; evde olağan dışı, hor kullanımdan kaynaklanan duvar harabiyetleri, ağır lekeler veya çizikler yoksa, sadece zamanın geçmesine bağlı olarak oluşan renk solmaları ve olağan yıpranmalar nedeniyle kiracı evi boyatıp teslim etmek zorunda değildir. 
              Buna mukabil, sözleşmede "Kiracı çıkarken evi yeni boyalı olarak teslim eder" şeklinde yazılı bir özel madde varsa ve taraflar bunu imzaladıysa, bu sözleşme serbestisi kapsamında geçerli kabul edilebilir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">7. Demirbaş Teslimi ve Durum Teyidi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Evi kiralarken teslim aldığınız demirbaşların (Kombinin oda termostatı, mutfaktaki ankastre ocak-fırın setleri, elektrik şalterleri, kapı hidrolikleri, duşakabin mekanizmaları, petek vanaları vb.) çalışır durumda teslim edilmesi şarttır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Teslimden önce kombinin yıllık bakımının yapılmış olmasına ve faal şekilde sıcak su-ısınma sağladığına dikkat edin. 
              Böylece "Kombiyi çalışmaz halde bıraktın" türündeki yüksek maliyetli iftiraların da önüne kolayca geçebilirsiniz.
            </p>

            {/* Çıkış Öncesi Yapılacaklar Tablosu */}
            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kiracı Çıkış Süreci Detaylı Adım Tablosu</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Aşama / Eylem</th>
                    <th className="p-4">Ne Zaman Yapılmalı?</th>
                    <th className="p-4">Neden Hayati Önemde?</th>
                    <th className="p-4 rounded-tr-2xl">Yasal Karşılığı</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Yazılı Fesih Bildirimi</td>
                    <td className="p-4">Kira dönemi bitiminden en az 15 gün önce.</td>
                    <td className="p-4">Sözleşmenin 1 yıl otomatik uzamasını engeller.</td>
                    <td className="p-4 font-semibold text-green-700">TBK m. 347</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Detaylı Fotoğraf/Video Arşivi</td>
                    <td className="p-4">Eşyalar tamamen boşaltılıp temizlendikten sonra.</td>
                    <td className="p-4">Yıpranma iddialarına karşı sarsılmaz fiziki kanıt sağlar.</td>
                    <td className="p-4 font-semibold text-green-700">HMK Delil Esasları</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Tutanak ve Anahtar Teslimi</td>
                    <td className="p-4">Evden tamamen çıkılan ve anahtarın verildiği gün.</td>
                    <td className="p-4">Zilyetliğin bittiğini ve yasal sorumluluğun devrini belgeler.</td>
                    <td className="p-4 font-semibold text-green-700">TBK m. 334</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Abonelik Kapatma</td>
                    <td className="p-4">Anahtar tesliminden 1-2 iş günü önce veya aynı gün.</td>
                    <td className="p-4">Eski adresteki yeni kullanımlardan borçlanmayı önler.</td>
                    <td className="p-4 font-semibold text-green-700">Mevzuat Kuralları</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <Sparkles className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Yeni Eviniz İçin En Adil Sözleşmeyi Hazırlayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Çıkış esnasında yaşayabileceğiniz pürüzleri daha kontrat aşamasında çözün. Depozito ödeme vadeleri, hasarsız teslim tanımları ve yasal maddelerle koruma altında ücretsiz sözleşme tasarlayın.
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
                    Anahtarı teslim etmeye giderken ev sahibi gelmezse ne yapılmalı?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Ev sahibi kasıtlı veya mazeretli olarak teslim almaya gelmezse, durumun tespiti için noterlik kanalıyla **"Tevdi Mahalli Tayini"** talep edilmeli veya anahtar notere teslim edilerek ev sahibine noter ihbarnamesiyle anahtarın noterlikten teslim alınabileceği bildirilmelidir. 
                  Bu andan itibaren yasal teslim gerçekleşmiş sayılır ve kiracının kira ödeme borcu bıçak gibi kesilir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Banka komisyonu veya enflasyon kaybı depozitodan düşülebilir mi?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Kanuni süreç (TBK m. 342) işletilerek ortak mevduat hesabına yatırılan depozito zaten orada vadeli olarak değerlendirildiği için değerini korur. 
                  Eğer elden ödenmiş ve sözleşmede bunu enflasyona göre güncelleme şartı yoksa, ev sahibi aldığı ana parayı döviz veya altın olarak iade etmek zorunda değildir (sözleşmede aksi kararlaştırılmadıkça). 
                  Ancak hiçbir banka transfer komisyonu vb. kesinti kiracı depozitosundan haksız yere düşülemez.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Kira borcu yerine depozitoyu sayabilir miyim?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Kiracının "Son bir veya iki kirayı ödemiyorum, depozitodan düşersiniz" deme hakkı yasal olarak yoktur. 
                  Depozito, kira borcuna mahsup edilmek üzere değil, mülkte doğabilecek doğrudan hasarları veya ödenmemiş faturaları güvence altına almak için verilir. 
                  Kiracı, çıkış tarihine kadar kirasını tam ödemek durumundadır. Depozito iadesi ise teslim edilip hasarsızlık teyit edildikten sonra ayrı bir işlem olarak gerçekleşir.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 29 Mayıs 2026</span>
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
            <Link to="/ev-kiralarken-dikkat-edilmesi-gerekenler" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Ev Kiralarken 10 Şey</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Ev kiralama dikkat rehberi. Ev kiralarken dikkat edilmesi gereken 10 altın kural: Sözleşme, tapu tescili, depozito, aidat ve teslimler...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-sozlesmesi-feshi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesi Feshi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesi feshinde dikkat edilmesi gereken yasal hususlar, ihtarname süreleri ve 2026 yasal haklar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-sozlesmesinde-olmasi-gereken-maddeler" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesinde 10 Madde</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesinde olması gereken 10 madde. Koruyucu maddeler, tahliye taahhütnameleri ve yasal standartlar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
