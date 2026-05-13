import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, Gavel, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, HelpCircle, AlertCircle, Landmark, Award, Calendar, Clock, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function RentRenewalBlog() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.rentRenewalTitle') + " — Otomatik Uzama & Yasal Şartlar"}
        description={t('blogPage.rentRenewalSeoDesc')}
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
            <span className="text-sm font-bold uppercase tracking-widest">Yasal Yenileme Rehberi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.rentRenewalTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Sözleşme süresi bittiğinde ne olur? Türk Borçlar Kanunu'na göre otomatik uzama şartları, kiracının ve ev sahibinin ihtar çekme süreleri, sözleşme feshi ve haklarınız.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-accent pl-6">
              Kira sözleşmeleri genellikle 1 yıl gibi belirli bir süre için akdedilir. 
              Sözleşme süresinin sonuna yaklaşırken hem kiracılar hem de ev sahipleri arasında en büyük kafa karışıklıklarından biri yaşanır: <strong>"Kira sözleşmesi ne zaman yenilenmiş sayılır?"</strong> 
              Birçok kişi, 1 yıllık sürenin dolmasıyla birlikte sözleşmenin otomatikman biteceğini ve kiracının derhal evi boşaltması gerektiğini düşünür. 
              Oysa Türk Borçlar Kanunu (TBK), kiracıların barınma hakkını korumak için çok katı emredici kurallar getirmiştir. 
              Yasaya göre kira kontratı, taraflar sessiz kaldığında kendiliğinden uzar. 
              Bu yazımızda, <strong>kira sözleşmesi yenileme</strong> süreçlerini, otomatik uzama kurallarını, kiracının ve ev sahibinin uyması gereken bildirim sürelerini ve yasal hakları tüm detaylarıyla inceliyoruz.
            </p>

            <h2 id="otomatik-uzama" className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Kira Sözleşmesinde Otomatik Uzama Nedir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Konut ve çatılı işyeri kiralarında en temel kanuni güvence, sözleşmenin süresi dolsa dahi kiracı tarafından fesih bildirimi yapılmadığı sürece sözleşmenin kendiliğinden uzamasıdır. 
              Türk Borçlar Kanunu'nun 347. maddesi uyarınca; belirli süreli konut ve çatılı işyeri kira sözleşmelerinde, taraflar aksi yönde bir adım atmadıkça sözleşme, **aynı koşullarla bir yıl daha uzamış** sayılır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bu durum literatürde <strong>otomatik uzama</strong> olarak adlandırılır. 
              Uzama gerçekleştiğinde, eski sözleşmenin tüm maddeleri (kira artış oranı, güvenceler, sorumluluklar vb.) aynı şekilde geçerliliğini korur. 
              Sadece kira dönemi 1 yıl ileriye taşınmış olur ve yasal kira artışı bu yeni dönem için yürürlüğe girer.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Otomatik Uzamanın Temel Şartı</h4>
                <p className="text-gray-600 m-0">
                  Otomatik uzamanın gerçekleşmesi için tarafların yeni bir kağıt imzalamasına veya e-devletten tekrar işlem yapmasına gerek yoktur. 
                  Sözleşme bittikten sonra kiracının evde kalmaya devam etmesi ve tarafların ihtar çekmemiş olması, yasal olarak <strong>kira sözleşmesi yenileme</strong> işleminin zahmetsizce ve kendiliğinden gerçekleşmesini sağlar.
                </p>
              </div>
            </div>

            <h2 id="bildirim-suresi" className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Kiracının Sona Erdirme Hakkı ve 15 Günlük Bildirim Süresi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Yasal düzenlemeler kiracıya, tek taraflı olarak sözleşmeyi herhangi bir gerekçe sunmadan uzatmama, yani sonlandırma hakkı vermiştir. 
              Ancak bu hakkın kullanılabilmesi için kanunda belirtilen çok kritik bir **bildirim süresi** bulunmaktadır.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              Türk Borçlar Kanunu'na göre; kiracı, belirli süreli bir sözleşmeyi süresinin dolması sebebiyle sona erdirmek istiyorsa, bu talebini sözleşme süresinin bitiminden **en az 15 gün önce** ev sahibine yazılı olarak bildirmek zorundadır.
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Bildirimin Ulaşma Tarihi:</strong> Söz konusu 15 günlük süre, ihtarın çekildiği tarihi değil, ihtarın ev sahibinin **eline ulaştığı** (tebliğ edildiği) tarihi ifade eder. Bu nedenle bildirimin son güne bırakılmaması, noter kanalıyla veya iadeli taahhütlü posta yoluyla erken yapılması hayati önem taşır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Süreyi Kaçırmanın Sonucu:</strong> Kiracı eğer sözleşmenin bitimine 10 gün kala ev sahibine çıkacağını söylerse veya yazılı bildirim süresini kaçırırsa, ev sahibi kiracının çıkışını kabul etmek zorunda değildir. Sözleşme 1 yıl daha uzar ve kiracı, haklı bir neden olmadıkça, yeni uzama döneminin kiralarından sorumlu olabilir.</span>
              </li>
            </ul>

            <h2 id="ev-sahibi-yenileme" className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Ev Sahibi Sözleşmeyi Tek Taraflı Bitirebilir Mi? 10 Yıllık Uzama İstisnası</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bilinen en büyük yanlışlardan biri, kontrat süresi bittiğinde ev sahibinin de "sözleşmeyi yenilemiyorum, lütfen çıkın" diyebileceği algısıdır. 
              Mevzuata göre, **ev sahibi sadece sözleşme süresinin dolması gerekçesiyle kiracıyı kesinlikle tahliye edemez** ve sözleşmeyi tek taraflı olarak sonlandıramaz.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Peki ev sahibi sözleşmeyi sebepsiz yere hiç mi bitiremez? İşte burada kanunun sunduğu tek hak **"10 yıllık uzama süresi"** kuralıdır:
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Ev sahibi, ancak ve ancak **10 yıllık uzama süresinin dolmasından sonra**, herhangi bir haklı sebep göstermeksizin kira sözleşmesine son verebilir. 
              Ancak bu hakkın kullanılabilmesi için süreler son derece hassastır:
            </p>
            <div className="bg-amber-500/10 p-8 rounded-3xl border-l-8 border-amber-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                10 Yıllık Uzama Kuralının Doğru Hesaplanması
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed m-0">
                10 yıllık süre, kira sözleşmesinin imzalandığı ilk günden değil, <strong>otomatik uzamanın başladığı ilk yıldan itibaren</strong> sayılır. 
                Örneğin, 1 yıllık belirli süreli bir sözleşme yapıldıysa; birinci yılın sonunda ilk otomatik uzama başlar. 
                Bu durum 10 kez tekrar ettikten sonra (toplamda 1 + 10 = 11 yıl geçmesi gerekir), ev sahibi sonraki her uzama yılının bitiminden <strong>en az 3 ay önce</strong> yazılı ihtarname göndermek şartıyla kiracıyı gerekçesiz çıkarabilir.
              </p>
            </div>

            <h2 id="belirli-belirsiz" className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Belirli Süreli ve Belirsiz Süreli Sözleşmelerde Yenileme Farkları</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmeleri yapılırken süresi belirtilebileceği gibi (belirli süreli), ucu açık da bırakılabilir (belirsiz süreli). 
              Bu iki türdeki <strong>kira sözleşmesi yenileme</strong> kuralları hukuken farklı sonuçlar doğurmaktadır:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 flex flex-col">
                <span className="font-serif font-black text-primary text-xl mb-4 block flex items-center">
                  <Clock className="h-5 w-5 text-accent mr-2" /> Belirli Süreli Sözleşmeler
                </span>
                <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                  Belli bir süre (örn: 1 yıl, 2 yıl) için yapılmıştır. Belirtilen süre dolduğunda taraflar sessiz kalırsa, sözleşme belirsiz süreli hale gelmez; <strong>yine belirli süreli olarak birer yıllık dönemler halinde otomatik olarak uzar</strong>. Kiracının sonlandırması için 15 gün önceden ihtar hakkı bulunur.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 flex flex-col">
                <span className="font-serif font-black text-primary text-xl mb-4 block flex items-center">
                  <RefreshCw className="h-5 w-5 text-accent mr-2" /> Belirsiz Süreli Sözleşmeler
                </span>
                <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                  Başlangıçtan itibaren bitiş tarihi belirlenmemiş sözleşmelerdir. Ayrıca belirli süreli sözleşmeler süre bitiminde otomatik olarak değil de karşılıklı rıza ile ucu açık bırakılırsa bu sınıfa girer. Burada fesih bildirimi, kanuni 6 aylık kira dönemlerinin sonu için en az 3 ay önceden yapılmalıdır.
                </p>
              </div>
            </div>

            <h2 id="sozlesme-sonrasi-artis" className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Sözleşme Yenileme Döneminde Kira Artışı Kuralları</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kira sözleşmesinin otomatikman uzaması, kiracının eski fiyattan oturmaya devam edeceği anlamına gelmez. 
              Yenileme döneminde kiraya yapılacak zam oranı kanun kapsamında sınırlandırılmıştır.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              Türk Borçlar Kanunu Madde 344 uyarınca, yenileme dönemiyle birlikte uygulanacak kira artış oranı, bir önceki kira yılında Türkiye İstatistik Kurumu (TÜİK) tarafından açıklanan **12 aylık Tüketici Fiyat Endeksi (TÜFE) ortalamasını kesinlikle aşamaz**.
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Yasal Sınırın Bağlayıcılığı:</strong> Kontratta yazılı olan "Yıllık kira artışı %60, %70 olacaktır" şeklindeki maddeler, eğer o ayki 12 aylık TÜFE ortalamasından yüksek ise geçersiz sayılır. Kiracı sadece TÜFE ortalaması oranında zam yaparak oturmaya hukuki olarak devam edebilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>5. Yıl Sonunda Kira Tespit Davası:</strong> Kira sözleşmesinin kurulmasından itibaren 5 yıl geçtikten sonra, otomatik uzamalar devam etse bile taraflar "kira bedelinin tespiti davası" açabilir. Bu aşamada mahkeme TÜFE sınırına bağlı kalmaksızın, emsal konut bedellerini ve hakkaniyet indirimlerini göz önünde bulundurarak yeni dönem kirasını belirler.</span>
              </li>
            </ul>

            <h2 id="yasal-karsilastirma" className="text-3xl font-serif font-black text-primary mt-16 mb-6">Yenileme ve Sona Erdirme Süreçlerinin Karşılaştırması</h2>
            <div className="overflow-x-auto my-10">
              <table className="w-full text-left border-collapse font-sans text-sm pb-10">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Durum / İşlem</th>
                    <th className="p-4">Kiracı İçin Şartlar</th>
                    <th className="p-4 rounded-tr-2xl">Ev Sahibi (Kiraya Veren) İçin Şartlar</th>
                  </tr>
                </thead>
                <tbody className="text-gray-650">
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Sözleşme Süresi Sonu</td>
                    <td className="p-4">Sessiz kalırsa sözleşme 1 yıl daha otomatikman uzar.</td>
                    <td className="p-4">Çıkış talep edemez; sözleşme otomatikman uzar.</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Fesih/Sona Erdirme Talebi</td>
                    <td className="p-4">Süre bitiminden en az 15 gün önce yazılı bildirim yapmalıdır.</td>
                    <td className="p-4">Gerekçe göstermeden bitiremez (İhtiyaç/Haklı tahliye davası hariç).</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">10 Yıllık Uzama Sonu</td>
                    <td className="p-4">Yine de sessiz kalabilir veya 15 gün kala fesih hakkını kullanır.</td>
                    <td className="p-4">Ek 10 yıl dolunca, dönem bitiminden 3 ay önce ihtar çekerek sebepsiz çıkarabilir.</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Haklı Nedenle Tahliye</td>
                    <td className="p-4">Ev sahibinin taahhüt ihlalleri durumunda derhal fesih yetkisi vardır.</td>
                    <td className="p-4">İhtiyaç, İmar-İhya, iki haklı ihtar veya tahliye taahhüdüyle dava açar.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="sss" className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Sözleşmesi Yenileme Hakkında Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kira sözleşmesi bitince yeni bir sözleşme imzalamak şart mıdır?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Hayır, kesinlikle şart değildir. Yasalar gereği sözleşme aynı şartlar altında 1 yıl daha otomatik olarak uzar. Yeni bir sözleşmenin imzalanması sadece kira artış miktarı, yeni bir kefil ekleme veya özel şartların (depozito güncellenmesi vb.) değiştirilmesi durumunda tarafların ortak rızasıyla yapılır.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kiracı 15 gün kala ihtarname çekmeyi unuttuysa evden hemen ayrılabilir mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Eğer süre kaçırılmışsa, sözleşme otomatikman 1 yıl daha uzamış sayılır. Kiracı bildirimsiz ya da zamansız bir şekilde evi boşaltırsa, mülk sahibinin "erken tahliye" nedeniyle mülkün yeniden kiralanabileceği makul bir süre (genellikle emsal Yargıtay kararlarına göre 3 ay) boyunca kira bedelini talep etme hakkı doğabilir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Ev sahibi kira süresi bittiği için doğrudan icraya verip tahliye isteyebilir mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Hayır, sırf kira süresinin bitmiş olması icra dairesinden veya mahkemeden doğrudan tahliye isteme yetkisi tanımaz. Ev sahibinin tahliye işlemi başlatabilmesi için yalnızca elinde usulüne uygun (tarihleri doğru yazılmış) bir "Tahliye Taahhütnamesi" olması veya kanundaki diğer haklı tahliye nedenlerinin bulunması koşuldur.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Zamanında yapılmayan zamlı ödeme sözleşme feshine yol açar mı?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Eğer yenilenen dönemde yapılması gereken zamlı kira kiracı tarafından eksik ödenirse, bu durum kiracıyı temerrüde (borçlu duruma) düşürür. Ev sahibi eksik kalan kısım için icra takibi başlatabilir veya kiracıya yazılı bir süre (en az 30 gün) vererek borcun ödenmesini, aksi takdirde sözleşmenin feshedileceğini bildiren temerrüt ihtarnamesi çekebilir.
                </p>
              </details>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Hukuka Tam Uyumlu Sözleşmenizi Ücretsiz Oluşturun</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Gerek kendi aranızda imzalayarak otomatik uzamalardan yararlanın, gerek noter onayına hazırlık aşaması yapın; 
                  Borçlar Kanunu un emredici maddelerine %100 entegre akıllı kira sözleşmesi oluşturucumuzla yasal güvenliği anında sağlayın.
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
              <span>Son Güncelleme: 13 Mayıs 2026</span>
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
            <Link to="/ev-sahibi-kiraci-cikarma-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Ev Sahibi Kiracı Çıkarma</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Yasal çıkartma sebepleri, haklı ihtarname usulleri ve Sulh Hukuk Mahkemesi süreleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
