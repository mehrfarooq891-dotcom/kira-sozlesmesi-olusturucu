import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, Award, Coins, HelpCircle, Landmark, Landmark as Bank, Calculator, Percent, Percent as TaxIcon, Library, Sparkles, ClipboardCopy, FileSpreadsheet } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function RentalTaxBlog() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Pratik Hesaplama Şablonu
  const calculationExample = `KİRA GELİRİ VERGİSİ HESAPLAMA ŞABLONU (2026 Beyan Dönemi)

1. GELİRİN BELİRLENMESİ:
   Yıllık Brüt Konut Kira Geliri : 240.000 TL (Aylık 20.000 TL)

2. YASAL KONUT İSTİSNASININ DÜŞÜLMESİ:
   2025 Yılı Kira Geliri İçin İstisna Tutarı : 43.000 TL
   İstisna Sonrası Kalan Tutar                : 240.000 - 43.000 = 197.000 TL

3. GÖTÜRÜ GİDER YÖNTEMİNİN UYGULANMASI (%15 Gider):
   Götürü Gider Tutarı (%15)                  : 197.000 * 0,15 = 29.550 TL
   Vergiye Tabi Matrah                        : 197.000 - 29.550 = 167.450 TL

4. VERGİ DİLİMİNE GÖRE VERGİ TUTARININ BULUNMASI:
   (Vergi oranı ilk dilim olan %15 olarak uygulanmaktadır)
   Hesaplanan Gelir Vergisi                  : 167.450 * 0,15 = 25.117,50 TL

5. DAMGA VERGİSİ EKLEMESİ:
   Beyanname Damga Vergisi                    : Yaklaşık 1.040 TL
   Ödenecek Toplam Vergi                      : 25.117,50 + 1.040 = 26.157,50 TL`;

  const handleCopy = () => {
    navigator.clipboard.writeText(calculationExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.rentalTaxTitle') + " — Güncel İstisna ve Oranlar"}
        description={t('blogPage.rentalTaxSeoDesc')}
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
            <Coins className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Maliye & Vergi Kılavuzu</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.rentalTaxTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Gayrimenkul sahiplerinin her yıl Mart ayında tamamlaması gereken Kira Geliri Vergisi beyan şartları. İstisna tutarları, gider yöntemleri ve detaylı örnek hesaplamaları.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Gayrimenkul yatırımı yapmak ve bu yatırımdan düzenli pasif gelir elde etmek her yatırımcının hayalidir. 
              Ancak mülk edinip kiraya verdiğinizde, elde ettiğiniz gelirin vergilendirilmesi konusu en az kiralama süreci kadar önemli bir yükümlülük haline gelir. 
              Hukukumuzda gayrimenkul sermaye iradı (GMSİ) olarak nitelendirilen <strong>kira geliri vergisi 2026</strong> yılında, geçmiş yıllara göre çok daha sıkı denetim ve yeni yasal düzenlemeler eşliğinde uygulanacaktır. 
              Maliye Bakanlığı’nın banka hesap hareketleri ile tapu dökümlerini yapay zeka destekli sistemlerle çapraz kontrol ettiği bu dönemde, vergi sorumluluklarınızı eksiksiz ve süresinde yerine getirmeniz kritik bir hal almıştır. 
              Peki, bir ev sahibi olarak elde ettiğiniz kira geliri için ne kadar vergi ödemelisiniz? Hangi gider yöntemlerini seçmek vergi yükünüzü hafifletir? <strong>Kira geliri vergisi 2026</strong> beyanname döneminin en hayati istisna tutarlarını, vergi dilimlerini ve pratik hesaplama senaryolarını vergi mevzuatı ışığında tüm ayrıntılarıyla ele alıyoruz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Giriş: Gayrimenkul Sermaye İradı (GMSİ) Nedir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Gelir Vergisi Kanunu uyarınca, şahısların tasarrufunda bulunan bina, arazi, haklar ile motorlu nakil vasıtası gibi mal ve hakların kiraya verilmesinden elde edilen kazançlar "Gayrimenkul Sermaye İradı" (GMSİ) olarak adlandırılır ve gelir vergisine tabi tutulur.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Ev sahibi elde ettiği kira gelirini Gelir İdaresi Başkanlığı'nın (GİB) Hazır Beyan Sistemi üzerinden beyan etmekle mükelleftir. 
              Bir yıl içerisinde kazanılan kira gelirleri, takip eden yılın Mart ayı başından sonuna kadar (1-31 Mart tarihleri arasında) beyan edilir ve hesaplanan vergilendirme tutarı iki eşit taksitte (Mart ve Temmuz aylarında) ödenir.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">2026 Beyan Takvimi Değişikliği Var mı?</h4>
                <p className="text-gray-600 m-0 leading-relaxed font-sans text-sm">
                  Kural olarak 2025 yılında tahsil edilen kira gelirleri **1 Mart - 31 Mart 2026** tarihleri arasında beyan edilecektir. 
                  2026 yılı içerisinde tahsil edilmekte olan gelirler ise **Mart 2027** tarihinde beyan edilerek vergilendirilecektir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. 2026 Yılı Kira Geliri Vergisi İstisna Tutarları</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Her yıl devlet, ev sahiplerinin elde ettiği kira gelirinin belirli bir miktarını vergi dışı bırakarak muafiyet (istisna) sağlar. 
              İstisna miktarı konut kiralamaları ve ticari (işyeri) kiralamaları için ayrı hesaplanır.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Konut Kira Geliri İstisnası</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Konut olarak kiraya verilen gayrimenkullerden elde edilen yıllık kira gelirleri için uygulanan istisna sınırları kazancın elde edildiği yıla göre belirlenir:
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>2025 Yılı Gelirleri (Mart 2026'da Beyan Edilen):</strong> Yıllık konut kira istisna tutarı **43.000 TL**’dir. Yani 2025 yılı boyunca elde ettiğiniz toplam konut kirası 43.000 TL ve altında ise vergi vermez, beyanname düzenleme zorunluluğunda bulunmazsınız.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>2026 Yılı Gelirleri (Mart 2027'de Beyan Edilecek):</strong> Yeniden değerleme oranı doğrultusunda 2026 yılı konut kira gelir istisna tutarı **56.000 TL** olarak belirlenmiştir. Yıl sonunda bu tavan aşılmadığı sürece gelir vergisi doğmaz.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">İşyeri (Ticari) Kira Geliri Beyan Sınırı</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              İşyeri kiralarında süreç biraz farklı işler. İşyerini kiralayan mükellefler zaten yıl boyu %20 stopaj (vergi kesintisi) yaparak devlete öderler. 
              Ancak brüt işyeri kira geliri belirli mali sınırları aşıyorsa, mülk sahibi yine de bu tutarı beyan etmekle yükümlüdür:
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>2025 Yılı Brüt İşyeri Sınırı (Mart 2026 Beyanı):</strong> Tevkifata (stopaja) tabi tutulmuş işyeri kira gelirlerinde beyan sınırı **230.000 TL**'dir. Bu tutardan az kazananlar beyanname vermez.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>2026 Yılı Brüt İşyeri Sınırı (Mart 2027 Beyanı):</strong> Tevkifata tabi işyeri kira gelirleri için yıllık beyanname verme sınırı **300.000 TL** olarak ilan edilmiştir.</span>
              </li>
            </ul>

            <div className="bg-yellow-500/10 p-8 rounded-3xl border-l-8 border-yellow-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                İstisnadan Kimler Faydalanamaz?
              </h4>
              <p className="text-sm text-gray-750 leading-relaxed m-0">
                Kira gelirinin yanında ticari, zirai veya mesleki kazancından dolayı mükellefiyeti olanlar (Esnaf, tüccar, serbest meslek grupları, şirket ortakları vb.) konut istisnasından **faydalanamazlar**. 
                Elde ettikleri konut kirasının 1 TL'sini dahi beyan edip vergilendirmek zorundadırlar.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Kira Gelirinde Gider Yöntemleri: Hangisi Daha Avantajlı?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira gelirinizden istisna tutarı düşüldükten sonra kalan tutarın vergisini öderken, yasa size bu geliri elde etmek için yaptığınız masrafları düşme olanağı sunar. 
              Bunun için seçebileceğiniz iki farklı gider yöntemi bulunur:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">A) Götürü Gider Yöntemi (%15 İndirim)</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              En kolay ve zahmetsiz yöntemdir. Fatura veya makbuz toplamanıza gerek kalmadan, istisna düşüldükten sonra kalan net kira gelirinizin otomatik olarak **%15'ini** yasal gider olarak düşebilirsiniz. 
              Sistem bu tutarı otomatik olarak matrahtan çıkartır. 
              <em>Not: Götürü gider yöntemini seçen mükellifler, yasa gereği 2 yıl boyunca gerçek gider yöntemine geri dönemezler.</em>
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">B) Gerçek Gider Yöntemi</h3>
            <p className="text-gray-655 leading-relaxed mb-6">
              Eğer gayrimenkulünüz için yaptığınız harcamalar yıllık kira gelirinizin %15’inden daha fazlaysa, faturalandırılmış olması kaydıyla gerçek gider yöntemini seçmek çok daha avantajlıdır. 
              İndirilebilecek gerçek gider kalemleri şunlardır:
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Kredi Faizleri:</strong> Kiraya verilen konut için çekilen banka konut kredisinin sadece **ödenen faiz kısmı** (hırs anapara hariç) gider olarak gösterilebilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>İktisap Bedeli (%5):</strong> Gayrimenkulün satın alınma bedelinin (tapudaki değerinin) **%5'i** oranındaki tutar, satın alma yılından itibaren 5 yıl boyunca yıllık gider olarak indirilebilir. (Sadece tek konut için geçerlidir)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Kiralanan Başka Konutun Kirası:</strong> Kendisi de kirada oturan bir ev sahibi, kendi ödediği kira bedelini, elde ettiği kendi kira gelirinden gerçek gider olarak doğrudan düşebilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Yönetim ve Onarım Masrafları:</strong> Binanın ısı yalıtımı, çatı yenilenmesi, asansör tamiratları, emlak vergisi ve sigorta harcamaları gider olarak kabul edilir.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Gelir Vergisi Dilimleri ve Oranları (2026 Beyan Dönemi)</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Hesaplanan net matrah tutarı (gelirden istisna ve giderler düşüldükten sonra kalan vergi tabanı), Gelir Vergisi tarifesindeki dilimlere göre artan oranlı (%15 ile %40 arasında) vergilendirilir. 
              2025 yılı gelirlerinin 2026 yılında beyan edilmesine ilişkin gelir vergisi tarifesi dilimleri şu şekildedir:
            </p>

            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Matrah Aralığı (TL)</th>
                    <th className="p-4">Uygulanan Vergi Oranı</th>
                    <th className="p-4 rounded-tr-2xl">Hesaplama Örneği Açıklaması</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">158.000 TL'ye kadar</td>
                    <td className="p-4 text-green-700 font-bold">%15</td>
                    <td className="p-4">Matrahın %15'i oranında vergilendirilir.</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">158.000 TL — 380.000 TL arası</td>
                    <td className="p-4 text-green-700 font-bold">%20</td>
                    <td className="p-4">158.000 TL için 23.700 TL, aşan kısım için %20.</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">380.000 TL — 900.000 TL arası</td>
                    <td className="p-4 text-green-700 font-bold">%27</td>
                    <td className="p-4">380.000 TL için 68.100 TL, aşan kısım için %27.</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">900.000 TL — 4.300.000 TL arası</td>
                    <td className="p-4 text-green-700 font-bold">%35</td>
                    <td className="p-4">900.000 TL için 208.500 TL, aşan kısım için %35.</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">4.300.000 TL'den fazlası</td>
                    <td className="p-4 text-green-700 font-bold">%40</td>
                    <td className="p-4">4.300.000 TL için 1.398.500 TL, aşan kısım için %40.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Pratik Hesaplama Şablonu</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira vergi mevzuatının karmakarışık formülleri kafa karıştırıcı olabilir. 
              Bunu netleştirmek adına geliştirdiğimiz basit senaryoyu kopyalayıp kendi gelir durumunuza göre uyarlayabilir ve verginizi tahmin edebilirsiniz:
            </p>

            {/* Kopyalanabilir Kod Kutusu */}
            <div className="bg-gray-100 hover:bg-gray-150/50 transition-colors p-8 rounded-[40px] border border-gray-200 my-10 font-mono text-sm relative">
              <button 
                onClick={handleCopy}
                className="absolute top-6 right-6 flex items-center bg-primary text-white hover:bg-black font-sans font-bold text-xs py-2 px-4 rounded-xl shadow transition-colors"
              >
                <ClipboardCopy className="h-4 w-4 mr-2" />
                {copied ? "Kopyalandı!" : "Metni Kopyala"}
              </button>
              <pre className="whitespace-pre-wrap overflow-x-auto text-gray-700 font-mono leading-relaxed max-h-[350px]">
                {calculationExample}
              </pre>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">6. Beyanname Nasıl Verilir? Adım Adım Hazır Beyan Sistemi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Mükelleflerin şahsen vergi dairesine gitme mecburiyeti artık ortadan kaldırılmıştır. 
              Vergi dairelerine gitmeden evinizin konforunda internet veya cep telefonunuz üzerinden beyanname vermenin adımları şunlardır:
            </p>

            <ol className="space-y-4 text-gray-650 mb-12 list-decimal pl-6 font-sans text-base">
              <li><strong>Hazır Beyan Sistemine Giriş:</strong> <a href="https://hazirbeyan.gib.gov.tr" target="_blank" rel="noopener noreferrer" className="text-accent underline font-bold">hazirbeyan.gib.gov.tr</a> adresine gidin veya e-Devlet kimlik tam doğrulama bilgilerinizle e-Devlet kapısı üzerinden giriş yapın.</li>
              <li><strong>Verilerin Kontrol Edilmesi:</strong> Gelir İdaresi, bankalar ve tapu sistemi üzerinden adınıza kayıtlı kira tahsilatlarını otomatik olarak çekerek sisteme yüklemiştir. Bu tutarların doğruluğunu teyit edin.</li>
              <li><strong>Gider Yöntemi Seçimi:</strong> "Götürü Gider" veya "Gerçek Gider" seçeneklerinden sizin için avantajlı olanı işaretleyin. Gerçek gider ise yaptığınız masraf detaylarını ilgili bölümlere yazın.</li>
              <li><strong>Onaylama ve Ödeme:</strong> Tahakkuk eden gelir vergisi tutarını ve beyanname damga vergisini onaylayın. Borcunuzu internet bankacılığı, kredi kartı veya anlaşmalı bankalar aracılığıyla saniyeler içinde ödeyebilirsiniz.</li>
            </ol>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <Calculator className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Adil ve Kanuna Uygun Kira Sözleşmeleriyle Verginizi Kolaylaştırın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Ev sahibi ve kiracının yasal sorumluluklarını, kira ödeme biçimlerini ve banka hesap teyitlerini önceden netleştirerek vergi bildirimlerinde hata yapma riskini yok edin. Saniyeler içinde ücretsiz doldurun.
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
                    Kira gelirini hiç beyan etmemenin veya eksik bildirmenin cezası nedir?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Kira geliri zamanında beyan edilmez veya eksik bildirilir ise, öncelikle yıllık yasal **muafiyet (istisna) hakkı tamamen yitirilir**. 
                  Daha sonra ödenmeyen vergi aslı kadar "vergi ziyaı cezası" kesilir ve ayrıca vergi tutarı üzerine gecikilen her ay için yasal "gecikme faizi" tatbik edilir. 
                  Bu cezalı tablodan kaçınmak adına süresi içinde beyanda bulunulmalıdır.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Birden fazla ortağı olan bir evin vergisi nasıl paylaştırılır?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Hisseli mülkiyetlerde, her ortak hissesi oranında kira geliri elde etmiş sayılır. 
                  Evden sağlanan yıllık kira geliri ortakların hisselerine paylaştırılır. 
                  Hissedarların her biri kendi payına düşen brüt kira tutarını ayrı ayrı kendi e-Devlet hesapları üzerinden beyan ederler ve **ayrı ayrı yıllık istisna tutarından tam olarak faydalanabilirler**.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Hiç kira almadan bir evi yakınımıza bedelsiz tahsis edebilir miyiz?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Gelir Vergisi Kanunu'na göre bir konut hiç kira alınmasa dahi emlak vergisi değerinin **%5'i** oranında kira alınmış gibi kurgusal olarak vergilendirilir (Emsal Kira Bedeli Esası). 
                  Ancak bu kuralın bir istisnası vardır: Anne, baba, büyükanne, büyükbaba, çocuklar ve kardeşlerin konut kullanımına bedelsiz verilmesi halinde emsal kira bedeli tatbik edilmez, dolayısıyla vergi verilmez. 
                  Amca, dayı, teyze, hala ve yeğen bu muafiyetin dışındadır.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 28 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: S.M.M.M. Metin Yıldırım</span>
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
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Ev Kiralarken Dikkat Edilecekler</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Ev kiralarken dikkat edilmesi gereken 10 şey: Tapu tescili, depozito, aidat ve demirbaşlar...</p>
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
