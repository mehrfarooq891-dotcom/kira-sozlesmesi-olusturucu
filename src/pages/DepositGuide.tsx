import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Wallet, Landmark, Info, CheckCircle2, ArrowRight, Share2, Printer, Lock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function DepositGuide() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.depositTitle')}
        description={t('blogPage.depositSeoDesc')}
      />

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-8"
          >
            <ShieldCheck className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">2026 Kiracı Hakları Serisi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8"
          >
            {t('blogPage.depositTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Kira sözleşmelerinde en çok uyuşmazlık yaşanan konulardan biri olan depozito (güvence bedeli) hakkında her şey. 
            Yasal üst sınır, bankaya yatırma zorunluluğu ve geri alma süreci.
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-600 font-serif italic mb-12 border-l-4 border-accent pl-6">
              Depozito, hukuki adıyla 'güvence bedeli', kiralama süreci başlarken kiracının, mülke verebileceği olası zararlar veya ödenmemiş borçlar için 
              ev sahibine verdiği bir teminattır. Ancak bu teminat, ev sahibinin keyfi olarak belirleyebileceği veya dilediği gibi harcayabileceği bir para değildir.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Depozito Ne Kadar Olabilir? Yasal Üst Sınır</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Türkiye'de kira hukuku, Türk Borçlar Kanunu (TBK) ile sıkı kurallara bağlanmıştır. <strong>Depozito ne kadar</strong> sorusunun cevabı 
              TBK'nın 342. maddesinde açıkça belirtilmiştir:
            </p>
            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-center justify-center text-center">
              <div>
                <p className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-2">Yasal Sınır</p>
                <div className="text-3xl md:text-5xl font-serif font-black text-primary">
                  En Fazla 3 Aylık Kira
                </div>
                <p className="text-gray-500 mt-4 max-w-md mx-auto">
                  Ev sahibi, kiracıdan 3 aylık kira bedelinden daha fazla depozito talep edemez. Bu kural emredicidir ve sözleşmeye aksine madde konulsa bile geçersizdir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Depozito Nereye Yatırılmalı? Banka Hesabı Zorunluluğu</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pek çok kişinin bilmediği en kritik yasal detay, depozitonun teslim edilme şeklidir. Kanuna göre depozito doğrudan ev sahibinin eline verilmez 
              veya normal hesabına havale edilmez.
            </p>
            <ul className="space-y-4 text-gray-600 mb-8 list-none pl-0">
              <li className="flex items-start">
                <Landmark className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Vadeli Tasarruf Hesabı:</strong> Para, bir bankada her iki tarafın da adı geçecek şekilde ve bir 'vadeli tasarruf hesabına' yatırılmalıdır.</span>
              </li>
              <li className="flex items-start">
                <Lock className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>İki Tarafın Onayı:</strong> Banka, bu parayı ancak iki tarafın ortak onayıyla veya kesinleşmiş bir mahkeme kararı/icra takibiyle geri verebilir.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Depozito İade Şartları: Parayı Nasıl Geri Alırsınız?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kira sözleşmesi sona erdiğinde en büyük gerginlik depozito iadesinde yaşanır. İşte haklarınızı korumak için izlemeniz gereken yol:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="font-black text-primary mb-3">1. Olağan Kullanım Zarar Değildir</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Zamanla oluşan boya solması, mobilya izleri gibi 'olağan yıpranmalar' için depozitodan kesinti yapılamaz. Kesinti ancak 'hor kullanma' (kırık kapı, delik duvar vb.) durumunda mümkündür.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="font-black text-primary mb-3">2. Borç Kontrolü</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Ödenmemiş aidat, fatura veya kira borcu varsa ev sahibi bu miktarları depozitodan mahsup edebilir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Ev Sahibi Depozitoyu Geri Vermezse Ne Yapılmalı?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Eğer ev sahibi haklı bir gerekçe (hasar veya borç) göstermeden parayı iade etmiyorsa, kiracı şu yollara başvurabilir:
            </p>
            <ol className="list-decimal pl-8 text-gray-600 space-y-4 mb-12">
              <li><strong>İhtarname Çekin:</strong> Noter aracılığıyla ev sahibine bir ihtarname göndererek depozitonun makul bir sürede (Genellikle 7-14 gün) iadesini isteyin.</li>
              <li><strong>İlamsız İcra Takibi:</strong> Paranın iadesi için icra müdürlüğüne başvurarak takip başlatabilirsiniz.</li>
              <li><strong>Dava Yolu:</strong> Miktar büyükse veya itiraz ediliyorsa Sulh Hukuk Mahkemesi'nde dava açılabilir.</li>
            </ol>

            <div className="bg-accent/10 border-l-8 border-accent p-8 my-12 rounded-r-3xl">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-primary mr-2" />
                <h4 className="text-xl font-serif font-black text-primary m-0">Kritik İpucu: Teslim Tutanağı</h4>
              </div>
              <p className="text-gray-600 m-0">
                Evi tutarken ve boşaltırken mutlaka <strong>fotoğraf çekin</strong> ve mümkünse bir 'teslim tutanağı' imzalayın. 
                Hangi musluğun bozuk olduğu, duvarın hangi kısmının boyalı olduğu bu tutanakta yazılı olursa, depozito iadesinde kimse haksız iddiada bulunamaz.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Depozito Konusunda Kiracı Hakları Özet Tablosu</h2>
            <div className="overflow-x-auto my-10">
              <table className="w-full text-left border-collapse font-sans">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-xl">Konu</th>
                    <th className="p-4 rounded-tr-xl">Yasal Durum</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold">Maksimum Tutar</td>
                    <td className="p-4">3 Aylık Kira</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold">Saklama Şekli</td>
                    <td className="p-4">Bankada Ortak Hesap</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold">Faiz/Getiri</td>
                    <td className="p-4">Kiracıya aittir</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold">Geri Ödeme Süresi</td>
                    <td className="p-4">Boşaltıldıktan sonra (Şartlar sağlanmışsa)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-100 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary">Depozito son ayın kirası yerine sayılır mı?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-500 leading-relaxed uppercase text-xs font-bold tracking-widest text-accent mb-2">Hukuki Cevap</p>
                <p className="text-gray-600">
                  Hayır. Hukuki olarak depozito bir kira ödemesi değildir, bir 'güvence'dir. Kiracı kirasını ödemekle yükümlüdür. 
                  Ancak taraflar karşılıklı anlaşırsa bu şekilde mahsup edilebilir.
                </p>
              </details>

              <details className="group border border-gray-100 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary">Ev sahibi depozitoyu döviz olarak isteyebilir mi?</h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Evet, taraflar depozitonun döviz (Dolar, Euro vb.) olarak yatırılmasına karar verebilir. 
                  Bu durumda iade edilirken de aynı döviz cinsi üzerinden iade yapılması hakkaniyet gereğidir.
                </p>
              </details>
            </div>

            <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-gray-100 text-center mb-20">
              <Wallet className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-serif font-black text-primary mb-4">Sözleşmenize Depozito Maddesini Doğru Ekleyin</h3>
              <p className="text-gray-500 mb-10 max-w-xl mx-auto">
                KiraSözleşmesi.com ile hazırlayacağınız kontratlarda depozito miktarı ve saklama koşulları yasal mevzuata uygun şekilde otomatik olarak düzenlenir. 
                Hatasız bir sözleşme için aracımızı kullanabilirsiniz.
              </p>
              <Link 
                to="/olustur" 
                className="inline-flex items-center bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl"
              >
                Ücretsiz Sözleşme Hazırla
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 06 Mayıs 2026</span>
              <span className="mx-4">•</span>
              <span>Yazar: Elif Şahin</span>
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
          <h2 className="text-3xl font-serif font-black text-primary mb-12 text-center">Diğer Rehberler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/kira-sozlesmesi-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesi Nasıl Yazılır? 2026 Güncel Rehber</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Zorunlu maddeler, tarafların yasal hakları ve dikkat edilmesi gereken kritik noktalar...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/2026-kira-artis-orani-rehberi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Artış Oranı 2026 — TÜFE'ye Göre Hesaplama</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira artışınızı yasalara uygun şekilde nasıl hesaplarsınız? TÜFE verileri ve pratik örnekler...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
