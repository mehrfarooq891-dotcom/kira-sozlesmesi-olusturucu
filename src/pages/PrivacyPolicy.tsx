import { ShieldCheck, Lock, EyeOff, ServerOff } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Gizlilik Politikası ve KVKK</h1>
          <p className="text-xl text-gray-600">Verilerinizin güvenliği bizim için en öncelikli konudur.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
            <ServerOff className="h-10 w-10 text-[#1e3a5f] mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sunucu Kaydı Yok</h3>
            <p className="text-gray-600 leading-relaxed">
              Forma girdiğiniz hiçbir bilgi sunucularımıza iletilmez veya veritabanımızda saklanmaz. Tüm veri işleme süreçleri tarayıcınızda (client-side) gerçekleşir.
            </p>
          </div>
          <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
            <Lock className="h-10 w-10 text-green-700 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Uçtan Uca Güvenlik</h3>
            <p className="text-gray-600 leading-relaxed">
              PDF oluşturma işlemi tamamen cihazınızda yapıldığı için verileriniz internet üzerinden transfer edilmez, çalınma riski minimize edilir.
            </p>
          </div>
        </div>

        <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Veri Sorumlusu</h2>
            <p>
              Kira Sözleşmesi Oluşturucu ("Platform"), kullanıcıların kişisel verilerini toplamayan bir araçtır. 
              Platform, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında "Veri İşleyen" sıfatına dahi sahip değildir, 
              çünkü veriler Platform'un kontrolündeki hiçbir sisteme ulaşmamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. İşlenen Veriler</h2>
            <p>
              Platform üzerindeki formlarda girilen; Ad-Soyad, T.C. Kimlik No, Adres, Telefon, IBAN gibi bilgiler sadece PDF dosyasının oluşturulması amacıyla 
              geçici olarak tarayıcı hafızasında tutulur. Sayfa kapatıldığında veya yenilendiğinde bu veriler kalıcı olarak silinir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Çerezler (Cookies)</h2>
            <p>
              Platform, kullanıcı deneyimini iyileştirmek için sadece teknik zorunluluğu olan çerezleri kullanabilir. 
              Reklam veya takip amaçlı üçüncü taraf çerezleri kullanılmamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
