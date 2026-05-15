import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, Gavel, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, HelpCircle, AlertTriangle, Landmark, Award, Calculator, Percent, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function StampDutyBlog() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.stampDutyTitle') + " — 2026 Güncel Kılavuz"}
        description={t('blogPage.stampDutySeoDesc')}
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
            <span className="text-sm font-bold uppercase tracking-widest">Yasal & Mali Mevzuat Kılavuzu</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.stampDutyTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Mali mevzuatta kira sözleşmeleri için öngörülen damga vergisi yükümlülüğü nedir? 2026 yılı güncel vergi oranı, konut ve işyeri istisnaları, kefil durumunda değişen hesaplamalar.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-accent pl-6">
              Kira sözleşmeleri, mülk sahipleri ile kiracılar arasındaki mali ve hukuki ilişkiyi resmiyete döken kurucu belgelerdir. 
              Sözleşmenin tarafları yasal haklarını ararken veya noter gibi mercilerde işlem yaparken karşılarına sıklıkla devletin aldığı bir vergi türü çıkar: <strong>Damga Vergisi</strong>. 
              Özellikle ticari gayrimenkullerde (işyeri) ve belirli şartlarda konut kiralamalarında ödenmesi zorunlu olan bu vergi, çoğu zaman bütçe planlamasında gözden kaçırılmaktadır. 
              Peki, <strong>damga vergisi kira</strong> kontratlarında nasıl hesaplanır? 2026 yılı güncel oranları nelerdir? Bu vergiyi yasal olarak ödemekle yükümlü olan taraf kimdir? 
              İşte, mali rehber niteliğinde hazırladığımız 2026 güncel kira damga vergisi hesaplama kılavuzu.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Damga Vergisi Nedir? Kira İle İlişkisi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Damga Vergisi Kanunu kapsamında, kişilerin veya kurumların birbirleriyle yaptıkları hukuki işlemleri ispat edebilen her türlü yazılı belgeden (sözleşmeler, beyannameler, taahhütnameler vb.) devlet tarafından maktu veya nispi oranda tahsil edilen dolaylı bir vergi türüdür.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmeleri de yasada belirtilen "kağıtlar" sınıfında yer aldığı için doğrudan damga vergisine tabidir. 
              Ancak burada devlet, vatandaşların barınma hakkını kolaylaştırmak adına çok önemli bir yasal ayırım ve istisna öngörmüştür:
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Dev İstisna: Konut Kiralarında Damga Vergisi Muafiyeti</h4>
                <p className="text-gray-600 m-0">
                  Damga Vergisi Kanunu'na ekli (2) sayılı tablonun "IV. Ticari ve medeni işlerle ilgili kağıtlar" bölümü uyarınca; **gerçek kişilerin konut (mesken) olarak kiralamak amacıyla imzaladıkları kira sözleşmeleri damga vergisinden muaftır**. 
                  Yani, evinizi bir aileye veya öğrenciye mesken olarak kiraladığınız adi yazılı kira kontratı için hiçbir damga vergisi ödemeniz gerekmez. 
                  Ancak bu muafiyet **işyeri (ticari) kiralarında geçerli değildir**.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Sözleşmelerinde Damga Vergisi Oranı Nedir? (2026 Güncel)</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              İşyeri kira sözleşmelerinde veya istisna dışı kalan diğer kiralama modellerinde damga vergisi, maktu (sabit) değil, nispi (oran üzerinden) hesaplanır. 
              Yani sözleşmedeki toplam taahhüt miktarının büyüklüğüne göre ödenecek vergi de artar.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              2026 yılı itibarıyla yürürlükte olan güncel Vergi Kanunları ve Harçlar Tebliği doğrultusunda, kira mukavelenameleri için uygulanan nispi **damga vergisi oranı binde 1,89 (0,00189)** olarak belirlenmiştir.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Kefil Olması Durumunda Damga Vergisi Oranı Nasıl Değişir?</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira ilişkisinde güvenliği artırmak amacıyla sözleşmeye bir kefilin de dahil edilmesi son derece yaygındır. 
              Ancak vergi kanunlarına göre kefilin türü, doğrudan <strong>damga vergisi kira</strong> hesaplamasındaki vergi oranını değiştirmektedir:
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Adi Kefil veya Müteselsil Kefil Olması Durumunda:</strong> Sözleşmede şahsi (adi veya müteselsil) bir kefilin imzası varsa, sözleşme artık tek bir hukuki işlemi değil, kefalet işlemini de içerir hale gelir. Müteselsil kefaletin vergi oranı **binde 9,48 (0,00948)**'dir. İki farklı işlem aynı kağıtta birleştiği için kanun gereği en yüksek oran olan **binde 9,48** üzerinden tek bir vergilendirme yapılır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Banka Teminat Mektubu veya İpotek Olması Durumunda:</strong> Eğer güvence şahsi kefille değil de ayni bir teminatla (ipotek, banka mektubu) sağlanmışsa yine en yüksek yasal oranlar üzerinden hesaplama yürütülür.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Damga Vergisini Kim Öder? (Kiracı mı Ev Sahibi mi?)</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Damga Vergisi Kanunu Madde 3 uyarınca; damga vergisinin yükümlüsü söz konusu yasal evrağı (kağıdı) imzalayan **tüm taraflardır**. 
              Yasal olarak devlet karşısında, hem kiracı hem de mal sahibi borcun tamamından zincirleme (müsteselsilen) sorumludur. 
              Devlet, verginin ödenmemesi durumunda iki tarafa da aynı anda veya dilediğine başvurarak vergi ve cezaları tahsil edebilir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Serbest Sözleşme İlkesi ve Ödeme Paylaşımı:</strong> 
              Kanuni sorumluluk zincirleme olsa da taraflar kendi aralarında yapacakları kira sözleşmesinde verginin kimin tarafından ödeneceğini serbestçe kararlaştırabilirler. 
              Piyasada ve ticari teamüllerde genellikle **damga vergisinin kiracı tarafından ödeneceği** yönünde maddeler sözleşmeye konulur. 
              Eğer sözleşmede bu konuda hiçbir madde yoksa, adaletli olan yaklaşım verginin **yarı yarıya %50-%50 oranında paylaşılarak** ödenmesidir.
            </p>

            <div className="bg-red-500/10 p-8 rounded-3xl border-l-8 border-red-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Kamu Kurumları ile Yapılan Kiralama İstisnası
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed m-0">
                Eğer kiraya veren veya kiracı taraflardan biri resmi bir devlet dairesi, belediye, vakıf üniversitesi veya kamu yararına çalışan bir dernek/vakıf ise, Damga Vergisi Kanunu gereği kamu kurumları bu vergiden muaftır. 
                Bu durumda, damga vergisinin tamamını ödemekle yükümlü olan taraf resmi olmayan diğer (özel kişi veya şirket) taraftır. Resmi dairesine verginin yarısı rücu edilemez.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Damga Vergisi Kira Hesaplama Formülü</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmelerinde hesaplama yaparken göz önünde bulundurulan matrah, basitçe "aylık kira bedeli" değildir. 
              Hesaplama için aşağıdaki doğrusal yasal formül uygulanır:
            </p>

            <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/10 my-10 font-sans">
              <span className="text-xs font-black uppercase tracking-widest text-accent mb-4 block">Hesaplama Algoritması</span>
              <div className="space-y-4 text-base text-gray-700">
                <div className="flex items-center"><Calculator className="h-5 w-5 text-accent mr-3 shrink-0" /> <strong>Matrah = Aylık Kira Bedeli &times; 12 (Yıllık) &times; Sözleşme Süresi (Yıl)</strong></div>
                <div className="flex items-center"><Percent className="h-5 w-5 text-accent mr-3 shrink-0" /> <strong>Damga Vergisi (Sade Hali) = Matrah &times; 0,00189 (Binde 1,89)</strong></div>
                <div className="flex items-center"><Percent className="h-5 w-5 text-accent mr-3 shrink-0" /> <strong>Damga Vergisi (Kefilli Hali) = Matrah &times; 0,00948 (Binde 9,48)</strong></div>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Adım Adım Hesaplama Örnekleri (2026 Senaryoları)</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Konunun tam olarak pekişmesi için piyasada en çok karşılaşılan iki farklı kiralama senaryosunu birlikte hesaplayalım.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Örnek 1: Kefilsiz 1 Yıllık İşyeri Kiralama Senaryosu</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Bir Limited Şirket, aylık 40.000 TL kira bedeli karşılığında bir şahıstan 1 yıllık ofis kiralama sözleşmesi imzalamıştır. Sözleşmede kefil bulunmamaktadır.
            </p>
            <ul className="space-y-2 text-gray-650 font-sans text-sm mb-6 pl-4 list-disc">
              <li><strong>Aylık Kira:</strong> 40.000 TL</li>
              <li><strong>Sözleşme Süresi:</strong> 1 Yıl (12 Ay)</li>
              <li><strong>Toplam Kontrat Matrahı:</strong> 40.000 &times; 12 = 480.000 TL</li>
              <li><strong>Kefil Durumu:</strong> Yok (Oran: Binde 1,89)</li>
              <li><strong>Hesaplama:</strong> 480.000 TL &times; 0,00189 = <strong>907,20 TL</strong></li>
            </ul>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bu senaryoda vergi dairesine ödenecek toplam damga vergisi tutarı 907,20 TL olacaktır. Ayrıca sözleşme nüsha sayısına göre bu tutar çarpılır. (Örn: Çift nüsha imzalandıysa her nüsha için ayrı vergi doğar).
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 font-serif">Örnek 2: Müteselsil Kefilli 3 Yıllık Mağaza Kiralama Senaryosu</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Bir perakende zinciri, aylık 100.000 TL kira bedeli ve bir adet "Müteselsil Kefil" eşliğinde 3 yıl süreli büyük bir mağaza kiralamıştır.
            </p>
            <ul className="space-y-2 text-gray-650 font-sans text-sm mb-6 pl-4 list-disc">
              <li><strong>Aylık Kira:</strong> 100.000 TL</li>
              <li><strong>Sözleşme Süresi:</strong> 3 Yıl (36 Ay)</li>
              <li><strong>Toplam Kontrat Matrahı:</strong> 100.000 &times; 12 &times; 3 = 3.600.000 TL</li>
              <li><strong>Kefil Durumu:</strong> Müteselsil Kefil Var (Oran: Binde 9,48)</li>
              <li><strong>Hesaplama:</strong> 3.600.000 TL &times; 0,00948 = <strong>34.128,00 TL</strong></li>
            </ul>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bu ticari yatırım senaryosunda ise kefaletin varlığı ve sürenin uzunluğu sebebiyle ödenecek damga vergisi miktarı 34.128,00 TL'ye ulaşmaktadır.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Damga Vergisi Kira Kontratı Sonrasında Nereye ve Ne Zaman Ödenir?</h2>
            <p className="text-gray-655 leading-relaxed mb-6">
              Kira sözleşmesinden kaynaklanan damga vergisinin beyan edilmesi ve devlete ödenmesi için kanunun koyduğu çok sıkı bir zaman sınırı vardır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Ödeme Süresi:</strong> Sözleşmenin imzalandığı tarihten itibaren **en geç 15 gün içinde** damga vergisinin vergi dairesine beyan edilerek ödenmesi mecburidir. 
              Eğer sözleşme noter kanalıyla düzenlenmişse, damga vergisi noter ücretleriyle birlikte doğrudan noter tarafından tahsil edilir ve sizin ayrıca işlem yapmanıza gerek kalmaz.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Ödeme Noktaları:</strong> 
              Vergi mülkün bulunduğu yerdeki veya tarafların bağlı olduğu herhangi bir yetkili Vergi Dairesine elden ödenebileceği gibi, Gelir İdaresi Başkanlığı'nın (GİB) resmi çevrimiçi işlem kanalı olan **İnteraktif Vergi Dairesi (İVD)** üzerinden kredi kartıyla veya anlaşmalı bankalar aracılığıyla internet bankacılığından saniyeler içinde ödenebilmektedir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Zamanında Ödenmeyen Damga Vergisinin Cezası Nedir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Belirlenen 15 günlük yasal süre içinde beyan edilip ödenmeyen kira damga vergisi için vergi daireleri geriye dönük tespit yaptığında ciddi cezai yaptırımlar uygular:
            </p>
            <ol className="space-y-4 text-gray-650 mb-12 list-decimal pl-6 font-sans text-base">
              <li><strong>Vergi Ziyaı Cezası:</strong> Zamanında ödenmeyen vergi miktarının kendisi kadar (birebir oranında) ek bir cezai tutar çıkartılır.</li>
              <li><strong>Gecikme Faizi:</strong> Ödenmeyen her geçen ay ve gün için devletin belirlediği güncel yasal gecikme zammı/faizi yansıtılır.</li>
              <li><strong>Özel Usulsüzlük:</strong> Beyanname verilmemesi durumunda ek usulsüzlük cezaları eklenebilir.</li>
            </ol>

            <h2 id="sss" className="text-3xl font-serif font-black text-primary mt-16 mb-6">Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kira sözleşmesindeki depozito miktarı damga vergisine tabi midir?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Hayır. Vergi Usul Kanunu ve Danıştay emsal kararları gereği, kira kontratında yer alan depozito (güvence bedeli) bir tediye veya borç taahhüdü değil, teminat niteliğinde olduğundan damga vergisi matrahına dahil edilmez. Sadece net veya brüt yıllık kira bedellerinin toplamı matraha esas alınır.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Ev sahibi şahıs, kiracı şirket ise damga vergisini kim öder?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Maliye Bakanlığı uygulamalarına göre, taraflardan biri tüzel kişi (şirket vb.) ve diğeri gerçek kişi (şahıs) ise, damga vergisinin beyan edilmesi ve ödenmesi sorumluluğu vergi sorumlusu sıfatıyla öncelikle <strong>şirkete aittir</strong>. Şirket bu vergiyi muhtasar beyanname ile vergi dairesine yatırıp gider gösterebilir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Damga vergisi ödenmeyen bir kira sözleşmesi mahkemede geçersiz sayılır mı?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Kesinlikle hayır. Damga vergisinin ödenmemiş olması, kira sözleşmesinin yasal sıhhatini ve geçerliliğini etkilemez. Mahkemeler veya icra daireleri vergi borcu olsa dahi sözleşmeyi geçerli delil kabul edip davayı yürütür. Ancak ilgili resmi merci, belgenin vergisinin ödenmediğini tespit ettiğinde durumu derhal ilgili vergi dairesine bildirme yükümlülüğüne sahiptir. Bu durumda hakim/icra memuru işlemi durdurmaz ama sonradan vergi idaresi taraflara ceza yollar.
                </p>
              </details>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Vergisel Açıdan Kusursuz Kira Sözleşmenizi Bugün Ücretsiz Hazırlayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Damga vergisi beyanından noter onayına, özel kefalet hükümlerinden depozito şartlarına kadar 2026 Borçlar Kanunu standartlarına tam entegre, hatasız ve profesyonel kira sözleşmelerini saniyeler içinde ücretsiz oluşturun.
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
              <span>Son Güncelleme: 15 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Mali Müşavir Hasan Demir</span>
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
            <Link to="/aidat-kiraci-ev-sahibi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Aidatı Kim Öder?</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Konut ve işyeri kira ilişkilerinde apartman aidatını kim öder? Hangisi demirbaş gideridir hangisi işletme...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-sozlesmesi-yenileme-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesi Ne Zaman Yenilenir?</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesinin otomatik uzama koşulları, süreleri ve kiracının ihtarname süreleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/tahliye-taahhutnamesi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Tahliye Taahhütnamesi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Tahliye taahhütnamesi nedir, ne zaman gereklidir ve hukuken geçerli olmak üzere nasıl doldurulur...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
