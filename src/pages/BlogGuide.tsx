import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { BookOpen, CheckCircle2, ShieldAlert, FileText, Share2, Printer, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function BlogGuide() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.title')}
        description={t('blogPage.seoDesc')}
      />

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-8"
          >
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">2026 Güncel Mevzuat Rehberi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Türkiye'deki güncel kira hukuku standartlarına göre kira sözleşmesi nasıl yazılır? 
            Tüm zorunlu maddeler, tarafların yasal hakları ve noter onayına dair bilinmesi gerekenler.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/olustur" 
              className="bg-accent text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-xl flex items-center group"
            >
              Şimdi Sözleşme Oluştur
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-accent pl-6">
              Kira sözleşmesi, hem kiracı hem de kiraya veren (ev sahibi) için yasal bir koruma kalkanıdır. 
              Doğru hazırlanmamış bir sözleşme, ileride telafisi zor maddi ve manevi zararlara yol açabilir. 
              Bu rehberde, 2026 yılı itibarıyla geçerli olan Borçlar Kanunu hükümlerine göre eksiksiz bir kira sözleşmesi hazırlama sürecini inceleyeceğiz.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Sözleşmesi Nedir?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kira sözleşmesi, kiraya verenin bir şeyin kullanılmasını veya kullanmayla birlikte ondan yararlanılmasını kiracıya bırakmayı, 
              kiracının da buna karşılık kararlaştırılan kira bedelini ödemeyi üstlendiği sözleşmedir (TBK m. 299). 
              Her ne kadar sözlü olarak da yapılabilse de, ispat kolaylığı açısından <strong>yazılı kira sözleşmesi</strong> her zaman tavsiye edilir.
            </p>

            <h2 id="nasil-yazilir" className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Sözleşmesi Nasıl Yazılır?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Bir kira sözleşmesi genel olarak üç ana bölümden oluşur: 
              <strong>Taşınmaz Bilgileri</strong>, <strong>Kiralama Şartları</strong> ve <strong>Özel Şartlar</strong>. 
              Kira sözleşmesi yazarken şu adımları izlemek gerekir:
            </p>
            <ul className="space-y-4 text-gray-600 mb-8 list-none pl-0">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Tarafların Kimlik Bilgileri:</strong> Kiracı ve kiraya verenin TC Kimlik numaraları, tam adları ve ikametgah adresleri hatasız yazılmalıdır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Mülk Detayları:</strong> Kiralanacak yerin adresi, tapu bilgileri (ada/parsel), mülkün cinsi (konut/işyeri) netleştirilmelidir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Kira Bedeli ve Artış Oranı:</strong> Kira miktarının net mi brüt mü olduğu, ödeme günü ve yıllık artış oranının (TÜFE üst sınırı dahilinde) belirtilmesi zorunludur.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2026 Yılında Olması Gereken Zorunlu Maddeler</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Eksiksiz bir kira sözleşmesinde şu maddelerin bulunması hukuki güvenliği sağlar:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <h4 className="font-black text-primary mb-3">1. Süre Maddesi</h4>
                <p className="text-sm text-gray-500">Sözleşmenin başlangıç ve bitiş tarihlerini netleştirin. Belirtilmezse sözleşme 'belirsiz süreli' sayılabilir.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <h4 className="font-black text-primary mb-3">2. Depozito Şartı</h4>
                <p className="text-sm text-gray-500">Depozito bedeli 3 aylık kira bedelini geçemez. Vadeli bir tasarruf hesabına yatırılması esastır.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <h4 className="font-black text-primary mb-3">3. Ödeme Yeri (IBAN)</h4>
                <p className="text-sm text-gray-500">Ödemelerin hangi banka hesabına, hangi açıklama ile yapılacağı (Örn: '2026 Ocak Ayı Kira Bedeli') yazılmalıdır.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <h4 className="font-black text-primary mb-3">4. Yan Giderler</h4>
                <p className="text-sm text-gray-500">Aidat, elektrik, su ve doğalgaz gibi giderlerin kime ait olduğu açıkça belirtilmelidir.</p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Tarafların Hakları ve Yükümlülükleri</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Borçlar Kanunu hem kiracıyı hem de ev sahibini koruyan dengeli bir yapı öngörür.
            </p>
            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 tracking-tight">Kiracının Hakları:</h3>
            <ul className="list-disc pl-8 text-gray-600 space-y-2 mb-8">
              <li>Mülkün sözleşmeye uygun şekilde teslim edilmesini isteme hakkı.</li>
              <li>Ayıplı mülkte kira bedelinden indirim talep etme hakkı.</li>
              <li>Sözleşme sonunda depozitosunu tam olarak geri alma hakkı (zarar yoksa).</li>
              <li>TÜFE oranının üzerinde fahiş artışlara itiraz etme hakkı.</li>
            </ul>
            
            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 tracking-tight">Kiraya Verenin Hakları:</h3>
            <ul className="list-disc pl-8 text-gray-600 space-y-2 mb-8">
              <li>Kira bedelinin zamanında ve tam olarak ödenmesini isteme.</li>
              <li>Mülkün özenle kullanılmasını isteme hakkı.</li>
              <li>Önemli bir sebep varsa mülkü denetleme hakkı (önceden haber vermek şartıyla).</li>
              <li>5. yılın sonunda kira tespit davası açma hakkı.</li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Noter Şartı: Gerekli mi?</h2>
            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10">
              <div className="flex items-center mb-4">
                <ShieldAlert className="h-8 w-8 text-accent mr-3" />
                <h4 className="text-xl font-serif font-black text-primary m-0">Önemli Bilgilendirme</h4>
              </div>
              <p className="text-gray-600 m-0">
                Kira sözleşmesinin noter üzerinden yapılması <strong>mecburi değildir</strong>. İmzalar atıldığı andan itibaren sözleşme geçerlidir. 
                Ancak, imzanın taraflara ait olduğunun inkar edilememesi ve tahliye taahhütnamesi gibi belgelerin geçerliliği açısından noter onayı büyük bir güvence sağlar.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Sözleşmesi Örneği ve PDF İndirme</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              İnternetten rastgele indirilen eski tarihli örnekler, değişen kanun maddeleri nedeniyle sizi yanıltabilir. 
              <strong>KiraSözleşmesi.com</strong> olarak biz, en güncel kanun maddelerini içeren, boşluk doldurmalı ve 
              anında PDF çıktı alabileceğiniz ücretsiz bir sistem sunuyoruz.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Sözleşmenizi hazırladıktan sonra:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 font-sans">
              <div className="text-center p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <FileText className="h-8 w-8 text-accent mx-auto mb-4" />
                <span className="block font-bold text-primary">Bilgileri Girin</span>
              </div>
              <div className="text-center p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <Printer className="h-8 w-8 text-accent mx-auto mb-4" />
                <span className="block font-bold text-primary">Önizleme Yapın</span>
              </div>
              <div className="text-center p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <Download className="h-8 w-8 text-accent mx-auto mb-4" />
                <span className="block font-bold text-primary">PDF Olarak İndirin</span>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-8 mb-20 font-sans">
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">Kira sözleşmesinde artış oranı ne kadar olmalı?</h4>
                <p className="text-gray-500">Konutlarda yıllık artış oranı, bir önceki yılın 12 aylık TÜFE ortalamasını geçemez.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">Damga vergisi kim tarafından ödenir?</h4>
                <p className="text-gray-500">Aksi kararlaştırılmadıkça damga vergisi genellikle taraflarca yarı yarıya ödenir veya piyasa teamüllere göre belirlenir.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">E-Devlet üzerinden kira sözleşmesi yapılır mı?</h4>
                <p className="text-gray-500">Evet, 2024 sonu itibarıyla E-Devlet üzerinden dijital kira sözleşmesi hazırlama altyapısı devreye alınmıştır.</p>
              </div>
            </div>

          </article>

          {/* Social Share / Meta */}
          <div className="flex items-center justify-between py-10 border-t border-gray-100 mt-20">
            <div className="flex items-center text-gray-400 text-sm">
              <span className="mr-4">Güncelleme: 03 Mayıs 2026</span>
              <span>Okuma Süresi: 6 Dakika</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-accent transition-colors"><Share2 className="h-5 w-5" /></button>
              <button className="p-2 text-gray-400 hover:text-accent transition-colors"><Printer className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-black text-primary mb-8 underline decoration-accent decoration-4 underline-offset-8">Hemen Profesyonel Sözleşmenizi Hazırlayın</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Hukuki geçerliliği tam, 2026 güncel mevzuatına uygun kira sözleşmenizi ücretsiz oluşturmak için tıklayın.
          </p>
          <Link 
            to="/olustur" 
            className="inline-flex items-center bg-primary text-white px-12 py-6 rounded-[32px] font-black text-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl"
          >
            Sözleşme Oluşturmaya Başla
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
