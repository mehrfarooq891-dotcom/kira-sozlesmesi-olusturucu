import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Heart, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, ClipboardCopy, HelpCircle, Info, Sparkles, Home } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PetClauseBlog() {
  const { t } = useTranslation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const keyClauses = [
    {
      title: "Sınırsız Evcil Hayvan İzin Klozu",
      detail: "Kiracının, kiralık taşınmazda her türlü evcil hayvanı (kedi, köpek, kuş, akvaryum balığı vb.) besleme, barındırma ve bakma hakkı tamamen serbesttir. Kiraya veren, bu duruma hiçbir koşulda itiraz edemez ve bunu bir tahliye gerekçesi olarak kullanamaz."
    },
    {
      title: "Koşullu ve Sınırlı Evcil Hayvan İzin Klozu",
      detail: "Kiracı, kiralama dönemi boyunca taşınmazda maksimum [Sayı] adet evcil [Kedi/Köpek] bulundurabilir. Söz konusu hayvanların aşı kartlarının güncel olması, çevreye veya ortak alanlara aşırı gürültü ve hijyen yönünden rahatsızlık vermemesi esastır. Olağan dışı hasarlar doğrudan kiracının sorumluluğundadır."
    },
    {
      title: "Hasar ve Zayiat Sorumluluk Klozu",
      detail: "Evcil hayvanların taşınmazın zeminlerine (parke, halı), kapılarına, duvarlarına veya sabit mobilyalarına vereceği her türlü olağan dışı zarar, doğrudan kiracı tarafından karşılanacak veya tahliye esnasında depozito bedelinden mahsup edilecektir."
    }
  ];

  const handleCopyClause = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.petClauseTitle') + " — Sözleşme Örnekleri 2026"}
        description={t('blogPage.petClauseSeoDesc')}
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
            <Heart className="h-4 w-4 fill-accent" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Evcil Hayvan Dostu Kiracılık Rehberi 2026</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8 text-white"
          >
            Kira Sözleşmesinde Evcil Hayvan Maddesi Nasıl Eklenir?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Tüylü dostlarınızla birlikte güvende kalın. Kira sözleşmelerinde evcil hayvan izin maddesi eklemenin hukuki formülleri, apartman genel yönetim planı engelleri ve yasal haklarınız.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Evcil hayvanlar, sadece birer canlı ya da ev dekorasyonu parçası değil; ailelerimizin en sevilen, en kıymetli fertleridir. 
              Ancak ne yazık ki kiralık konut pazarında kedi veya köpeğiyle yeni bir yuva arayan hayvan severlerin karşısına aşılması son derece zor duvarlar dikilmektedir. 
              Birçok ev sahibi, gerek çevreye gürültü-koku yayılması endişesi gerekse mülkün parke ve kapılarının tırmalanarak zarar görmesi kaygısıyla evcil hayvanı olan kiracılara karşı mesafeli yaklaşmaktadır. 
              Uygulamada, sözleşmede açık bir evcil hayvan yasağı maddesi bulunmayan mülklere girdikten sonra komşuların şikayeti veya mal sahibinin baskısıyla tahliye edilmek istenen kiracı hikayelerini sıkça duyarız. 
              Tüylü dostlarımızı ve yasal barınma haklarımızı tam korumanın yolu, her iki tarafın rızasıyla düzenlenecek kusursuz bir **kira sözleşmesi evcil hayvan** serbesti protokolüdür. 
              Peki, kira kontratına bu madde eklenirken hangi yasal ayrıntılara dikkat edilmelidir? 
              Kat Mülkiyeti Kanunu ile Borçlar Kanunu arasındaki hiyerarşi nasıldır? 
              Ev sahibi onayı (evcil hayvan izni) nasıl resmi kloz haline getirilir? 
              Merak ettiğiniz tüm yasal durumu, her iki tarafı da koruma altına alacak resmi tavsiyeler ve pratik madde örnekleri eşliğinde hazırladık.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Kira Sözleşmesi Evcil Hayvan İlişkisinde Güncel Yasal Durum Nedir?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Evcil hayvan sahiplerinin kiracılık ilişkilerinde karşılaştığı karmaşaları çözümlemek için öncelikle Türk hukukundaki yasal mevzuat dengelerini analiz etmek gerekir. 
              Bu uyuşmazlıklarda rol oynayan iki temel kanun bulunmaktadır: Türk Borçlar Kanunu (TBK) ve Kat Mülkiyeti Kanunu (KMK). 
              Herhangi bir uyuşmazlık esnasında mahkemelerin kararları doğrudan bu iki mevzuatın kesişim noktalarına göre şekillenir.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Türk Borçlar Kanunu Açısından Durum:</strong>  
              Borçlar Kanunumuzda doğrudan "Evcil hayvan beslemek yasaktır" ya da "Kiracı evcil hayvan besleyebilir" şeklinde genel bir yasaklayıcı hüküm bulunmamaktadır. 
              Borçlar hukuku "sözleşme serbestisi" ilkesine dayanır. 
              Eğer taraflar arasında imzalanan matbu veya özel kira kontratında "Evde evcil hayvan beslenemez" şeklinde açık bir kısıtlama veya men edici madde yer almıyorsa, kiracının evinde evcil köpek, kedi veya farklı bir ev hayvanı besleme hakkı temel olarak mevcuttur. 
              Böyle bir durumda ev sahibi "Ben evimde kedi istemiyorum" diyerek kiracıyı kendi keyfiyle doğrudan evden çıkaramaz.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Kat Mülkiyeti Kanunu ve "Yönetim Planı" Engeli (Kritik Detay!):</strong>  
              İşte burası uyuşmazlıkların en düğüm noktasıdır. 
              Kat Mülkiyeti Kanunu’na göre, her apartmanın veya sitenin tapu sicil müdürlüğünde kayıtlı resmi bir **Yönetim Planı** bulunur. 
              Bu yönetim planı, o binadaki tüm kat malikleri ve kiracılar için anayasa niteliğindedir. 
              Eğer apartmanın yönetim planında "Bağımsız bölümlerde ve ortak alanlarda evcil hayvan (özellikle kedi, köpek vb.) beslenmesi kesinlikle yasaktır" ibaresi yer alıyorsa, bu yasak bütünüyle bağlayıcıdır. 
              Hatta evle ilgili hazırladığınız kira sözleşmesinde ev sahibi size açıkça **evcil hayvan izni** vermiş olsa dahi, yönetim planının emredici hükmü tapuda tescilli olduğu için geçerliliğini korur. 
              Böyle bir durumda, gürültü çıkmasın ya da koku oluşmasın, hayvanınız ne kadar uysal olursa olsun herhangi bir komşunun veya apartman yönetiminin açacağı "evcil hayvanın tahliyesi" davasıyla karşı karşıya kalabilirsiniz ve mahkeme büyük olasılıkla hayvanın evden uzaklaştırılmasına karar verir.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start font-sans">
              <Info className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Sözleşmeden Önce Yönetim Planını İsteyin!</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Yeni bir ev kiralamadan önce yalnızca ev sahibinin sözlü "Besleyebilirsin" sözüne güvenmeyin. 
                  Apartman veya site yönetiminden "Yönetim Planı" kopyasını isteyerek evcil hayvanları kesin olarak men eden bir madde bulunup bulunmadığını kontrol edin. 
                  Yönetim planında yasak yoksa ve sözleşmenize de izin maddesi eklendiyse, hukuken %100 güvendesiniz demektir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Kira Sözleşmesinde Evcil Hayvan İzni Nasıl Yapılandırılmalı?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Yönetim planında herhangi bir yasak yoksa, sıra ev sahibi ile anlaşarak bu rızayı resmi bir kloz haline getirmeye gelir. 
              Sözlü olarak verilen izinler ilerleyen dönemlerde unutulabileceği veya inkar edilebileceği için kesinlikle değersizdir. 
              Bu nedenle izin maddesinin mutlaka yazılı kontratsal şarta dökülmesi gerekir:
            </p>

            <ul className="space-y-4 text-gray-650 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Açık İsim ve Tür Belirtilmesi:</strong> Madde tanzim edilirken "Evcil hayvan beslenebilir" gibi genel bir ifade yerine, dostunuzun türünü ve sayısını netleştirebilirsiniz (Örn: "Kiracı evde kendi bakımında olan 1 adet Golden Retriever cinsi köpeği beslemekte serbesttir"). Bu sayede mülk sahibi yarın bir gün "Ben sadece kuşa izin vermiştim" diyerek suistimal yaratamaz.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Ortak Alandaki Sorumluluklar:</strong> Evcil hayvanın asansör, koridor ve bahçe gibi ortak kullanım alanlarında tasma ile gezdirileceği, çevre temizliğine riayet edileceği gibi hususlar eklenerek ev sahibinin kaygıları giderilebilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Komşulara Saygı Sınırı:</strong> Hayvanların çevre komşuları doğrudan bezdirecek düzeyde sürekli havlama, gürültü çıkarma gibi olağan dışı davranışlar sergilemeyeceğini taahhüt etmek, hakkaniyetli bir sözleşme dengesi kurmanızı sağlar.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Kopyalanabilir Sözleşme Madde Örnekleri (Klozlar)</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Akılcı bir **kira sözleşmesi evcil hayvan** iznini kontrata derç etmek için hazırladığımız, Türk Borçlar Kanununa tam uyumlu aşağıdaki resmi şablonları kopyalayarak online sözleşme oluştururken "Özel Şartlar" alanına ekleyebilirsiniz.
            </p>

            <div className="space-y-6 my-10 font-sans">
              {keyClauses.map((clause, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-200 hover:border-accent transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-black uppercase text-accent tracking-wider block mb-2">{clause.title}</span>
                    <span className="text-sm font-sans text-gray-750 block">{clause.detail}</span>
                  </div>
                  <button
                    onClick={() => handleCopyClause(`${clause.title}\n${clause.detail}`, idx)}
                    className="shrink-0 bg-primary hover:bg-black text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center transition-colors shadow-sm"
                  >
                    <ClipboardCopy className="h-4 w-4 mr-2" />
                    {copiedIndex === idx ? "Kopyalandı!" : "Metni Kopyala"}
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-red-500/5 p-8 rounded-[40px] border border-red-500/10 my-10 flex items-start font-sans">
              <AlertCircle className="h-10 w-10 text-red-600 shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-red-950 mb-2">"Gürültü" Sebebiyle Tahliye Edilme Riski Var Mı?</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Sözleşmede izin verilmiş ve yönetim planında yasak olmasa dahi; evcil hayvanın aşırı düzeyde, gece yarısı saatlerinde kesintisiz ve yüksek sesle havlaması gibi durumlar, komşuların huzurunu bozduğu gerekçesiyle yerel zabıta veya mahkeme yoluyla müdahale konusu olabilir. 
                  Bu sebeple hayvanınızın sosyal eğitimi ve apartman yaşamına uyumu en birincil sorumluluğunuzdur.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Hem Ev Sahipleri Hem Kiracılar İçin Pratik Tavsiyeler</h2>
            <p className="text-gray-655 leading-relaxed mb-6">
              Kira uyuşmazlıklarının büyük bir kısmı empati eksikliği ve belirsizliklerden kaynaklanır. 
              Sözleşme öncesinde ve süresince uygulayabileceğiniz şu pratik **tavsiyeler** ile barışçıl ve huzurlu bir kiracılık dönemi geçirebilirsiniz:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-8 mb-4">Kiracılar İçin Altın Öneriler:</h3>
            <ul className="space-y-4 text-gray-650 list-disc pl-5 mb-10 text-base">
              <li><strong>Evcil Hayvan CV'si Hazırlayın:</strong> Ev sahibinin kaygılarını kırmak adına dostunuzun aşı kartını, karnesini, koku yaymadığını belgeleyen veteriner kontrol notunu ve varsa daha önce kaldığınız evin sahibinden alacağınız "Eşyalara hiç hasar vermemiştir" şeklinde referans mektubunu paylaşabilirsiniz.</li>
              <li><strong>Eski Hasar Tespitlerine Dikkat Edin:</strong> Eve ilk giriş gününde parkelerin üzerindeki çizikleri, tırnak izlerini fotoğraflayarak eşya teslim tutanağına geçirin. Çıkışta ev sahibinin eski hasarları sizin dostunuza yıkmasını bu şekilde engelleyebilirsiniz.</li>
              <li><strong>Evcil Hayvan Sigortası Yaptırın:</strong> Üçüncü şahıslara veya mülke verilebilecek kazara zararları teminat altına alan sigorta türlerinden faydalanabilirsiniz.</li>
            </ul>

            <h3 className="text-2xl font-serif font-black text-primary mt-8 mb-4 font-serif">Ev Sahipleri İçin Güvenlik Tavsiyeleri:</h3>
            <ul className="space-y-4 text-gray-650 list-disc pl-5 mb-12 text-base">
              <li><strong>Hakkaniyetli Ek Depozito Alabilirsiniz:</strong> Eşyalı bir ev kiraya veriyorsanız, genel hasar paylarını karşılamak üzere yasal sınırlar olan 3 aylık kira bedelini aşmamak şartıyla bir miktar hasar depozitosu alabilirsiniz.</li>
              <li><strong>Koşullu Onay Klozu Ekleyin:</strong> İzin verirken bunu tamamen sınırsız tutmak yerine yukarıda paylaştığımız "Koşullu İzin Maddesi" ile çevreye rahatsızlık verilmemesi kıstasını kendinize yasal koruma kalkanı yapabilirsiniz.</li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">KMK Yönetim Planı vs. Kira Sözleşmesi Geçerlilik Tablosu</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Yönetim Planı Kararı</th>
                    <th className="p-4">Kira Sözleşmesi Maddesi</th>
                    <th className="p-4 rounded-tr-2xl">Nihai Hukuki Sonuç</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 text-red-650 font-bold">Evcil Hayvan Yasaktır</td>
                    <td className="p-4 text-green-700 font-semibold">Beslemek Serbesttir yazıldı</td>
                    <td className="p-4 text-red-750 font-bold">HAYVAN TAHLİYE EDİLİR (Yönetim Planı önceliklidir)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 text-green-700 font-bold">Evcil Hayvan Serbesttir (veya Sessiz kalmıştır)</td>
                    <td className="p-4 text-red-650 font-semibold">Pet Beslenemez yazıldı</td>
                    <td className="p-4 text-red-750 font-bold">HAYVAN BESLENEMEZ (Kira sözleşmesi kiracıyı bağlar)</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 text-green-700 font-bold">Evcil Hayvan Serbesttir (veya Sessiz kalmıştır)</td>
                    <td className="p-4 text-green-700 font-semibold">Beslemek Serbesttir yazıldı</td>
                    <td className="p-4 text-green-750 font-black">%100 YASAL GÜVENCE (Komşular da ev sahibi de tahliye isteyemez)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl font-sans">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <Sparkles className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Evcil Hayvan Dostu Sözleşmenizi Dakikalar İçinde Oluşturun</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Tüylü dostlarınızla birlikte huzur içinde yaşayacağınız yasal korumalı kira sözleşmesini, evcil hayvan izin maddelerini içerecek şekilde online formumuzla ücretsiz hazırlayıp PDF indirin.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Şimdi Özel İzinli Sözleşme Üret
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
                    Kira sözleşmesinde hiçbir yasak yoksa ev sahibi sonradan evcil hayvan sebebiyle beni çıkarabilir mi?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Eğer kira sözleşmesinde herhangi bir yasaklayıcı madde yoksa ve apartmanın Yönetim Planında da evcil hayvan besleme yasağı bulunmuyorsa, ev sahibi sadece evcil hayvana sahip olmanız nedeniyle sizi evden tahliye edemez. Ancak eğer hayvan komşulara fiziki saldırıda bulunur, ortak alanları kirletir veya olağan dışı gürültüye sebep olursa, Borçlar Kanunu’nun "Komşulara Özen Gösterme Borcu" (TBK m. 316) uyarınca tahliye davası açılması hakkı saklı kalacaktır. Ortada hiçbir aşırılık yokken keyfi tahliye talepleri yasal olarak geçersizdir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Rehber köpekler veya tıbbi destek köpekleri de evcil hayvan sınırlandırmalarına dahil midir?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Görme engelli bireylere rehberlik eden rehber köpekler veya tıbbi / psikiyatrik bir gerekliliği resmi sağlık kuruluşu raporu ile kanıtlanmış "Destek Hayvanları", standart evcil hayvan statüsünden farklı değerlendirilebilmektedir. Uluslararası insan hakları ve engelli hakları direktifleri çerçevesinde bu tür hayvanların varlığı zorunlu bir tıbbi protez cihazı veya tıbbi gereç niteliğinde kabul edilir. Apartman yönetim planında sert yasaklar olsa dahi, mahkemeler bu durumlarda engelli bireyin yaşam hakkını ve eşitlik ilkesini öncelikli kabul ederek istisnai kararlar verebilmektedir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Apartmanda evcil hayvan beslememe izin verilen rıza belgesi noterden mi onaylanmalıdır?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Hukuken rıza veya izin belgesinin noter onaylı olması zorunlu bir geçerlilik şartı değildir. Kira sözleşmesinin altına tarafların ıslak imzasıyla eklenecek bir ek protokol, zeyilname veya doğrudan özel şartlar maddesi yasal ispat açısından tamamen yeterlidir. Ancak imzanın ev sahibine ait olduğunun inkar edilmemesi veya gelecekte doğabilecek uyuşmazlıklarda ispat gücünü en tepe noktaya taşımak adına noter kanalıyla veya zaman damgalı PDF olarak saklanması elbette ek koruma sağlar.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 13 Haziran 2026</span>
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
            <Link to="/yazlik-kiralama-sozlesmesi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Yazlık Kiralama Sözleşmesi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Mevsimlik ve kısa dönem kiralamalarda "7464 sayılı kanun" yasal sınırları, eşya teslim tutanağı ve depozitolar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kiraci-degisikligi-devir-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kiracı Değişikliği Devir</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira devri şartları, mal sahibi rızası, yeni sözleşme gereklilikleri, devreden ile devralanın ortak sorumlulukları...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/ogrenci-kira-sozlesmesi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors font-sans">Öğrenci Kira Sözleşmesi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Üniversite öğrencileri için okul takvimine endeksli kısa dönem kira kısıtlamaları, ortak ev arkadaşı hakları ve depozito tavsiyeleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
