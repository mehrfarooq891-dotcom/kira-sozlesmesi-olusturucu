import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, Gavel, FileText, AlertTriangle, CheckCircle2, ArrowRight, Share2, Printer, ShieldAlert, Landmark, HelpCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function EvictionGuide() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.evictionTitle')}
        description={t('blogPage.evictionSeoDesc')}
      />

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full mb-8 border border-red-500/20"
          >
            <ShieldAlert className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Hukuk ve Yargı Rehberi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.evictionTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Türk Borçlar Kanunu kapsamında ev sahibinin kiracıyı tahliye edebileceği tüm yasal haklar, hak düşürücü süreler, ihtar usulleri ve zorunlu arabuluculuk süreci.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-red-500 pl-6">
              Mülk sahipleri ile kiracılar arasında en sık uyuşmazlığa neden olan konuların başında "evden çıkarma" ya da hukuki adıyla "tahliye" süreçleri gelmektedir. 
              Türkiye'de yürürlükte olan Borçlar Kanunu, sosyal devlet ilkesinin bir gereği olarak kiracıyı ciddi yasal korumalarla güvence altına almıştır. 
              Peki, yasal olarak <strong>ev sahibi kiracı çıkarma</strong> hakkını ne zaman ve hangi koşullarda kullanabilir? 
              Bu kapsamlı rehberde, ev sahibinin kiracıyı çıkarabileceği tüm haklı sebepleri, izlenmesi gereken ihtar süreçlerini, arabuluculuk aşamasını ve mahkeme yollarını adım adım inceleyeceğiz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Ev Sahibi Kiracı Çıkarma İşlemini Keyfi Yapabilir mi?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              İlk olarak bilinmesi gereken en temel kural şudur: <strong>Ev sahibi kiracı çıkarma</strong> hakkını sözleşme süresinin bitimine dayanarak keyfi bir şekilde tek taraflı olarak kullanamaz. 
              "Kira sözleşmemiz 1 yıllıktı, süre bitti, derhal evimi boşaltın" argümanı Türk Hukuku'nda geçersizdir. Konut ve çatılı işyeri kiralarında, kira sözleşmesi süresi dolduğunda, sözleşme kiracı tarafından en az 15 gün önceden feshedilmediği sürece <strong>aynı koşullarla bir yıl daha uzamış sayılır</strong>. 
              Dolayısıyla, mülk sahibinin kiracıyı yasal yollarla çıkarabilmesi için kanunda açıkça tanımlanmış olan haklı nedenlerden (tahliye sebeplerinden) birine sahip olması ve kanuni sürelere uyması şarttır.
            </p>

            <div className="bg-red-500/5 p-8 rounded-[40px] border border-red-500/10 my-10 flex items-start">
              <Gavel className="h-10 w-10 text-red-500 shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Hukuken Geçersiz Talepler</h4>
                <p className="text-gray-600 m-0">
                  Mülk sahibinin sırf "kirayı piyasa rayicine yükseltmediği" için veya "kiracıyla anlaşamadım" gerekçesiyle resmi ihtar ya da mahkeme kararı olmadan kiracıyı kapı önüne koyması, kilidi değiştirmesi veya faturaları (su, elektrik, doğalgaz) kapatması <strong>kesinlikle yasaktır</strong>. 
                  Bu eylemler, Türk Ceza Kanunu kapsamında "huzur ve sükunu bozma", "konut dokunulmazlığını ihlal" ve "haksız el koyma" suçlarını oluşturabilir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Yasal Kiracı Çıkarma Sebepleri Nelerdir? (TBK Madde 350-352)</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Türk Borçlar Kanunu kapsamında <strong>ev sahibi kiracı çıkarma</strong> hakkına sahip olabileceği sınırlı sayıdaki şartları iki ana başlık altında toplar: 
              <strong>Kiraya Verenden Kaynaklanan Sebepler</strong> ve <strong>Kiracıdan Kaynaklanan Sebepler</strong>. Bunların dışındaki hiçbir gerekçe tahliye davasına doğrudan zemin hazırlamaz.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">A) Kiraya Verenden Kaynaklanan Tahliye Nedenleri</h3>

            <h4 className="text-xl font-bold text-gray-800 mt-6 mb-2">1. Gereksinim (İhtiyaç) Sebebiyle Tahliye:</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kiraya veren; kendisi, eşi, altsoyu (çocukları, torunları), üstsoyu (anne, babası) veya kanun gereği bakmakla yükümlü olduğu diğer kişiler için konut veya işyeri ihtiyacı olduğunu kanıtlarsa, süreli sözleşmelerde sürenin bitimiyle, belirsiz süreli sözleşmelerde fesih dönemine uygun olarak tahliye talep edebilir.
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-600 space-y-1 text-sm">
              <li><strong>Şartlar:</strong> İhtiyacın gerçek, samimi, zorunlu ve sürekli olması gerekir. Geçici, keyfi ya da henüz doğmamış afaki ihtiyaçlar davanın reddedilmesine yol açar.</li>
              <li><strong>Süreç:</strong> Sözleşme bitim tarihinden itibaren en geç 1 ay içinde tahliye davası açılmalıdır. Eğer önceden noterden ihtarname çekilmişse, dava süresi sonraki kira yılı boyunca uzatılabilir.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-800 mt-6 mb-2">2. Yeni Malikin Gereksinimi (Evin Satılması):</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mülkü sonradan satın alan yeni malik, yukarıda belirtilen kendisi veya yakınlarının ihtiyacı dolayısıyla taşınmazı kullanmak isteyebilir. Bu durumda yeni malike kanun özel bir imtiyaz tanımıştır.
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-600 space-y-1 text-sm">
              <li><strong>Şartlar:</strong> Yeni malik, tapu tescil tarihinden itibaren en geç **1 ay içinde** kiracıya durumu yazılı (tercihen noter kanalıyla) bildirmek zorundadır.</li>
              <li><strong>Dava Süresi:</strong> Bildirim yapıldıktan sonra, kiracı mülkü boşaltmazsa satın alma tarihinden itibaren **6 ay sonra** doğrudan tahliye davası açılabilir. Alternatif olarak, yeni malik eski malikle yapılan sözleşmenin bitiminden itibaren 1 ay içinde de dava açma hakkına sahiptir.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-800 mt-6 mb-2">3. Yeniden İnşa, İmar veya Esaslı Onarım:</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Taşınmazın yıkılıp yeniden yapılması, kentsel dönüşüm kapsamına girmesi veya mülkte yapılacak esaslı tadilatlar sırasında içinde yaşanmasının mümkün olmaması durumunda tahliye istenebilir. tadilat sonrasında binanın eski kiracıya öncelikli olarak sunulması zorunludur.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-12 mb-4">B) Kiracıdan Kaynaklanan Tahliye Nedenleri</h3>

            <h4 className="text-xl font-bold text-gray-800 mt-6 mb-2">1. Yazılı Tahliye Taahhütnamesi:</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kiracının, mülkü belirli bir tarihte boşaltacağını mülk sahibine yazılı olarak taahhüt ettiği resmi belgedir. Ancak tahliye taahhütnamesinin geçerlilik şartları son derece katıdır.
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-600 space-y-1 text-sm">
              <li><strong>Geçerlilik Koşulları:</strong> Taahhütnamenin mutlaka yazılı olması, boşaltma tarihinin açıkça belirtilmesi ve en önemlisi <strong>kira sözleşmesinin imzalandığı günden sonraki bir tarihte</strong> verilmiş olması gerekir. Kira sözleşmesiyle aynı gün veya boş kağıda imza şeklinde alınan taahhütnameler hukuken geçersizdir.</li>
              <li><strong>Süreç:</strong> Taahhüt edilen tarihten itibaren **1 ay içinde** icraya başvurulmalı veya dava açılmalıdır.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-800 mt-6 mb-2">2. İki Haklı İhtar Sebebiyle Tahliye:</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kiracının kira bedelini zamanında ödememesi neticesinde hak edilen tahliye türüdür. 
              <strong>Ev sahibi kiracı çıkarma</strong> girişimini kolaylaştıran en yaygın yollardan biridir.
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-600 space-y-1 text-sm">
              <li><strong>Şartlar:</strong> Bir kira yılı dönemi içinde kiranın ödenmediği farklı aylara ait iki ayrı haklı ihtarın kiracıya noter kanalıyla veya icra dairesi aracılığıyla gönderilmiş olması gerekir.</li>
              <li><strong>Süreç:</strong> İkinci ihtarın ardından kira yılının bitiminden itibaren 1 ay içinde tahliye davası açılmalıdır.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-800 mt-6 mb-2">3. Kiracının Kendisinin veya Eşinin Aynı İlçede Evinin Olması:</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kira sözleşmesinin kurulması sırasında ev sahibinin bundan haberi yoksa ve kiracının ya da birlikte yaşadığı eşinin aynı ilçe sınırları veya belde belediyesi içinde oturmaya elverişli başka bir konutu bulunuyorsa, ev sahibi sözleşme bitiminde tahliye talep edebilir.
            </p>

            <h4 className="text-xl font-bold text-gray-800 mt-6 mb-2">4. Sözleşmeye ve Komşulara Saygı Yükümlülüğüne Aykırılık:</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kiraçı, kiralananı özenle kullanmak ve apartman sakinlerine gerekli saygıyı göstermekle yükümlüdür. Gürültü yapmak, ortak alanları işgal etmek, binaya kasten zarar vermek gibi durumlar devam ederse, ev sahibi kiracıya yazılı olarak **en az 30 gün** süre vererek durumun düzeltilmesini ister. Düzeltilmezse sözleşmeyi derhal feshedip tahliye davası açabilir. Açıkça kural dışı ve vahim ihlallerde (Örn: apartmanı yakmaya teşebbüs, fiziki saldırı vb.) süre vermeden de fesih mümkündür.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">10 Yıllık Uzama Süresi Nedir? (Sebepsiz Tahliye Hakkı)</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kira sözleşmesinin süresi kaç yıl olursa olsun (1 yıllık, 3 yıllık vs.), bu süre bittikten sonra sözleşme her yıl otomatik olarak 1'er yıl uzar. Ancak yasa koyucu mülk sahibinin de mülkiyet hakkını korumak adına bir üst sınır koymuştur.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Buna göre; 10 yıllık uzama süresinin dolmasının ardından (örneğin 1 yıllık yapılmış bir kontratın üzerinden toplamda 11 yıl geçtikten sonra), ev sahibi herhangi bir yasal gerekçe göstermeksizin, her uzama yılının bitiminden en az **3 ay önce** yazılı bildirim yapmak koşuluyla, sözleşmeyi sonlandırabilir ve kiracıyı tahliye edebilir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">İhtar Süreci ve Noter Bildirimlerinin Önemi</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kira uyuşmazlıklarında haklı olmak tek başına yeterli değildir; şekil şartlarına ve sürelere uymak hayati derecede önemlidir. <strong>Ev sahibi kiracı çıkarma</strong> niyetinde ise mutlaka ihtar sürecini yasal kılavuza göre yürütmelidir:
            </p>
            <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/10 my-10 font-sans">
              <span className="text-xs font-black uppercase tracking-widest text-accent mb-4 block">Tahliyede Bildirim Adımları</span>
              <ul className="space-y-4 text-sm text-gray-650 pl-0 list-none">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mr-3 mt-1">1</span>
                  <span><strong>Noter Kanalı Şartı:</strong> İhtarnamenin ispat gücü taşıması ve yasal sürelerin başlaması için mutlaka noter kanalıyla yazılı olarak tebliğ edilmesi şarttır.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mr-3 mt-1">2</span>
                  <span><strong>Tebliğ Tarihi Hesabı:</strong> İhtarın yazıldığı tarih değil, kiracının eline ulaştığı (tebliğ edildiği) tarih yasal süre başlangıcı olarak esas alınır.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mr-3 mt-1">3</span>
                  <span><strong>Hak Düşürücü Süreler:</strong> Belirtilen yasal sürelerin aşılması (Örn: İhtiyaç davasının kontrat bitiminden sonraki 1 ay içinde açılmaması) durumunda ev sahibi davasını kaybeder ve bir sonraki kira yılını beklemek zorunda kalır.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Tahliye Davalarında Mahkeme Yolu ve Arabuluculuk Zorunluluğu</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Türkiye'de kira hukuku davalarında mahkemelerin iş yükünü azaltmak amacıyla **1 Eylül 2023** tarihinden itibaren **zorunlu arabuluculuk** şartı getirilmiştir. Bu kural 2026 yılında da tam yetkiyle uygulanmaktadır.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Buna göre; ev sahibi directly Sulh Hukuk Mahkemesi'ne gidip dava açamaz. Öncelikle adliyelerdeki Arabuluculuk Bürosu'na başvurulmalıdır. Arabulucu eşliğinde yapılan toplantılarda ev sahibi ve kiracı uzlaşamazsa, "Anlaşamama Tutanağı" düzenlenir. Ev sahibi ancak bu tutanakla birlikte **Sulh Hukuk Mahkemesi'nde tahliye davası** açabilir.
            </p>
            
            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">Kira Tahliye Davaları Ne Kadar Sürer?</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dava süreleri adliyenin yoğunluğuna, davanın türüne (ihtiyaç, ihtar vb.) ve iddiaların delillendirilme hızına göre değişir. Ortalama bir tahliye davası **1 ila 2 yıl** arasında sürmektedir. Bu süreçte kira ödemeleri yasal sınırlar dahilinde devam eder. Kaybedilen davanın mahkeme ve avukatlık vekalet ücreti masrafları haksız çıkan tarafa yükletilir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kötü Niyetli Tahliyeye Karşı Kiracı Koruması ve Cezai Yaptırımlar</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kanun koyucu, ev sahiplerinin yalan gerekçelerle kiracıları mağdur etmesini önlemek amacıyla son derece caydırıcı cezalar ve yasaklar öngörmüştür.
            </p>
            <div className="bg-red-500/10 p-8 rounded-3xl border-l-8 border-red-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Yeniden Kiralama Yasağı (TBK Madde 355)
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed m-0">
                Ev sahibi, gereksinim (ihtiyaç) gerekçesiyle kiracıyı çıkardıktan sonra, haklı bir sebep olmaksızın söz konusu konut veya işyerini <strong>3 yıl boyunca eski kiracısından başkasına kiralayamaz</strong>. 
                Eğer bu yasağa aykırı davranıp mülkü başkasına kiralarsa, eski kiracısına <strong>son kira yılında ödenmiş olan 1 yıllık kira bedelinden az olmamak üzere tazminat</strong> ödemekle yükümlü kılınır.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Ev Sahibi Kiracı Çıkarma Durumları Karşılaştırma Tablosu</h2>
            <div className="overflow-x-auto my-10">
              <table className="w-full text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Tahliye Nedeni</th>
                    <th className="p-4">Aranan Şart</th>
                    <th className="p-4">En Erken Başvuru Süresi</th>
                    <th className="p-4 rounded-tr-2xl">Arabuluculuk Şartı</th>
                  </tr>
                </thead>
                <tbody className="text-gray-650">
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Ev Sahibinin İhtiyacı</td>
                    <td className="p-4">Zorunlu, sürekli konut/işyeri gereksinimi</td>
                    <td className="p-4">Sözleşme bitiminden itibaren 1 Ay</td>
                    <td className="p-4">Zorunlu</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Yeni Malikin İhtiyacı</td>
                    <td className="p-4">Mülkü yeni alan kişinin samimi gereksinimi</td>
                    <td className="p-4">Satın almadan sonraki 6. Ay</td>
                    <td className="p-4">Zorunlu</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Tahliye Taahhütnamesi</td>
                    <td className="p-4">Sözleşme sonrası tarihli, ıslak imzalı yazılı belge</td>
                    <td className="p-4">Taahhüt tarihinden itibaren 1 Ay</td>
                    <td className="p-4">Zorunlu</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">İki Haklı İhtar</td>
                    <td className="p-4">Aynı yıl içinde ödenmeyen 2 farklı ay kirası ihtarı</td>
                    <td className="p-4">Kira yılı bitiminden itibaren 1 Ay</td>
                    <td className="p-4">Zorunlu</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">10 Yıllık Uzama Dolumu</td>
                    <td className="p-4">Kontrat başlangıcından itibaren 11-12 yılın dolması</td>
                    <td className="p-4">Uzatma yılı bitiminden 3 ay önce bildirim</td>
                    <td className="p-4">Zorunlu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Kira sözleşmesinde tahliye maddesi yoksa ev sahibi çıkarabilir mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Evet, sözleşmede özel bir tahliye maddesi olmasa dahi Türk Borçlar Kanunu emredici hükümleri geçerlidir. Kanundaki haklı sebeplerden biri mevcutsa ev sahibi yasal haklarını arayabilir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Ev sahibi kiracıyı mesajla uyararak tahliye edebilir mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Hayır. WhatsApp, SMS, e-posta veya sözlü aramalar yasal ihtar yerine geçmez. Hukuken geçerli bildirimlerin mutlaka <strong>Noter onaylı ihtarname</strong> ile yapılması mecburidir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0">Ev sahibi kiracıyı çıkarıp evde kendisi oturmazsa ne olur?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Eğer ihtiyaç davasıyla kiracıyı çıkarıp kendisi veya yasal yakınları oturmaz, başka birine kiraya verirse kiracıya en az 1 yıllık kira tutarında maddi tazminat ödemek zorunda kalır (TBK 355/Re-renting ban).
                </p>
              </details>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Sözleşmenizi Yasal Güvenceye Alın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  Kira uyuşmazlıklarındaki en büyük hatalar hatalı hazırlanmış veya eksik kira kontratlarından kaynaklanmaktadır. 
                  KiraSözleşmesi.com ile 2026 yılı güncel mevzuatına %100 uyumlu, haklarınızı tam koruyan profesyonel kira sözleşmelerini birkaç dakika içinde ücretsiz oluşturabilirsiniz.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Sözleşme Oluşturucuya Git
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 09 Mayıs 2026</span>
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
            <Link to="/kiraci-haklari-2026-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kiracı Hakları 2026</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">2026 yılı en güncel kiracı hakları, korunma şartları ve hukuki limitler...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/depozito-ne-kadar-olmali-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Depozito Yasal Sınırları</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Depozito ne kadar olabilir? 3 aylık kira sınırı ve iade güvenceleri...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/2026-kira-artis-orani-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Artış Oranı Hesaplama</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">TÜFE oranına göre yasal zam sınırı, hesaplama örnekleri ve ek masraflar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
