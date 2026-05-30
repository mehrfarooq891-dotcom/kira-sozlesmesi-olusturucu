import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, Award, Clock, ClipboardCopy, Info, HelpCircle, HardDrive, Smartphone, Laptop, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function OnlineLeaseBlog() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Kopyalanabilir Dijital İmza ve Rıza Beyanı Klozu
  const digitalClauseTemplate = `DİJİTAL SÖZLEŞME VE ELEKTRONİK İMZA MUTABAKAT PROTOKOLÜ (KLOZU)

İşbu kira sözleşmesinin ayrılmaz bir parçasını oluşturan bu mutabakat maddesi, tarafların sözleşmeyi fiziki ortama gitmeksizin, uzaktan ve dijital yöntemlerle onaylamalarına hukuki zemin hazırlamak amacıyla hazırlanmıştır:

1- TARAFLARIN KABULÜ:
   Kiraya veren ve Kiracı, işbu kira kontratını ve eklerini basılı (fiziki) kağıt üzerinde ıslak imza ile imzalamak yerine; çevrim içi platformlar, e-imza araçları, mobil imza, zaman damgalı onay mekanizmaları veya güvenilir SMS/E-Posta akış onayları ile imzalamayı / onaylamayı karşılıklı olarak kabul ve taahhüt ederler.

2- YASAL GEÇERLİLİK (HMK m. 193 ve TBK m. 12-14 VE m. 27):
   Taraflar, 6100 sayılı Hukuk Muhakemeleri Kanunu (HMK) uyarınca, bu dijital yöntemle üretilen elektronik kayıtların, log dosyalarının, onay verilerinin, IP adreslerinin ve e-posta yazışmalarının mahkemeler nezdinde kesin ve bağlayıcı birer "YAZILI DELİL" teşkil edeceğini beyan ederler.

3- ELEKTRONİK İMZA VE KİMLİK DOĞRULAMA:
   Onaylama aşamasında taraflarca kullanılan;
   a) 5070 sayılı Elektronik İmza Kanunu'na uygun Nitelikli Elektronik İmzalar (E-İmza), veya
   b) Sistem üzerinde kayıtlı kimlik/telefon numarasına gönderilen Tek Kullanımlık Onay Şifreleri (OTP / SMS onayları) ve buna ait sistem kayıtları, 
   tarafların hür iradeleri ile attıkları ıslak imza hükmünde ve değerinde kabul edilmiştir.

4- DELİL SÖZLEŞMESİ:
   Taraflar, işbu dijital mutabakatın HMK Madde 193 anlamında bir delil sözleşmesi olduğunu, dijital arayüzde üretilen kriptografik belgelerin ve veritabanı kayıtlarının değiştirilemezliğine ve doğruluğuna karşı hiçbir itirazda bulunmayacaklarını şimdiden gayrikabili rücu kabul, beyan ve taahhüt ederler.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(digitalClauseTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.onlineLeaseTitle') + " — Dijital Kira Akdi Geçerli mi?"}
        description={t('blogPage.onlineLeaseSeoDesc')}
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
            <Laptop className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Gelecek & Hukuk Trendleri</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8 animate-fadeIn"
          >
            {t('blogPage.onlineLeaseTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Çevrim içi hazırlanan kira sözleşmelerinin yasalar karşısındaki yeri. Islak imza şartı aranır mı? E-İmza, e-Devlet ve uzaktan onay mekanizmalarında haklarınızı koruyacak rehber.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Teknolojinin hayatımızın her katmanına entegre olması, geleneksel iş yapma biçimlerimizi temelden sarsarak dönüştürüyor. 
              Uzun yıllardır "kırtasiyeden alınan sarı matbu kağıtlar" ile özdeşleşen kiralama süreci de bu dönüşümün en son ve en keskin duraklarından biri haline geldi. 
              Günümüzde mülk sahipleri ve kiracılar artık fiziksel bir ofiste buluşmak, şehir dışından seyahat etmek ya da sayfalarca evrak basıp ıslak imza atmak yerine işlemlerini dijital dünyada çözmeyi tercih ediyor. 
              Tam bu noktada, hem yatırımcıların hem de yeni ev arayanların aklında en çok yankılanan soru şudur: <strong>Online kira sözleşmesi</strong> yasal olarak geçerli midir? 
              Islak imzanın bulunmadığı, tamamen dijital piksellerden ve veri tabanı kayıtlarından oluşan bir sözleşme, olası bir uyuşmazlık anında mahkemeye bir "delil" olarak sunulabilir mi? 
              Türk Borçlar Kanunu’nun "şekil serbestisi" ilkesinden 5070 sayılı Elektronik İmza Kanunu’na, e-Devlet entegrasyonu çalışmalarından pratik dijital onay şablonlarına kadar, <strong>online kira sözleşmesi</strong> kavramının hukuki zeminini ve geleceğini en şeffaf boyutlarıyla inceliyoruz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Hukuki Zemin: Kira Sözleşmesinde Şekil Serbestisi İlkesi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Türk Borçlar Kanunu (TBK) çerçevesinde sözleşmelerin yapılması ve geçerliliği kural olarak hiçbir şekle bağlı değildir. 
              Kanunda aksi açıkça öngörülmedikçe, bir sözleşmenin geçerli olması için yazılı olması, tapuya şerhedilmesi veya noterde yapılması gibi zorunlu şekil şartları aranmaz.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Buna bağlı olarak, kira sözleşmeleri de kanunen herhangi bir şekil şartına tabi değildir. 
              Yasal olarak tarafların "sözlü" mutabakatı bile (şahitler ve aktarılan banka dekontları ile ispatlandığı sürece) geçerli bir kira sözleşmesi doğurur. 
              Dolayısıyla, tarafların yazılı bir mutabakatı dijital formda bir araya getirmesi, yani <strong>online kira sözleşmesi</strong> imzalaması önünde hiçbir yasal engel bulunmamaktadır. 
              Buradaki asıl mesele "geçerlilik" değil; olası bir uyuşmazlıkta sözleşmenin "ispat edilebilirliği" meselesidir.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Hukuk Muhakemeleri Kanunu (HMK) Ne Diyor?</h4>
                <p className="text-gray-650 m-0 leading-relaxed font-sans text-sm">
                  HMK m. 199 uyarınca; uyuşmazlık konusu vakaları ispata elverişli yazılı veya basılı metinler, fotoğraflar, filmler, ses kayıtları ile bilgisayar verileri gibi her türlü elektronik kayıt **belge** statüsündedir. 
                  Bu sayede çevrim içi hazırlanan belgeler de yasal ispat gücüne sahiptir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Elektronik İmza (E-İmza) ve Mobil İmza Kullanımının Rolü</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Dijital ortamda hazırlanan kira sözleşmelerinin güvenliğini en tepeye taşıyan ve ona "kesin delil" statüsü kazandıran mekanizma, 5070 sayılı Elektronik İmza Kanunu'nda düzenlenen **Nitelikli Elektronik İmza (E-İmza)** kullanımıdır.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              Kanun uyarınca, nitelikli elektronik imza ile atılan imzalar, yasal olarak **ıslak imza ile tamamen eşit hukuki sonuçları doğurur**. 
              BTK tarafından yetkilendirilmiş elektronik sertifika hizmet sağlayıcıları (ESH) vasıtasıyla alınan e-imza veya operatörlerin sunduğu mobil imza ile onaylanmış bir <strong>online kira sözleşmesi</strong>, fiziksel olarak notere gidip kontrat imzalamak kadar güçlü, sarsılmaz bir yasal tabana sahiptir. 
              İmzanın inkar edilmesi durumu bu teknoloji sayesinde neredeyse imkansız hale gelmektedir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. e-Devlet Kontrat Entegrasyonu ve Bakanlık Çalışmaları</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Hepsinden önemlisi, devletin bizzat kendisi de bu dijital devrime resmiyet kazandırmaktadır. 
              Hazine ve Maliye Bakanlığı ile Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın ortaklaşa yürüttüğü projeler kapsamında, kira sözleşmelerinin e-Devlet portalı üzerinden yapılabilmesi için altyapı çalışmaları devreye alınmaya başlanmıştır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              e-Devlet sistemi üzerinden oluşturulacak bu yeni modelde; mülk sahibi gayrimenkul detaylarını girerek bir şerit kontrat oluşturacak, kiracı ise kendi e-Devlet paneli üzerinden bunu kontrol edip onaylayacaktır. 
              Bu sistem tamamen güvenli bir log takibiyle kurulduğundan, vergi beyannamelerinden abonelik işlemlerine kadar tüm entegrasyonlar saniyeler içinde otomatik tamamlanacaktır. 
              Resmi makamların bu adımı, <strong>online kira sözleşmesi</strong> konseptinin sadece geçici bir heves değil, çağdaş hukuk sisteminin yeni standardı olduğunu açıkça ilan etmektedir.
            </p>

            <div className="bg-yellow-500/10 p-8 rounded-3xl border-l-8 border-yellow-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                Önemli Ayrıntı: Delil Sözleşmesi Yapılması
              </h4>
              <p className="text-sm text-gray-750 leading-relaxed m-0">
                Eğer nitelikli e-imza kullanmadan basit dijital onaylar, SMS kodları veya e-posta yoluyla kira sözleşmesi akdediyor iseniz; sözleşmenizin içine mutlaka **"Delil Sözleşmesi"** niteliğinde bir madde (kloz) eklemelisiniz. 
                Bu madde, tarafların dijital sistem loglarını mahkemede kesin delil sayacağını peşinen onayladığı yasal güvencedir.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Online Kira Sözleşmesinin Sağladığı 5 Kritik Avantaj</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Geleneksel matbu kağıtlardan sıyrılıp dijital kira akitlerine geçiş yapmak her iki tarafa da benzersiz pratiklik sağlar. 
              İşte dijitalleşmenin öne çıkan 5 temel avantajı:
            </p>

            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Zaman ve Mekan Bağımsızlığı:</strong> Taraflar farklı şehirlerde, hatta farklı ülkelerde olsa dahi fiziki seyahat zahmetine katlanmadan dakikalar içinde kontratı sonuçlandırıp dijital olarak imzalayabilirler.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Arşivleme ve Kaybolma Riskinin Yok Olması:</strong> Kağıt sözleşmeler ıslanabilir, yırtılabilir veya taşınma esnasında kaybolabilir. Çevrim içi sözleşmeler ise bulut barındırma, e-posta veya dijital depolarda ömür boyu şifrelenmiş olarak güvendedir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Hataların Önlenmesi:</strong> Dijital imzalama araçları ve online sözleşme oluşturma sihirbazları, zorunlu alanların (T.C. kimlik numaraları, IBAN, kira tutarı vb.) boş bırakılmasını veya hatalı yazılmasını otomatik olarak denetleyerek hataları minimize eder.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Sürdürülebilirlik ve Çevre Dostu:</strong> Kağıt israfının önüne geçilir. Her yıl yüz binlerce abonenin sayfalarca kontrat fotokopisi çıkarması engellenerek ciddi bir karbon tasarrufu ve ağaç muhafazası elde edilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Zaman Damgası Entegrasyonu:</strong> Dijital onay akışlarında bulunan zaman damgası sayesinde, sözleşmenin hangi gün ve hangi saatte imzalandığı kriptografik olarak resmi tescil kazanır. "Sonradan tarih değiştirildi" iddiaları tamamen imkansız kılınır.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Dijital Kira Sözleşmesi Kurarken Nelere Dikkat Edilmeli?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Teknolojinin sunduğu kolaylıkların yanında, siber güvenlik açıkları ve suistimallere karşı kendinizi emniyete almanız gerekmektedir:
            </p>
            <ol className="space-y-4 text-gray-650 mb-12 list-decimal pl-6 font-sans text-base">
              <li><strong>Kimlik Bilgilerinin Doğrulanması:</strong> Karşı tarafın gerçekten beyan ettiği kişi olduğundan emin olmak için e-Devlet üzerinden üretilmiş tarihli yerleşim yeri belgesi (ikametgah) ve nüfus kayıt örneği talep edin.</li>
              <li><strong>IP ve Log Kayıtlarının Saklanması:</strong> Sözleşmenin onaylandığı platformun, tarafların onay esnasındaki IP adreslerini, tarayıcı bilgilerini ve işlem zamanlarını kayıt altına aldığından emin olun.</li>
              <li><strong>Güvenli Ödeme Akışları:</strong> Sözleşme onaylandıktan sonra ilk kira ve depozito ödemelerini mutlaka sözleşmede belirtilen ve T.C. kimlik numarasıyla eşleşen resmi banka IBAN hesabına, açıklama kısmına "Kira Bedeli" yazarak havale edin.</li>
            </ol>

            {/* Kopyalanabilir Dijital Protokol Kutusu */}
            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Ücretsiz Dijital Mutabakat Klozu</h3>
            <p className="text-gray-655 leading-relaxed mb-4">
              Çevrim içi hazırlayacağınız veya PDF olarak tanzim edeceğiniz sözleşmelere aşağıdaki delil sözleşmesi maddesini entegre ederek yasal ispat gücünü maksimuma ulaştırabilirsiniz:
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
                {digitalClauseTemplate}
              </pre>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Online Kira Kontratlarının Karşılaştırmalı Analizi</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Yöntem Türü</th>
                    <th className="p-4">Hukuki İspat Gücü</th>
                    <th className="p-4">Uygulama Kolaylığı</th>
                    <th className="p-4 rounded-tr-2xl">Arşivleme Güvenliği</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Kağıt Matbu (Islak İmza)</td>
                    <td className="p-4 text-orange-600 font-semibold">Orta-Yüksek (İmza itirazı sıktır)</td>
                    <td className="p-4">Düşük (Fiziki buluşma gerekir)</td>
                    <td className="p-4">Zayıf (Fiziki kayıp riski)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Nitelikli E-İmza (5070 Sayılı)</td>
                    <td className="p-4 text-green-700 font-bold">Maksimum (Yasal ıslak imza dengi)</td>
                    <td className="p-4">Orta (Donanım/Sertifika gerekir)</td>
                    <td className="p-4">Mükemmel (Kriptografik mühürlü)</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Zaman Damgalı Dijital Onay</td>
                    <td className="p-4 text-green-700 font-bold">Yüksek (Delil sözleşmesiyle birlikte)</td>
                    <td className="p-4">En Kolay (SMS, Web, Mobil onay)</td>
                    <td className="p-4">Çok İyi (Bulut yedekli)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <Sparkles className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Dijital Çağın Güvenli Kira Sözleşmesi Platformu</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Hiçbir ek kuruluma gerek kalmadan, akıllı cihazınızla tamamen hukuki standartlara uygun Kira Sözleşmenizi saniyeler içinde tasarlayın ve PDF halinde çıktısını alın.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Hemen PDF Sözleşme Oluştur
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
                    WhatsApp veya E-Posta üzerinden yapılan kira mutabakatları geçerli midir?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Evet, geçerlidir. Yargıtay’ın güncel kararları uyarınca, WhatsApp yazışmaları ve düzenli e-posta bildirimleri tarafların niyetlerini beyan ettikleri elektronik belge niteliğinde delil olarak kabul edilmektedir. 
                  Ancak bu tip yazışmaların sahteliğinin iddia edilmesi durumunda adli tıp uzmanları tarafından teknik log incelemeleri yapılması gerekebileceğinden, kurumsal ve zaman damgalı online sözleşmelere göre ispat süreci biraz daha uzundur.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Elektronik kira akitlerinin noter onaylı olmaması risk yaratır mı?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Hayır. Türkiye'deki kira sözleşmelerinin ezici çoğunluğu noter onaylı olmadan adi yazılı şekilde tanzim edilir ve yasal olarak tamamen koruma altındadır. 
                  Noter onayı sadece imza tespitini ve imza gününün sorgulanamazlığını kesinleştirir. 
                  Zaman damgası ile damgalanmış nitelikli elektronik imza veya log kayıtlı onay sistemleri de aynı tescili teknik olarak sağladığından, noter masrafı yapmaksızın benzer hukuki korumaya erişebilirsiniz.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Kiracı yurt dışındayken kontrat nasıl imzalanır?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  En pratik yol dijital sözleşme yönetimidir. 
                  Mülk sahibi sözleşmeyi online olarak düzenleyip e-posta veya SMS ile kiracıya gönderir. 
                  Kiracı bulunduğu ülkeden akıllı telefonu ya da bilgisayarı vasıtasıyla e-imza saniyeler içinde kimlik doğrulamalarını tamamlayarak sözleşmeyi onaylar. 
                  Bu sayede yüksek kargo ücretleri ve konsolosluk onay süreçlerine başvurmadan yasal geçerli kiralama akdedilmiş olur.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 30 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Dr. Caner Kaya (Bilişim Hukukçusu)</span>
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
            <Link to="/ev-kiralarken-dikkat-edilmesi-gerekenler" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Ev Kiralarken Dikkat Edilecekler</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Ev kiralarken dikkat edilmesi gereken 10 şey: Tapu tescili, depozito, aidat ve demirbaşlar...</p>
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
