import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Gavel, Scale, Info, CheckCircle2, ArrowRight, Share2, Printer, Home, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function TenantRightsBlog() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.tenantRightsTitle')}
        description={t('blogPage.tenantRightsSeoDesc')}
      />

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-8"
          >
            <Scale className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Hukuki Güvence Rehberi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.tenantRightsTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            2026 yılında bir kiracı olarak sahip olduğunuz yasal haklar nelerdir? 
            Ev sahibine karşı haklarınız, kira artış sınırları ve tahliye süreçleri hakkında bilmeniz gereken her şey.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-accent pl-6">
              Türkiye'de kira piyasası, özellikle 2026 yılına gelindiğinde hem ekonomik değişimler hem de yasal düzenlemelerle yeni bir çehre kazandı. 
              Milyonlarca vatandaşı ilgilendiren kiracı hakları, Borçlar Kanunu çerçevesinde sıkı bir şekilde korunmaktadır. 
              Ancak haklarınızı koruyabilmek için, önce onları tam olarak bilmeniz gerekir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2026 Yılında Kiracı Haklarının Temeli</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Türk Borçlar Kanunu (TBK), konut ve çatılı işyeri kiralarında zayıf taraf olarak görülen kiracıya geniş korumalar tanır. 
              <strong>Kiracı hakları 2026</strong> rehberimizin başında, sözleşmenin varlığından bağımsız olarak kanunla tanınan temel haklar gelmektedir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Kira Artış Sınırı: TÜFE 12 Aylık Ortalama</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Konut kiralarında senelik artış oranı keyfi olarak belirlenemez. Yasal sınır, bir önceki kira yılındaki 12 aylık TÜFE ortalamasıdır. 
              Sözleşmede bu orandan daha yüksek bir artış kararlaştırılmış olsa dahi, kiracı yasal sınırın üzerindeki kısmı ödemekle yükümlü değildir.
            </p>
            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10">
              <div className="flex items-center mb-4">
                <ShieldCheck className="h-8 w-8 text-accent mr-3" />
                <h4 className="text-xl font-serif font-black text-primary m-0">Yasal Güvence</h4>
              </div>
              <p className="text-gray-600 m-0">
                Ev sahibinin "enflasyon çok yüksek, bu kira çok düşük kaldı" diyerek TÜFE oranının üzerinde zam yapma hakkı hukuk karşısında geçersizdir. 
                5. yılın sonuna kadar bu sınır emredicidir.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Tahliye Şartları: "İstediğim Zaman Çıkarırım" Dönemi Bitti</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kirayı düzenli ödeyen bir kiracıyı evden çıkarmak sandıldığı kadar kolay değildir. Tahliye için kanunda sayılan sınırlı sebeplerden birinin oluşması gerekir:
            </p>
            <ul className="space-y-4 text-gray-600 mb-8 list-none pl-0">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>İhtiyaç Nedeniyle Tahliye:</strong> Ev sahibinin kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu kişiler için konut ihtiyacı doğması durumunda tahliye istenebilir. Ancak bu ihtiyacın <strong>samimi ve zorunlu</strong> olması şarttır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>İki Haklı İhtar:</strong> Bir kira yılı içerisinde kiranın ödenmemesi nedeniyle iki defa haklı ihtarname gönderilen kiracı aleyhine tahliye davası açılabilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>10 Yıllık Uzama Süresi:</strong> Kira sözleşmesi bitse dahi kiracı çıkmıyorsa, ev sahibi ancak 10 yıllık uzama süresinin sonunda (toplamda 11-12 yıl sonra) herhangi bir sebep göstermeden tahliye isteyebilir.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Depozito ve Güvence Bedeli Hakları</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Depozito (güvence bedeli) konusunda kiracıların bilmesi gereken 3 ana kural vardır:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 font-sans">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                <Info className="h-8 w-8 text-accent mb-4" />
                <span className="font-bold text-primary mb-2 text-sm">3 Ay Sınırı</span>
                <p className="text-xs text-gray-400">Depozito 3 aylık kira bedelini asla geçemez.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                <Info className="h-8 w-8 text-accent mb-4" />
                <span className="font-bold text-primary mb-2 text-sm">Banka Hesabı</span>
                <p className="text-xs text-gray-400">Para bankada vadeli hesapta tutulmalıdır.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                <Info className="h-8 w-8 text-accent mb-4" />
                <span className="font-bold text-primary mb-2 text-sm">Kesintisiz İade</span>
                <p className="text-xs text-gray-400">Zarar yoksa para tam olarak iade edilmelidir.</p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Tadilat ve Tamirat Hakları: Kim Öder?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Evin kullanımına engel olan ana sorunlar (çatı sızdırması, asansör bozulması, dış cephe, ana tesisat arızaları) **ev sahibine** aittir. 
              Kiracının kullanımından kaynaklanmayan bu tip masrafları kiracı kendisi yaptıysa, bedeli kiradan mahsup edebilir. 
              Ampul değişimi, musluk contası gibi küçük, kullanım odaklı giderler ise kiracıya aittir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">5. Ev Sahibinin Evi Satması ve Yeni Malikin Hakları</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ev satıldığında kira sözleşmesi otomatik olarak sona ermez. Yeni malik eski sözleşmenin tarafı olur. 
              Eğer yeni malik kendisi oturacaksa, satıştan itibaren **1 ay içinde** kiracıya ihtarname çekmeli ve **6 ay sonra** tahliye davası açmalıdır. 
              Aksi halde kiracı dönem sonuna kadar evde kalmaya devam edebilir.
            </p>

            <div className="bg-accent/10 p-8 rounded-[40px] my-10 border border-accent/20">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-xl font-serif font-black text-primary m-0">Tahliye Taahhütnamesine Dikkat!</h4>
              </div>
              <p className="text-gray-600 m-0">
                Kira sözleşmesi ile aynı gün imzalatılan tahliye taahhütnameleri Yargıtay kararları uyarınca geçersizdir. 
                Taahhütnamenin geçerli olması için sözleşmeden **makul bir süre sonra** ve özgür irade ile imzalanmış olması gerekir.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kiracı Hakları 2026 Hakkında Sıkça Sorulan Sorular</h2>
            <div className="space-y-8 font-sans mb-20">
              <div>
                <h4 className="font-black text-primary mb-2">Ev sahibi arayıp "Oğlum gelecek çık" diyebilir mi?</h4>
                <p className="text-gray-500 text-sm">Sadece telefonla söylemesi yeterli değildir. Noter onaylı ihtar çekmeli ve dönem sonunda mahkeme yoluyla ihtiyaç olduğunu ispatlayarak tahliye davası açmalıdır.</p>
              </div>
              <div>
                <h4 className="font-black text-primary mb-2">Kiramı düzenli ödüyorum, ev sahibi kirayı piyasanın çok altında kaldığı için artırabilir mi?</h4>
                <p className="text-gray-500 text-sm">Hayır, ilk 5 yıl boyunca TÜFE oranının üzerinde artış isteyemez. Ancak 5. yıldan sonra "Kira Tespit Davası" açarak piyasa rayiçlerine göre güncelleme isteyebilir.</p>
              </div>
              <div>
                <h4 className="font-black text-primary mb-2">Ev sahibi anahtarı kopyalayıp eve girebilir mi?</h4>
                <p className="text-gray-500 text-sm">Asla. Bu durum Türk Ceza Kanunu'na göre "konut dokunulmazlığını ihlal" suçudur. Kiracının izni olmadan ev sahibi eve giremez.</p>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[50px] shadow-2xl border border-gray-100 text-center">
              <Gavel className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-serif font-black text-primary mb-4">Hukuki Güvenlik Sözleşme ile Başlar</h3>
              <p className="text-gray-500 mb-10 max-w-xl mx-auto">
                Tüm bu haklarınızın temel dayanağı doğru hazırlanmış bir kira sözleşmesidir. 2026 güncel mevzuatına uygun sözleşmenizi ücretsiz oluşturmak için hemen başlayın.
              </p>
              <Link 
                to="/olustur" 
                className="inline-flex items-center bg-primary text-white px-12 py-6 rounded-[32px] font-black text-xl hover:bg-primary/90 transition-all shadow-2xl"
              >
                Sözleşme Oluşturmaya Başla
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </div>

          </article>

          {/* Social Share / Meta */}
          <div className="flex items-center justify-between py-10 border-t border-gray-100 mt-20">
            <div className="flex items-center text-gray-400 text-sm">
              <span className="mr-8">Güncelleme: 07 Mayıs 2026</span>
              <span className="hidden sm:inline">Okuma Süresi: 8 Dakika</span>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-accent transition-colors"><Share2 className="h-5 w-5" /></button>
              <button className="text-gray-400 hover:text-accent transition-colors"><Printer className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-black text-primary mb-12 text-center underline decoration-accent decoration-4 underline-offset-8">Önerilen Rehberler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/depozito-ne-kadar-olmali-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all">
              <h4 className="text-xl font-serif font-black text-primary mb-4">Depozito İade Rehberi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Paranızı kesintisiz geri almanın yolları ve yasal saklama koşulları...</p>
              <span className="text-accent font-bold">Okumaya Başla</span>
            </Link>
            <Link to="/2026-kira-artis-orani-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all">
              <h4 className="text-xl font-serif font-black text-primary mb-4">Kira Üst Sınırı 2026</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">TÜFE oranına göre yasal zam hesaplama formülleri ve örnekler...</p>
              <span className="text-accent font-bold">Okumaya Başla</span>
            </Link>
            <Link to="/kira-sozlesmesi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all">
              <h4 className="text-xl font-serif font-black text-primary mb-4">Sözleşme Nasıl Yazılır?</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">İleride sorun yaşamamak için sözleşmenizde olması gereken zorunlu maddeler...</p>
              <span className="text-accent font-bold">Okumaya Başla</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
