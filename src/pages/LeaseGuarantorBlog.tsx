import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, Award, Clock, ClipboardCopy, Info, HelpCircle, Users, Landmark, Landmark as Bank, Heart, Key, Signature } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function LeaseGuarantorBlog() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Kopyalanabilir Hukuki Geçerliliğe Sahip Kefalet Klozu Şablonu (El yazısı kuralını hatırlatan yönergeyle)
  const guarantorClauseTemplate = `KİRA SÖZLEŞMESİ MÜTESELSİL KEFALET KLOZU (ÖRNEK)

[ÖNEMLİ YASAL UYARI: Türk Borçlar Kanunu Madde 583 gereğince, kefilin sorumluluğunun geçerli olabilmesi için; "Kefilin sorumlu olacağı azami miktar", "Kefalet tarihi" ve "Müteselsil kefil olunduğu" ibarelerinin mutlaka kefilin KENDİ EL YAZISI ile yazılması ve imzalanması zorunludur!]

MÜTESELSİL KEFİL BİLGİLERİ
Adı Soyadı       : [Kefilin Adı Soyadı]
T.C. Kimlik No   : [T.C. Kimlik Numarası]
İkametgah Adresi : [Açık Adres]
İş Telefonu / Cep: [Telefon Numarası]

KEFALET HÜKÜMLERİ ve SORUMLULUK SINIRLARI:

1- KEFALETİN TÜRÜ (MÜTESELSİL KEFALET):
   Kefil, sözleşmede kiracı olarak yer alan [Kiracının Adı Soyadı]’ın işbu sözleşmeden doğan kira bedeli, apartman masrafı/aidatı ve mülke verilecek olası zararlardan ötürü doğacak tüm borçlarından "Müteselsil Kefil ve Müşterek Borçlu" sıfatıyla kiracı ile birlikte birinci dereceden sorumlu olduğunu kabul ve taahhüt eder.

2- KEFALETİN AZAMİ MİKTARI (TBK m. 583):
   Kefilin işbu sözleşmeden dolayı sorumlu tutulacağı azami kefalet limiti [Rakamla] TL ([Yazıyla] Türk Lirası) ile sınırlıdır. Bu miktarın üzerindeki borçlardan kefil sorumlu tutulamaz.

3- KEFALET SÜRESİ:
   Kevilin sorumluluğu, sözleşmenin asıl süresi olan ...... yıllık kira dönemi boyunca geçerlidir. Sözleşmenin kendiliğinden uzadığı (yenilendiği) dönemlerde kefilin sorumluluğunun devam edebilmesi için, her bir uzama dönemi başında kefilin yazılı yeni onayının alınması şarttır. 

4- EŞ RIZASI (TBK m. 584):
   Kefil evli olup, eşi [Eşinin Adı Soyadı], Türk Borçlar Kanunu hükümleri uyarınca bu kefalete yazılı rıza göstermiş ve işbu sözleşmenin ekindeki "Eş Rıza Beyanı"nı imzalamıştır.

[Kefilin kendi el yazısı ile yazacağı zorunlu alan taslağı]:
"İşbu kira sözleşmesinden doğan borçlara, sözleşmenin yürürlük süresi boyunca en fazla [Azami Limit] TL limit dahilinde müteselsil kefil sıfatıyla sorumlu olmayı kabul ediyorum."

Kefalet Tarihi:    ...... / ...... / 2026
Müteselsil Kefil : [Adı Soyadı ve Islak İmzası]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(guarantorClauseTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.leaseGuarantorTitle') + " — 2026 Yasal Kurallar ve Şartlar"}
        description={t('blogPage.leaseGuarantorSeoDesc')}
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
            <Signature className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Kefalet & Haklar Rehberi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.leaseGuarantorTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Mülk sahiplerinin alacaklarını güvenceye almak, kiracıların ise süreci hızlandırmak için başvurduğu kira kefil kuralları. Kefil şartları, eş rızası kuralı, kefalet limitleri ve türleri.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Gayrimenkul kiralamalarında mal sahipleri, düzenli kira tahsilatını garanti altına almak ve mülkün uğrayabileceği hasarlara karşı ek güvence sağlamak amacıyla çoğunlukla sözleşmeye üçüncü bir kişiyi "kefil" olarak dahil etmek ister. 
              Kiralama ekosisteminde sıkça başvurulan bu formül, usulüne uygun yapılmadığında hem mülk sahibi, hem kiracı hem de kefil olan kişi açısından trajik hukuki sonuçlar doğurabilmektedir. 
              Yasalarımızda, kefaletin zayıf halkası olan kefilin korunması amacıyla son derece ağır şekil şartları aranmaktadır. 
              Nitekim sözleşmede sadece "kefil" olarak adınızın yazılı olması ve altına imza atılması, o kefaletin geçerli olduğu anlamına gelmez. 
              Türk Borçlar Kanunu’nun 581. ve devamındaki maddelerinde yer alan katı kurallara riayet edilmemesi durumunda, imzaladığınız kefalet yasal olarak tamamen geçersiz (batıl) sayılmaktadır. 
              Peki, <strong>kira sözleşmesi kefil</strong> şartları nelerdir? Müteselsil kefaletin adiden farkı nedir? Bir kefil ne zamana kadar ve hangi limite kadar borçtan sorumlu tutulabilir? 
              En kritik "eş rızası" kuralını, kefalet türlerini ve haklarınızı güvenceye alan yasal tüyoları örnek sözleşme maddelerimiz eşliğinde mercek altına alıyoruz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Giriş: Kira Sözleşmesinde Kefalet Nedir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kefalet sözleşmesi, bir kefilin borçlunun (kiracının) borcunu ifa etmemesi durumunda, alacaklıya (mülk sahibine) karşı kişisel olarak sorumlu olmayı taahhüt ettiği hukuki bir güvence akdidir. 
              Kira sözleşmelerinde kefalet, genellikle kira kontratının içine yerleştirilen özel bir kloz (madde) ile kurulur.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Mülk sahipleri açısından kefil, kiracının kirayı ödememesi, aidat borcu takması veya evden ayrılırken olağan dışı büyük fiziki hasarlar vermesi durumunda başvurulacak ikinci bir tahsilat kapısıdır. 
              Kiracı için ise kefil göstermek, özellikle düzenli gelir beyan edemediği durumlarda mülk sahibinin güvenini kazanarak kiralama sürecini sonuçlandırmanın en hızlı yoludur.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Kefilin Sorumluluğu Ne Zaman Başlar?</h4>
                <p className="text-gray-600 m-0 leading-relaxed font-sans text-sm">
                  Borçlar Kanunu uyarınca, kefalet ilişkisi kira sözleşmesinin imzalanması ve sözleşme içinde kefalete ilişkin yasal geçerlilik şartlarının tam olarak yerine getirilmesiyle doğrudan yürürlüğe girer.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Geçerlilik İçin Temel Kefil Şartları</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmesinde yer alan bir kefilin hukuki olarak sorumlu tutulabilmesi için hem kefil olacak şahsın kendisinde aranan genel şartlar, hem de sözleşmenin yazılış biçiminde aranan katı şekil kuralları mevcuttur. 
              Bunlar yerine getirilmeden yapılan hiçbir kefalet sözleşmesi mahkemede geçerli kabul edilmez:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">A) Kişisel Şartlar (Kimler Kefil Olabilir?)</h3>
            <ul className="space-y-4 text-gray-655 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Fiil Ehliyeti:</strong> Kefil olacak kişinin mutlaka reşit olması (18 yaşını doldurmuş olması) ve ayırt etme gücüne sahip bulunması (akıl sağlığının yerinde olması) zorunludur. Kısıtlı kişiler kefil olamaz.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Ödeme Gücü ve Düzenli Gelir:</strong> Yasal bir zorunluluk olmamakla birlikte, mülk sahipleri haklı olarak kefilin borcu ödeyebilecek mali yeterlilikte (düzenli maaş, tapu sahibi olması, SGK dökümü vb.) bulunmasını şart koşarlar.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">B) Katı Şekil Şartları (TBK m. 583 - El Yazısı Zorunluluğu)</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Yasalarımızda kefili ani kararlardan ve aşırı borç yükü altına girmekten korumak amacıyla **"El Yazısı Zorunluluğu"** getirilmiştir. 
              Kira sözleşmesindeki kefil maddesi bilgisayarda yazılmış olsa dahi, aşağıdaki unsurların bizzat kefilin **kendi el yazısı** ile yazılması ve imzalanması mutlak geçerlilik şartıdır:
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span>Kefilin sorumlu olacağı **Azami Miktar / Sınır** (Örn: "En fazla 150.000 TL limit dahilinde") kefilin kendi el yazısıyla rakam ve yazı ile yazılmalıdır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span>Kefaletin **Tam Tarihi** (Örn: "31.05.2026") kefilin kendi el yazısıyla atılmalıdır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span>Eğer müteselsil kefalet ise, **"Müteselsil kefil"** veya "Müteselsil borçlu" sıfatıyla sorumlu olunduğu ibaresi kefilin kendi el yazısıyla yazılmalıdır.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">C) En Çok Unutulan Kural: Eş Rızası (TBK m. 584)</h3>
            <p className="text-gray-655 leading-relaxed mb-6">
              Kira sözleşmelerinde kefaletin geçersiz kalmasının en yaygın nedeni **"Eş Rızası Yazılı Onay"** kuralına uyulmamasıdır. 
              Türk Borçlar Kanunu Madde 584 gereğince, **evli olan kişilerin kefil olabilmesi için eşlerinin yazılı rızasının (onayının) bulunması zorunludur**.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bu rızanın, kefalet sözleşmesinin kurulduğu tarihte veya **en geç kurulduğu anda** yazılı olarak eş tarafından verilmesi gerekir. 
              Eğer kefil evli olup da eşinin yazılı rıza imzası sözleşmede yer almıyorsa, atılan diğer tüm imzalar ve el yazıları tam olsa bile kefalet baştan itibaren **hukuken tamamen geçersizdir**.
            </p>

            <div className="bg-yellow-500/10 p-8 rounded-3xl border-l-8 border-yellow-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                Eş Rızası Hangi Durumlarda Aranmaz?
              </h4>
              <p className="text-sm text-gray-750 leading-relaxed m-0">
                Eşlerin mahkeme kararıyla resen ayrılmış olması, boşanma davası sürecinin resmileşmiş olması veya tarafların zaten yasal olarak boşanmış olmaları halinde eş rızası aranmaz. 
                Bekar olan kişilerde de doğal olarak bu şart aranmamaktadır.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Temel Kefalet Türleri: Adi Kefalet ve Müteselsil Kefalet</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmelerine dâhil edilen kefilleri, yüklendikleri sorumluluğun ağırlığına göre ikiye ayırmak mümkündür. 
              Sözleşmede hangi kefalet türünün açıkça yazıldığı uyuşmazlığın gidişatını doğrudan tayin eder:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">A) Adi Kefalet</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Gevşek haklara sahip kefalet türüdür. Adi kefalette mülk sahibi, kiracı kirayı ödemediğinde doğrudan kefile gidemez. 
              Öncelikle asıl borçlu olan kiracıya icra takibi yapmalı, kiracının tüm mal varlığı sorgulanmalı, gerekirse dava açmalı ve tüm bu süreçler sonucunda kiracının borcu ödemekten tamamen aciz olduğu (borç ödemeden aciz vesikası) belgelenmelidir. 
              Ancak bundan sonra alacaklı mülk sahibi kefile giderek borcu talep edebilir. (Hukuk dilinde buna "tartışma defi" denir).
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">B) Müteselsil Kefalet (En Yaygın Tür)</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Çok daha sıkı ve ağır sorumluluk doğuran, piyasadaki kira kontratlarının %99'unda yer alan kefalet türüdür. 
              Müteselsil kefalette kefil, asıl borçlu kiracı ile birlikte birinci dereceden, yan yana sorumlu olur. 
              Kiracı kirayı bir gün bile geciktirdiğinde, mülk sahibi hiçbir ön icra sürecine veya dava aşamasına ihtiyaç duymaksızın doğrudan **hem kiracıya hem de müteselsil kefile eş zamanlı olarak veya sadece doğrudan kefile** icra takibi başlatabilir. 
              Kefil, "Önce git kiracıdan iste" deme hakkına hukuken sahip değildir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Kefilin Sorumluluğunun Süresi ve Sınırları</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kefil olmak, ömür boyu veya ucu açık bir borç zinciri altına girmek demek değildir. 
              Yasalarımızda kefili korumak ve mülk sahibinin sınırlarını çizmek adına önemli sorumluluk limitleri belirlenmiştir:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">A) Sorumluluk Süresi Sınırı</h3>
            <p className="text-gray-650 leading-relaxed mb-6 font-semibold">
              Eğer kira sözleşmesinde kefaletin süresi açıkça belirtilmemişse, kefilin sorumluluğu yalnızca sözleşmede kararlaştırılan ASIL SÜRE (Örn: 1 yıllık asıl kontrat süresi) ile sınırlıdır. 
              Sözleşmenin yasa gereği kendiliğinden 1'er yıl uzadığı dönemlerde (yenilenme yıllarında), sözleşmede "kefilin sorumluluğu uzama dönemlerinde de devam eder" şeklinde yazsa dahi, yeni uzama dönemi için kefilin **ayrı ve yazılı izni / onayı** alınmadığı sürece kefilin sorumluluğu asıl yılın sonunda kendiliğinden **sona erer**.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">B) Mutlak Hak Düşürücü Süre (10 Yıl Kuralı)</h3>
            <p className="text-gray-655 leading-relaxed mb-6">
              TBK m. 598 uyarınca, bir gerçek kişinin verdiği kefalet ne olursa olsun, kurulduğu tarihten itibaren **en geç 10 yılın geçmesiyle kendiliğinden sona erer**. 
              10 yılı aşan bir kira ilişkisinde, kefilin sorumluluğunu devam ettirmek istiyorsanız, 10. yılın sonunda yasal olarak sıfırdan yeni bir kefalet sözleşmesi tanzim etmeniz zorunludur.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Hukuki Açıdan Geçerli Örnek Kefalet Klozu Şablonu</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Uyuşmazlıkları baştan önlemek ve 2026 Borçlar Kanunu standartlarında hatasız bir kefil eklemesi yapmak istiyorsanız, kira sözleşmelerinizin içine ekleyebileceğiniz yasal taslağımızı kullanabilirsiniz:
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
                {guarantorClauseTemplate}
              </pre>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Adi ve Müteselsil Kefalet Karşılaştırma Tablosu</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Özellik / Hak</th>
                    <th className="p-4">Adi Kefalet</th>
                    <th className="p-4 rounded-tr-2xl">Müteselsil Kefalet</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Doğrudan Kefile Gitme Hakkı</td>
                    <td className="p-4 text-red-650 font-semibold">Yoktur (Önce kiracı icraya verilmeli)</td>
                    <td className="p-4 text-green-700 font-bold">Vardır (İlk günden kefile gidilebilir)</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Grup Borç Sorumluluğu</td>
                    <td className="p-4 text-orange-600">Sadece kiracının açık kalan ödemesi kadar</td>
                    <td className="p-4 text-orange-600">Belirlenen azami limitin tamamı kadar</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">El Yazısı ile Limit Belirtme</td>
                    <td className="p-4 text-green-700 font-bold">Zorunludur</td>
                    <td className="p-4 text-green-700 font-bold">Zorunludur</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Eş Rızası (Yazılı İmza)</td>
                    <td className="p-4 text-green-700 font-bold">Zorunludur (Evlilerde)</td>
                    <td className="p-4 text-green-700 font-bold">Zorunludur (Evlilerde)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <Users className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Sorunsuz ve Tüm Yasal Şartlara Uygun Kira Kontratları</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Borçlar Kanunu normlarına %100 uyumlu, kefalet limitleri, eş rıza beyan alanları ve koruyucu özel maddeler barındıran profesyonel sözleşmenizi dakikalar içinde ücretsiz tanzim edin.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Yasal Kira Sözleşmesi Üret
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
                    Kira sözleşmesinde kefilin sorumlu olacağı azami miktar yazılmazsa ne olur?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Türk Borçlar Kanunu Madde 583 uyarınca, kefilin sorumlu olacağı azami miktarın (limitin) sözleşmede açıkça, rakamla ve yazıyla **belirtilmemiş olması kefaleti tamamen geçersiz kılar**. 
                  Mülk sahibi sözleşmeye dayanarak kefile karşı hiçbir yasal takip veya talepte bulunamaz. Sorumluluğun "sınırsız" olması hukuken imkansızdır.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Kefil, sözleşmeyi tek taraflı olarak feshedebilir mi?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Kural olarak kefil, sözleşme süresi devam ederken haklı bir yasal sebep olmaksızın kefaletten tek taraflı olarak ayrılamaz veya sözleşmeyi feshedemez. 
                  Ancak sözleşme asıl süresinin bitip yenilendiği dönemlerde sorumluluğu kendiliğinden sona erer. Ayrıca borcun kiracı tarafından tamamen ödenmesi veya mülk sahibinin kefili ibra etmesiyle kefaletten kurtulmak mümkündür.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Eşin muvafakat (rıza) imzası sonradan alınabilir mi?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Hayır; Yargıtay’ın sarsılmaz kararlarına göre, eşin rızası sözleşmenin imzalandığı sırada veya en geç imza kurulduğu anda verilmiş olmalıdır. 
                  Kefaletten aylar sonra "Eş rıza beyanı belgesi" doldurulup imzalatılması, geçmişe dönük olarak geçersizliği ortadan kaldırmaz. Bu nedenle her şeyin imza günü tamamlanması mecburidir.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 31 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Av. Serkan Erdoğan (Gayrimenkul Hukukçusu)</span>
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
            <Link to="/online-kira-sozlesmesi-gecerli-mi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Online Kira Sözleşmesi Geçerli mi?</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Elektronik ve çevrim içi düzenlenen kira akitlerinin yasal geçerliliği, e-imza, e-devlet entegrasyonu ve ispat gücü...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kiraci-ev-teslim-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kiracı Evi Teslim Ederken</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kiracının evi teslim ederken uyması gereken yasal süreçler, hasar tescili, depozito iadesi ve fotoğraf önemi...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
