import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, Gavel, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, HelpCircle, AlertTriangle, Key, Home, DollarSign, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function DuesResponsibilityBlog() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.duesResponsibilityTitle') + " — 2026 Güncel Yasal Bölüşüm"}
        description={t('blogPage.duesResponsibilitySeoDesc')}
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
            <span className="text-sm font-bold uppercase tracking-widest">Giderlerin Paylaşımı Rehberi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.duesResponsibilityTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Apartman ve site yaşamında en büyük uyuşmazlık konularından biri olan ortak giderleri ve aidatı kimin ödeyeceğini Kat Mülkiyeti Kanunu ve Borçlar Kanunu kapsamında aydınlatıyoruz.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-accent pl-6">
              Özellikle büyükşehirlerde çok katlı apartmanlarda veya büyük sosyal tesislere sahip sitelerde yaşamanın en önemli maliyet kalemlerinden birini <strong>aidat</strong> giderleri oluşturmaktadır. 
              Kira ilişkisi kurulduktan sonra her ay düzenli olarak ödenen bu tutarın kimin sorumluluğunda olduğu sorusu, hem kiracılar hem de mülk sahipleri arasında en sık tartışılan ve uyuşmazlığa yol açan konulardan biridir. 
              Genel algı "Evde kiracı oturuyorsa her şeyi kiracı öder" yönünde olsa da yasal durum bundan oldukça farklıdır. 
              <strong>Aidat kiracı ev sahibi</strong> arasında nasıl bölüştürülür? Demirbaş yenileme ücretleri, asansör bakımları, güvenlik maaşları ve temizlik malzemelerinin hangisi kime yansıtılmalıdır? 
              Gelin, 2026 yılı güncel hukuki çerçevesi, Kat Mülkiyeti Kanunu ve Türk Borçlar Kanunu ışığında bu soruların yanıtlarını detaylı bir analize tabi tutalım.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Yasal Düzenleme: Apartman Giderlerinde Kanun Ne Diyor?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira ilişkisinde aidat ve ortak giderlerin paylaşımı iki temel kanun tarafından düzenlenmiştir: <strong>634 sayılı Kat Mülkiyeti Kanunu (KMK)</strong> ve <strong>6098 sayılı Türk Borçlar Kanunu (TBK)</strong>. 
              Bu kanunların hükümleri birlikte değerlendirildiğinde, giderlerin niteliğine göre net bir ayrım yapıldığı görülmektedir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kat Mülkiyeti Kanunu Madde 22, ortak giderlerin ödenmesinden birinci derecede kat malikinin (yani ev sahibinin) sorumlu olduğunu kesin bir dille belirtir. 
              Yasa, "Kat malikinin ortak gidere ait borcu, o bağımsız bölümden kiracı olarak yararlananlara da rücu edilebilir" der. 
              Ancak burada çok önemli bir kriter vardır: Kiracının sorumluluğu, yalnızca ödemekle yükümlü olduğu kira miktarı ile sınırlıdır ve yaptığı ödeme kirasından düşülebilir. 
              Eğer aidat ödemesini kiracı yapmazsa, apartman yönetimi doğrudan ev sahibine yasal takip yapabilir.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Kanunun Temel İlkesi</h4>
                <p className="text-gray-600 m-0">
                  Hukuk sistemimizin benimsediği ana kural şudur: <strong>Kullanımla tükenen ve günlük yaşama yönelik giderleri kiracı öderken; mülkün değerini artıran, kalıcı ve yapısal yatırım niteliğindeki giderleri (demirbaşları) ev sahibi ödemekle yükümlüdür.</strong> 
                  Bu ilke çerçevesinde <strong>aidat kiracı ev sahibi</strong> arasındaki bölüşümün adilce yapılması gerekmektedir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Aidat ve Gider Türleri: Hangisinden Kim Sorumludur?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Apartman veya site yönetimleri tarafından toplanan aidatların arkasındaki bütçe tek bir kalemden oluşmaz. 
              Olası tartışmaları önlemek adına, gider türlerini ayrı ayrı incelemek büyük önem arz eder.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">1. İşletme Giderleri (Kiracının Ödemesi Gerekenler)</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Apartmanda günlük hayatın olağan şekilde akmasını sağlayan, doğrudan binada yaşayanların tüketimine ve kullanımına dayalı kalemlerdir. 
              Bu giderler mülkün yapısına kalıcı bir katma değer sağlamaz, sadece yaşam standartlarını korur. Dolayısıyla bu giderler bütünüyle <strong>kiracı</strong> tarafından karşılanmalıdır:
            </p>
            <ul className="space-y-3 text-gray-650 mb-6 font-sans text-sm">
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-accent mr-3" /> Ortak alanların elektrik (asansör, aydınlatma vb.) ve su faturaları</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-accent mr-3" /> Apartman temizlik görevlisinin, kapıcının veya site güvenliğinin maaşı, SGK primleri ve kıdem tazminatı karşılıklarının günlük işletme payı</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-accent mr-3" /> Bahçe bakımı, temizlik malzemeleri alımı, dezenfeksiyon gibi rutin hizmetler</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-accent mr-3" /> Kaliferli veya merkezi sistem binalarda kömür, doğalgaz gibi günlük ısınma yakıt bedelleri</li>
            </ul>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">2. Yatırım ve Demirbaş Giderleri (Ev Sahibinin Ödemesi Gerekenler)</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Konutun değerine kalıcı katkı sunan, binanın ömrünü uzatan, kiracı evden taşınıp gitse dahi binada kalmaya devam edecek olan tüm yapısal yenileme ve iyileştirmelerdir. 
              Bu tip harcamalardan kiracının sorumlu tutulması hukuken imkansızdır. <strong>Tamamı ev sahibine aittir</strong>:
            </p>
            <ul className="space-y-3 text-gray-650 mb-6 font-sans text-sm">
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-red-500 mr-3" /> Binanın dış cephe mantolaması, yalıtımı ve boyanması masrafları</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-red-500 mr-3" /> Asansörün motorunun yenilenmesi, halatların değiştirilmesi gibi büyük ölçekli modernizasyon işleri</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-red-500 mr-3" /> Apartman çatısının onarılması veya tamamen sıfırdan yapılması</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-red-500 mr-3" /> Merkezi ısıtma kazanının değiştirilmesi, tesisat yenileme maliyetleri</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-red-500 mr-3" /> Kapıcı dairesinin tadilat giderleri, hidrofor veya su deposu alımı</li>
            </ul>

            <div className="bg-red-500/10 p-8 rounded-3xl border-l-8 border-red-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                "Yedek Akçe / Demirbaş Fonu" Ayrımına Dikkat!
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed m-0">
                Apartman yönetimleri gelecekte yapılacak boya, tadilat veya asansör değişimi gibi büyük harcamalar için her ay aidatın yanında "Yedek Akçe", "Demirbaş Fonu" veya "Yatırım Katsayısı" adı altında ek para toplarlar. 
                Bu fonlar doğrudan ileride mülke yapılacak kalıcı yatırımlara dönüştüğü için <strong>kiracı tarafından ödenmemelidir</strong>. 
                Eğer yönetim bu parayı aidat makbuzu içinde talep ediyorsa, kiracının bu tutarı ayıklayıp sadece işletme kısmını ödemesi, geri kalan kısım için ev sahibine bilgi vermesi gerekir.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Sözleşmesinde Aidat Maddesi Belirtmenin Önemi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira uyuşmazlıklarının çok büyük bir kısmı, baştan düzgün ve açık bir dille hazırlanmayan sözleşmelerden kaynaklanır. 
              <strong>Kira sözleşmesi yenileme</strong> veya imzalama aşamasında aidattan kimin sorumlu olacağı, ortak gider limitleri ve olası muafiyetlerin kontrata net bir maddeyle eklenmesi her iki tarafı da yasal olarak korur.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Örneğin sözleşmede; "Kiracı, apartman yönetimince belirlenen olağan işletme giderlerine katılım payı olan aidatı ödemekle yükümlüdür. Demirbaş, yatırım bütçesi ve yedek akçe kapsamındaki tüm giderler ise kirasından düşülmek üzere kiraya veren tarafından karşılanacaktır" şeklinde net bir ibarenin bulunması olası tartışmaların önüne geçer.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Sözleşmeye "Her türlü aidatı kiracı öder" yazılırsa ne olur?</strong> 
              Kanunun emredici nitelikteki demirbaş ve mülk sahibi yükümlülüğü kuralları gereği, sözleşmeye yazılmış dahi olsa kiracıya demirbaş veya bina kıdem tazminatı gibi yatırım masrafları <strong>hukuken yansıtılamaz</strong>. 
              Böyle bir madde yazılsa bile Yargıtay buradaki yoruma sığınarak kiracıyı haksız borçlandırmaktan korur ve ilgili hükmü geçersiz sayabilir. Bu nedenle yasal sınırların dışına taşmayan dengeli kontrat maddelerinin dürüstçe yazılması gerekir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Giderlerin Karşılaştırmalı Dağılım Tablosu</h2>
            <div className="overflow-x-auto my-10 font-sans">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Apartman / Site Ortak Gider Kalemi</th>
                    <th className="p-4">Kiracı Sorumluluğu</th>
                    <th className="p-4 rounded-tr-2xl">Ev Sahibi Sorumluluğu</th>
                  </tr>
                </thead>
                <tbody className="text-gray-650">
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Kapıcı / Güvenlik / Temizlikçi Maaşı</td>
                    <td className="p-4 text-green-700 font-semibold">Evet (Günlük İşletme)</td>
                    <td className="p-4 text-gray-400">Hayır</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Ortak Alan Elektrik ve Su Faturaları</td>
                    <td className="p-4 text-green-700 font-semibold">Evet (Tamamı)</td>
                    <td className="p-4 text-gray-400">Hayır</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Dış Cephe Mantolama / Boya</td>
                    <td className="p-4 text-gray-400">Hayır</td>
                    <td className="p-4 text-red-650 font-semibold">Evet (Tamamı)</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Asansör Rutin Bakım / Yağlama</td>
                    <td className="p-4 text-green-700 font-semibold">Evet (Aylık Hizmet)</td>
                    <td className="p-4 text-gray-400">Hayır</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Asansör Motor Değişimi / Revizyon</td>
                    <td className="p-4 text-gray-400">Hayır</td>
                    <td className="p-4 text-red-650 font-semibold">Evet (Demirbaş)</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Çatı Akması Onarımı</td>
                    <td className="p-4 text-gray-400">Hayır</td>
                    <td className="p-4 text-red-650 font-semibold">Evet (Yatırım)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Bahçıvan / Peyzaj Hizmet Payı</td>
                    <td className="p-4 text-green-700 font-semibold">Evet (Hizmet)</td>
                    <td className="p-4 text-gray-400">Hayır</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Uyuşmazlık Çözümü: Kiracı Ödediği Demirbaş Ücretini Geri Alabilir Mi?</h2>
            <p className="text-gray-655 leading-relaxed mb-6">
              Özellikle otomatik ödeme talimatı olan veya apartman yönetiminin baskısından çekinen kiracılar, bilmeden ev sahibine ait olan demirbaş ödemelerini de yapabilmektedir. 
              Eğer bir kiracı ev sahibinin ödemesi gereken bir bina ortak giderini (çatı, asansör motoru, boya gibi) ödemişse ne yapmalıdır?
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Kira Bedelinden Mahsup Etme (Düşme) Formülü:</strong> 
              Türk Borçlar Kanunu kapsamında kiracı, mülk sahibi adına ödemiş olduğu bu tip demirbaş ve yatırım tutarlarını, bir sonraki ayın <strong>kira ödemesinden doğrudan düşebilir</strong>. 
              Ancak hak kaybı yaşamamak ve süreci hukuken ispatlayabilmek için şu adımları izlemek elzemdir:
            </p>
            <ol className="space-y-4 text-gray-650 mb-8 list-decimal pl-6 font-sans text-base">
              <li>Mülk sahibi adına ödenen tutarın faturasını veya apartman yönetiminden alınan resmi tahsilat makbuzunu talep edin. Makbuzda ödenen miktarın "Demirbaş Gideri, Asansör Motoru veya Mantolama Payı" olduğu açıkça yazmalıdır.</li>
              <li>Söz konusu makbuzu, ev sahibine WhatsApp, e-posta veya noter ihtarı kanalıyla yazılı olarak iletin. Kendisine "Apartman yönetimi tarafından talep edilen demirbaş gideri tarafımca ödenmiş olup, ekteki makbuz doğrultusunda bu ayki kiradan mahsup edilecektir" şeklinde bilgilendirme yapın.</li>
              <li>Kira bedelini bankadan gönderirken açıklama kısmına kesinlikle "X Ayı Kirası — Ödenen Demirbaş Bedeli Mahsubu" ifadesini yazarak kalan tutarı havale edin. Bu sayede yasal olarak kendinizi tam koruma altına almış olursunuz.</li>
            </ol>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kiracı aidatı ödemezse kapıcı hizmetinden mahrum bırakılabilir mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Hayır. Apartman yönetimi, aidatını ödemeyen veya geciktiren kiracıya karşı icra takibi başlatabilir veya aylık %5 gecikme tazminatı uygulayabilir ancak kapıcı, asansör kullanımı veya çöp toplama gibi ortak yasal hizmetleri tek taraflı olarak kesemez. Hizmetlerin engellenmesi kiracının kişisel haklarının ihlali anlamına gelir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Ev sahibi boş duran dairesinin aidatını ödemek zorunda mıdır?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Evet. Bağımsız bölümün içinde bir kiracı olmasa ya da daire tamamen boş dursa dahi, mülk sahibi apartman ortak alanlarından yararlansın veya yararlanmasın tüm ortak giderleri (hem işletme hem demirbaş) zamanında ödemekle yükümlüdür. "Evim boş, kapıcı istemiyorum" diyerek aidatı ödemekten kaçınamaz.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kapıcının kıdem tazminatını kiracı mı öder mülk sahibi mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Yargıtay kararlarına göre kapıcının kıdem tazminatı, kıdem süresi boyunca mülkün değerini ve apartmanın sürekliliğini koruyan bir unsur olarak bir demirbaş borcu (kalıcı yükümlülük) kabul edilir. Dolayısıyla kıdem tazminatının tamamı <strong>ev sahibine aittir</strong>. Ancak kiracının oturduğu süreye isabet eden günlük işletme payından yönetim kıdem karşılığı fona aktarım yapıyorsa bu kısım aidata yansıtılabilir fakat doğrudan toplu kıdem ödeme talepleri kesinlikle mal sahibine iletilmelidir.
                </p>
              </details>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Gider Dağılımını Öngören Kira Sözleşmenizi Hemen Oluşturun</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  İleride aidat, demirbaş veya asansör revizyonu gibi konularda sürpriz tartışmalar yaşamayın. 
                  Kat Mülkiyeti Kanunu'na tam uyumlu, aidat ve ortak gider paylaşım maddeleri içeren yasal kira sözleşmelerini saniyeler içinde ücretsiz oluşturun.
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
              <span>Son Güncelleme: 14 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Av. Elif Şahin</span>
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
            <Link to="/kira-sozlesmesi-yenileme-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesi Ne Zaman Yenilenir?</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesinin otomatik uzama şartları, süresi ve kiracının ihtarname süreleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/tahliye-taahhutnamesi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Tahliye Taahhütnamesi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Tahliye taahhütnamesi nedir, ne zaman gereklidir ve hukuken geçerli olmak üzere nasıl doldurulur...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-sozlesmesi-noter-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesi Noter mi?</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesini noter huzurunda yapmanın sunduğu hukuki güvenceler ve tüm maliyetleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
