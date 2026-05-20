import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, Award, ListFilter, ClipboardCopy, Info } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function TenMustMaddelerBlog() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const sampleContract = `KİRA SÖZLEŞMESİ (MUKAVELENAME)

Daire / İşyeri Adresi : ...... Mahallesi, ...... Sokak, No: ... Daire: ... .../...
Kiraya Veren (Mal Sahibi) : [Ad Soyad, T.C. Kimlik No, İletişim Bilgileri]
Kiracı : [Ad Soyad, T.C. Kimlik No, İletişim Bilgileri]
Kira Başlangıç Tarihi : 01.06.2026
Süre : 1 Yıl (Bir Yıl)
Aylık Kira Bedeli : ...... TL (Yazı ile: ...... Türk Lirası)
Ödeme Şekli : Her ayın en geç 5. gününe kadar [Banka Hesap Alıcısı] adına kayıtlı IBAN: TR................................ adresine havale/EFT yoluyla.
Depozito Bedeli : ...... TL (Yazı ile: ...... Türk Lirası) - [Vadeli Mevduat Hesabında Tutulacaktır]

ÖZEL HÜKÜMLER VE EKLENEBİLECEK 10 KRİTİK MADDE

MADDE 1: Kira bedeli her yıl yasal sınır olan 12 aylık ortalama TÜFE (Tüketici Fiyat Endeksi) oranında artırılacaktır. Bu oranı aşan artış talep edilemez.
MADDE 2: Kiracı, kiralanan mülkü kısmen veya tamamen başkasına devredemez, alt kiralama (sub-lease) yapamaz.
MADDE 3: Depozito bedeli, 6098 sayılı Türk Borçlar Kanunu Madde 342 uyarınca, kiracının onayı olmaksızın çekilemeyecek şekilde ortak bir vadeli tasarruf hesabına yatırılacaktır.
MADDE 4: Olağan kullanımdan doğan aşınmalar ve demirbaş niteliğinde olmayan basit onarımlar kiracıya; binanın yapısal unsurları, ortak alan demirbaşları, asansör yenileme, mantolama ve çatı tadilatları gibi mülkün değerini artıran büyük masraflar tamamen Kiraya Veren’e aittir.
...
[Sözleşmenin Tam Yapısı Aşağıdaki Metinde Detaylandırılmıştır]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleContract);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.leaseTermsTitle') + " — Örnek Şablonlu 2026 Güncel Rehber"}
        description={t('blogPage.leaseTermsSeoDesc')}
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
            <span className="text-sm font-bold uppercase tracking-widest">Sözleşme Mühendisliği</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.leaseTermsTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Sağlam bir hukuki altyapıya sahip sözleşme, gelecekteki uyuşmazlıkların en büyük koruyucusudur. Kira sözleşmesinde bulunması gereken zorunlu ve koruyucu maddeleri inceliyoruz.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Gayrimenkul kiralama süreci, taraflar el sıkıştığında heyecan verici ve olumlu görünse de, yasal güvenceler masaya yatırılmadığında kısa sürede büyük bir kabusa dönüşebilir. 
              Gerek konut gerekse işyeri kiralamalarında, hakları ve borçları açık şekilde düzenleyen yazılı bir metnin bulunması şarttır. 
              İşte bu noktada imzalayacağınız maktu kırtasiye kontratları her zaman yeterli korumayı sağlamaz. 
              Sözleşmenin taraflar arasındaki uyuşmazlıklarda gerçek bir koruyucu kalkan vazifesi görebilmesi için yasal olarak doğru yapılandırılmış **kira sözleşmesi maddeleri** barındırması gerekir. 
              Peki, standart bir kira sözleşmesinde hangi maddeler kesinlikle bulunmalıdır? 2026 yılı güncel yasal düzenlemeleri ve Yargıtay kararları ışığında, sözleşmenize eklemeniz gereken zorunlu ve isteğe bağlı altın değerindeki 10 maddeyi detaylandırıyoruz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Yasal Standartlar: Kira Sözleşmesi Nedir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              6098 sayılı Türk Borçlar Kanunu (TBK) Madde 299’da tanımlandığı üzere; kira sözleşmesi, kiraya verenin bir şeyin kullanılmasını veya kullanmayla birlikte ondan yararlanılmasını kiracıya bırakmayı, kiracının da buna karşılık kararlaştırılan kira bedelini ödemeyi üstlendiği çift taraflı borç yükleyen rızai bir sözleşmedir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Hukukumuzda kira sözleşmesinin geçerliliği herhangi bir şekil şartına (yazılı olma zorunluluğuna) bağlı kılınmamıştır; sözlü yapılan sözleşmeler de yasal olarak geçerlidir. 
              Ancak ispat kolaylığı ve olası icra/tahliye takiplerinde hak kaybı yaşamamak adına yazılı bir **kira sözleşmesi maddeleri** bütünü hazırlamak taraflar için hayati derecede önemlidir.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Güvence İlkesi</h4>
                <p className="text-gray-600 m-0">
                  Bir kira kontratının gücü, en çok anlaşmazlık yaşanabilecek konuların (tahliye, zam oranı, büyük tadilatlar, depozito) önceden iki tarafın rızasıyla kurallara bağlanmasında yatmaktadır. Bu kurallar yasal ve dengeli kaleme alınmalıdır.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Sözleşmesinde Olması Gereken 10 Kritik Madde</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Sıradan kırtasiye kontratlarının ötesinde, her iki tarafı da yasal anlamda güvende tutacak, net, anlaşılır ve mahkemelerde doğrudan delil olarak kabul edilecek 10 kilit maddeyi şöyle sıralayabiliriz:
            </p>

            {/* Maddeler listesi */}
            <div className="space-y-10 my-12">
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-serif font-black text-primary mb-3">1. Tarafların Kimlik Bilgileri ve İletişim Detayları</h3>
                <p className="text-gray-650 leading-relaxed m-0 text-base">
                  Sözleşmenin başında kiracı ve kiraya verenin T.C. Kimlik numaraları, tam adresi ve telefon numaraları eksiksiz yazılmalıdır. Ayrıca sözleşmeye e-devlet entegrasyonu ve resmi bildirimlerin (tebligatların) hangi adrese yapılacağı yasal olarak kararlaştırılmalıdır. Bu madde, gelecekte noter kanalıyla ihtarname gönderilmesi gerektiğinde yasal tebligat adresi olarak kullanılacaktır.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-serif font-black text-primary mb-3">2. Net ve Brüt Kira Bedeli ile Ödeme Tarihi</h3>
                <p className="text-gray-650 leading-relaxed m-0 text-base">
                  Kira bedeli hem rakamla hem de yazı ile net bir şekilde yazılmalıdır. Ödemenin her ayın hangi günleri arasında (Örn: "Her ayın en geç 5. günü akşamına kadar") yapılacağı ve hangi IBAN numarasına gönderileceği kontratta belirtilmelidir. Banka havalesi yapılırken açıklama kısmına "Söz konusu ayın kira bedeli" yazılması gerektiği de ayrıca sözleşmeye eklenmelidir.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-serif font-black text-primary mb-3">3. Yasal Kira Artış Oranı (TÜFE Sınırı)</h3>
                <p className="text-gray-650 leading-relaxed m-0 text-base">
                  Kira artış dönemlerinde en çok yaşanan tartışmalar fahiş zam talepleridir. Kontrata mutlaka "Yenilenen kira dönemlerinde kira artış oranı, 12 aylık TÜFE ortalamasını geçmeyecek şekilde yapılacaktır" ibaresi eklenmelidir. İsteğe bağlı olarak bu oranın altında bir artış da kararlaştırılabilir, ancak yasal sınırı aşan (örneğin dövize doğrudan endeksli) artış maddeleri konut kiralarında geçersiz kabul edilmektedir.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-serif font-black text-primary mb-3">4. Depozito Tutarı ve Saklanma Koşulları</h3>
                <p className="text-gray-650 leading-relaxed m-0 text-base">
                  Borçlar Kanunu Madde 342 uyarınca, depozito miktarı en fazla **3 aylık kira bedeli** kadar olabilir. Sözleşmeye depozitonun tam tutarı, hangi amaçla alındığı (mülke verilebilecek zararlar, ödenmemiş faturalar) ve en önemlisi paranın nerede saklanacağı (örneğin "ortak bir vadeli tasarruf hesabında") açıkça yazılmalıdır. Bu, kiracının çıkışta parasını değer kaybı olmadan geri alabilmesini güvenceye bağlar.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-serif font-black text-primary mb-3">5. Demirbaşların Teslim Durumu ve Portföyü</h3>
                <p className="text-gray-650 leading-relaxed m-0 text-base">
                  Sözleşmeye ek olarak mutlaka resimli veya detaylı yazılı bir demirbaş listesi eklenmelidir. Kombi, klima, beyaz eşyalar, kapı ve pencerelerin çalışır vaziyette teslim edildiği belirtilmeli; çıkış esnasında bu cihazların olağan eskime dışında nasıl teslim edileceği netleştirilmelidir. Cihazların modeli ve seri numaraları eklendiğinde olası karışıklıklar tümüyle engellenir.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-serif font-black text-primary mb-3">6. Alt Kiralama ve Devir Yasağı</h3>
                <p className="text-gray-650 leading-relaxed m-0 text-base">
                  Mülk sahiplerinin en çok çekindiği konulardan biri de taşınmazın habersizce üçüncü kişilere kiralanması (AirBnb uygulamaları vb.) veya devredilmesidir. Sözleşmeye eklenmesi gereken yasal koruyucu maddelerden biri "Kiracı, kiralanan mülkü kısmen veya tamamen üçüncü kişilere devredemez, alt kiralama yapamaz ve ortak alamaz" şeklindeki açık yasaktır.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-serif font-black text-primary mb-3">7. Aidat, Vergi ve Ortak Gider Bölüşüm Esasları</h3>
                <p className="text-gray-650 leading-relaxed m-0 text-base">
                  Kat Mülkiyeti Kanunu çerçevesinde aidatlar her ay ödenen önemli mali kalemlerdir. Kontrata "Ortak alan elektrik, su, rutin temizlik, kapıcı ve asansörün aylık periyodik bakım hizmeti gibi işletme giderlerinden doğan aidatları kiracı öder. Dış cephe mantolaması, çatı onarımı, asansör motor yenilemesi gibi demirbaş yatırımlarını ise kiraya veren karşılar" şeklinde hukuki sınırlar dahilinde bir bölüşüm maddesi eklenmelidir.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-serif font-black text-primary mb-3">8. Erken Tahliye ve Sözleşme Feshi Cezai Şartı</h3>
                <p className="text-gray-650 leading-relaxed m-0 text-base">
                  Kiracının sözleşme süresi dolmadan mülkü sebepsiz boşaltması halinde mülk sahibinin uğrayacağı zararları önlemek adına yasal sınırlar çizilmelidir. Kontrata "Kiracı mülkü erken tahliye etmek isterse, en az 3 ay önceden yazılı bildirim yapmak zorundadır. Aksi takdirde, mülkün boş kaldığı makul süre (Yargıtay kararlarına göre genellikle 3 aya kadar olan süreç) boyunca kira bedelinden sorumlu olacaktır" maddesi konulmalıdır.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-serif font-black text-primary mb-3">9. Onarım, Bakım Yetki ve Sorumluluk Maddeleri</h3>
                <p className="text-gray-650 leading-relaxed m-0 text-base">
                  Kira süresince mülkte meydana gelebilecek teknik arızaların kimin cebinden karşılanacağı netleştirilmelidir. "Kullanıma dayalı rutin giderler (ampul değişimi, musluk contası vb.) kiracıya; tesisat çürümesi, rutubet yalıtım sorunu, kombi anakart arızası gibi yapısal ve teknik kökenli arızaların onarım masrafları tamamen mal sahibine aittir" şeklinde adil bir formül yazılmalıdır.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-serif font-black text-primary mb-3">10. Yetkili Mahkeme ve İcra Daireleri</h3>
                <p className="text-gray-650 leading-relaxed m-0 text-base">
                  Olası dava ve icra takiplerinde dava açılacak icra dairesi veya mahkemenin önceden kararlaştırılması süreci hızlandırır. Sözleşmeye "Bu sözleşmeden doğacak ihtilafların çözümünde [İlgili İl/İlçe] Mahkemeleri ve İcra Daireleri yetkilidir" maddesi eklenerek hukuki süreçlerin yetki karmaşası olmadan yürütülmesi sağlanır.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Zorunlu Maddeler vs. İsteğe Bağlı Koruyucu Hükümler</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bir sözleşmenin ayakta kalabilmesi için yasal olarak bulunması **zorunlu unsurlar** ile tarafların özel talepleri doğrultusunda eklenen **isteğe bağlı veya koruyucu hükümler** arasında net bir çizgiyi ayırt etmek gerekir.
            </p>

            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Zorunlu Unsurlar (Kanuni Çekirdek)</th>
                    <th className="p-4 rounded-tr-2xl">Koruyucu & İsteğe Bağlı Maddeler</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-semibold text-primary">Tarafların Adı, Soyadı ve T.C. Kimlik Numaraları</td>
                    <td className="p-4">Depozitonun Banka Ortak Hesabında Tutulması Koşulu</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-semibold text-primary">Kiralanan Gayrimenkulün Tam Adresi ve Türü</td>
                    <td className="p-4">Alt Kiralama, Devir ve Airbnb Airbnb Yasağı Hükmü</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-semibold text-primary">Kira Başlangıç Tarihi ve Ödeme Periyodu</td>
                    <td className="p-4">Erken Tahliye Halinde 3 Aylık Kira Tazminat Sorumluluğu</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-semibold text-primary">Tarafların Islak veya Güvenli Elektronik İmzaları</td>
                    <td className="p-4">Kombinin Yıllık Bakım Ücretinin Kiracıya Ait Olması</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Notlar ve Yargıtay Kararlarıyla Tahliye Taahhütnamesi İlişkisi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Sözleşmeye eklenecek maddeler arasında en çok karıştırılanlardan biri de **tahliye taahhütnamesi** beyanıdır. 
              Mülk sahipleri sıklıkla bu beyanı kira sözleşmesinin içine bir madde olarak dahil etmeye çalışırlar. 
              Ancak Yargıtay'ın yerleşik içtihatlarına göre, **kira sözleşmesiyle aynı gün imzalanan veya doğrudan sözleşmenin içine gömülen tahliye taahhütleri "kiracının üzerinde serbest iradeyi kısıtlayan baskı oluşturduğu" gerekçesiyle geçersiz sayılır.**
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Tahliye taahhütnamesinin hukuken geçerli olabilmesi için, kira kontratının imzalanmasından **makul bir süre sonra** (genellikle en az 2-3 hafta sonra) ayrı bir kağıt olarak düzenlenmesi ve kiracının ıslak imzasını taşıması mecburidir. Bu nedenle bu iki evrakı birbirinden tamamen bağımsız süreçler olarak ele almalısınız.
            </p>

            {/* Örnek Sözleşme Bölümü */}
            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Örnek Kira Sözleşmesi Taslağı (Kopyalanabilir)</h2>
            <p className="text-gray-655 leading-relaxed mb-6">
              Aşağıdaki şablon, yasal güvenceleri ve yukarıda sayılan kritik maddelerin çoğunu içeren örnek bir taslaktır. 
              İhtiyacınıza göre kopyalayabilir, üzerinde düzenleme yapabilirsiniz.
            </p>

            <div className="bg-gray-100 hover:bg-gray-150/50 transition-colors p-8 rounded-[40px] border border-gray-200 my-10 font-mono text-sm relative">
              <button 
                onClick={handleCopy}
                className="absolute top-6 right-6 flex items-center bg-primary text-white hover:bg-black font-sans font-bold text-xs py-2 px-4 rounded-xl shadow transition-colors"
              >
                <ClipboardCopy className="h-4 w-4 mr-2" />
                {copied ? "Kopyalandı!" : "Metni Kopyala"}
              </button>
              <pre className="whitespace-pre-wrap overflow-x-auto text-gray-700 font-mono leading-relaxed max-h-[400px]">
                {sampleContract}
              </pre>
            </div>

            <div className="bg-yellow-500/10 p-8 rounded-3xl border-l-8 border-yellow-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <Info className="h-5 w-5 text-yellow-600 mr-2" />
                Önemli Hukuki Uyarı
              </h4>
              <p className="text-sm text-gray-750 leading-relaxed m-0">
                Her gayrimenkulün, bölgenin ve kullanım amacının kendine has özel dinamikleri bulunur. 
                Yukarıda sunulan taslak genel bir bilgilendirme amacıyla hazırlanmış olup, büyük ölçekli ve yüksek meblağlı kiralamalarınızda mutlaka uzman bir gayrimenkul avukatının görüşünü almanız önerilir.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kira kontratı e-Devlet üzerinden yapılabilir mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Evet. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı ile Hazine ve Maliye Bakanlığı ortaklığıyla yürütülen çalışmalar kapsamında kira sözleşmelerinin e-Devlet üzerinden yapılması altyapısı devreye alınmıştır. Bu sistem üzerinden kurulan kontratlar güvenilir kimlik doğrulama sağladığı için resmi nitelik taşımaktadır.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Sözleşmede artış oranı yazmıyorsa ne kadar zam yapılır?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Sözleşmede kira artışına dair hiçbir hüküm yer almıyorsa bile, Borçlar Kanunu gereğince yenilenen kira dönemlerinde yapılacak zam oranı yasal tavan olan **TÜFE 12 aylık ortalamasına göre** belirlenir. Kiraya veren bu sınırın üzerinde tek taraflı olarak zam yapamaz.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Şahitlerin imzası kira sözleşmesini daha mı güçlü yapar?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Şahitlerin varlığı sözleşmenin yasal geçerliliğini temelden etkilemez ancak olası "imza inkarı" ve "sözleşme tarihindeki sahtecilik" iddialarında mahkemeye tanıklık edebilecek üçüncü şahısların bulunması ispat kolaylığı açısından ek bir koruyucu katman sağlar.
                </p>
              </details>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">On Kritik Maddeye Sahip Kira Sözleşmenizi Hemen Ücretsiz Oluşturun</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Gelecekte yaşanabilecek her türlü yasal uyuşmazlığa karşı kendini korumaya al. Borçlar Kanunu standartlarına tam uyumlu, 10 kritik maddeyi barındıran yasal sözleşmeleri saniyeler içinde ücretsiz doldur ve PDF olarak indir.
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
              <span>Son Güncelleme: 20 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Av. Cansu Yıldız</span>
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
            <Link to="/aidat-kiraci-ev-sahibi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Aidatı Kim Öder?</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Konut ve işyeri kira ilişkilerinde apartman aidatını kim öder? Hangisi demirbaş gideridir...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
