import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, ClipboardCopy, HelpCircle, Calendar, Users, Percent, HelpCircle as QuestionIcon, Landmark, Star, Flame, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function StudentLeaseBlog() {
  const { t } = useTranslation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const keyClauses = [
    {
      title: "Kira Dönemi ve Fesih Serbestisi",
      detail: "Öğrenim takvimine uygun (9-10 aylık) kısa dönem sözleşme maddesinin açıkça belirtilmesi ve erken çıkış durumunda makul bir cezai kloz (maksimum 1-2 ay önceden bildirim şartı) konulması."
    },
    {
      title: "Kişi Sayısı ve Ortak Kiracılık",
      detail: "Evde kalacak öğrenci arkadaşlarının isimlerinin sözleşmede yer alması. Bu durum hem ev sahibinin 'izinsiz kişi kalıyor' demesini engeller hem de faturalandırılmada paydaşlık ispatıdır."
    },
    {
      title: "Müteselsil Sorumluluk Sınırı",
      detail: "Öğrencilerin ve ailelerin kefalet limitlerinin sınırlandırılması. Herkesin sadece kendi odası veya kendi kira payından sorumlu olacağını gösteren 'kısmi borç' şerhinin eklenmesi."
    },
    {
      title: "Eşya ve Demirbaş Teslim Tutanağı",
      detail: "Öğrenci evlerindeki beyaz eşya, koltuk, çalışma masası gibi demirbaşların model, marka ve hasar detaylarıyla birlikte imza altına alınarak PDF olarak depolanması."
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
        title={t('blogPage.studentLeaseTitle')}
        description={t('blogPage.studentLeaseSeoDesc')}
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
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Üniversite Tercih ve Barınma Rehberi 2026</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8 text-white animate-fadeIn"
          >
            Öğrenci Kira Sözleşmesi — Kısa Dönemli Kiralama Rehberi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Fakülte hayatına güvenli ve hukuken korunaklı başlayın. Kısa dönem sözleşme şartları, öğrencilerin anayasal ve yasal hakları ile bütçenizi koruyacak depozito tavsiyeleri.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Her üniversite dönemi başlangıcında yüz binlerce genç, eğitim alacakları şehirlere taşınarak yeni bir yaşam kurmanın heyecanını yaşarlar. 
              Ancak barınma ihtiyacını karşılamak için atılan adımlar, mülk sahipleri ile hukuki ilişkiler kurmayı da beraberinde getirir. 
              Öğrenciler genellikle deneyimsizlik, aciliyet hissi ve uyuşmazlıkların çözüm yollarını tam bilmeme gibi etkenlerden ötürü gayrimenkul kiralama pazarında en fazla kırılganlığa uğrayan kesimlerin başında gelmektedir. 
              Doğru bir şekilde tanzim edilmemiş, eksik maddeler içeren veya tek taraflı haklar barındıran bir kontrat, öğrencilerin hem akademik hayatını sekteye uğratabilir hem de ailelerini ciddi finansal zararlara sokabilir. 
              Bu nedenle, öğrencilerin ve velilerin yasal haklarını koruyabileceği, kısa eğitim sürelerine göre kurgulanmış profesyonel bir **öğrenci kira sözleşmesi** hazırlamaları ve yasal güvenceleri tam olarak kavramaları elzemdir. 
              Bu mufassal rehberimizde, Borçlar Kanunu bazında kısa dönemli kiralama yasal sınırlarını, üniversitelilerin en temel **öğrenci hakları** çerçevesini ve depozito iadesinde sorun yaşamamak adına pratik **depozito tavsiyeleri** başlıklarını tüm hukuki şeffaflığıyla ele aldık.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Kısa Dönem Sözleşme ve Öğrenim Hayatına Uyarlanması</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Türk Borçlar Kanunu (TBK) uyarınca kira sözleşmeleri genel anlamda belirli veya belirsiz süreli olarak kurulur. 
              Ülkemizde teamül haline gelen "en az 1 yıllık sözleşme" kalıbı, aslında öğrenciler için tam olarak verimli değildir. 
              Akademik takvimin genellikle Eylül veya Ekim aylarında başlayıp Haziran ayında sona erdiği düşünüldüğünde, öğrencilerin sadece 9 ya da 10 ay boyunca mülkü kullanması söz konusudur. 
              Yaz tatilinde memleketine dönecek, okul bittiğinde şehri terk edecek veya Erasmus gibi değişim programlarıyla yurt dışına gidecek öğrencilerin kalan 2-3 ay boyunca boş bir eve boşu boşuna kira ödemesi ciddi bir verimsizlik yaratır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bu tarz durumlarda, yasal standartlarda bir **kısa dönem sözleşme** hazırlanmaktadır. 
              Sözleşmenin başlangıç ve bitiş tarihlerinin (Örn: 15 Eylül 2026 - 15 Haziran 2027) net olarak belirtildiği ve tarafların rızasıyla kurulan bu kısa vadeli akitler hukuken tamamen geçerlidir. 
              Ancak ev sahipleri, kısa sürelerle ev kiralamanın temizlik, emlakçı komisyonu ve kiracı bulma maliyetlerinden ötürü bu fikre sıcak bakmayabilir. 
              Bunu ikna etmenin en mantıklı formülü, sözleşmeye "Öğrenci erken tahliye etmek isterse en az 60 gün önceden yazılı bildirim yapmak kaydıyla tazminatsız sözleşmeyi fesh edebilir" şeklinde özel bir madde (kloz) koymaktır. 
              Böylece hem mülk sahibinin mülkü yeni bir kiracıya kiralamak için yeterli zamanı olur hem de öğrenci gereksiz taahhüt yüklerinden arınmış olur.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start font-sans">
              <Calendar className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">9 Aylık Kira Sözleşmesi Yapmak Mümkün Mü?</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Evet, Türk hukuk sisteminde taraflar özgür iradeleri ile yasalara aykırı olmamak kaydıyla kira süresini diledikleri gibi belirleyebilirler. 
                  9 aylık veya akademik döneme endeksli 10 aylık bir **öğrenci kira sözleşmesi** tanzim etmek yasal olarak kusursuz bir geçerliliğe sahiptir ve bitiş gününde süre kendiliğinden sona erecek şekilde kurgulanabilir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Öğrenci Hakları: Ev Sahibi Baskılarına Karşı Yasal Kalkanınız</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Birçok mülk sahibi, öğrencileri barınma konusundaki çaresizliklerinden dolayı korumasız görerek çeşitli usulsüz taleplerde bulunabilmektedir. 
              Yasal temeli olmayan bu baskılara karşı, Borçlar Kanunu'nun kiracıyı koruyucu emredici hükümleri devreye girer. 
              Öğrencilerin bilmesi gereken en temel **öğrenci hakları** maddeleri şunlardır:
            </p>

            <ul className="space-y-4 text-gray-650 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Konut Dokunulmazlığı ve İzinsiz Giriş Yasağı:</strong> Ev sahibi, "Ev benim mülküm, kontrol etmek için gelebilirim" diyerek öğrencinin kaldığı eve dilediği saatte izinsiz giremez. Bu anayasal olarak konut dokunulmazlığı ihlalidir ve Türk Ceza Kanunu kapsamında suç teşkil eder (TCK m. 116). Ev sahibi mülkü ancak kiracıdan izin alarak, önceden kararlaştırılan makul saatlerde ziyaret edebilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Yasal Kira Artış Sınırı:</strong> 'Öğrenci' olmak, ev sahibine her dönem canının istediği oranda artış yapma hakkı vermez. Yapılacak yıllık artışlar, bir önceki yılın TÜFE (Tüketici Fiyat Endeksi) 12 aylık ortalamasını kesinlikle aşamaz. Bu yasal tepe sınırdır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Ortak Eve Arkadaş Ekleme (Alt Kiralama):</strong> Öğrenci evlerinde bütçeyi bölüşmek için eve yeni oda arkadaşları dahil edilmek istenir. Sözleşmenize "Kiracı, mülkte arkadaşlarıyla birlikte ortak yaşama ve oda arkadaşı ekleme hakkına sahiptir" ibaresini eklerseniz, mülk sahibi bu duruma yasal yollarla itiraz edemez.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Keyfi Tahliye İsteklerinin Reddi:</strong> "Ben bu evi başkasına satacağım", "Zaten öğrencisin okul bitti, hemen çık" gibi mazeretler tek başına yasal bir tahliye gerekçesi olamaz. Ev sahibi yasal haklı tahliye nedenleri (ihtiyaç, yeniden imar vb.) olmaksızın ve mahkeme kararı olmadan kiracıyı zorla evden tahliye edemez.</span>
              </li>
            </ul>

            <div className="bg-red-500/5 p-8 rounded-[40px] border border-red-500/10 my-10 flex items-start font-sans">
              <AlertCircle className="h-10 w-10 text-red-600 shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-red-950 mb-2">Tahliye Taahhütnamesini Boş İmzalamayın!</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Birçok ev sahibi, kontrat esnasında öğrencilere zorla boş tarihli bir "Tahliye Taahhütnamesi" imzalatmaktadır. 
                  Bu durum, ev sahibine istediği an sizi yasal süreçle sokağa atma kozu verir. Boş tarihli belgelere kesinlikle imza atmayın. 
                  Eğer imzalandıysa da, imza tarihinin kontrat tarihiyle aynı gün olduğunu yazılı bir ek protokol veya PDF zaman damgasıyla sabitleyin.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Öğrenciler İçin Altın Değerinde Depozito Tavsiyeleri</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Üniversite yaşamında öğrencileri ve ailelerini en çok yıpratan hukuki uyuşmazlıklardan biri depozito (güvence bedeli) iadeleridir. 
              Özellikle öğrenci evlerinden çıkarken ev sahipleri genellikle "Duvarlar çizilmiş", "Eşyalar yıpranmış", "Ev kirli bırakılmış" gibi bahaneler öne sürerek aldıkları depozitonun üstüne yatmak isterler. 
              Öğrenciler de yasal yollarla hak aramaya vaktinin olmayacağını düşünerek bu kaybı sineye çeker. 
              Ancak bütçenizi korumanızı sağlayacak şu hayati **depozito tavsiyeleri** ile bu sorunları en baştan sıfırlayabilirsiniz:
            </p>

            <ul className="space-y-4 text-gray-650 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Depozitoyu Banka Transferiyle "Açıklamalı" Gönderin:</strong> Ev sahibine elden kesinlikle nakit depozito vermeyin. Bankadan gönderirken açıklama kısmına kesinlikle "Atatürk Mah. Alp Sok. No:12 D:4 adresindeki mülkün Kira Sözleşmesi Güvence (Depozito) Bedeli" yazın.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Fotoğraflı ve Videolu Teslim Alım Yapın:</strong> Evi ilk kiraladığınız gün, mülkün tüm odalarını, mevcut çizik, kırık, nemlenme veya arıza durumlarını yüksek çözünürlüklü fotoğraflayın ve video kaydı alın. Bu medya dosyalarını tarih damgalı olarak saklayın. Dönem sonunda ev sahibi "Beni burayı kırdınız" dediğinde bu dijital delilleri önüne koyabilirsiniz.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Yasal Vadeli Tasarruf Hesabı Formülü (TBK m. 342):</strong> Borçlar Kanunu'na göre, depozito miktarı en fazla 3 aylık kira bedeli olabilir ve bu para mülk sahibinin şahsi hesabına değil, kiracı adına bir bankada açılacak ortak vadeli mevduat hesabına yatırılmalıdır. Banka parayı ancak iki tarafın rızasıyla ya da kesinleşmiş bir icra takibi/mahkeme kararı ile serbest bırakır. Bu kuralı ev sahibine teklif ederek paranızın enflasyon karşısında erimesini de engelleyebilirsiniz.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Standart Kira Sözleşmesi vs. Öğrenciye Özel Kira Sözleşmesi</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Kriterler</th>
                    <th className="p-4">Standart Kontrat</th>
                    <th className="p-4 rounded-tr-2xl">Öğrenci Odaklı Kontrat</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Sözleşme Süresi</td>
                    <td className="p-4 text-gray-500">Genellikle 1 Yıl Sabit (Otomatik uzamalı)</td>
                    <td className="p-4 text-green-700 font-bold">9-10 Aylık (Akademik takvime özel uyarlanabilir)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Kefalet Yapısı</td>
                    <td className="p-4 text-gray-500">Müteselsil Kefil (Genel geniş taahhüt)</td>
                    <td className="p-4 text-green-700 font-semibold font-sans">Velilerin limitsiz ortak sorumluluğundan kaçınan kısmi oda payı kefaleti</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Oda Arkadaşı Ekleme</td>
                    <td className="p-4 text-red-650 font-semibold">Ev sahibi onayına bağlı (Yasaktır)</td>
                    <td className="p-4 text-green-700 font-bold">Sözleşmeye eklenen kloz ile serbest (Ev arkadaşı hakkı)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Yaz Dönemi Tahliyesi</td>
                    <td className="p-4 text-gray-500">Yıl boyunca kesintisiz sorumluluk</td>
                    <td className="p-4 text-green-700 font-semibold">Önceden haber vererek erken çıkış serbestisi</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6 font-serif">4. Sözleşmeye Eklenmesi Gereken 4 Hayati Kloz</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Öğretim hayatınız boyunca başınızı ağrıtmayacak bir **öğrenci kira sözleşmesi** tanzim ederken mutlaka ekletmeniz gereken, yasal koruma kalkanı işlevi görecek özel şablon cümleleri aşağıda hazırladık. 
              Bunları kolayca kopyalayıp online sözleşme oluştururken "Özel Şartlar" alanına ekleyebilirsiniz.
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
                <GraduationCap className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Öğrenci Dostu Kira Sözleşmesini Şimdi Üretin</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Kanun standartlarına tam uyumlu, oda arkadaşı ekletme izinli öğrenci kira sözleşmesini online formumuz ile hazırlayıp PDF olarak indirin.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Şimdi Öğrenci Sözleşmesi Oluştur
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
                    Ev arkadaşımdan biri evden ayrılırsa kira ödeme yükümlülüğü nasıl paylaşılır?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Eğer sözleşmede tüm arkadaşların adı 'Kiracılar' olarak bir arada yazılmışsa, yasal olarak mülk sahibine karşı "müteselsilen (ortaklaşa ve zincirleme)" tüm borçtan herkes tam sorumludur. Evden ayrılan arkadaşınızın payını ev sahibi sizden talep edebilir. Bu riskin önüne geçmek için sözleşmeye "Kiracıların her biri sadece toplam kira bedelinin kendi oda payı oranı olan %... miktarından munhasıran sorumludur; diğer kiracının borcundan müteselsil sorumlu tutulamaz" ibaresi eklenmelidir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Öğrenci olarak 18 yaşından küçüğüm, sözleşmeyi şahsen imzalayabilir miyim?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Medeni Kanuna göre 18 yaşından küçük bireyler tam ehliyetli sayılmadıklarından, doğrudan kendi imzaları ile hukuki taahhüt (kira sözleşmesi) imzalayamazlar. 18 yaş altındaki öğrencilerin kira sözleşmelerinde ebeveynlerinin (veli veya vasilerinin) 'Kanuni Temsilci' sıfatıyla imzası ve rızası aranır. Kontrat anne veya baba adına tanzim edilmeli, öğrenci mülkü kullanacak kişi (alt kullanıcı) olarak belirtilmelidir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Kira sözleşmesinde yazan 'ortak giderler ve aidatlar' kime aittir, öğrenci mi öder?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Apartman aidatlarında 'kullanma' ve 'mülk' giderleri ayrımı vardır. Temizlik, asansör elektriği, kapıcı maaşı gibi kullanım odaklı rutin aidat giderlerinden kiracı sorumludur. Ancak binanın mantolaması, asansör yenilenmesi, çatı onarımı gibi mülkün demirbaş değerini ve kalitesini artıran yatırım harcamalarından tamamen ev sahibi sorumludur. Aidat faturasında bu ayrımı netleştirerek ev sahibinin ödemesi gereken kalemlerin size yıkılmasının önüne geçebilirsiniz.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 8 Haziran 2026</span>
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
            <Link to="/kira-sozlesmesi-pdf-kaydetmek" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">PDF Kaydetmenin Önemi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira kontratlarını dijital arşiv ile muhafaza etmenin ispat avantajları, güvenlik kalkanı ve bulut yedeklemesi...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-iban-odeme-onemi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">IBAN ile Kira Ödeme Önemi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Nakit ödemelerin ispat zorluğu, banka dekontlarının delil niteliği ve Borçlar Kanunu bazında tarafların hakları...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kiralik-evde-tadilat-kim-oder" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kiralık Evde Tadilat</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kiralık ev tadilat masrafları kime aittir? Kiracı vs ev sahibi sorumluluğu, zorunlu ve keyfi tadilatlar, izin şartları...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
