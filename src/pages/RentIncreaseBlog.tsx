import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Calculator, Percent, Gavel, CheckCircle2, ArrowRight, Share2, Printer, TrendingUp, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function RentIncreaseBlog() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.rentIncreaseTitle')}
        description={t('blogPage.rentIncreaseSeoDesc')}
      />

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-accent/5 skew-y-6 transform translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-8"
          >
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">2026 Ekonomi ve Hukuk Rehberi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.rentIncreaseTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            2026 yılında kira artışı nasıl hesaplanır? Yasal TÜFE sınırı, Borçlar Kanunu düzenlemeleri 
            ve ev sahibi-kiracı dengesini koruyan hesaplama yöntemleri.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/2026-kira-artisi-hesaplama" 
              className="bg-accent text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-xl flex items-center group"
            >
              Hemen Hesapla
              <Calculator className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-accent pl-6">
              Kira artış oranları, her yıl milyonlarca kiracı ve ev sahibini doğrudan ilgilendiren en kritik finansal konulardan biridir. 
              2026 yılı, ekonomi yönetiminin enflasyonla mücadele hedefleri ve hukuki düzenlemelerin etkisiyle kira piyasasında yeni bir denge dönemini işaret etmektedir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2026 Kira Artış Oranı Yasal Sınırı Nedir?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Türk Borçlar Kanunu (TBK) madde 344 uyarınca, konut kiralarında tarafların yenilenen kira dönemlerinde uygulanacak kira bedeline ilişkin anlaşmaları, 
              <strong>bir önceki kira yılında tüketici fiyat endeksindeki (TÜFE) oniki aylık ortalamalara göre değişim oranını</strong> geçmemek koşuluyla geçerlidir.
            </p>
            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start">
              <Gavel className="h-10 w-10 text-accent shrink-0 mr-6" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Hukuki Hatırlatma</h4>
                <p className="text-gray-600 m-0">
                  Geçmiş yıllarda uygulanan %25'lik sabit artış sınırı (geçici düzenleme) sona ermiştir. 
                  Yasal üst sınır yeniden TÜFE 12 aylık ortalamasına endekslenmiştir. 2026 yılında yapılacak tüm konut kira artışları bu orana tabidir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Artış Oranı Nasıl Hesaplanır?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kira artışı hesaplanırken baz alınan temel veri, Türkiye İstatistik Kurumu (TÜİK) tarafından her ayın başında açıklanan 
              oniki aylık TÜFE ortalamasıdır. Hesaplama formülü şu şekildedir:
            </p>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center my-10">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Hesaplama Formülü</p>
              <div className="text-2xl md:text-3xl font-serif font-black text-primary leading-tight">
                Yeni Kira = Mevcut Kira + (Mevcut Kira * TÜFE Oranı / 100)
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Adım Adım Hesaplama Rehberi</h2>
            <ol className="space-y-6 text-gray-600 mb-12">
              <li>
                <strong className="text-primary">TÜFE Verisini Kontrol Edin:</strong> Sözleşme yenileme ayınızdan bir önceki ay açıklanan 12 aylık TÜFE ortalamasını öğrenin. 
                (Örneğin; Temmuz'da yenileme yapacaksanız, Temmuz başında haziran verisi olarak açıklanan oranı kullanın).
              </li>
              <li>
                <strong className="text-primary">Oranı Karşılaştırın:</strong> Eğer sözleşmenizde TÜFE'den daha düşük bir oran yazılmışsa (Örn: %10), o oran geçerlidir. 
                Ancak sözleşmede TÜFE'den yüksek bir oran yazılmışsa (Örn: %60 ama TÜFE %50 ise), yasal sınır olan %50 uygulanır.
              </li>
              <li>
                <strong className="text-primary">Matematiksel İşlem:</strong> Mevcut kiranızı yasal oranla çarpıp yüze bölün. Çıkan sonucu eski kiranıza ekleyin.
              </li>
            </ol>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Pratik Hesaplama Örnekleri</h2>
            <div className="space-y-8 my-10">
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="font-serif font-black text-primary mb-4 flex items-center">
                  <span className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary text-sm mr-3">Ex 1</span>
                  Konut Kirası Örneği
                </h4>
                <ul className="space-y-2 text-gray-600 font-sans">
                  <li><strong>Mevcut Kira:</strong> 15.000 TL</li>
                  <li><strong>Yasal TÜFE Oranı:</strong> %45,50</li>
                  <li><strong>Artış Miktarı:</strong> 6.825 TL</li>
                  <li className="text-xl font-bold text-primary mt-4">Yeni Kira: 21.825 TL</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="font-serif font-black text-primary mb-4 flex items-center">
                  <span className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm mr-3">Ex 2</span>
                  Yüksek Mevlalı Kira Örneği
                </h4>
                <ul className="space-y-2 text-gray-600 font-sans">
                  <li><strong>Mevcut Kira:</strong> 40.000 TL</li>
                  <li><strong>Yasal TÜFE Oranı:</strong> %38,20</li>
                  <li><strong>Artış Miktarı:</strong> 15.280 TL</li>
                  <li className="text-xl font-bold text-primary mt-4">Yeni Kira: 55.280 TL</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Kira Artışında Dikkat Edilmesi Gereken Kritik Noktalar</h2>
            <ul className="space-y-4 text-gray-600 mb-12 list-none pl-0">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>5. Yıl Kuralı (Kira Tespit Davası):</strong> Kira sözleşmesinin başlangıcından itibaren 5 yıl geçmişse, ev sahibi sadece TÜFE oranına bağlı kalmadan 'kira tespit davası' açarak kiranın piyasaya göre güncellenmesini isteyebilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Eksik Ödeme Riski:</strong> Kiracının yasal oranın altında, tek taraflı bir ödeme yapması 'eksik ödeme' sayılır ve ev sahibine icra takibi veya tahliye davası hakkı verebilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Ara Zam Yapılamaz:</strong> Sözleşmede aksi belirtilmedikçe (veya taraflar gönüllü olarak anlaşmadıkça), kira artışı sadece yılda bir kez sözleşme yıl dönümünde yapılır.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-10 mb-20 font-sans">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="flex items-center text-lg font-black text-primary mb-4">
                  <Info className="h-5 w-5 text-accent mr-2" />
                  Ev sahibim TÜFE'den fazla zam isteyebilir mi?
                </h4>
                <p className="text-gray-500 m-0 leading-relaxed">
                  Hayır. Borçlar Kanunu emredici bir hükümdür. Ev sahibi yasal TÜFE sınırının üzerinde bir artış talep edemez. Zorla kabul ettirmeye çalışması yasal değildir.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="flex items-center text-lg font-black text-primary mb-4">
                  <Info className="h-5 w-5 text-accent mr-2" />
                  İşyeri kiralarında artış sınırı nedir?
                </h4>
                <p className="text-gray-500 m-0 leading-relaxed">
                  İşyeri kiralarında da üst sınır konutlarda olduğu gibi 12 aylık TÜFE ortalamasıdır. Ancak işyerlerinde taraflar serbestçe daha düşük bir oran belirleyebilirler.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="flex items-center text-lg font-black text-primary mb-4">
                  <Info className="h-5 w-5 text-accent mr-2" />
                  TÜİK verilerini nereden takip etmeliyim?
                </h4>
                <p className="text-gray-500 m-0 leading-relaxed">
                  TÜİK'in resmi web sitesinden veya sitemizdeki güncel hesaplama aracı üzerinden en taze verilere her an ulaşabilirsiniz.
                </p>
              </div>
            </div>

            <div className="text-center py-16 border-y border-gray-100 my-20">
              <h3 className="text-2xl font-serif font-black text-primary mb-6">Hataya Yer Vermeyin</h3>
              <p className="text-gray-500 mb-10">Manuel hesaplamalar hata riski taşır. 2026 güncel verileriyle hazırlanmış aracımızı kullanın.</p>
              <Link 
                to="/2026-kira-artisi-hesaplama" 
                className="inline-flex items-center bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl"
              >
                Kira Artış Hesaplayıcıyı Aç
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

          </article>

          {/* Social Share / Meta */}
          <div className="flex items-center justify-between py-10 border-t border-gray-100 mt-20">
            <div className="flex items-center text-gray-400 text-sm">
              <span className="mr-4">Güncelleme: 05 Mayıs 2026</span>
              <span>Okuma Süresi: 7 Dakika</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-accent transition-colors"><Share2 className="h-5 w-5" /></button>
              <button className="p-2 text-gray-400 hover:text-accent transition-colors"><Printer className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-serif font-black mb-8">Kira Sözleşmenizi Yenilemeye mi Hazırlanıyorsunuz?</h2>
          <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
            Hukuki geçerliliği tam, yeni kira bedelinizi içeren güncel kira sözleşmenizi saniyeler içinde oluşturabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/olustur" 
              className="bg-accent text-primary px-12 py-5 rounded-[32px] font-black text-xl hover:bg-white transition-all shadow-2xl w-full sm:w-auto"
            >
              Sözleşme Oluştur
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
