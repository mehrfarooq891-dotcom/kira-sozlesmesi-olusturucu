import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, Gavel, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, HelpCircle, AlertTriangle, Landmark, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function EvictionPromiseBlog() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.evictionPromiseTitle') + " — 2026 Güncel Haklar"}
        description={t('blogPage.evictionPromiseSeoDesc')}
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
            <span className="text-sm font-bold uppercase tracking-widest">Yasal Sözleşme Kılavuzu</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.evictionPromiseTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Tahliye taahhütnamesi nedir, ne zaman gereklidir ve hukuken geçerli olması için nasıl doldurulur? Yargıtay kararları ışığında 2026 yılı güncel geçerlilik şartları.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-accent pl-6">
              Mülk sahipleri ile kiracılar arasındaki ilişkide en kritik hukuki belgelerden biri hiç şüphesiz <strong>tahliye taahhütnamesi</strong> olarak karşımıza çıkmaktadır. 
              Özellikle konut kiralarında kiracıyı koruyan katı mevzuat hükümleri ve uzayan tahliye davaları süreçleri göz önüne alındığında, ev sahipleri için sözleşme sürecini güvenceye almanın en garanti yolu bu belgedir. 
              Ancak <strong>tahliye taahhütnamesi</strong>, kanunda son derece katı şekil şartlarına bağlanmış bir hukuki işlemdir. En ufak bir tarih hatası veya imza uyuşmazlığı halinde taahhütname anında geçersiz kalabilmektedir. 
              Peki, hukuken geçerli bir tahliye belgesi nasıl düzenlenir? Tarihler neye göre belirlenmelidir? Kiracı ve mülk sahibi haklarını korumak için nelere dikkat etmelidir? 
              İşte 2026 yılı güncel mevzuatı ve Yargıtay emsal kararları ışığında hazırladığımız eksiksiz yasal kılavuz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Tahliye Taahhütnamesi Nedir? Hukuki Niteliği</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Türk Borçlar Kanunu (TBK) Madde 352/1 kapsamında tanımlanan <strong>tahliye taahhütnamesi</strong>; kiracının, kiralamış olduğu taşınmazı (konut veya işyeri) belirli bir tarihte, herhangi bir ihtar veya koşul aramaksızın kayıtsız ve şartsız olarak boşaltacağını mülk sahibine yazılı olarak taahhüt ettiği tek taraflı bir irade beyanıdır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Normal şartlarda, konut kiralarında sözleşme süresinin bitimi ev sahibine kiracıyı çıkarma hakkı vermez; sözleşme kiracı fesih bildirimi yapmadığı sürece her yıl otomatik olarak yenilenir. 
              Ancak taraflar arasında usulüne uygun bir tahliye taahhüdü varsa, mülk sahibi kanunda belirtilen uzama sürelerini beklemek zorunda kalmaz. 
              Taahhüt edilen tahliye tarihi geldiğinde, mülk sahibi doğrudan doğruya yasal işlemleri başlatma hakkına sahip olur.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Asli Hukuki İşlev</h4>
                <p className="text-gray-600 m-0">
                  Tahliye taahhütnamesinin en büyük avantajı, ev sahibine mahkemelerde 1.5 - 2 yıl süren sıradan tahliye davaları yerine çok daha hızlı olan <strong>icra dairesi kanalıyla doğrudan tahliye takibi</strong> (Örnek No: 14) başlatma veya hızlı bir tahliye davası açma imkanı sunmasıdır.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Tahliye Taahhütnamesi Ne Zaman Gereklidir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Genel inanışın aksine, tahliye taahhütnamesi her kira ilişkisinde zorunlu bir belge değildir. Ancak tarafların belirli riskleri öngörmek ve güvence sağlamak istediği şu senaryolarda kritik bir hal alır:
            </p>
            <ul className="space-y-4 text-gray-650 mb-8 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Sürenin Kesin Olarak Sınırlandırılmak İstendiği Durumlar:</strong> Ev sahibi mülkünü kesin olarak belirli bir süre için kiralamak istiyorsa ve o tarihten sonra mülkün boş bulunması gerekiyorsa.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>İhtiyaç Nedeniyle Tahliye İhtimali:</strong> İlerleyen yıllarda mülk sahibinin kendisinin, eşinin veya çocuklarının mülke taşınma ihtimali varsa ve uyuşmazlığa düşmeden kolayca boşaltılma garantisi isteniyorsa.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Lojman, Şirket Evi ve Geçici Kiralama:</strong> İşverenlerin çalışanlarına sağladığı geçici konut kiralama modellerinde veya tarafların geçici süreli anlaşmalarında riskleri minimuma indirmekte kullanılır.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Tahliye Taahhütnamesinin 5 Altın Geçerlilik Şartı</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bir tahliye taahhüdünün mahkeme kapısından dönmemesi için Borçlar Kanunu ve Yargıtay içtihatları tarafından belirlenen şu 5 yasal şartı eksiksiz bir şekilde taşıması zorunludur:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">1. Yazılı Şekil Şartı</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Taahhütname mutlaka <strong>yazılı</strong> olmak zorundadır. Sözlü olarak verilen "bir yıl sonra çıkacağım" sözleri, şahit huzurunda dahi yapılmış olsa hukuken tamamen geçersizdir. Yazılı taahhüt adi yazılı olabileceği gibi, güvenirliği artırmak ve imza inkarını önlemek amacıyla noter huzurunda "onaylama" veya "düzenleme" şeklinde de yapılabilir.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">2. Taahhüdün Serbest İradeyle Verilmiş Olması</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Mevzuata göre kiracı, mülk sahibinin baskısı (tehdit, zorlama, müzayaka hali) altında olmadan, kendi özgür iradesiyle evi boşaltmayı kabul etmiş olmalıdır. Yasa koyucu bu baskı unsurunu önlemek adına en önemli engelleyici tedbirini "tarih" kuralı ile almıştır.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">3. Taahhüt Tarihin Kira Sözleşmesinden Sonra Olması (En Kritik Kural!)</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Yargıtay kararlarına göre, kira sözleşmesi imzalanırken veya henüz anahtar teslim edilmeden önce (yani kiracının henüz eve taşınmadığı ve dolayısıyla kiralama baskısı hissettiği aşamada) imzalanan tahliye taahhütnameleri <strong>kesinlikle geçersizdir</strong>.
            </p>
            <p className="text-gray-650 leading-relaxed mb-4">
              Belgenin geçerli olması için taahhütname üzerinde yer alan "Taahhüt Tarihi" (yani belgenin imzalandığı gün), kira sözleşmesinin başlangıç tarihinden <strong>en az 15 gün ila 1 ay sonraki bir tarih</strong> olmalıdır. Kira kontratıyla aynı gün, bir gün önce veya kontrattan önce imzalanan taahhütlerin tamamı hukuken geçersiz kabul edilmektedir.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">4. Belirli Bir Tahliye Tarihinin Bulunması</h3>
            <p className="text-gray-650 leading-relaxed mb-4">
              Taahhütnamede tahliye edilecek günün net, açık ve yoruma mahal vermeyecek şekilde takvim olarak belirtilmesi gerekir. "Günü geldiğinde", "ihtiyaç duyulduğunda", "ilerleyen bir vakitte" veya sadece "2026 yılı içerisinde" gibi belirsiz ve ucu açık ifadeler içeren taahhütler hukuken geçersizdir. Belgede "15 Eylül 2026" gibi kesin bir tarih yer almalıdır.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">5. Bizzat Kiracı veya Yetkili Temsilci Tarafından İmzalanması</h3>
            <p className="text-gray-650 leading-relaxed mb-6">
              Belgeyi imzalayacak kişinin bizzat kira sözleşmesinde adı geçen "kiracı" olması şarttır. 
              Eğer kira sözleşmesinde birden fazla kiracı varsa (örneğin iki ortak veya iki arkadaş evi birlikte kiraladıysa), tahliye taahhüdünün geçerli olması için <strong>tüm kiracıların ıslak imzası</strong> bulunmalıdır. 
              Tek bir kiracının imzası diğerlerini bağlamaz ve taahhüdü geçersiz kılar. Benzer şekilde, eşlerin birlikte yaşadığı aile konutlarında, sözleşmede sadece bir eşin adı yazsa dahi, diğer eşin açık rızası/imzası aranabilmektedir.
            </p>

            <div className="bg-red-500/10 p-8 rounded-3xl border-l-8 border-red-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Boş Kağıda Atılan İmzalar ve Tarih Sonradan Yazılan Taahhütler
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed m-0">
                Uygulamada sıklıkla kiracılardan boş bir kağıda imza alınmakta veya tarih kısımları boş bırakılmış belgeler talep edilmektedir. 
                Yargıtay Hukuk Genel Kurulu kararlarına göre; boş kağıda veya boşlukları bulunan taahhütnameye imza atan kiracı, belgenin sonradan doldurulma içeriğini önceden kabul etmiş sayılır (beyaza imza). 
                Bu durumda kiracı, tarihlerin sonradan kötü niyetle doldurulduğunu ancak <strong>yazılı ve resmi bir delille (senetle) ispat etmek</strong> zorundadır ki bu da fiilen oldukça zordur. Yine de hak kaybına uğramamak için kiracıların boş belgelere asla imza atmaması tavsiye edilir.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Tahliye Taahhütnamesi Nasıl Doldurulur? Adım Adım Rehber</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Hukuken tam koruma sağlayan bir tahliye taahhütnamesi doldururken adım adım şu aşamalara ve bilgilere dikkat etmelisiniz:
            </p>

            <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/10 my-10 font-sans">
              <span className="text-xs font-black uppercase tracking-widest text-accent mb-4 block">Doldurulması Gereken Kritik Bilgiler</span>
              <ol className="space-y-4 text-sm text-gray-650 pl-0 list-decimal whitespace-normal">
                <li className="ml-4">
                  <strong>Kiraya Veren (Mal Sahibi) Bilgileri:</strong> Sözleşmedeki mülk sahibinin Adı, Soyadı ve T.C. Kimlik numarası eksiksiz yazılmalıdır.
                </li>
                <li className="ml-4">
                  <strong>Kiracı Bilgileri:</strong> Taşınmazı kiralayan kişinin Adı, Soyadı, T.C. Kimlik Numarası ve güncel iletişim bilgileri eklenmelidir.
                </li>
                <li className="ml-4">
                  <strong>Taşınmazın Adresi:</strong> Kira sözleşmesinde geçen adrese birebir uygun olarak; Mahalle, Cadde, Sokak, Dış Kapı No, İç Kapı No, İlçe ve İl bilgileri yazılmalıdır.
                </li>
                <li className="ml-4">
                  <strong>Kira Mukavelesi Tarihi:</strong> İlk yapılan kira sözleşmesinin başlangıç tarihi (gün/ay/yıl) girilmelidir.
                </li>
                <li className="ml-4">
                  <strong>Taahhüt Edilen Tahliye Tarihi:</strong> Kiracının evi kesin olarak boşaltacağı takvim tarihi yazılmalıdır (Örn: 31 Ağustos 2026).
                </li>
                <li className="ml-4">
                  <strong>Taahhüt Tarihi (İmza Günü):</strong> Belgenin bizzat imzalandığı tarihtir. Bu tarih kesinlikle kira başlangıç tarihinden <strong>sonraki bir gün</strong> olmalıdır.
                </li>
                <li className="ml-4">
                  <strong>İmza:</strong> Kiracının adı yazılarak altına ıslak imzası alınmalıdır.
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Tahliye Taahhütnamesinin Süreçleri ve Hak Düşürücü Süre</h2>
            <p className="text-gray-655 leading-relaxed mb-6">
              Tahliye taahhütnamesine dayanarak işlem yapabilmek için mülk sahibinin uyması gereken çok katı bir "hak düşürücü süre" bulunmaktadır. Bu süre kaçırıldığı takdirde belge tamamen yasal gücünü yitirir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>1 Aylık Kesin Süre Kuralı:</strong> Taahhütnamede belirtilen tahliye tarihi geldiğinde, kiracı evi boşaltmazsa, ev sahibi bu tarihten itibaren **en geç 1 ay içinde** icra dairesine başvurarak tahliye talepli icra takibi başlatmalı veya Sulh Hukuk Mahkemesi'nde tahliye davası açmalıdır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Eğer bu 1 aylık süre geçirilir ve hiçbir yasal işlem yapılmazsa, ev sahibinin o taahhütnameye dayanarak kiracıyı tahliye etme hakkı **tamamen düşer** ve sözleşme bir yıl daha uzamış sayılır.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Süreyi Uzatan İhtar Formülü:</strong> Eğer mülk sahibi, taahhüt edilen tahliye tarihinden en az bir ay önce kiracıya noter kanalıyla yazılı bir ihtarname göndererek mülkü boşaltmasını isteyeceğini ve taahhüdü işleme koyacağını tebliğ ederse, söz konusu 1 aylık dava açma süresi o kira yılı boyunca korunmuş olur.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Tahliye Taahhütnamesi Hakkında Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Ev sahibi kira sözleşmesini imzalarken tahliye taahhütnamesi istemekte haklı mıdır?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Ev sahibinin talep etmesi ticari bir tercih ve hakkıdır ancak kiracının da bunu imzalamama hakkı saklıdır. Önemli olan, taraflar bu belgede anlaşsa dahi sözleşmeden sonraki bir tarihte imzalanarak geçerlilik kazanmasıdır. İlk gün kontratla birlikte imzalatılan taahhütname geçersizdir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Eşlerden sadece birinin imzalaması yeterli midir? (Aile Konutu İstisnası)</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-100/10 text-gray-600 text-sm leading-relaxed">
                  Eğer kiralanan taşınmaz tarafların birlikte yaşadığı "aile konutu" ise, Türk Medeni Kanununun 194. maddesi gereği eşlerin ortak rızası aranır. Kira sözleşmesinde adı yazmayan eş mahkemeye başvurarak aile konutu şerhi bildirebilir ve diğer eşin tek başına verdiği tahliye taahhütnamesinin iptalini sağlayabilir. Bu nedenle her iki eşin de imzasının alınması en güvenli yoldur.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Noterden yapılmayan tahliye taahhütnamesi bilgisayar çıktısı geçerli midir?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Evet, geçerlidir. Kanun belgenin "yazılı" olmasını emreder ama "noter onaylı" olmasını şart koşmaz. Adi yazılı (kendi aranızda aldığınız bilgisayar çıktısı veya el yazısı) taahhütler de tamamen geçerlidir. Ancak kiracı ileride "imza benim değil" diyerek itiraz ederse süreç uzar; noter onaylı olanda ise imza inkar edilemez.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kira sözleşmesi yenilendiğinde eski tahliye taahhütnamesi geçerli kalır mı?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Hayır. Kira sözleşmesi yenilendiğinde veya yeni şartlarla yeni bir sözleşme yapıldığında, eski sözleşme dönemine ait olarak verilen tahliye taahhütnamesi kendiliğinden hükümsüz kalır. Yeni sözleşme dönemi için kurallarına uygun olarak baştan yeni bir tahliye taahhütnamesi düzenlenmelidir.
                </p>
              </details>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Mevzuata Tam Uyumlu Belgelerinizi Akıllı Oluşturucu ile Hazırlayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Hatalı tarih veya şekil eksikliği nedeniyle yasal haklarınızı riske asmayın. 
                  KiraSözleşmesi.com ile 2026 yılı Türk Borçlar Kanunu güncel standartlarına birebir uyumlu, profesyonel kira sözleşmelerini ve yasal ek belgelerini saniyeler içinde ücretsiz oluşturun.
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
              <span>Son Güncelleme: 12 Mayıs 2026</span>
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
            <Link to="/kira-sozlesmesi-noter-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesi Noter mi?</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesini noter huzurunda yapmanın sunduğu hukuki teminatlar ve masraflar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/ev-sahibi-kiraci-cikarma-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Ev Sahibi Kiracı Çıkarma</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Yasal çıkartma nedenleri, haklı ihtarname çekme usulleri ve dava süreleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kiraci-haklari-2026-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kiracı Hakları 2026</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">2026 yılı en güncel kiracı hakları, korunma şartları ve hukuki limitler...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
