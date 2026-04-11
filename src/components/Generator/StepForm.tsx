import { useTranslation } from 'react-i18next';
import { ContractData, PersonInfo, PropertyInfo, RentInfo, SpecialConditions } from '../../types';
import { cn } from '../../lib/utils';

interface StepFormProps {
  step: number;
  data: ContractData;
  updateData: (section: keyof ContractData, field: string, value: any) => void;
}

export default function StepForm({ step, data, updateData }: StepFormProps) {
  const { t } = useTranslation();

  const validateField = (section: keyof ContractData, field: string, value: any) => {
    if (!value) return t('form.validation.required');
    if (field === 'tcNo' && value.length !== 11) return t('form.validation.tc');
    if (field === 'email' && !value.includes('@')) return t('form.validation.email');
    return null;
  };

  const renderInput = (section: keyof ContractData, field: string, label: string, type: string = 'text', placeholder: string = '') => {
    const value = (data[section] as any)[field];
    const error = validateField(section, field, value);

    return (
      <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-700">{label}</label>
        <input
          type={type}
          value={value}
          onChange={(e) => updateData(section, field, e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full px-4 py-3.5 rounded-xl border transition-all outline-none text-gray-900 font-medium",
            error ? "border-red-200 bg-red-50/30 focus:border-red-400" : "border-gray-200 focus:border-[#1e3a5f] focus:ring-4 focus:ring-blue-50"
          )}
        />
        {error && <p className="text-xs font-bold text-red-500 mt-1">{error}</p>}
      </div>
    );
  };

  const renderCheckbox = (field: keyof SpecialConditions, label: string) => (
    <label className="flex items-center space-x-3 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
      <input
        type="checkbox"
        checked={data.specialConditions[field] as boolean}
        onChange={(e) => updateData('specialConditions', field, e.target.checked)}
        className="h-5 w-5 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
      />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </label>
  );

  switch (step) {
    case 1:
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderInput('tenant', 'fullName', t('form.fields.fullName'), 'text', t('form.fields.fullNamePlaceholder'))}
          {renderInput('tenant', 'tcNo', t('form.fields.tcNo'), 'text', t('form.fields.tcNoPlaceholder'))}
          {renderInput('tenant', 'birthDate', t('form.fields.birthDate'), 'date')}
          {renderInput('tenant', 'phone', t('form.fields.phone'), 'tel', t('form.fields.phonePlaceholder'))}
          {renderInput('tenant', 'email', t('form.fields.email'), 'email', t('form.fields.emailPlaceholder'))}
          <div className="md:col-span-2">
            {renderInput('tenant', 'address', t('form.fields.address'), 'text', t('form.fields.addressPlaceholder'))}
          </div>
        </div>
      );
    case 2:
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderInput('landlord', 'fullName', t('form.fields.fullName'), 'text', t('form.fields.fullNamePlaceholder'))}
          {renderInput('landlord', 'tcNo', t('form.fields.tcNo'), 'text', t('form.fields.tcNoPlaceholder'))}
          {renderInput('landlord', 'birthDate', t('form.fields.birthDate'), 'date')}
          {renderInput('landlord', 'phone', t('form.fields.phone'), 'tel', t('form.fields.phonePlaceholder'))}
          {renderInput('landlord', 'email', t('form.fields.email'), 'email', t('form.fields.emailPlaceholder'))}
          <div className="md:col-span-2">
            {renderInput('landlord', 'address', t('form.fields.address'), 'text', t('form.fields.addressPlaceholder'))}
          </div>
        </div>
      );
    case 3:
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            {renderInput('property', 'address', t('form.fields.propertyAddress'), 'text', t('form.fields.propertyAddressPlaceholder'))}
          </div>
          {renderInput('property', 'city', t('form.fields.city'), 'text', t('form.fields.cityPlaceholder'))}
          {renderInput('property', 'district', t('form.fields.district'), 'text', t('form.fields.districtPlaceholder'))}
          {renderInput('property', 'grossArea', t('form.fields.grossArea'), 'number', t('form.fields.grossAreaPlaceholder'))}
          {renderInput('property', 'floor', t('form.fields.floor'), 'text', t('form.fields.floorPlaceholder'))}
          {renderInput('property', 'flatNo', t('form.fields.flatNo'), 'text', t('form.fields.flatNoPlaceholder'))}
          {renderInput('property', 'titleDeedNo', t('form.fields.titleDeedNo'), 'text', t('form.fields.titleDeedNoPlaceholder'))}
          {renderInput('property', 'heatingType', t('form.fields.heatingType'), 'text', t('form.fields.heatingTypePlaceholder'))}
        </div>
      );
    case 4:
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderInput('rent', 'monthlyRent', t('form.fields.monthlyRent'), 'number', t('form.fields.monthlyRentPlaceholder'))}
          {renderInput('rent', 'deposit', t('form.fields.deposit'), 'number', t('form.fields.depositPlaceholder'))}
          {renderInput('rent', 'paymentDay', t('form.fields.paymentDay'), 'number', t('form.fields.paymentDayPlaceholder'))}
          {renderInput('rent', 'startDate', t('form.fields.startDate'), 'date')}
          {renderInput('rent', 'endDate', t('form.fields.endDate'), 'date')}
          <div className="md:col-span-2">
            {renderInput('rent', 'iban', t('form.fields.iban'), 'text', t('form.fields.ibanPlaceholder'))}
          </div>
        </div>
      );
    case 5:
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderCheckbox('petProhibited', t('form.fields.petProhibited'))}
            {renderCheckbox('smokingProhibited', t('form.fields.smokingProhibited'))}
            {renderCheckbox('renovationProhibited', t('form.fields.renovationProhibited'))}
            {renderCheckbox('duesByTenant', t('form.fields.duesByTenant'))}
            {renderCheckbox('billsByTenant', t('form.fields.billsByTenant'))}
            {renderCheckbox('subleaseProhibited', t('form.fields.subleaseProhibited'))}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">{t('form.fields.additionalText')}</label>
            <textarea
              value={data.specialConditions.additionalText}
              onChange={(e) => updateData('specialConditions', 'additionalText', e.target.value)}
              placeholder={t('form.fields.additionalTextPlaceholder')}
              className="w-full h-32 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-blue-100 transition-all outline-none resize-none"
            />
          </div>
        </div>
      );
    default:
      return null;
  }
}
