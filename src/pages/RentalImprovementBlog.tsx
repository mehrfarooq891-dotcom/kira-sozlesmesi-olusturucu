import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Scale, FileText, CheckCircle2, ArrowRight, Share2, Printer, ShieldCheck, AlertCircle, ClipboardCopy, HelpCircle, Key, Home, Coins, Hammer, Paintbrush, FileCheck, CheckSquare, Wrench } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function RentalImprovementBlog() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Kopyalanabilir Tadilat ve Masraf Paylaşım Protokolü
  const protocolTemplate = `TADİLAT VE GİDER PAYLAŞIMI EK PROTOKOLÜ

İmza Tarihi    : ... / ... / 2026
Mülk Sahibi    : [Ev Sahibinin Adı Soyadı] (T.C. No: .......................)
Kiracı         : [Kiracının Adı Soyadı]    (T.C. No: .......................)
Taşınmaz Adresi: [Kiralanan Taşınmazın Açık Adresi]

İşbu protokol, taraflar arasında akdedilmiş olan [Kira Başlangıç Tarihi] tarihli kira sözleşmesine ek ve onun ayrılmaz bir parçası olarak tanzim edilmiştir.

1. TADİLATIN KAPSAMI VE İZNİ
Mülk sahibi, kiracıya kiralama konusu taşınmaz içerisinde aşağıda listelenen tadilat ve onarım işlemlerini gerçekleştirmesi için tam yazılı onay vermiştir:
- [Örn: Mutfak dolaplarının yenilenmesi]
- [Örn: Banyo su tesisatının bakımı ve armatür değişimi]
- [Örn: Salon ve odaların su bazlı boyayla boyanması]

2. MASRAF PAYLAŞIMI VE ÖDEME ŞEKLİ
Yapılacak olan yukarıdaki tadilatların toplam maliyetinin ve işçilik masraflarının paylaşımı şu şekilde kararlaştırılmıştır:
a) Faydalı ve zorunlu nitelikteki tesisat onarımı ve dolap yenileme gideri olan toplam [.........] TL, Mülk Sahibi tarafından karşılanacaktır.
b) Söz konusu tutar, Kiracı tarafından faturalar karşılığında belgelenmek kaydıyla, [Kira Dönemi / Örn: 2026 Yılı Temmuz ila Eylül Dönemleri] aylık kira bedellerinden her ay eşit taksitlerle ([.........] TL'lik indirimler şeklinde) takas ve mahsup edilecektir.
c) Keyfi ve lüks tasarımsal değişiklikler kapsamındaki diğer masraflar tamamen Kiracı'ya ait olup, Mülk Sahibi'nden herhangi bir talepte bulunulmayacaktır.

3. SÖZLEŞME SONU DURUMU
Kira sözleşmesinin son bulması durumunda, yapılmış olan tüm faydalı yenilik ve tadilatlar taşınmazda kalacak; Kiracı mülk sahibinden söküp alma talebinde bulunmayacak ve mülk sahibi de eski hale getirme talebinden feragat edecektir. Ancak lüks dekorasyonların sökülebilir kısımları, mülke kalıcı zarar verilmemek kaydıyla Kiracı tarafından tahliye esnasında geri alınabilir.

İşbu 3 maddeden oluşan ek protokol, iki orijinal nüsha olarak hazırlanmış ve taraflarca hür iradeleri ile imza altına alınmıştır.

MÜLK SAHİBİ                             KİRACI
[Adı Soyadı]                            [Adı Soyadı]
İmza                                    İmza`;

  const handleCopy = () => {
    navigator.clipboard.writeText(protocolTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
        title={t('blogPage.rentalImprovementTitle')}
        description={t('blogPage.rentalImprovementSeoDesc')}
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
            <Hammer className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Mevzuat ve Giderler</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8 text-white"
          >
            Kiralık Evde Tadilat — Kim Öder? Yasal Düzenleme
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Kiracı ile ev sahibi arasındaki en büyük anlaşmazlık noktalarından biri olan kiralık ev tadilat giderlerinde yasal mevzuat, masraf paylaşım detayları ve sözleşme kuralları.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg lg:prose-xl prose-primary max-w-none">
            
            <p className="lead text-2xl text-gray-650 font-serif italic mb-12 border-l-4 border-accent pl-6 leading-relaxed">
              Ev kiralamak sadece uygun bir bütçe ve lokasyon bulmaktan ibaret değildir; aynı zamanda taşınma öncesinde veya kiralama süresince mülkte ortaya çıkabilecek fiziksel gereksinimlerin yönetilmesini de kapsar. 
              Kiralık bir evde yaşarken karşılaşılan banyo su sızıntıları, eskiyen kombi arızaları, dökülen mutfak tezgâhları ya da tamamen kişisel zevke göre yapılmak istenen modern dekorasyonlar sıkça uyuşmazlıklara yol açar. 
              Peki, **kiralık ev tadilat** masrafları yasal olarak kime aittir? Türk Borçlar Kanunu bu hususta kiracıya ve ev sahibine hangi sorumlulukları yüklemektedir? 
              Hangi masraflar kirada indirim konusu yapılabilir, hangileri için ev sahibinden yazılı izin alınması şarttır? 
              Bu detaylı rehberimizde kiralık konutlarda tadilat ve onarım süreçlerinin yasal altyapısını, masraf paylaşım kurallarını inceleyecek ve her iki tarafı güvenceye alacak örnek protokol taslağımızı paylaşacağız.
            </p>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">1. Yasal Temel: Türk Borçlar Kanunu Ne Diyor?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kiralık mülklerdeki tadilatların hukuki temelini Türk Borçlar Kanunu (TBK) belirlemektedir. 
              TBK Madde 301 uyarınca, kiraya veren (ev sahibi), **"kiralananı sözleşmede amaçlanan kullanıma elverişli bir durumda teslim etmek ve sözleşme süresince bu durumda bulundurmakla"** yükümlüdür. 
              Bu temel kural, mülkün yapısal kalitesini doğrudan ilgilendiren tüm esaslı onarımların ve binanın yıpranmadan kaynaklanan eksikliklerinin ev sahibi tarafından karşılanması gerektiğini açıkça ortaya koyar.
            </p>
            <p className="text-gray-655 leading-relaxed mb-6">
              Buna karşılık, TBK Madde 317 ise kiracının sorumluluk sınırını tanımlar: **"Kiracı, kiralananın olağan kullanımı için gerekli temizlik ve bakım giderlerini ödemekle yükümlüdür."** 
              Dolayısıyla, kiralama esnasında ortaya çıkan tüm tadilat taleplerini iki ana kategoriye ayırarak incelemek en sağlıklı hukuki yaklaşım olacaktır: **Zorunlu Giderler** ve **Lüks/Keyfi Giderler**.
            </p>

            <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 my-10 flex items-start font-sans">
              <Wrench className="h-10 w-10 text-accent shrink-0 mr-6 mt-1" />
              <div>
                <h4 className="text-xl font-serif font-black text-primary mb-2">Zorunlu vs. Olağan Kullanım Ayrımı</h4>
                <p className="text-gray-650 m-0 leading-relaxed text-sm">
                  Kırılan bir kapı kilidi, bozulan lamba ampulü, sigorta gevşemesi veya tıkalı lavabonun açılması gibi küçük çaplı giderler "olağan kullanım" kapsamına girer ve mülkü kullanan kiracı tarafından ödenir. 
                  Ancak çatı akması, dış cephe izolasyonu, kombinin ömrünü tamamlaması nedeniyle tamamen değiştirilmesi veya ana su borularında meydana gelen patlamalar "zorunlu yapısal gider" olup faturası mülk sahibine aittir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">2. Tadilat Giderlerinde Kim Hangi Masraftan Sorumludur?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Uygulamada en çok karşılaşılan **kiralık ev tadilat** kalemlerini yasal sorumlulukları açısından şu gruplara ayırabiliriz:
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">A) Tamamen Ev Sahibine Ait Olan Başlıca Masraflar</h3>
            <ul className="space-y-4 text-gray-655 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1 mr-3" />
                <span><strong>Isınma ve Tesisat Sistemleri:</strong> Kombi yenilenmesi, kalorifer peteklerindeki kalıcı tıkanıklıkların giderilmesi, ana su vanalarının ve bina içi boru patlaklarının onarımı.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1 mr-3" />
                <span><strong>Yapısal Kusurlar:</strong> Çatının akması sonucu daireye sızan sular, pencerelerden gelen rüzgarı kesmek için marangoz tamirleri veya pencerelerin ömrünü yitirmiş olması halinde değiştirilmesi.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1 mr-3" />
                <span><strong>Bina Ortak Alan Demirbaş Giderleri:</strong> Asansör motor değişimi, dış cephe mantolaması, apartman ana giriş kapısı yenilenmesi veya hidrofor sistemi arızaları. (Bu ödemeler apartman yönetimince talep edildiğinde kiracı faturayı ödeyebilir ancak ödediği tutarı doğrudan kira bedelinden düşme hakkına sahiptir).</span>
              </li>
            </ul>

            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4">B) Tamamen Kiracıya Ait Olan Başlıca Masraflar</h3>
            <ul className="space-y-4 text-gray-655 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckSquare className="h-5 w-5 text-red-500 shrink-0 mt-1 mr-3" />
                <span><strong>Temizlik ve Kozmetik Yenilemeler:</strong> Duvarların kirlenmesiyle oluşan rutin boya badana yenilemesi, stor perde ve jaluzi montajları, kişisel zevke uygun duvar kâğıdı kaplamaları.</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="h-5 w-5 text-red-500 shrink-0 mt-1 mr-3" />
                <span><strong>Küçük Çaplı Aşınmalar:</strong> Musluk bataryalarındaki sızdıran contaların değişimi, kapı kollarındaki gevşemeler, kırılan banyo askılıkları veya elektrik prizlerinin değiştirilmesi.</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="h-5 w-5 text-red-500 shrink-0 mt-1 mr-3" />
                <span><strong>Kiracının Kusurundan Kaynaklanan Hasarlar:</strong> Pencere camının kırılması, parkelerin üzerine su dökülmesi sonucu şişmesi, evcil hayvanların kapılara veya duvarlara verdiği fiziksel zararlar.</span>
              </li>
            </ul>

            <div className="bg-yellow-500/10 p-8 rounded-3xl border-l-8 border-yellow-500 my-10 font-sans">
              <h4 className="font-black text-primary text-lg mb-3 flex items-center font-serif">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                Yazılı İzin Şartı ve Eski Hale Getirme Riski
              </h4>
              <p className="text-sm text-gray-750 leading-relaxed m-0">
                Türk Borçlar Kanunu Madde 321 uyarınca kiracı, ev sahibinin **yazılı rızasını almadıkça** mülkte hiçbir yenilik veya dekoratif değişiklik yapamaz. 
                Yazılı izin olmaksızın yapılan tadilatlarda mülk sahibi, kira sözleşmesi bittiğinde kiracıdan evi teslim aldığı günkü gibi **"eski haline getirmesini"** (örneğin örülen bir duvarı yıkarak eski haline çevirmesini veya sökülen dolapları tekrar monte etmesini) talep edebilir.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6 text-serif">Tadilat Türü ve Masraf Sorumluluk Tablosu</h2>
            <div className="overflow-x-auto my-10 font-sans text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 rounded-tl-2xl">Tadilatın Konusu</th>
                    <th className="p-4">Hukuki Nitelik</th>
                    <th className="p-4">Masrafı Kim Öder?</th>
                    <th className="p-4 rounded-tr-2xl">Yazılı İzin Şartı</th>
                  </tr>
                </thead>
                <tbody className="text-gray-655">
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Kombi ve Kalorifer Değişimi</td>
                    <td className="p-4 text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 rounded-xl px-2.5 py-1">Yapısal & Demirbaş</td>
                    <td className="p-4 text-green-700 font-bold">Mülk Sahibi</td>
                    <td className="p-4 font-semibold text-red-500">Gerekli Değil (İhbar Yeterli)</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Rutubet ve Sıva Çürümesi Tamiri</td>
                    <td className="p-4 text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 rounded-xl px-2.5 py-1">Zorunlu Ayıp Onarımı</td>
                    <td className="p-4 text-green-700 font-bold">Mülk Sahibi</td>
                    <td className="p-4 font-semibold text-red-500">Gerekli Değil</td>
                  </tr>
                  <tr className="border-b border-gray-150">
                    <td className="p-4 font-bold text-primary">Mutfak Tezgâhı & Dolap Değişimi</td>
                    <td className="p-4 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-xl px-2.5 py-1">Faydalı Yenilik</td>
                    <td className="p-4 text-accent font-black">Anlaşmaya Bağlı (Protokol)</td>
                    <td className="p-4 font-semibold text-green-600">Kesinlikle Zorunlu</td>
                  </tr>
                  <tr className="border-b border-gray-150 bg-gray-50/50">
                    <td className="p-4 font-bold text-primary">Özel Duvar Kâğıdı & Spot Aydınlatma</td>
                    <td className="p-4 text-xs font-semibold uppercase tracking-wider text-gray-700 bg-gray-150 rounded-xl px-2.5 py-1">Lüks / Dekoratif</td>
                    <td className="p-4 text-red-600 font-bold">Kiracı</td>
                    <td className="p-4 font-semibold text-green-600">Kesinlikle Zorunlu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">3. Kiralık Evde Tadilat Masrafları Kiradan Nasıl Düşülür?</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Mülk sahasındaki ağır tadilat onarımlarının doğrudan kira bedelinden kesilmesi en sık uygulanan pratik çözümlerden biridir. 
              Ancak hiçbir kiracı, ev sahibine haber vermeden ve onayını almadan, kendi kafasına göre yaptırdığı tadilatın faturasını kira bedelinden tek taraflı olarak **düşemez**.
            </p>
            <p className="text-gray-650 leading-relaxed mb-6">
              Bunun yasal ve güvenli yolu şu adımlardan geçer:
            </p>

            <ul className="space-y-4 text-gray-650 mb-12 list-none pl-0 font-sans text-base">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Yazılı ve Fotoğraflı İhbar:</strong> Sorun veya yenilik talebi mülk sahibine yazılı olarak (WhatsApp, e-posta veya ihtarname ile) önceden bildirilmelidir. Örneğin akan banyonun fotoğrafları ve tahmini tamir bütçesi paylaşılmalıdır.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Süre Vermek:</strong> Zorunlu tamiratlar için mülk sahibine makul bir süre tanınmalıdır. Mülk sahibi bu sürede usta yönlendirmezse, kiracı tadilatı kendisi yaptırabilir.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 mr-4" />
                <span><strong>Fatura ve Mahsup Protokolü:</strong> İşlemler tamamlandıktan sonra usta faturası/fişi mülk sahibine iletilerek, bir sonraki ayın kirasından indirim (mahsup) yapılacak tutar yazılı olarak kararlaştırılmalıdır.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">4. Kira Sözleşmesinde Tadilat Maddesinin Önemi</h2>
            <p className="text-gray-650 leading-relaxed mb-6">
              Kiralık ev tadilat uyuşmazlıklarının en kesin koruyucu kalkanı, henüz kiralama başlangıcında sözleşmeye eklenecek özel ve net klozlar tanzim etmektir. 
              Sözleşmede tadilat sınırlarının baştan çizilmesi, ileride tarafların mahkemelik olmasının önüne geçer.
            </p>

            <p className="text-gray-650 leading-relaxed mb-6">
              <strong>Örnek Sözleşme Tadilat Maddesi:</strong> <br />
              <span className="italic block bg-gray-50 p-6 rounded-3xl border border-gray-150 my-4 text-sm font-sans leading-relaxed text-gray-700">
                "Kiracı, kiralayanın yazılı izni olmadıkça kiralananda hiçbir esaslı tadilat, boya değişimi veya yapısal yenilik yapamaz. 
                Yazılı onay alınmak suretiyle yapılacak olan faydalı ve gerekli tadilatların (kombi, sıhhi tesisat yenilemesi vb.) maliyetleri, fatura ibrazı ile kanıtlanarak kiradan eşit taksitlerle mahsup edilecektir. 
                Yapılan tüm kalıcı tadilatlar tahliye durumunda taşınmazda bırakılacak olup, kiracı mülkü eski haline getirmekle mükellef tutulmayacaktır."
              </span>
            </p>

            {/* Kopyalanabilir Ek Protokol Paneli */}
            <h3 className="text-2xl font-serif font-black text-primary mt-10 mb-4 font-serif">Kopyalanabilir Tadilat ve Masraf Paylaşım Protokolü</h3>
            <p className="text-gray-655 leading-relaxed mb-4">
              Kiraladığınız veya kiraya verdiğiniz konutta yapılacak yeniliklerin masraf paylaşımını, teslimat koşullarını ve kiradan düşme şartlarını güvenceye almak için Yargıtay standartlarında hazırladığımız onaylı ek protokol taslağını ücretsiz kopyalayabilirsiniz:
            </p>

            <div className="bg-gray-100 hover:bg-gray-200/40 transition-colors p-8 rounded-[40px] border border-gray-200 my-10 font-mono text-sm relative">
              <button 
                onClick={handleCopy}
                className="absolute top-6 right-6 flex items-center bg-primary text-white hover:bg-black font-sans font-bold text-xs py-2 px-4 rounded-xl shadow transition-colors"
              >
                <ClipboardCopy className="h-4 w-4 mr-2" />
                {copied ? "Kopyalandı!" : "Metni Kopyala"}
              </button>
              <pre className="whitespace-pre-wrap overflow-x-auto text-gray-750 font-mono leading-relaxed max-h-[350px]">
                {protocolTemplate}
              </pre>
            </div>

            <div className="bg-primary p-12 rounded-[50px] text-white text-center relative overflow-hidden mb-20 shadow-2xl font-sans">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <FileCheck className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-black text-white mb-4">Kira Sözleşmenizi Yasal Standartlarda Hazırlayın</h3>
                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                  2026 yılı güncel kiracı ve kiraya veren hakları, tadilat klozları ve Borçlar Kanunu standartlarına tam uyumlu profesyonel kira sözleşmesini dakikalar içinde hazırlayın.
                </p>
                <Link 
                  to="/olustur" 
                  className="inline-flex items-center bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl text-md"
                >
                  Şimdi Yasal Sözleşme Üret
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-black text-primary mt-16 mb-6">Sıkça Sorulan Sorular (SSS)</h2>
            <div className="space-y-6 mb-20 font-sans">
              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Kombinin arızalanması ve yenilenmesi durumunda faturayı kim öder?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Kombi, binalardaki kalıcı ısınma ve sıcak su demirbaşıdır. Olağan bakım ve filtre temizliği kiracıya ait olsa da kombinin ömrünü yitirmesi, kart veya motor arızaları gibi esaslı onarımlar ve kombinin tamamen yenilenmesi masrafı **%100 oranında ev sahibine** aittir. Kiracı kombiyi değiştirip faturayı ev sahibine ibraz ederek kiradan düşebilir.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Ev sahibinden izin almadan yapılan tadilatların tahliye anında sökülmesi zorunlu mudur?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Evet. Eğer ev sahibinin yazılı rızası olmadan mülkte kalıcı değişiklikler yaptıysanız, ev sahibi daireyi teslim alırken eski haline iade edilmesini talep edebilir. Bu durumda kiracı yıktığı duvarı örmek, değiştiği dolapları eski haline getirmek veya oluşan hasarı onarmakla hukuken yükümlüdür.
                </p>
              </details>

              <details className="group border border-gray-150 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-gray-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-primary m-0 flex items-center">
                    <HelpCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                    Tadilat masraflarının kiradan düşülmesi için faturanın kiracı adına kesilmesi sorun oluşturur mu?
                  </h4>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180 text-accent">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-650 text-sm leading-relaxed">
                  Faturanın doğrudan kiracı adına kesilmesi ve ödemenin kiracı tarafından tevsik edilmesi yasal açıdan engel değildir; ancak faturanın açıklama kısmına "Mülk adresindeki [Örn: Kombi Montaj Bedeli]" şeklinde açık ibarenin yazılması ve faturanın aslı veya fotokopisinin ev sahibine imzalı şekilde teslim edilmesi ispat kolaylığı açısından şarttır.
                </p>
              </details>
            </div>

          </article>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-gray-100 mt-20 text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span>Son Güncelleme: 5 Haziran 2026</span>
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
            <Link to="/ev-sahibi-haklari-2026" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Ev Sahibinin Hakları 2026</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Ev sahibi hakları 2026 yılı güncel rehberi. Kira artış hakları, yasal tahliye şartları, mülk kullanımı...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/kira-sozlesmesiz-oturmak-riskli-mi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Kira Sözleşmesiz Oturmak</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kira sözleşmesi tanzim etmeden bir gayrimenkulde yaşamanın getireceği yasal riskler, ispat zorlukları ve tehlikeler...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link to="/ortak-kiraci-sozlesmesi" className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-accent transition-colors">Ortak Kiracı Sözleşmesi</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Birden fazla kiracı içeren kontratların yasal boyutu, müteselsil borçluluk, ev arkadaşı sözleşmesi kuralları...</p>
              <span className="text-accent font-bold flex items-center">Devamını Oku <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
