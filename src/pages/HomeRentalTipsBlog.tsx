import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, Award, Clock, ClipboardCopy, Info, HelpCircle, Home, Key, MapPin, Eye, FileSpreadsheet, HeartHandshake, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function HomeRentalTipsBlog() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const checklistTemplate = `EV TESLİM VE HASAR TESPİT PROTOKOLÜ (EK-1)

Taşınmaz Adresi: ...... Mahallesi, ...... Sokak, No: ... Daire: ... .../...
Teslim Tarihi    : 01.06.2026
Mal Sahibi      : [Ad Soyad]
Kiracı          : [Ad Soyad]

Aşağıdaki oda ve demirbaşlar belirtilen kondisyonda teslim edilmiş olup, çıkışta bu liste esas alınacaktır:

1. BOYALAR VE DUVARLAR:
   [ ] Tüm odalar yeni boyalı ve temiz teslim edilmiştir.
   [ ] Salon güney duvarında küçük bir sıva çatlağı mevcuttur.
   [ ] Çocuk odasında tavan kenarında hafif bir lekelenme vardır.

2. MOBİLYA VE DEMİRBAŞLAR:
   [ ] Kombi (Marka: ......, Seri No: ......) çalışır durumda, bakımı yapılmış olarak teslim edilmiştir.
   [ ] Mutfak ankastre fırın, ocak ve aspiratör setinin tüm fonksiyonları çalışmaktadır.
   [ ] Banyo ve mutfak bataryalarında sızıntı yoktur, su basıncı normaldir.

3. ELEKTRİK VE ALTYAPI:
   [ ] Tüm prizler ve elektrik anahtarları çalışır durumdadır.
   [ ] İnternet / Fiber optik altyapı kutusu aktif haldedir.

4. KAPILAR VE PENCERELER:
   [ ] Çelik dış kapı kilit mekanizması kusursuz çalışmaktadır (3 adet asıl anahtar teslim edilmiştir).
   [ ] PVC pencerelerin ısı ve ses yalıtım fitilleri sağlamdır, çift açılımları aktiftir.

İşbu protokol iki nüsha halinde düzenlenerek taraflarca imza altına alınmıştır.

MAL SAHİBİ (İmza)                   KİRACI (İmza)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(checklistTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.homeRentalTipsTitle') + " — Örnek Hasar Protokollü 2026 Kılavuzu"}
        description={t('blogPage.homeRentalTipsSeoDesc')}
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
            <Home className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Kiralama Rehberi 101</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.homeRentalTipsTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Yeni bir eve taşınırken gözden kaçırılan her detay, gelecekte maddi kayıp ve hukuki uyuşmazlığa yol açabilir. Pratik ve yasal süreçlerin kontrol listesi.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Hayatımızın en önemli dönüm noktalarından biri olan ev değiştirme süreci genellikle tatlı bir heyecanla başlar. 
              Ancak bütçenize uygun ve dış görünüşü şık bir daire bulmuş olmanız, o evin sizin için en doğru seçenek olduğu anlamına gelmez. 
              Gayrimenkul kiralamalarında aceleyle atılan imzalar ve sözlü vaatlere güvenmek, ilerleyen aylarda ciddi mağduriyetler yaratabilir. 
              Bu nedenle yasal, mali ve fiziksel boyutlarıyla **ev kiralama dikkat** edilmesi gereken en temel finansal kararlardan biridir. 
              Gerek Türk Borçlar Kanunu’nun koruyucu maddeleri çerçevesinde, gerekse günlük yaşam konforunuzu korumak adına kontratı imzalamadan önce sormanız ve araştırmanız gereken hayati sorular vardır. 
              İşte, tapu tescilinden hasar tespitine, depozito sınırlarından aidat paylaşımına kadar **ev kiralama dikkat** sürecinde göz önünde bulundurmanız gereken altın değerindeki 10 altın kural!
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Tapu Kaydı Kontrolü: Ev Sahibi Gerçekten Malik mi?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              İlk bakışta kulağa tuhaf gelse de, emlak dünyasındaki dolandırıcılık teşebbüslerinin önemli bir kısmı kendini yetkisizce mülk sahibi olarak gösteren kişilerden kaynaklanmaktadır. 
              Evi kiralayacağınız kişinin tapu senedini mutlaka inceleyin.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Eğer kiralama işlemini ev sahibinin birinci derece yakını (oğlu, kızı, eşi vb.) veya bir emlakçı yürütüyorsa, kendilerinden noterden onaylı **"Kiraya Verme Yetki Belgesi"** veya resmi bir vekaletname talep edin. 
              Kira sözleşmesini imzalayacağınız kişi ile tapuda adı geçen malikin aynı kişi olduğundan emin olmak, ödediğiniz kaporanın ve kiranın yasal güven altında kalmasının ilk adımıdır.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Yasal Malik Teyidi Neden Önemli?</h4>
                <p className="text-gray-600 m-0">
                  Yetkisiz bir temsilciyle yapılan kira sözleşmesi, asıl tapu sahibi tarafından her an fesh edilebilir ve "fuzuli işgal" iddiasıyla tahliye davanızın açılmasına neden olabilir. Bu durum hem zaman hem de para kaybı doğurur.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Kira Sözleşmesi Kontrolü ve Özel Hükümler</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kırtasiyelerden alınan maktu (hazır) kontratlar genellikle mülk sahibini koruyan tek taraflı maddeler içerir. 
              İmza atmadan önce her maddeyi dikkatlice okuyun. 
              Sözleşmeye eklenebilecek haksız veya kanuna aykırı cezai şartları (Örn: "Bir ayın kirası ödenmezse, kalan tüm ayların kirası muaccel olur" maddesi konut kiralarında yasal olarak tamamen geçersizdir) ayıklatın.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Ayrıca, ev sahibinin evi satması durumunda yeni malikin hakları, tahliye şartları ve olası uyuşmazlıklarda hangi mahkemelerin yetkili olacağı gibi detayların dengeli bir biçimde düzenlendiğinden emin olun. Kira bedelinin havale edileceği banka IBAN bilgisi ve tescilli adresi mutlaka sözleşme metnine işlenmiş olmalıdır.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Depozito Kuralları ve Miktarının Sınırı</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              6098 sayılı Türk Borçlar Kanunu’nun 342. maddesi depozito miktarını kesin olarak sınırlamıştır. 
              **Depozito bedeli en fazla 3 aylık kira bedeli kadar olabilir.** 
              Bu sınırın üstündeki depozito talepleri yasal olarak korunamamaktadır.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              Depozitonun iadesinde yaşanacak mağduriyetleri önlemek adına, paranın elden verilmesi yerine, kanunun öngördüğü şekilde **vadeli bir ortak tasarruf hesabına** (Vadeli Mevduat Hesabı) yatırılması kararlaştırılmalıdır. 
              Böylece kiracı haklı bir neden olmadan mülke zarar vermediği takdirde çıkış esnasında parasını faiz geliriyle birlikte enflasyon korumalı olarak geri alabilir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Aidat ve Yan Gider Dağılımları</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Apartman ve site aidatları günümüzde neredeyse kira bedelleriyle yarışır seviyeye gelmiştir. 
              Bu nedenle binada veya sitede ödenen güncel aidat miktarını yöneticiye sorarak önceden öğrenmelisiniz.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kat Mülkiyeti Kanunu uyarınca giderlerin bölüşümü nettir: 
              Asansör bakımı, kapıcı ücreti, merdiven temizliği, elektrik/su ve rutin site bahçe peyzajı gibi **günlük işletme giderlerini kiracı öder**. 
              Buna mukabil dış cephe mantolaması, çatı tadilatı, asansörün motorunun yenilenmesi veya yeni bir demirbaş satın alımı gibi **mülkün değerini doğrudan artıran büyük masraflar tamamen ev sahibine aittir**. 
              Sözleşmeye bu yasal ayrımı teyit eden maddeler ekletmelisiniz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Hasar Tespiti ve Demirbaş Listesi Çıkartılması</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Taşınırken en çok kavga konusu olan hususlardan biri de "bu hasar önceden var mıydı, yoksa kiracı mı yaptı?" tartışmasıdır. 
              Bunun önüne geçmenin tek yolu, evi teslim alırken her köşeyi video ve fotoğraflarla kayıt altına almaktır.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              Evin pencerelerindeki çatlaklar, parke çizikleri, duvarlardaki rutubet izleri, kombinin markası, mutfak dolaplarındaki aşınmalar gibi hasarlı noktaları tek tek yazarak kontratın arkasına **"Hasar ve Demirbaş Tespit Tutanağı"** olarak ekleyin. 
              Böylece çıkışta ev sahibinin haksız yere depozitonuza el koymasını hukuken engellemiş olursunuz.
            </p>

            {/* Hasar Protokol Taslağı Bölümü (Copyable) */}
            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Örnek Hasar Tespit Ek Protokolü (Kopyalanabilir)</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Aşağıdaki şablonu, evinizi kiralarken teslim aldığınız durumun fotoğraf ve açıklamalarını eşleştirerek sözleşmenizin eki (EK-1) olarak kullanabilirsiniz:
            </p>

            <div className="bg-gray-100 hover:bg-gray-150/50 transition-colors p-8 rounded-[40px] border border-gray-200 my-10 font-mono text-sm relative">
              <button 
                onClick={handleCopy}
                className="absolute top-6 right-6 flex items-center bg-primary text-white hover:bg-black font-sans font-bold text-xs py-2 px-4 rounded-xl shadow transition-colors"
              >
                <ClipboardCopy className="h-4 w-4 mr-2" />
                {copied ? "Kopyalandı!" : "Metni Kopyala"}
              </button>
              <pre className="whitespace-pre-wrap overflow-x-auto text-gray-700 font-mono leading-relaxed max-h-[350px]">
                {checklistTemplate}
              </pre>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">6. Giriş ve Çıkış Tarihlerinin Netliği ile Kira Dönemi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmesinin başlangıç tarihi ile bitiş tarihi gün, ay ve yıl olarak tam yazılmalıdır. 
              Özellikle kira ödemelerinin yapılacağı günler (Örn: "Her ayın 1'i ile 5'i arası") ve kira artışının yapılacağı ay/dönem kesin olarak belirtilmelidir. 
              Giriş tarihinde evde bitirilmemiş tadilatlar varsa bunların hangi tarihe kadar mal sahibi tarafından bitirileceği sözleşmeye şerh düşülmelidir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">7. Kira Artış Oranı ve Yasal Sınır Tavanı</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Yenilenen kira dönemlerinde yapılacak artış oranı konusunda her iki tarafın haklarını gözeten bir düzlem kurulmalıdır. 
              Yasalar uyarınca, konut kiralarında uygulanabilecek en yüksek kira artış oranı, **son 12 aylık TÜFE (Tüketici Fiyat Endeksi) ortalamasıdır**. 
              Bu oran yasal bir tavan sınırdır; sözleşmeye bunun üzerinde bir oran yazılsa dahi kiracı üst sınırı aşan kısmı ödemekle yükümlü tutulamaz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">8. Faturalar, Abonelikler ve Eski Borç Durumu</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Evi kiralamadan önce sayaç (Elektrik, Su, Doğalgaz) numaralarını alarak ilgili kurumlardan eski kiracı veya ev sahibine ait birikmiş borç olup olmadığını mutlaka sorgulayın. 
              Kira başlangıcıyla beraber tüm abonelikleri kendi üzerinize alın. 
              Eski borçlar yüzünden yeni taşındığınız evde enerjinizin kesilmesiyle mağdur olmamak için bu kontrol kritik derecede önemlidir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">9. Binanın Fiziksel Yapısı, Yalıtımı ve Rutubet Durumu</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Yazın kiralanan bir evin kışın nasıl olacağını tahmin etmek zordur. 
              Evin kuzey cephe olması, yalıtımının olmaması kış aylarında astronomik doğalgaz faturaları ödemenize yol açabilir. 
              Evi gezerken duvar köşelerinde rutubet, küf veya boya kabarması arayın. 
              Hafif nem kokusu olan yerlerde ciddi ısı köprüsü problemleri olabilir. 
              Ayrıca binanın deprem yönetmeliğine uygunluğunu, hasarsızlık raporunu muhakkak ev sahibine sormalısınız.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">10. Apartman Yönetim Planı ve Tahliye Taahhüdü Zamanlaması</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Her apartmanın ve sitenin Kat Mülkiyeti Kanunu'na göre tescil edilmiş bir **"Apartman Yönetim Planı"** vardır. 
              Örneğin, evcil hayvan besleme yasağı gibi özel kurallar bu planda yazılı ise ve siz bunu ihlal ederseniz mahkeme kararıyla evden çıkarılabilirsiniz. 
              Ayrıca, ev sahiplerinin sıklıkla kontratla birlikte imzalatmak istediği **tahliye taahhütnamesini aynı gün imzalamayın.** 
              Aynı gün imzalanan taahhütnameler, kiracının serbest iradesini baskıladığı gerekçesiyle Yargıtay tarafından yasal olarak geçersiz kabul edilmektedir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Konut Kiralama Detay Kontrol Listesi Karşılaştırma Tablosu</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Aranan Unsur</th>
                    <th className="p-4">Yapılması Gereken Eylem</th>
                    <th className="p-4 rounded-tr-2xl">Yasal / Finansal Riski</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Tapu Bilgisi</td>
                    <td className="p-4">Kimlik kartı ile tapudaki malik matches teyidi yapın.</td>
                    <td className="p-4 text-red-700 font-semibold">Usulsüz kiralama, sözleşmenin geçersiz kılınması.</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Depozito Hesabı</td>
                    <td className="p-4">Kanun uyarınca vadeli bir ortak tasarruf hesabı tanımlayın.</td>
                    <td className="p-4 text-red-700 font-semibold">Paranın değer kaybı, çıkışta geri ödenmeme problemi.</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Hasar Protokolü</td>
                    <td className="p-4">Tüm duvarları ve elektronik cihazları fotoğraflayıp protokole yazın.</td>
                    <td className="p-4 text-red-700 font-semibold">Çıkışta haksız tamirat maliyetlerinin kiracıya yüklenmesi.</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Aidat Sorgusu</td>
                    <td className="p-4">Yönetimden aylık rutin ödenen miktarı ve eski borçları öğrenin.</td>
                    <td className="p-4 text-red-700 font-semibold font-sans">Ekstra demirbaş borçlarının haksız tahsilatı.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <Sparkles className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Adil ve Koruyucu Kira Sözleşmesini Hemen Ücretsiz Tasarlayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Kanunun kiracıya ve ev sahibine tanıdığı tüm hakları gözeten, depozito kurallarını netleştiren ve hasarsız teslim tescili yapabileceğiniz yasal sözleşmeleri saniyeler içinde ücretsiz oluşturun.
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
                    Kayıtlı emlakçının aldığı komisyon ücreti ne kadardır?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Taşınmaz Ticareti Hakkında Yönetmelik uyarınca, kiralama işlemlerinde emlakçı hizmet bedeli tavanı, **bir aylık kira bedelinin KDV dahil tutarını** aşamaz. Bu ücret kural olarak kiracı ile kiraya veren arasında eşit paylaşılır, ancak sözleşmeyle aksi de kararlaştırılabilir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Depozito ne zaman ve nasıl iade edilmelidir?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Kira sözleşmesinin sona ermesini müteakip mülk teslim edildiğinde, ev sahibi mülkü kontrol eder. Kira borcu, fatura borcu veya olağan dışı kullanım hasarı yoksa, depozito tutarının tamamı gecikmeksizin kiracıya iade edilir. Kanunen ev sahibinin depozitoyu gerekçesiz tutma süresi en fazla 3 aydır.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Kira bedeli elden teslim edilebilir mi?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Hazine ve Maliye Bakanlığı tebliğleri uyarınca, konut kiralarında **500 TL ve üzerindeki** tüm kira bedeli ödemelerinin banka, PTT veya benzeri finansal kuruluşlar aracılığıyla yapılması zorunludur. Elden yapılan ve belgelendirilmeyen elden ödemeler hem usulsüzlük cezaları doğurur hem de ispat açısından kiracıyı ciddi riske sokar.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 27 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Av. Alperen Çelik</span>
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
            <Link to="/kira-sozlesmesi-feshi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesi Feshi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesi feshinde dikkat edilmesi gereken hususlar, bildirim süreleri ve 2026 yasal haklar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-borcunu-odemeyen-kiraci" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Ödemeyen Kiracı</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira ödemelerinde gecikme olduğunda mülk sahiplerinin izleyebileceği yasal adımlar, icra ve tahliye davaları...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
