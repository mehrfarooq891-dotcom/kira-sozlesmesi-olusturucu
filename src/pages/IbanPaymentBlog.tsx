import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, ClipboardCopy, HelpCircle, Landmark, Coins, Calendar, FileCheck, ShieldAlert, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function IbanPaymentBlog() {
  const { t } = useTranslation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const transferTemplates = [
    {
      label: "Standart Konut Kirası Açıklaması",
      text: "2026 Yılı Haziran Ayı Kira Bedeli - Atatürk Mah. Alp Sok. No:12 D:4 Çankaya/Ankara - Kiracı: Ahmet Yılmaz"
    },
    {
      label: "İşyeri (Ofis/Dükkan) Kirası Açıklaması",
      text: "Haziran 2026 Dönemi Net Stopajlı İşyeri Kira Ödemesi - Barbaros Bulvarı No:45 Beşiktaş/İstanbul - Ödeyen: Tasarım Ltd. Şti."
    },
    {
      label: "Ortak Kiracılı Ev Arkadaşı Payı Açıklaması",
      text: "Haziran 2026 Kira Bedeli Payı (Toplam Kiradan Benim Payım) - Karşıyaka/İzmir - Ödeyen: caner Demir"
    },
    {
      label: "Depozito / Güvence Bedeli Açıklaması",
      text: "Kira Sözleşmesi Kapsamında Depozito (Güvence) Bedeli Ödemesi - Atatürk Mah. Çankaya/Ankara"
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.ibanPaymentTitle')}
        description={t('blogPage.ibanPaymentSeoDesc')}
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
            <Landmark className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Finansal ve Hukuki Güvence 2026</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8 text-white"
          >
            IBAN ile Kira Ödemenin Önemi — Neden Nakit Ödememeli?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Kira ödemelerinde nakit dönemi yasal risklerle kapanıyor. İspat zorluğu, banka dekontunun delil niteliği ve Borçlar Kanunu bazında tarafları koruyan kesin yöntemler.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Kiralayan ve kiracı arasındaki ilişkilerin en hassas, uyuşmazlığa en açık noktası hiç şüphesiz para transferleridir. 
              Eski dönemlerden kalma "elden kira verme, nakit ödeyip helalleşme" alışkanlıkları, günümüzün katı hukuki düzenlemeleri ve vergi mevzuatları karşısında tarafları telafisi imkansız zararlarla karşı karşıya bırakmaktadır. 
              Yasalar önünde her iki tarafın da haklarını kusursuz koruyabilmesinin, olası bir uyuşmazlıkta haklılığını belgelemesinin tek ve en sağlam yolu dijital bankacılıktır. 
              Peki, güncel Türk hukukunda **kira IBAN ödeme** süreci neden alternatifsiz bir zorunluluktur? 
              Nakit kira ödemesi gerçekleştirmek ne gibi ciddi riskler yaratır? 
              Banka dekontunun bir mahkemede "ezber bozan" delil gücü nedir ve açıklama kısmına tam olarak ne yazılmalıdır? 
              Bu mufassal makalemizde, Borçlar Kanunu ve Gelir Vergisi Kanunları çerçevesinde kira ödemelerinde banka transferinin önemini, ispat araçlarını ve yasal cezaların önüne geçecek en güvenli adımları derledik.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Nakit Ödemenin En Büyük Tehlikesi: Yasal İspat Zorluğu</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Hukuk sistemimizde iddia sahibi, iddiasını ispat etmekle mükelleftir. Bir kiracı olarak "Ben kiramı her ay elden el kiralayana teslim ettim" demek, herhangi bir yazılı belge olmadığı sürece mahkeme önünde sıfır kıymete sahiptir. 
              Hukuk Muhakemeleri Kanunu (HMK) uyarınca, belirli bir tutarın üzerindeki hukuki işlemlerin (ki asgari ücret seviyesi göz önüne alındığında neredeyse tüm konut kiraları bu kapsama girmektedir) senetle, yani yazılı delille ispat edilmesi zorunludur.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Eğer kiracı elden nakit ödeme yapıp karşılığında ev sahibinden ıslak imzalı bir "Kira Teslim Alındı Makbuzu" edinmemişse; kötü niyetli bir ev sahibinin "Bana 5 aydır kira ödemiyor" diyerek tahliye davası (TBK m. 315) veya icra takibi başlatması halinde kiracı kendini savunamaz. 
              Mahkeme kiracının "Elden nakit verdim, komşular şahittir" savunmasını veya şahit (tanık) beyanlarını kabul etmez. Yasa koyucu bu durumda sadece yazılı belgeyi veya banka verilerini delil olarak arar. Dolayısıyla **kira IBAN ödeme** usulü, kiracıyı tek bir iddia ile sokağa atılma tehlikesinden koruyan yegane hukuki zırhtır.
            </p>

            <div className="bg-red-500/5 p-8 rounded-[40px] border border-red-500/10 my-10 flex items-start font-sans">
              <ShieldAlert className="h-10 w-10 text-red-600 shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-red-950 mb-2">Elden Nakit Vermişseniz Şahit Kabul Edilmez!</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Borçlar Kanunu davalarında en fazla yapılan hata, nakit ödemelerin komşu, akraba veya emlakçı şahitliğiyle kanıtlanabileceğini sanmaktır. 
                  Yargıtay içtihatlarına göre, aksi kararlaştırılmadıkça veya karşı taraf muvafakat vermedikçe kira bedelinin ödendiği hususu tanıkla ispatlanamaz. Yazılı makbuzunuz yoksa, iki kez kira ödemek durumunda kalabilirsiniz.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Banka Dekontu Önemi: Mahkemede Kanıt Değeri Nedir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bankalar aracılığıyla gerçekleştirilen eft, havale veya fast işlemleri sonucunda üretilen banka dekontları, resmi nitelikte birer yazılı ispat aracıdır. 
              Ancak her banka transferi de kiracıyı doğrudan kurtarmaya yetmez. Dekontun üzerinde yer alan bilgiler ve özellikle "Transfer Açıklaması" hukuki kaderinizi belirler.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Türk Borçlar Kanunu’nun genel hükümlerine göre; bir borç ödendiğinde, yapılan ödemenin hangi borca mahsuben yapıldığı açıkça belirtilmemişse, borcun öncelikle muaccel (vadesi gelmiş) olan ilk borca, ardından sırasıyla diğer borçlara sayılacağı hüküm altına alınmıştır. 
              Eğer açıklama kısmını boş bırakıp salt para gönderirseniz, ev sahibi veya vekili bu paranın "geçmişten kalan başka bir elden borç" veya "depozito eksiği" ya da "ortak gider katılım payı" için gönderildiğini iddia edebilir. 
              Bu nedenle, yapılan her **kira IBAN ödeme** işleminin açıklama kısmında **ilgili ay, yıl ve kiranın ödendiği mülkün adresi** mutlaka açıkça yazmalıdır.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start font-sans">
              <FileCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Banka Açıklamasına "Borç Ödemesi" Yazmak Facia Getirebilir</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Transfer açıklamasında sadece "Kira" yerine aceleyle "Ödeme", "Emanet" veya "Borç Ödemesi" yazarsanız, karşı tarafın avukatı bu paranın kira ilişkisinden bağımsız bir borcun iadesi olduğunu ileri sürecektir. 
                  Bu sebeple açıklama kalıplarını her ay büyük bir titizlikle ve disiplinle yazmalısınız.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Maliye Bakanlığı ve Gelir İdaresi (GİB) Cezalarından Kaçınmak</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kiranın IBAN üzerinden ödenmesi yalnızca tarafların kendi aralarındaki uyuşmazlıklara derman olmaz, aynı zamanda devletin vergi denetim mekanizmalarıyla da sorun yaşamanızı engeller. 
              Maliye Bakanlığı tebliğlerine göre, konut kiralarında aylık belirli limitleri aşan (ve sürekli güncellenen vergi yönergeleri uyarınca artık hemen hemen tüm kiraların) bankalar veya PTT kanalıyla tahsil edilmesi yasal zorunluluktur.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bu kurala uymayan, yani kirayı bankacılık sitemine sokmayıp elden teslim eden veya alan kişilere Gelir İdaresi Başkanlığı tarafından her bir usulsüz işlem için **özel usulsüzlük cezası** kesilmektedir. 
              Ev sahibinin "Vergim düşük çıksın ya da hiç çıkmasın" düşüncesiyle kiracıyı elden ödemeye zorlaması, her iki tarafı da mali takiplere ve çok haneli idari para cezalarına sürükler. 
              Ayrıca, banka hesabı üzerinden ödenen kira gelirlerinin takibi e-Devlet ve Kira Beyanname sistemleri ile entegre olduğundan, dürüst ve şeffaf bir **kira IBAN ödeme** süreci ev sahibini de ileride açılacak "Vergi Kaçırma / Eksik Beyan" soruşturmalarından kurtarır.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Taraflar Arasındaki 3 Kritik "Yasal Güvence"</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira ödemelerini tamamen IBAN'a ve dijital kayıtlara kaydırmak, kira sözleşmesinin feshinden tahliye davalarına kadar her aşamada yasal güvenceler sunar. 
              İşte o kritik yasal korumalar:
            </p>

            <ul className="space-y-4 text-gray-650 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>"Geç Ödedi" veya "Ödemedi" İhtarlarına Karşı Tam Koruma:</strong> Ev sahipleri bir kira yılı içinde kirasını vaktinde ödemeyen kiracıya iki haklı ihtar çekerek tahliye davası açabilir. Eğer kirayı gününde IBAN'a gönderirseniz, sistem saati ve tarihi kesin delil olacağından, ev sahibinin haksız yere "Geç ödedin" iddiasıyla ihtar çekme şansı tamamen ortadan kalkar.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Kira Artış Oranının İspatı:</strong> Yeni dönemde yapacağınız yasal TÜFE kira artış tutarını bankadan düzenli olarak göndermeye başladığınızda ve ev sahibi bunu itirazsız kabul ettiğinde, zımni (örtülü) bir anlaşma kurulmuş olur. Bu durum, kiracı olarak sizin yasal sınırlara riayet ettiğinizin banka kayıtlı ispatıdır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Depozitonun Geri Alınma Güvencesi:</strong> Kiralama başlangıcında banka üzerinden "Depozito / Güvence Bedeli" açıklamasıyla gönderilen paralar, evden çıkarken ev sahibinin "Bana depozito vermemiştin" şeklindeki inkarlarını tek kalemde çürütür.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Nakit vs. IBAN (Kira Ödeme Yöntemleri Karşılaştırma Matrisi)</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Kira Ödeme Kriteri</th>
                    <th className="p-4">Nakit (Elden Ödeme)</th>
                    <th className="p-4 rounded-tr-2xl">IBAN (Banka Havalesi/FAST)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Mahkemede İspat Gücü</td>
                    <td className="p-4 text-red-650 font-semibold">Çok Düşük (Yalnızca ıslak imzalı makbuz varsa geçerli)</td>
                    <td className="p-4 text-green-700 font-bold">Tam ve Kesin Delil (%100 Yasal İspat)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Tanık (Şahit) Dinletme</td>
                    <td className="p-4 text-red-650">Yasal Seviye Üstünde İmkansız (Geçersiz kabul edilir)</td>
                    <td className="p-4 text-green-700 font-semibold font-sans">Tanığa dahi gerek duyulmaz</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Maliye / GİB Cezası Riski</td>
                    <td className="p-4 text-red-650 font-semibold">Çok Yüksek (%5 - %10 Özel Usulsüzlük Cezası)</td>
                    <td className="p-4 text-green-700 font-semibold">Sıfır Risk (Yasal standartlara tam uyum)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Ödeme Saati ve Tarihi Netliği</td>
                    <td className="p-4 text-red-650">Belirsiz (İspat edilemez, tarafların sözüne kalır)</td>
                    <td className="p-4 text-green-700 font-bold">Resmi Zaman Damgalı (Saniye hassasiyetinde kayıt)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6 font-serif">5. En Güvenli Yöntem: Doğru Açıklama Metni Kullanmak</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira öderken bankacılık uygulamanızda her ay rastgele kelimeler yazmak yerine, hukuken sarsılmaz ve net ifadeler kullanmalısınız. 
              Sizin için hazırladığımız, Yargıtay hukuk dairelerinin direkt kabul ettiği standart taslakları aşağıdan kolayca kopyalayarak bankacılık uygulamanızda kullanabilirsiniz.
            </p>

            {/* Kopyalanabilir Dekont Açıklama Paneli */}
            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Kira Havalesi İçin Kopyalanabilir Açıklama Şablonları</h3>
            <p className="text-gray-655 leading-relaxed mb-6">
              Aşağıdaki şablonlardan durumunuza uygun olanın üzerindeki butona tıklayarak kopyalayabilir, ödemenizi yaparken açıklama satırına yapıştırabilirsiniz:
            </p>

            <div className="space-y-6 my-10 font-sans">
              {transferTemplates.map((template, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-200 hover:border-accent transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-black uppercase text-accent tracking-wider block mb-2">{template.label}</span>
                    <span className="text-sm font-mono text-gray-750 block">{template.text}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(template.text, idx)}
                    className="shrink-0 bg-primary hover:bg-black text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center transition-colors shadow-sm"
                  >
                    <ClipboardCopy className="h-4 w-4 mr-2" />
                    {copiedIndex === idx ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl font-sans">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileCheck className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Sözleşmenizi Yasal Standartlarda Hazırlayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Ödemelerinizi IBAN üzerinden yaparken, sözleşmenize de banka hesap bilgilerini eksiksiz eklemelisiniz. 2026 yılı güncel yasal kira sözleşmenizi hemen ücretsiz oluşturun.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Şimdi Kira Sözleşmesi Üret
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
                    Ev sahibi elden ödeme yapmam için baskı uyguluyor, ne yapmalıyım?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Ev sahibinin elden ödeme baskısı kurması hem yasal değildir hem de suç teşkil edebilir. Böyle bir durumda öncelikle yazılı olarak (SMS, WhatsApp, noter ihtarı) ev sahibinden geçerli bir IBAN numarası talep etmelisiniz. Eğer buna rağmen IBAN verilmezse veya reddedilirse, PTT kanalıyla "Konutta Ödemeli" olarak parayı ev sahibinin adına gönderebilirsiniz. Son çare olarak sulh hukuk mahkemesine başvurarak "Tevdi Mahalli Tayini" (Ödeme Yeri Belirlenmesi) davası açıp mahkemenin tayin edeceği banka hesabına kiranızı güvenle yatırabilirsiniz.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Ev sahibi kirayı eşinin, oğlunun veya başka bir yakınının IBAN'ına göndermemi istiyor, sakıncası var mı?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Evet, bu durum son derece risklidir! Kira ödemesi her zaman kira sözleşmesinde "Kiraya Veren" sıfatını taşıyan mülk sahibinin şahsi hesabına yapılmalıdır. Başka birinin hesabına para gönderdiğinizde, kiralayan "Bana kira borcunu ödemedin" diyerek hukuki süreç başlatabilir ve sizin üçüncü kişiye yaptığınız ödeme yasal olarak kira borcunuzu kapatmayabilir. Eğer mutlaka başka bir hesaba gönderilecekse, kontrata bu kişinin IBAN bilgisi ve "Kiralayanın talimatı ile ödemelerin yapılacağı yetkilendirilmiş hesap" kaydı eklenmeli veya kiralayandan bu durumu onaylayan yazılı, ıslak imzalı bir beyan alınmalıdır. Ayrıca transfer açıklamasında "Sözleşmeci ... adına kiralayan ...'ın kira borcu" detayı kesinlikle belirtilmelidir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Havale ücreti (eft/fast masrafı) kiradan kesilerek eksik gönderilebilir mi?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Hukukta kira borcu "götürülecek borçlardandır." Yani paranın kiralayana tam ve noksansız olarak ulaştırılması kiracının sorumluluğundadır. Bu nedenle eft/havale/fast masrafı nedeniyle ev sahibinin hesabına kiradan 5 TL, 10 TL dahi eksik para geçmesi teknik olarak "eksik ödeme" sayılır. Kötü niyetli kiralayanlar bu ufak eksiklikleri dahi biriktirerek "temerrüt nedeniyle tahliye" veya icra takibi konusu yapabilmektedir. Ödemenizi yaparken masrafların kiranın içinden düşülmediğinden ve karşı tarafa net rakamın ulaştığından emin olun.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm animate-fadeIn">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 6 Haziran 2026</span>
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
            <Link to="/kiralik-evde-tadilat-kim-oder" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kiralık Evde Tadilat</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kiralık ev tadilat masrafları kime aittir? Kiracı vs ev sahibi sorumluluğu, zorunlu ve keyfi tadilatlar, izin şartları...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/ev-sahibi-haklari-2026" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Ev Sahibinin Hakları 2026</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Borçlar Kanunu kapsamında kira artış hakları, tahliye gerekçeleri, kendi mülkünü kullanma ve yasal korumalar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-sozlesmesiz-oturmak-riskli-mi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesiz Oturmak</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesi yapmadan bir gayrimenkulde yaşamaktan doğacak yasal ispat zorlukları, tahliye tehlikeleri ve çözümler...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
