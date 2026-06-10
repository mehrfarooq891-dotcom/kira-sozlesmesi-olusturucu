import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Users, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, ClipboardCopy, HelpCircle, UserCheck, RefreshCw, Key, Scale, Landmark, FileCheck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function TenantChangeBlog() {
  const { t } = useTranslation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const transferDrafts = [
    {
      label: "Kiracı Değişikliği / Kira Sözleşmesi Devir Sözleşmesi Protokolü",
      text: `KİRA SÖZLEŞMESİ DEVİR SÖZLEŞMESİ (PROTOKOLÜ)

1. TARAFLAR
DEVREDEN (Eski Kiracı) : [Adı Soyadı, T.C. Kimlik No, Adresi]
DEVRALAN (Yeni Kiracı) : [Adı Soyadı, T.C. Kimlik No, Adresi]
KİRAYA VEREN (Ev Sahibi) : [Adı Soyadı, T.C. Kimlik No, Adresi]

2. DEVREDİLEN KİRA SÖZLEŞMESİ DETAYLARI
Sözleşme Tarihi   : [Ana Sözleşmenin Başlangıç Tarihi]
Taşınmaz Adresi   : [Kiralık Konut/İşyeri Açık Adresi]
Güncel Kira Bedeli: [Aylık Net Ödenen Kira Tutarı]
Kira Ödeme Günü   : Her ayın [Ödeme Günü] günü.

3. PROTOKOL ŞARTLARI VE KİRA DEVRİ ŞARTLARI
3.1. Devreden (Eski Kiracı), ekte yer alan ve tarafları arasında geçerli olan .../.../...... tarihli kira sözleşmesinden doğan tüm hak ve borçlarını, Kiraya Veren’in muvafakati ile Devralan (Yeni Kiracı)’a devretmiştir.
3.2. Devralan (Yeni Kiracı), devir tarihi olan .../.../2026 itibarıyla kiralık taşınmazı teslim aldığını ve sözü edilen ana kira sözleşmesinden kaynaklanan her türlü hak ile borcun (Kira bedeli ödeme, özenle kullanma, aidat ve ortak gider katılım yükümlülükleri dahil) kendisine geçeceğini kabul, beyan ve taahhüt eder.
3.3. Kiraya Veren (Mal Sahibi), bu sözleşme ile gerçekleşen kiracı değişikliğine onay verdiğini ve Devralan’ı yeni kiracı olarak kabul ettiğini beyan eder.
3.4. DEPOZİTO DURUMU: Devredenin kira başlangıcında teslim etmiş olduğu [Tutar] depozito bedeli, tarafların mutabakatıyla yeni kiracıya (Devralana) devredilmiştir. Bu aşamadan sonra mülkten tahliyede depozito iadesi yeni kiracıya yapılacaktır. Eski kiracı mal sahibinden depozito talebinde bulunamaz.
3.5. Eski Kiracının (Devredenin) sorumluluğu, devir tarihi olan .../.../2026 tarihine kadar olan borçlarla sınırlı olup, bu tarihten sonraki dönem borçlarından münhasıran yeni kiracı sorumludur (TBK m. 323 uyarınca ticari kiralardaki ortak sorumluluk süresi saklıdır).

İşbu protokol, 3 (üç) nüsha olarak düzenlenmiş, taraflarca okunarak imzalanmıştır. .../.../2026

DEVREDEN (İmza)          DEVRALAN (İmza)          KİRAYA VEREN (İmza)`
    }
  ];

  const handleCopyDraft = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.tenantChangeTitle') + " — Devir Protokolü 2026"}
        description={t('blogPage.tenantChangeSeoDesc')}
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
            <RefreshCw className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Sözleşme Güncelleme ve Devir 2026</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            Kiracı Değişikliği Nasıl Yapılır? Devir Sözleşmesi Rehberi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Mevcut kontratı bozmadan eski kiracının haklarını yeni kişiye devretmesi. Kanuni kira devri şartları, yazılı ev sahibi onayı, yeni sözleşme gerekliliği ve pratik dilekçe taslağı.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Kira ilişkileri devam ederken, dinamik yaşam koşullarına bağlı olarak kiracı tarafında değişiklik yapılması ihtiyacı sıklıkla doğabilmektedir. 
              Özellikle iş yeri ortaklıklarındaki değişiklikler, şirket devirleri, paylaşımlı öğrenci evlerindeki ayrılıklar veya ev arkadaşının değişmesi gibi durumlarda, kiracılık hakkının bir başkasına devredilmesi gündeme gelir. 
              Ancak birçok ev sahibi ve kiracı, kiracı adının değiştirilmesini sadece basit bir isim karalamasından ibaret görerek hareket eder. 
              Gerekli hukuki adımların atılmaması, tarafları "izinsiz alt kiralama" veya "haksız işgal" ithamıyla karşı karşıya bırakarak ani tahliye davalarının açılmasına sebebiyet verebilir. 
              Kira sözleşmesinin devredilip asıl hakların güvenle aktarılabilmesinin yegane güvenli yolu, Türk Borçlar Kanunu kapsamında tanımlanan **kiracı değişikliği devir** prosedürlerine tam bağlılıktır. 
              Peki, günümüz yasal düzenlemelerinde kira devri şartları nelerdir? 
              Mülk sahibinin rızasını almak hangi durumlarda alternatifsizdir? 
              Süreci yönetmek adına yeni bir kira kontratı imzalamak mı, yoksa üç taraflı bir devir protokolü hazırlamak mı daha sağlıklıdır? 
              Bu kapsamlı rehberimizde kiracı devir sözleşmesinin ayrıntılarını, yasal gereklilikleri ve haklarınızı koruyacak pratik taslakları inceledik.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Kiracı Değişikliği Devir Kavramı Nedir ve Hukuki Temeli</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmesinin devri, yürürlükte olan bir kira ilişkisinde kiracı tarafının sahip olduğu tüm yasal hak, doğrudan yetki ve borçların başka bir üçüncü şahsa veya tüzel kişiliğe aynen aktarılmasıdır. 
              Burada esas olan, mülkün boşaltılıp sıfırdan bir ilişki kurulması değildir. 
              Aksine, mevcut kira kontratının şartları (kira bedeli, artış oranları, tahliye tarihleri vb.) devam ederken, taraflardan "kiracı" sütunundaki ismin resmi olarak güncellenmesidir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Türk Borçlar Kanunu’nun (TBK) 323. maddesi, kira ilişkisinin devrini açık bir düzenleme ile hüküm altına almıştır. 
              Yasa gereği, kontrattaki hak ve borçlar devredildiğinde, devreden (eski kiracı) kendiliğinden kira sözleşmesinden sıyrılmış olur. 
              Ancak bu devrin gerçekleşebilmesi için kanunda çok katı sınırlar belirlenmiştir. 
              Bu sınırların başında ise hiç şüphesiz "kiraya verenin izni ve rızası" gelmektedir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Kira Devri Şartları Nelerdir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Hukuki olarak geçerli bir **kiracı değişikliği devir** işleminin kurulabilmesi için birtakım temel kuralların eksiksiz yerine getirilmesi gerekir. 
              Bu koşullar, mülkün cinsine (konut veya çatılı işyeri) göre de farklılık göstermektedir:
            </p>

            <ul className="space-y-4 text-gray-650 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Konut Kiralarında Devir Sınırları:</strong> Konut (mesken) niteliğindeki mülklerde, kiracı ev sahibinin yazılı rızasını almadıkça kira ilişkisini bir başkasına devredemez. Ev sahibi bu izni hiçbir sebep göstermeden dahi vermekten imtina edebilir. Yani konutlarda ev sahibinin kararı nihai veto hakkı taşır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>İşyeri Kiralarında Devir Farklılığı:</strong> Çatılı işyeri kiralama süreçlerinde durum ticari hayatın korunması gerekçesiyle biraz daha esnektir. TBK m. 323 uyarınca; kiraya veren, işyeri kira sözleşmelerinin devredilmesine 'haklı bir neden' olmaksızın rıza göstermekten kaçınamaz. Örneğin, yeni kiracının ödeme gücünün zayıf olması veya aynı binada haksız rekabet yaratacak olması haklı bir neden sayılabilir; ancak bunun dışındaki keyfi engellemeler yasal olarak geçersiz kalır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Ortak Borç Sorumluluk Süresi:</strong> İşyeri kira devirlerinde, devreden eski kiracı sözleşmenin bitimine kadar (ve her halükarda en fazla iki yıl süreyle) devralan yeni kiracı ile birlikte müteselsilen (zincirleme olarak) ev sahibine karşı sorumlu kalmaya devam eder.</span>
              </li>
            </ul>

            <div className="bg-red-500/5 p-8 rounded-[40px] border border-red-500/10 my-10 flex items-start font-sans">
              <AlertCircle className="h-10 w-10 text-red-600 shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-red-950 mb-2">İzinsiz Devir Açıkça Tahliye Sebebidir!</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Borçlar Kanununa göre, ev sahibinin yazılı onayı olmaksızın bir konutta kiracı değişikliği yapmak, doğrudan "akde aykırılık" uyarınca tahliye (TBK m. 316) gerekçesidir. Ev sahibi, mülkü kullanan üçüncü kişiyi "fuzuli işgalci" sıfatıyla tahliye ettirebileceği gibi, eski kiracıya da tazminat davası açabilir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Ev Sahibi Onayı: Neden Yazılı Olmak Zorunda?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira devirlerinde en sık yapılan hata, mal sahibinin şifahi (sözlü) rızasına güvenmektir. 
              "Biz ev sahibini aradık, 'Kardeşim çıksın arkadaşın kalsın sorun yok' dedi" şeklindeki yaklaşımlar, hukuken hiçbir bağlayıcılığa sahip değildir. 
              İleride tarafların arası bozulduğunda veya kira artış oranlarında uyuşmazlık yaşandığında, ev sahibi "Benim bu kişiden haberim yok, rızam yoktur, izinsiz alt kiralama yapılmıştır" iddiasıyla yasal süreç başlatabilir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Borçlar Kanunu, **ev sahibi onayı** şartının mutlak surette **yazılı** olmasını emreder. 
              Bu rıza, doğrudan kira kontratının altına eklenecek bir şerh/imza ile verilebileceği gibi, tarafların bir araya gelerek imzalayacağı bağımsız bir **kira devri protokolü** ile de resmileştirilebilir. 
              Yazılı onay belgesi kiracı değişikliğinin yasal can simididir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Yeni Sözleşme Gerekliliği vs. Devir Sözleşmesi (Üçlü Protokol)</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kiracı değişikliği yapmak istendiğinde önünüzde iki temel hukuki yol bulunur. 
              İki seçeneğin de avantajları ve riskleri farklıdır:
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 font-sans text-sm">
              <h4 className="text-xl font-serif font-black text-primary mb-4">A) Sıfırdan Yeni Kira Sözleşmesi İmzalamak (Önerilen Temiz Başlangıç)</h4>
              <p className="text-gray-650 leading-relaxed mb-4">
                En net ve pürüzsüz yöntemdir. Eski kiracı ile olan ilişki tamamen feshedilir (borçsuzluk tutanağı alınarak), mülk sahibi ile yeni kiracı arasında sıfırdan, yasal standartlarda **yeni sözleşme gerekliliği** hasıl olur.
              </p>
              <ul className="list-disc pl-5 text-gray-650 space-y-2">
                <li><strong>Avantajı:</strong> Geçmişe dönük hiçbir borç, yükümlülük veya uyuşmazlık yeni kiracıya sirayet etmez. Kira artış dönemleri, şartları sıfırdan belirlenir.</li>
                <li><strong>Dezavantajı:</strong> Ev sahibi, yeni kontrat imzalamayı bahane ederek kira bedelini piyasa rayicinin çok üstüne çıkarmak isteyebilir.</li>
              </ul>
            </div>

            <div className="bg-accent/5 p-8 rounded-[40px] border border-accent/10 my-10 font-sans text-sm">
              <h4 className="text-xl font-serif font-black text-primary mb-4 font-serif">B) Kira Devir Sözleşmesi (Protokolü) İmzalamak</h4>
              <p className="text-gray-650 leading-relaxed mb-4">
                Sıfırdan sözleşme yapılmak istenmediğinde, mevcutta devam eden (örneğin 3. yılında olan) avantajlı kira bedeline sahip kontrata yeni kiracının eklemlenmesi yöntemidir. 
                Eski kiracı, yeni kiracı ve ev sahibi arasında üçlü bir protokol kurulur.
              </p>
              <ul className="list-disc pl-5 text-gray-650 space-y-2">
                <li><strong>Avantajı:</strong> Eski avantajlı kira bedeli, depozito miktarları ve kontrat kuralları aynen korunur.</li>
                <li><strong>Dezavantajı:</strong> Yeni kiracı (Devralan), eski kiracının geçmişte yapmış olabileceği tahribatlardan veya asıl kontrattaki ağır yükümlülüklerden habersiz olarak sorumlu hale gelebilir. Dikkatli bir hasar-borç tespiti şarttır.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Depozito Devri ve Güvence Bedeli Nasıl Yönetilmeli?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kiracı değişikliklerinin en büyük finansal açmazı depozitodur. Eski kiracı ev sahibine verdiği güvence bedelini geri almak isterken, yeni kiracının da içeriye depozito sağlaması istenir. 
              Eğer doğrudan yeni sözleşme yapılıyorsa, eski kiracının depozitosu iade edilmeli, yeni kiracıdan yeni depozito alınmalıdır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira devri protokolü yapılıyorsa, eski kiracının depozito hakkı yeni kiracıya (devralana) devredilebilir. 
              Yeni kiracı eski kiracıya depozito tutarını elden/bankadan öder; böylece mal sahibinin elinde duran güvence bedelinin zilyetliği de protokol maddesi ile yeni kiracıya geçmiş olur. 
              Hukuki uyuşmazlık yaşamamak adına bu durumun devir belgesinde açık bir madde ile belirtilmesi şarttır.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Yeni Sözleşme vs. Devir Sözleşmesi Karşılaştırma Matrisi</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Karşılaştırma Kriteri</th>
                    <th className="p-4">Yeni Kira Sözleşmesi Hazırlamak</th>
                    <th className="p-4 rounded-tr-2xl">Kira Devir Protokolü Düzenlemek</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Kira Bedeli Artış Limiti</td>
                    <td className="p-4 text-red-650">Serbest (Ev sahibi piyasa fiyatı isteyebilir)</td>
                    <td className="p-4 text-green-700 font-bold">Korunur (Eski kontrattaki yasal TÜFE sınırı devam eder)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Geçmiş Hasar Sorumluluğu</td>
                    <td className="p-4 text-green-700 font-semibold font-sans">Sıfırlanır (Yeni hasar tespitine tabidir)</td>
                    <td className="p-4 text-red-650">Yeni kiracı devraldığı için eski hasarlardan sorumlu kalabilir</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Süre Aşınımı / Zamanaşımı</td>
                    <td className="p-4 text-green-700 font-semibold">Yeniden Başlar (1 yıllık yeni süre)</td>
                    <td className="p-4 text-gray-500 font-semibold">Devam Eder (Mevcut süre kaldığı yerden sürer)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Taraflar Arası İmza</td>
                    <td className="p-4 text-gray-500">Sadece Yeni Kiracı ve Ev Sahibi</td>
                    <td className="p-4 text-green-700 font-bold">Eski Kiracı, Yeni Kiracı ve Ev Sahibi (Üçlü Uyum)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">6. Kopyalanabilir Yazılı Devir Protokolü Şablonu</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira devri sürecini yasal çerçevelere uygun olarak sabitlemek için hazırladığımız, Yargıtay standartlarında geçerliliğe sahip aşağıdaki üçlü devir protokolü şablonunu kopyalayabilir, bilgileri doldurarak taraflar arasında imza altına alabilirsiniz.
            </p>

            <div className="space-y-6 my-10 font-sans">
              {transferDrafts.map((draft, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-200 hover:border-accent transition-colors flex flex-col justify-between items-stretch gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-black uppercase text-accent tracking-wider block mb-2">{draft.label}</span>
                    <pre className="text-xs font-mono text-gray-750 block bg-white p-6 rounded-2xl border border-gray-150 overflow-x-auto whitespace-pre-wrap max-h-[400px]">
                      {draft.text}
                    </pre>
                  </div>
                  <button
                    onClick={() => handleCopyDraft(draft.text, idx)}
                    className="self-end bg-primary hover:bg-black text-white text-xs font-bold py-2.5 px-6 rounded-xl flex items-center transition-colors shadow-sm"
                  >
                    <ClipboardCopy className="h-4 w-4 mr-2" />
                    {copiedIndex === idx ? "Kopyalandı!" : "Protokolü Kopyala"}
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl font-sans">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileCheck className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Yeni Kiracı İçin Kusursuz Sözleşme Hazırlayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Kiracı değişikliği sürecinde yasal bir yeni sözleşme imzalamaya karar verdiyseniz, 2026 yılı güncel yasal şartlarına uygun, koruyucu maddeler barındıran kontratınızı hemen ücretsiz oluşturun.
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
                    Ev sahibi kiracı değişikliğine onay vermek karşılığında komisyon veya ek ücret isteyebilir mi?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Yasal olarak ev sahibinin "kiracı değişikliği onay ücreti" veya "devir komisyonu" adı altında bir para talep etme hakkı bulunmamaktadır. Ancak konut kiralarında ev sahibinin devri doğrudan engelleme yetkisi (veto hakkı) bulunduğu için, uygulamada taraflar anlaşma yoluyla kiranın bir miktar yükseltilmesi veya ek güvence bedeli gibi şartlarda mutabık kalabilmektedir. İşyeri kiralarında ise ev sahibi zaten haklı nedeni yoksa devri onaylamak zorunda olduğundan ek ödemeler talep edemez.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Kira sözleşmesinde 'Devredilemez, alt kiralama yapılamaz' maddesi varsa ne olur?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Eğer ana sözleşmede bu tür yasaklayıcı emredici bir kloz yer alıyorsa, taraflar ev sahibinin *yazılı ve ıslak imzalı* onayı olmadan hiçbir şekilde kiracı değişikliği gerçekleştiremezler. Aksi bir eylem doğrudan ağır sözleşme ihlali teşkil eder ve ev sahibine derhal tahliye davası açma hakkı verir. Ancak ev sahibi sonradan yazılı rıza gösterirse, bu yasaklayıcı madde aşılmış olur.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Ev arkadaşı değişikliğinde tüm bu prosedürlere gerek var mıdır?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Eğer kontrat sadece bir kişinin adına tanzim edilmişse ve giren/çıkan arkadaşların yasal bir bağlayıcılığı yoksa, ev sahibi açısından muhatap tek kişidir. Ancak kontratta birden fazla kişinin adı "Ortak Kiracı" olarak geçiyorsa ve bu kişilerden biri evden ayrılarak yerine başkası girecekse, ev sahibine haber verilerek yasal bir devir zeyilnamesi (ek protokol) imzalanması zorunludur. Aksi halde çıkan kişinin borç sorumluluğu devam eder, giren kişi ise fuzuli işgalci konumunda kalır.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 10 Haziran 2026</span>
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
            <Link to="/ogrenci-kira-sozlesmesi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Öğrenci Kira Sözleşmesi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Öğrenci evleri için kısa dönemli kiralama yasal kısıtlamaları, ortak ev arkadaşlığı kuralları ve depozito güvenceleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-sozlesmesi-pdf-kaydetmek" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesi PDF Kaydetme</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Sözleşmeyi taşınabilir dijital formatta saklamanın yasal ispat avantajları, değiştirilemezlik güvencesi ve bulut yedekleme...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-iban-odeme-onemi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">IBAN ile Kira Ödeme Önemi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Nakit kira ödemelerinin getireceği yasal ispat açmazları, banka dekontlarının delil kuvveti ve doğru açıklama kalıpları...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
