import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, Award, Clock, ClipboardCopy, Info, HelpCircle, Users, Landmark, Heart, Key, Ban, UserCheck, ShieldAlert, Sparkles, HelpCircle as HelpIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NoLeaseBlog() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Kopyalanabilir Geriye Dönük Kira İlişkisi Onay / Mutabakat Protokolü Şablonu
  const confirmationProtocolTemplate = `GERİYE DÖNÜK KİRA İLİŞKİSİ TESPİT VE MUTABAKAT PROTOKOLÜ

İşbu protokol, taraflar arasında daha önce sözlü olarak kurulmuş olan kiralama ilişkisinin hukuki geçerliliğini korumak, ispat şartlarını yerine getirmek ve gelecekte doğabilecek uyuşmazlıkları önlemek amacıyla tanzim edilmiştir.

TARAFLAR:
KİRAYA VEREN  : [Ev Sahibinin Adı Soyadı] - T.C. Kimlik No: [........................]
KİRACI        : [Kiracının Adı Soyadı] - T.C. Kimlik No: [........................]

MÜLK BİLGİLERİ:
Kiralanan Adres: [Kiralanan Taşınmazın Açık Adresi]

MUTABAKAT MADDELERİ:

1- KİRA İLİŞKİSİNİN BAŞLANGICI VE SÜRESİ:
   Taraflar, yukarıda belirtilen adresteki taşınmazın kiralama ilişkisinin fiilen [Gün/Ay/Yıl] (Örn: 15/09/2024) tarihinde başladığını karşılıklı olarak kabul ve beyan ederler. Sözlü olarak başlayan bu ilişki, işbu protokol ile resmi tescil niteliği kazanmıştır.

2- KİRA BEDELİ VE ÖDEME ŞEKLİ:
   a) Kira ilişkisinin başlangıcından itibaren güncel kira bedeli aylık [........] TL olarak uygulanmaktadır.
   b) Kira ödemeleri her ayın en geç ...'inci gününe kadar, Kiraya Veren'in [Banka Adı] nezdindeki TR.................................................. IBAN numaralı resmi hesabına "Kira Bedeli" açıklamasıyla net olarak yatırılacaktır. Elden yapılan hiçbir ödemenin geçerliliği taraflarca kabul edilmeyecektir.

3- DEPOZİTO (GÜVENCE BEDELİ) BEYANI:
   Kiracı tarafından kiralama ilişkisinin başında Kiraya Veren'e [........] TL depozito ödemesi yapıldığı, malik tarafından bu bedelin tam ve eksiksiz olarak teslim alındığı ve mülkten tahliye anında herhangi bir olağan dışı zarar ziyan bulunmadığı takdirde kiracıya aynen iade edileceği kabul edilmiştir.

4- KİRA ARTIŞ ORANLARI:
   Yeni dönem kira artışları, Tüketici Fiyat Endeksi'nin (TÜFE) on iki aylık ortalamalarına göre yasal sınırlar dâhilinde gerçekleştirilecektir.

5- YASAL YÜKÜMLÜLÜKLER VE DELİL NİTELİĞİ:
   İşbu protokol, 6098 sayılı Türk Borçlar Kanunu ve 6100 sayılı Hukuk Muhakemeleri Kanun'u anlamında, tarafların geriye dönük kira ilişkisini admits ettikleri yazılı kesin delil (belge) niteliğindedir. Taraflar bu protokolde yer alan hükümleri kayıtsız şartsız uygulayacaklarını kabul, beyan ve taahhüt ederler.

İşbu protokol, 4 nüsha olarak tarafların serbest iradeleriyle okunup onaylanarak .../.../2026 tarihinde imza altına alınmıştır.

KİRAYA VEREN (Ev Sahibi)                     KİRACI
  Adı Soyadı / İmza                        Adı Soyadı / İmza`;

  const handleCopy = () => {
    navigator.clipboard.writeText(confirmationProtocolTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.noLeaseTitle') + " — Tüm Riskler ve Çözümler"}
        description={t('blogPage.noLeaseSeoDesc')}
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
            <ShieldAlert className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Yasal Haklar & Risk Analizi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.noLeaseTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Bir gayrimenkulü yazılı kontrat tanzim etmeden kiralamanın yasal sonuçları. Güven esaslı sözlü anlaşmalarda hem mal sahibini hem kiracıyı bekleyen tehlikeler ve hukuki çözüm yolları.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Kiralama piyasasında bazen akrabalık bağları, bazen komşuluk ilişkileri, bazen de "karşılıklı güven" esasına dayalı olarak taraflar yazılı bir kontrat kurmaktan kaçınabiliyor. 
              Sadece el sıkışarak ve sözlü mutabakat sağlayarak bir konuta veya işyerine yerleşmek ilk başta son derece pratik, prosedürsüz ve masrafsız bir yol gibi görünebilir. 
              Ancak taraflar arasındaki o sıcak "güven" ilişkisi zedelendiği anda, ortada yazılı bir belgenin bulunmaması her iki taraf için de içinden çıkılması imkansız birer hukuki kabusa dönüşür. 
              Birçok kişi kanunların yazılı olmayan anlaşmaları tanımadığını düşünür ya da aksine sözlü anlaşmaların kendilerini her şeyden koruyacağına inanır. 
              Peki işin aslı nedir? Türkiye'de <strong>kira sözleşmesi olmadan oturmak</strong> yasal olarak risk yaratır mı? 
              Türk Borçlar Kanunu ve Yargıtay kararları çerçevesinde <strong>kira sözleşmesiz oturmak</strong> durumunda ev sahibi ve kiracı için doğacak tehlikeler nelerdir? 
              Taraflar uyuşmazlığa düştüklerinde haklarını korumak için hangi hukuki ispat araçlarına başvurmalıdır? 
              Aklınızdaki tüm soru işaretlerini aydınlatacak, geriye dönük haklarınızı tescilleyecek kopyalanabilir mutabakat taslağımızla birlikte detaylı bir hukuki inceleme hazırladık.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Hukuki Durum: Yazılı Sözleşme Olmadan Kira İlişkisi Kurulabilir mi?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Türk Borçlar Kanunu'nun (TBK) temel taşlarından biri olan "sözleşmelerde şekil serbestisi" ilkesi uyarınca, kira sözleşmelerinin geçerli olabilmesi için yazılı olması kanunen zorunlu kılınmamıştır. 
              Yani, tarafların bir mülkün kiralanması ve karşılığında bir kira bedeli ödenmesi konusunda **sözlü olarak anlaşmaları da yasal olarak geçerli bir kira sözleşmesi doğurur**.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Dolayısıyla, bir evde kira kontratı imzalamadan oturuyor olsanız dahi, hukuk sistemi sizi "fuzuli işgalci" veya tamamen hak mahrumu olarak görmez; aranızda bir kira ilişkisinin kurulduğunu kabul eder. 
              Ancak burada en hayati dönüm noktası **ispat yükümlülüğüdür**. 
              Yazılı bir kontratın olmadığı bir senaryoda, iddia edilen kira başlangıç tarihi, aylık net kira miktarı, teslim edilen depozito miktarı ve yıllık artış oranları gibi kritik şartların ispat edilmesi tamamen iddia eden tarafın omuzlarındadır. 
              Yasalara göre <strong>kira sözleşmesiz oturmak</strong> hukuken geçersiz değildir, ancak uyuşmazlık halinde ispat gücü son derece zayıf, kırılgan bir ilişkidir.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start font-sans">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Hukuk Muhakemeleri Kanunu (HMK) ve Senetle İspat Sınırı</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  HMK Madde 200 uyarınca, belirli bir parasal sınırın üzerindeki (2026 yılı için bu sınır yaklaşık birkaç bin TL seviyesindedir) hukuki işlemler, ancak **yazılı bir belge veya senetle** ispat edilebilir. 
                  Bu durum, yazılı sözleşme olmadığında tanık (şahit) ifadesiyle kira miktarını kanıtlamanın hukuken kabul edilmeyeceği anlamına gelir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Kiracı İçin Tehlikeler ve Riskler</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Yazılı bir güvenceye sahip olmadan bir konutta ikamet eden kiracı, ev sahibinin iyi niyetine tamamen bağımlı kalır. 
              İşte <strong>kira sözleşmesi olmadan oturmak</strong> durumunda kiracıyı bekleyen 5 büyük yasal tehlike:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 font-sans text-xl">A) "Fuzuli İşgalci" Olarak Nitelendirilme ve Tahliye Riski</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Mülk sahibiyle aranız açık değilken her şey yolundadır. 
              Ancak uyuşmazlık anında kötü niyetli bir ev sahibi, "Bu kişi benim evimde izinsiz oturuyor, aramızda kira ilişkisi yoktur, fuzuli işgalcidir" iddiasıyla müdahalenin men-i (tahliye) davası açabilir. 
              Eğer elinizde kira ödediğinize dair banka dekontları, düzenli log kayıtları yoksa, ev arkadaşı durumundaysanız kendinizi bir anda sokakta bulabilirsiniz.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 font-sans text-xl">B) Depozitonun Geri Alınamaması</h3>
            <p className="text-gray-655 leading-relaxed mb-6">
              Kiralama başında ev sahibine teslim ettiğiniz depozito (güvence bedeli) miktarını yazılı bir kontrata dökmediyseniz, tahliye sürecinde bu parayı geri almanız neredeyse imkansız hale gelir. 
              Ev sahibi "bana depozito verilmedi" dediği anda, elinizde elden verilen paranın ispatı mümkün olamayacağından ciddi bir maddi kayba uğrarsınız.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 font-sans text-xl">C) Fahiş Kira Artış Dayatmaları</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira artışları kanunen belirli sınırlara (TÜFE 12 aylık ortalaması) tabidir. 
              Ancak yazılı bir sözleşme olmadığında, ev sahibiniz yasal sınırların çok üzerinde "Ya bu kirayı ödersin ya da hemen çıkarsın, zaten kontratımız yok" şantajıyla karşınıza çıkabilir. 
              Kiracı, yasal haklarını korumakta ve resmi mercilere müracaat etmekte zorlanır.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 font-sans text-xl">D) Aboneliklerin Açtırılamaması</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Yeni bir eve taşındığınızda elektrik, su, doğal gaz ve internet gibi temel hizmet aboneliklerini üzerinize alabilmeniz için ilgili kurumlar sizden **resmi ıslak imzalı kira sözleşmesi** veya e-Devlet onaylı kontrat talep eder. 
              Yazılı bir kontratınız olmadığında bu abonelikleri kendi adınıza açtıramaz, ya hizmetlerden mahrum kalır ya da başkasının aboneliğini kaçak kullanma durumuna düşersiniz.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 font-sans text-xl font-sans">E) Hak Sahibi Olduğunu İspat Edememe</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Mülkte meydana gelen büyük demirbaş arızalarında (tesisat patlaması, kombi değişimi vb.) yasal olarak bu masrafları ev sahibinin ödemesi gerekir. 
              Ancak aranızda yazılı bağ olmadığında ev sahibi bu harcamaları yapmayı reddedebilir, kiracı olarak yaptığınız masrafları kiradan düşeceğinizi resmi olarak beyan edemezsiniz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Ev Sahibi İçin Tehlikeler ve Riskler</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Yazılı sözleşme yapmamanın sadece kiracıya zarar verdiğini düşünmek büyük bir yanılgıdır. 
              Aslında mülk sahipleri, <strong>kira sözleşmesiz oturmak</strong> formülünden ötürü kiracılara göre çok daha büyük finansal ve yasal risklerle karşı karşıya kalırlar:
            </p>

            <div className="bg-red-500/10 p-8 rounded-3xl border-l-8 border-red-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center font-serif">
                <AlertCircle className="h-5 w-5 text-red-650 mr-2" />
                Ev Sahibi İçin En Büyük Engel: Tahliye Zorluğu
              </h4>
              <p className="text-sm text-gray-750 leading-relaxed m-0">
                Kiracısını koruma altına alan Borçlar Kanunumuz nedeniyle, yazılı kontrat olmadan tahliye davası açmak bir ev sahibi için labirentte yol bulmaya benzer. 
                Sözlü kira ilişkisinde kiracının tahliye taahhütnamesi vermesi yasal olarak mümkün olamayacağından, mülk sahibi kiracıyı evden çıkarmak için yıllarca sürecek davalarla uğraşmak zorunda kalabilir.
              </p>
            </div>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 font-sans text-xl">A) Ödenmeyen Kiraların İcra ve Tahsilat Zorluğu</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kiracınız kirayı düzenli olarak elden ödemeyi tercih ediyorsa veya bankadan eksik gönderiyorsa, "ödenmeyen kira" iddiasıyla icra takibi başlatmak istediğinizde kiracı "ödedim" diyerek veya kira miktarının daha düşük olduğunu iddia ederek takibe kolayca itiraz edebilir. 
              Yazılı bir sözleşmeniz olmadığından, gerçek kira miktarını mahkemeye kanıtlayamaz ve alacağınızı tahsil edemezsiniz.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 font-sans text-xl">B) Vergi Cezaları ve Beyanname Sıkıntıları</h3>
            <p className="text-gray-655 leading-relaxed mb-6">
              Maliye Bakanlığı, banka hesap loglarını, mülk adres tespitlerini ve tapu verilerini çapraz sorgularla sürekli denetlemektedir. 
              Yazılı sözleşme olmadan elden ya da gelişi güzel banka transferleriyle yapılan kiralamalar, sistemde **"kayıt dışı kiralama / vergi kaçırma"** olarak flagged edilebilir. 
              Mülk sahibine geriye dönük fahiş gelir vergisi borçları ve usulsüzlük cezaları kesilir.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 font-sans text-xl">C) Mülke Verilen Hasarların Tazmin Edilememesi</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kiralama başında evin hangi koşullarda (boyalı, çiziksiz, sağlam demirbaşlı vb.) teslim edildiğini gösteren bir yazılı kontrat ve teslim tutanağı yoksa, kiracı mülkü darmadağın edip çıksa dahi ev sahibi bu hasarları kiracının yaptığını hukuken kanıtlayamaz. 
              Tüm tadilat masrafları mal sahibinin cebinden çıkar.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Yazılı Sözleşme vs Sözlü (Kontratsız) Kira Karşılaştırması</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Kritik Süreç / Durum</th>
                    <th className="p-4">Yazılı Sözleşmeli İlişki</th>
                    <th className="p-4 rounded-tr-2xl">Sözlü (Kontratsız) İlişki</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Kira Miktarının İspatı</td>
                    <td className="p-4 text-green-700 font-bold">Çok Kolay (Kontratta net yazılıdır)</td>
                    <td className="p-4 text-red-650 font-semibold">Çok Zor (Banka dekontları tek tek incelenmelidir)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Depozito Güvencesi</td>
                    <td className="p-4 text-green-700 font-bold">Tam Güvence (Maddelerde tescillidir)</td>
                    <td className="p-4 text-red-650 font-semibold">Zayıf (Elden teslimde ispat yoktur)</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Yasal Kira Artış Sınırı</td>
                    <td className="p-4 text-green-700 font-bold">Otomatik TÜFE koruması vardır</td>
                    <td className="p-4 text-red-650 font-semibold">Keyfi taleplere açıktır, istismara müsaittir</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Abonelik İşlemleri</td>
                    <td className="p-4 text-green-750 font-semibold">Tesisat saniyeler içinde açılabilir</td>
                    <td className="p-4 text-red-650 font-semibold">Sözleşmesiz işlem yapılması imkansızdır</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Fesih ve Tahliye Dönemi</td>
                    <td className="p-4 text-green-700 font-bold">Yasal bildirim tarihleri nettir</td>
                    <td className="p-4 text-red-650 font-semibold">Yenilenme ve başlangıç günleri tartışmalıdır</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Kesin Çözüm: Geriye Dönük Tespit Protokolü ve Yazılıya Geçiş</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Hâlihazırda kira sözleşmesi olmadan bir evde oturuyor veya evinizi bu şekilde kiraya vermiş iseniz, panik yapmanıza gerek yoktur. 
              Zararın neresinden dönülürse kârdır felsefesiyle, bu güvensiz durumu yasal bir çerçeveye oturtmak son derece basittir. 
              İşte uygulayabileceğiniz 3 somut çözüm adımı:
            </p>

            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Banka Kanallarını Kullanın (Hayati Derecede Önemli):</strong> Eğer aranızda yazılı bir sözleşme yoksa, kiracı ödemelerini kesinlikle ELDEN YAPMAMALIDIR. Tüm ödemeler mutlaka banka transferiyle yapılmalı ve açıklama kısmına kesinlikle **"2026 Yılı Mayıs Ayı Kira Bedeli"** gibi net ibareler yazılmalıdır. Bu dekontlar mahkemede sözlü kira kontratının kurulduğuna dair "yazılı delil başlangıcı" sayılır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Geriye Dönük Beyan Protokolü İzalayın:</strong> Taraflar bir araya gelerek geriye dönük kira başlangıç tarihini ve mevcut şartları doğrulayan bir protokol imzalamalıdır. Bu belge geçmişe dönük belirsizliği tamamen ortadan kaldırır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Platformumuz ile Hemen Sözleşme Üretin:</strong> En garantili yol, sitemizi kullanarak dakikalar içinde resmi formatta sıfırdan bir kira sözleşmesi tasarlayıp karşılıklı olarak imzalamaktır. Bu sayede tüm yasal boşluklar yorulmadan kapatılmış olur.</span>
              </li>
            </ul>

            {/* Kopyalanabilir Yazılıya Geçiş Sözleşme Taslağı */}
            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Geriye Dönük Tenancy Ortak Mutabakat Taslağı</h3>
            <p className="text-gray-655 leading-relaxed mb-4">
              Aşağıdaki taslağı bilgisayarınıza kopyalayıp doldurarak, aranızdaki sözlü sözleşmeyi yasal olarak güvenceli ve basılı yazılı delil statüsüne taşıyabilirsiniz:
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
                {confirmationProtocolTemplate}
              </pre>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl font-sans">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <Ban className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Kendinizi Risk Altında Bırakmayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  İlişkileriniz ne kadar güvenli olursa olsun, yasal güvencenizi ertelemeyin. Tamamı Türk Borçlar Kanunu standartlarına uygun basılı kira kontratınızı saniyeler içinde ücretsiz oluşturun.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Şimdi Ücretsiz Kontrat Başlat
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6 font-serif">Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpIcon className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Kira sözleşmesiz oturan kiracı evden nasıl çıkarılır?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Burada süreç iki kademelidir. Eğer kiracı kirasını hiç yatırmıyorsa, mal sahibi banka loglarıyla kira ilişkisini ispat edip icra dairesine başvurarak "kira alacağı ve tahliye talepli icra takibi" başlatabilir. 
                  Ancak tahliye taahhütnamesi veya asıl başlangıç gününün tescili zor olacağından, her türlü tahliye davası Sulh Hukuk Mahkemesi nezdinde ispat süreçleriyle birlikte normal davalara göre çok daha uzun sürecektir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpIcon className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Bankadan her ay düzenli kiranın gönderilmesi sözleşme yerine geçer mi?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Banka dekontları tek başına fiziki bir sözleşmenin her maddesini karşılamaz. Ancak Yargıtay nezdinde bankadan düzenli gönderilen ve açıklamasında "Kira Bedeli" yazan havaleler, taraflar arasında **sözlü bir kontratın kurulduğuna dair "kesin yazılı delil başlangıcı"** sayılır. 
                  Kiranın fiyat miktarını ve düzenliliğini kanıtlasa da kira süresi, artış kuralları ve hasar teslim koşulları gibi özel maddeleri kanıtlamaya yetmez.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpIcon className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Elden kira ödemek ne kadar risklidir?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Hukuken en büyük tehlikelerden biridir. Vergi usul kanunlarına göre elden yapılan her kiralama her iki tarafa da yüksek vergi cezası cezaları doğurmaktadır. 
                  Bunun ötesinde, kiracı kirasını elden ödese bile, yarın bir gün ev sahibi dürüst davranmayıp "Bana 6 aydır hiç kira ödenmedi" diyerek icra davası açarsa; kiracı ödediği parayı ev sahibine teslim ettiğini ancak ıslak imzalı bir "ödendi makbuzu" ile kanıtlayabilir. Makbuz yoksa kiracı aynı kirayı icrada **tekrar ödemek** zorunda kalır.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 3 Haziran 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Av. Gökhan Yılmaz (Gayrimenkul ve İcra Uzmanı)</span>
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
            <Link to="/kira-sozlesmesinde-kefil-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesinde Kefil</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesinde kefil sorumlulukları, azami limitler, el yazısı şartı, kefalet türleri ve eş rızası gibi yasal kurallar...</p>
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
