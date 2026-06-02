import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, Users, ClipboardCopy, HelpCircle, Heart, Key, Home, Coins, Trash2, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function CoTenantBlog() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Kopyalanabilir Dahili Ev Arkadaşı Sözleşmesi Protokolü Taslağı
  const roommateAgreementTemplate = `DAHİLİ EV ARKADAŞI MUTABAKAT VE ORTAK KULLANIM PROTOKOLÜ

İşbu protokol, mülk sahibi ile imzalanan resmi kira kontratına ek olarak, aynı evi paylaşan ortak kiracıların kendi aralarındaki hak, yükümlülük, gider paylaşımı ve yaşam kurallarını düzenlemek amacıyla imza altına alınmıştır.

TARAFLAR (ORTAK KİRACILAR):
1. [Ev Arkadaşı 1 Adı Soyadı] - T.C. Kimlik No: [........................]
2. [Ev Arkadaşı 2 Adı Soyadı] - T.C. Kimlik No: [........................]
3. [Ev Arkadaşı 3 Adı Soyadı] - T.C. Kimlik No: [........................]

MÜLK BİLGİLERİ:
Adres: [Kiralanan Evin Tam Açık Adresi]

PROTOKOL MADDELERİ:

1- KİRA VE DEPOZİTO PAYLAŞIMI:
   a) Toplam kira bedeli olan [........] TL, taraflar arasında şu şekilde paylaştırılmıştır:
      - [Ev Arkadaşı 1]: %... ([........] TL)
      - [Ev Arkadaşı 2]: %... ([........] TL)
      - [Ev Arkadaşı 3]: %... ([........] TL)
   b) Kira ödemesi her ayın en geç ...'inci günü, resmi kira kontratında belirtilen mal sahibi IBAN adresine tek bir transfer olarak yatırılacaktır. Ödemeyi toplu gönderecek olan sorumlu ortak [Sorumlu Kişi Adı]'dır. Diğer ortaklar kendi paylarını bu tarihten 2 gün önce sorumlu ortak hesabına aktaracaktır.
   c) Malik tarafından iade alınacak depozito tutarı, tarafların yukarıda belirtilen payları oranında bölüşülecektir. Ortaklardan birinin evden erken ayrılması halinde depozito payı hakkı yasal esaslara göre değerlendirilir.

2- FATURA VE ORTAK GİDERLER:
   Elektrik, su, doğal gaz, internet, aidat ve ortak temizlik malzemesi giderleri tüm ortaklar arasında EŞİT ([%33.3 / %50 şeklinde]) olarak paylaşılacaktır. Faturalar son ödeme tarihinden önce geciktirilmeksizin ilgili platformda toplanıp ödenecektir.

3- ODALARIN TAHSİSİ VE ÖZEL ALANLAR:
   - [Ev Arkadaşı 1] şu odayı kullanacaktır: [Örn: Balkonlu Büyük Oda]
   - [Ev Arkadaşı 2] şu odayı kullanacaktır: [Örn: Girişteki Orta Oda]
   - Ortak alanlar (Mutfak, Salon, banyo, antre) tüm ortaklarca eşit haklarla kullanılacak olup, özel odalara diğer ortakların izinsiz girmesi kesinlikle yasaktır.

4- ORTAK YAŞAM VE TEMİZLİK KURALLARI:
   a) Ev içi temizlik haftalık nöbetleşe plan dahilinde yapılacaktır.
   b) Ortak alanlarda (mutfak, salon) kullanılan eşyalar, kaplar ve araç gereçler kullanımdan hemen sonra (en geç 12 saat içinde) temizlenecektir.
   c) Ortak yaşamı zedeleyecek düzeyde yüksek ses, gürültü ve uyku saatlerindeki rahatsızlıklar yasaktır.
   d) Yatılı misafir ağırlama kuralları: Ortakların rızası dışında aralıksız ... günden fazla yatılı misafir kabul edilmeyecektir.

5- SÖZLEŞMENİN FESHİ VE EVDEN AYRILMA:
   Ortaklardan biri evden ayrılmak isterse, diğer ortaklara ve mal sahibine en az ... ay (en az 60 gün) önceden yazılı bildirim yapmak zorundadır. Erken ayrılan ortak, yerine diğer ortakların da onaylayacağı güvenilir yeni bir ortak bulmakla yükümlüdür. Aksi halde ayrılsa dahi o döneme ait kira ve fatura payını ödemeye devam eder.

İşbu protokol, tarafların hür iradeleri ile okunup kabul edilerek .../.../2026 tarihinde [3] nüsha olarak imzalanmıştır.

[Ortak Kiracı 1]         [Ortak Kiracı 2]         [Ortak Kiracı 3]
  Ad Soyadı / İmza         Ad Soyadı / İmza         Ad Soyadı / İmza`

  const handleCopy = () => {
    navigator.clipboard.writeText(roommateAgreementTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.coTenantTitle')}
        description={t('blogPage.coTenantSeoDesc')}
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
            <Users className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Paylaşımlı Yaşam & Hukuk</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            Ortak Kiracı Sözleşmesi Nasıl Düzenlenir?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Birden fazla kiracı içeren kontratların yasal boyutu. Müteselsil borçluluk, ev arkadaşı sözleşmesi kuralları ve haklarınızı koruyacak rehber şablonlar.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Özellikle büyükşehirlerde artan konut maliyetleri, öğrencileri, yeni mezunları ve yalnız yaşayan çalışanları ev paylaşımına yönlendiriyor. 
              Birden fazla kişinin bir araya gelerek tek bir mülkü kiralaması, ekonomik olarak büyük bir kolaylık sağlasa da yasal açıdan oldukça karmaşık bir süreci beraberinde getirir. 
              Genellikle "biz çok iyi anlaşıyoruz" diyerek çıkılan bu yolda; ödenmeyen faturalar, vaktinde yatırılmayan kiralar veya erken ayrılan bir ev arkadaşı nedeniyle büyük uyuşmazlıklar yaşanabiliyor. 
              İşte tam da bu noktada, hem ev sahiplerini hem de kiracıları koruyan en sağlıklı formül <strong>ortak kiracı sözleşmesi</strong> kurmaktır. 
              Peki, birden fazla kiracı olan bir evde resmi kontrat nasıl düzenlenir? 
              Mülk sahibine karşı kiracıların sorumlulukları nelerdir? 
              Ayrıca ev arkadaşları arasında imzalanacak bir "ev arkadaşı sözleşmesi" neden hayati öneme sahiptir? 
              Hukuki haklarınızı, yasal mevzuatı ve kopyalanabilir mutabakat taslağımızı içeren bu detaylı kılavuzda tüm merak edilenleri yanıtlıyoruz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Giriş: Ortak Kiracı Sözleşmesi Nedir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Hukuki literatürde, bir taşınmazın birden fazla kişi tarafından birlikte kiralanması durumunda <strong>ortak kiracı sözleşmesi</strong> veya "birden fazla kiracılı kira sözleşmesi" söz konusu olur. 
              Bu modelde, evin tek bir kiracısı yoktur; sözleşmenin "kiracı" kısmına evde yaşayacak olan tüm bireylerin isimleri, T.C. kimlik numaraları ve imzaları ayrı ayrı eklenir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Pek çok kişi maliyetleri düşürmek için sadece bir kişinin adına resmi sözleşme yapıp diğerlerinin "alt kiracı" veya gayriresmi ev arkadaşı olarak kalmasını tercih eder. 
              Ancak Türk Borçlar Kanunu (TBK) uyarınca, mal sahibinin açık yazılı muvafakati (izni) olmadan evi başkasına devretmek veya alt kiracıya vermek tahliye sebebidir. 
              Bu nedenle en baştan itibaren tüm tarafların sözleşmede resmi olarak yer alması en güvenli yöntemdir.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start font-sans">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Müteselsil Borçluluk İlkesi</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Ortak kira sözleşmelerinde taraflar aksi kararlaştırılmadıkça mal sahibine karşı **"Müteselsil Borçlu ve Müşterek Alacaklı"** sıfatıyla sorumludurlar. 
                  Bu durum, mülk sahibinin kira bedelinin tamamını kiracılardan herhangi birinden talep edebileceği anlamına gelir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Birden Fazla Kiracı Olması Durumunda Yasal Sorumluluklar</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Türk Borçlar Kanunu çerçevesinde, birden fazla kiracının imzaladığı kontratlarda mülk sahibine karşı sorumlulukların dağılımı oldukça katıdır. 
              Aşağıdaki üç başlık, ortak kiracıların yasal konumunu ve uyması gereken kuralları açıklar:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">A) Kira Borcunun Tamamından Sorumluluk</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              En çok yanılgıya düşülen konulardan biri, her kiracının sadece kendi "payına" düşen kiradan sorumlu olduğunun sanılmasıdır. 
              Örneğin, 3 kişinin birlikte yaşadığı ve toplam kiranın 30.000 TL olduğu bir senaryoda, kiracılardan biri kendi payı olan 10.000 TL'yi ödeyip diğerleri ödemezse, mülk sahibi yasal olarak kalan 20.000 TL'yi de ödeme yapan o tek kiracıdan talep edebilir. 
              Müteselsil sorumluluk gereği kiracılar, borcun "bölünemezliği" ilkesine tabidir. Ödeme yapan kiracı, daha sonra diğer ortaklara kendi aralarında rücu edebilir (onlardan parayı talep edebilir); ancak mal sahibine karşı "Ben kendi payımı ödedim, gerisine karışmam" diyemez.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">B) Hasar ve Demirbaş Sorumluluğu</h3>
            <p className="text-gray-655 leading-relaxed mb-6">
              Kiralanan mülke gelebilecek her türlü olağan dışı zarar ziyan, demirbaş kırılması veya hor kullanım durumlarında da tüm ortaklar mal sahibine karşı müştereken sorumludur. 
              Hasarı ortaklardan hangisinin yaptığının mal sahibi nezdinde bir önemi yoktur; mal sahibi zararın tazminini sözleşmedeki herkesten talep edebilir.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">C) Sözleşmenin Feshi ve Tahliye Süreci</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Ortak kira sözleşmelerinde fesih veya tahliye bildirimleri de "birlikte hareket etme" kuralına tabidir. 
              Kira sözleşmesini sona erdirmek isteyen kiracılar, mal sahibine gönderecekleri fesih ihbarını **hep birlikte** imzalamak zorundadırlar. 
              Sadece bir kiracının tek taraflı fesih bildirimi, tüm kira ilişkisini yasal olarak sona erdirmez. 
              Aynı şekilde mal sahibinin açacağı tahliye veya alacak davaları da tüm ortak kiracılara birlikte yöneltilmek zorundadır.
            </p>

            <div className="bg-yellow-500/10 p-8 rounded-3xl border-l-8 border-yellow-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center font-serif">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                Mal Sahibinin Onayı Olmadan Yeni Ortak Alınabilir mi?
              </h4>
              <p className="text-sm text-gray-750 leading-relaxed m-0">
                Ev arkadaşının değişmesi durumunda, yeni gelen kişinin yasal olarak hak talep edebilmesi ve mal sahibinin "fuzuli işgal" iddiasıyla tahliye davası açamaması için, sözleşmeye bir ek protokol (zeyilname) yapılarak yeni kiracının eklenmesi, ayrılanın ise çıkarılması şarttır.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. "Ev Arkadaşı Sözleşmesi" Nedir ve Neden Önemlidir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Resmi kira kontratı mal sahibi ile kiracılar arasındaki ilişkileri düzenlerken, kiracıların kendi aralarındaki mikro ilişkileri düzenlemez. 
              Birlikte yaşayan kişilerin kira payları, faturaların nasıl bölüşüleceği, temizlik görevleri, odaların tahsisi ve hatta eve yatılı misafir kabul edilme sıklığı gibi konular resmi kontrata yazılmaz.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              İşte bu içsel kuralları belgelendirmek ve olası dostluk kırılmalarını, yasal kavgaları önlemek için kiracıların kendi aralarında imzalayacağı **ev arkadaşı sözleşmesi** (dahili mutabakat protokolü) kurtarıcı bir role sahiptir. 
              Bu sözleşme, yasal olarak HMK (Hukuk Muhakemeleri Kanunu) uyarınca taraflar arasında yazılı bir delil niteliği taşır ve hak iddiasını kolaylaştırır.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Detaylı Ev Arkadaşı Sözleşmesi Şablonu</h2>
            <p className="text-gray-655 leading-relaxed mb-6">
              Evinizi yeni ortaklarla paylaşırken haklarınızı, ödeme sınırlarınızı ve günlük yaşam standartlarınızı yasal bir zemine oturtmak için hazırladığımız kopyalanabilir dahili sözleşme şablonunu kullanabilirsiniz:
            </p>

            {/* Kopyalanabilir Sözleşme Kutusu */}
            <div className="bg-gray-100 hover:bg-gray-150/50 transition-colors p-8 rounded-[40px] border border-gray-200 my-10 font-mono text-sm relative">
              <button 
                onClick={handleCopy}
                className="absolute top-6 right-6 flex items-center bg-primary text-white hover:bg-black font-sans font-bold text-xs py-2 px-4 rounded-xl shadow transition-colors"
              >
                <ClipboardCopy className="h-4 w-4 mr-2" />
                {copied ? "Kopyalandı!" : "Metni Kopyala"}
              </button>
              <pre className="whitespace-pre-wrap overflow-x-auto text-gray-750 font-mono leading-relaxed max-h-[380px]">
                {roommateAgreementTemplate}
              </pre>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Ortak Kiracı Yapısı ile Tek Kiracı Yapısının Karşılaştırılması</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Kriter / Durum</th>
                    <th className="p-4">Tek Kiracılı Sözleşme</th>
                    <th className="p-4 rounded-tr-2xl">Ortak Kiracı Sözleşmesi</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Kira Borcu Sorumluluğu</td>
                    <td className="p-4">Sadece tek bir kişi borçludur.</td>
                    <td className="p-4 font-semibold text-green-700">Tüm ortaklar müteselsilen tam sorumludur.</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Erken Ayrılma Durumu</td>
                    <td className="p-4">Cezai şartlar ve tahliye koşulu geçerlidir.</td>
                    <td className="p-4">Kalan ortakların kontratı devam eder, zeyilname gerekir.</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Faturalar & Abonelikler</td>
                    <td className="p-4">İsim sahibi tek kişi sorumludur.</td>
                    <td className="p-4 font-semibold text-green-700">Abonelik tek kişi üzerine açılsa da dahili sözleşmeyle eşit paylaşılır.</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Fesih Bildirim Yetkisi</td>
                    <td className="p-4">Tek kişi yazılı bildirimle feshedebilir.</td>
                    <td className="p-4">Fesih için tüm ortakların ortak imzası gereklidir.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Ortak Kiracılı Kontrat Düzenlerken 5 Altın Tavsiye</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Gerek mal sahipleriyle ilişkileri gerekse ev arkadaşlarınızla olan bağlarınızı yıpratmamak için şu 5 altın kuralı mutlaka uygulayın:
            </p>

            <ul className="space-y-4 text-gray-650 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Abonelikleri Bölüştürün:</strong> Elektrik, su, doğal gaz ve internet aboneliklerini tek bir kişinin üzerine yıkmak yerine, kiracılar arasında paylaştırın. Biri elektriği, diğeri doğal gazı üstlensin. Böylece risk dağıtılmış olur.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Depozitoyu Resmi Kayda Alın:</strong> Mal sahibine gönderilen depozito ödemesini kimin ne kadar miktarda yatırdığını havale açıklamasında ve dahili sözleşmede açıkça beyan edin. Evden çıkarken hak kaybını önlersiniz.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Alt Kiralama Yasağını Esnetin:</strong> Mal sahibiyle görüşerek resmi sözleşmeye "Ortak kiracılardan birinin ayrılması durumunda malikin onaylayacağı makul yeni bir ortak kiracı sözleşmeye dahil edilebilir" ibaresini ekletmeye çalışın.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Ortak Banka Hesabı veya Dijital Cüzdan:</strong> Kira ve ortak fatura ödemelerini takip etmek için ortak bir cüzdan veya harcama takip uygulaması (Splitwise vb.) kullanarak şeffaflığı zirveye taşıyın.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>En Baştan "Yazılı" Netleştirin:</strong> "Söz uçar, yazı kalır" düsturunu unutmayın. En ufak detayı bile es geçmeden hazırlayacağınız dahili protokol, dostluk ilişkilerinizin de uzun ömürlü olmasını sağlayacaktır.</span>
              </li>
            </ul>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl font-sans">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <Home className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Ortak Yaşama Uygun Sözleşmeler</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  İster tek başınıza ister birden fazla ev arkadaşınızla birlikte yaşayın; Borçlar Kanunu standartlarına %100 uyumlu sözleşmenizi dakikalar içinde ücretsiz tasarlayın.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Kira Sözleşmesi Oluştur
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
                    Ortak kiracılardan biri kirayı ödemezse diğerleri ne yapmalıdır?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Mal sahibine karşı müteselsil sorumluluk olduğu için kalan kiracılar o ödenmeyen payı da kapatıp toplam kirayı eksiksiz yatırmak zorundadır. Ödemeyen kişiden dolayı evin tahliye riskiyle karşılaşmamak adına bu ödemeyi yaptıktan sonra, ödeme yapan ortak kiracılar, ödemeyen ev arkadaşına karşı yasal takip başlatabilir ve ödedikleri tutarı rücu edebilirler.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Ev arkadaşım aniden evden ayrılmak istedi, hukuki sürecimiz nasıl işler?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Ev arkadaşınızın adı resmi sözleşmede yazılı ise, mal sahibinin onayı olmadan tek başıma çıkıyorum diyerek sorumluluktan kurtulamaz. Mal sahibine karşı borçluluğu devam eder. Ayrılmak isteyen ortak, yerine güvenilir yeni bir kiracı bulmalı ve mal sahibiyle üçlü bir ek zeyilname imzalayarak resmi devir gerçekleştirmelidir. Aksi takdirde kira payını ödemekle yükümlü kalır.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Ev arkadaşı sözleşmesinin noterden tasdik edilmesi yasal olarak şart mıdır?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Hayır, noter onayı şart değildir. Ortakların kendi aralarında ıslak imza ile imzaladıkları dahili mutabakat protokolü, Borçlar Kanunu uyarınca adi yazılı sözleşme hükmündedir ve mahkemeler nezdinde geçerli birer kesin delil belgesidir. Ancak imza inkarını tamamen saf dışı bırakmak isteyenler noterden onaylatmayı veya nitelikli elektronik imza ile imzalamayı da tercih edebilirler.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 2 Haziran 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Av. Meltem Şen (Kira ve Gayrimenkul Hukukçusu)</span>
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
            <Link to="/online-kira-sozlesmesi-gecerli-mi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Online Kira Sözleşmesi Geçerli mi?</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Elektronik ve çevrim içi düzenlenen kira akitlerinin yasal geçerliliği, e-imza, e-devlet entegrasyonu ve ispat gücü...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
