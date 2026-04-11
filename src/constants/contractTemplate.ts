import { ContractData } from '../types';
import { formatCurrency, formatDate } from '../lib/utils';

export const getContractHTML = (data: ContractData) => {
  const { tenant, landlord, property, rent, specialConditions } = data;

  return `
    <div class="contract-content font-sans text-gray-800 leading-relaxed max-w-4xl mx-auto p-8 bg-white shadow-sm border border-gray-100">
      <h1 class="text-2xl font-bold text-center mb-8 uppercase border-b-2 border-gray-900 pb-4">KİRA SÖZLEŞMESİ</h1>
      
      <section class="mb-8">
        <h2 class="text-lg font-bold mb-4 bg-gray-100 p-2">1. TARAFLAR</h2>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h3 class="font-bold underline mb-2">KİRAYA VEREN</h3>
            <p><strong>Ad Soyad:</strong> ${landlord.fullName || '....................'}</p>
            <p><strong>T.C. Kimlik No:</strong> ${landlord.tcNo || '....................'}</p>
            <p><strong>Adres:</strong> ${landlord.address || '....................'}</p>
            <p><strong>Telefon:</strong> ${landlord.phone || '....................'}</p>
          </div>
          <div>
            <h3 class="font-bold underline mb-2">KİRACI</h3>
            <p><strong>Ad Soyad:</strong> ${tenant.fullName || '....................'}</p>
            <p><strong>T.C. Kimlik No:</strong> ${tenant.tcNo || '....................'}</p>
            <p><strong>Adres:</strong> ${tenant.address || '....................'}</p>
            <p><strong>Telefon:</strong> ${tenant.phone || '....................'}</p>
          </div>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-lg font-bold mb-4 bg-gray-100 p-2">2. KİRALANAN TAŞINMAZIN BİLGİLERİ</h2>
        <p><strong>Adres:</strong> ${property.address || '....................'} ${property.district || ''}/${property.city || ''}</p>
        <p><strong>Brüt m²:</strong> ${property.grossArea || '....'} m²</p>
        <p><strong>Kat/Daire No:</strong> ${property.floor || '....'} / ${property.flatNo || '....'}</p>
        <p><strong>Tapu Bilgisi:</strong> ${property.titleDeedNo || '....................'}</p>
        <p><strong>Isınma Tipi:</strong> ${property.heatingType || '....................'}</p>
      </section>

      <section class="mb-8">
        <h2 class="text-lg font-bold mb-4 bg-gray-100 p-2">3. KİRA BEDELİ VE ÖDEME ŞARTLARI</h2>
        <p><strong>Aylık Kira Bedeli:</strong> ${formatCurrency(rent.monthlyRent)}</p>
        <p><strong>Depozito Bedeli:</strong> ${formatCurrency(rent.deposit)}</p>
        <p><strong>Ödeme Günü:</strong> Her ayın ${rent.paymentDay || '....'}. günü</p>
        <p><strong>Kira Başlangıç Tarihi:</strong> ${formatDate(rent.startDate)}</p>
        <p><strong>Kira Süresi:</strong> ${rent.startDate && rent.endDate ? '1 Yıl' : '....................'}</p>
        <p><strong>IBAN No:</strong> ${rent.iban || '....................'}</p>
      </section>

      <section class="mb-8">
        <h2 class="text-lg font-bold mb-4 bg-gray-100 p-2">4. GENEL ŞARTLAR</h2>
        <ol class="list-decimal ml-6 space-y-2">
          <li>Kiracı, kiralananı özenle kullanmak zorundadır.</li>
          <li>Kiracı, kiralananda mal sahibinin yazılı izni olmadan tadilat yapamaz.</li>
          <li>Kiralanan, sadece konut/işyeri olarak kullanılacak olup, kısmen veya tamamen başkasına devredilemez veya alt kiraya verilemez.</li>
          <li>Kira bedeli, her yıl TÜFE (Tüketici Fiyat Endeksi) oranında artırılacaktır.</li>
          <li>Kiracı, apartman yönetim planına ve komşuluk hukukuna uymakla yükümlüdür.</li>
          <li>Sözleşme bitiminde taşınmaz, teslim alındığı haliyle boş ve temiz olarak teslim edilecektir.</li>
        </ol>
      </section>

      <section class="mb-8">
        <h2 class="text-lg font-bold mb-4 bg-gray-100 p-2">5. ÖZEL ŞARTLAR</h2>
        <ul class="list-disc ml-6 space-y-2">
          ${specialConditions.petProhibited ? '<li>Kiralanan taşınmazda evcil hayvan beslenmesi yasaktır.</li>' : ''}
          ${specialConditions.smokingProhibited ? '<li>Kiralanan taşınmazın kapalı alanlarında sigara içilmesi yasaktır.</li>' : ''}
          ${specialConditions.renovationProhibited ? '<li>Mal sahibinin yazılı onayı olmadan hiçbir şekilde tadilat yapılamaz.</li>' : ''}
          ${specialConditions.duesByTenant ? '<li>Apartman aidatı ve ortak giderler kiracıya aittir.</li>' : ''}
          ${specialConditions.billsByTenant ? '<li>Elektrik, su, doğalgaz ve internet faturaları kiracıya aittir.</li>' : ''}
          ${specialConditions.subleaseProhibited ? '<li>Taşınmazın alt kiraya verilmesi veya devredilmesi kesinlikle yasaktır.</li>' : ''}
          ${specialConditions.additionalText ? `<li>${specialConditions.additionalText}</li>` : ''}
        </ul>
      </section>

      <section class="mt-16">
        <div class="grid grid-cols-2 gap-8 text-center">
          <div>
            <p class="font-bold mb-12">KİRAYA VEREN</p>
            <p class="border-t border-gray-400 pt-2">(İmza)</p>
          </div>
          <div>
            <p class="font-bold mb-12">KİRACI</p>
            <p class="border-t border-gray-400 pt-2">(İmza)</p>
          </div>
        </div>
      </section>
    </div>
  `;
};
