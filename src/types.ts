export interface PersonInfo {
  fullName: string;
  tcNo: string;
  birthDate: string;
  phone: string;
  email: string;
  address: string;
}

export interface PropertyInfo {
  address: string;
  city: string;
  district: string;
  grossArea: string;
  floor: string;
  flatNo: string;
  titleDeedNo: string;
  heatingType: string;
}

export interface RentInfo {
  monthlyRent: string;
  deposit: string;
  paymentDay: string;
  startDate: string;
  endDate: string;
  iban: string;
}

export interface SpecialConditions {
  additionalText: string;
  petProhibited: boolean;
  smokingProhibited: boolean;
  renovationProhibited: boolean;
  duesByTenant: boolean;
  billsByTenant: boolean;
  subleaseProhibited: boolean;
}

export interface ContractData {
  tenant: PersonInfo;
  landlord: PersonInfo;
  property: PropertyInfo;
  rent: RentInfo;
  specialConditions: SpecialConditions;
}

export const initialData: ContractData = {
  tenant: { fullName: '', tcNo: '', birthDate: '', phone: '', email: '', address: '' },
  landlord: { fullName: '', tcNo: '', birthDate: '', phone: '', email: '', address: '' },
  property: { address: '', city: '', district: '', grossArea: '', floor: '', flatNo: '', titleDeedNo: '', heatingType: '' },
  rent: { monthlyRent: '', deposit: '', paymentDay: '', startDate: '', endDate: '', iban: '' },
  specialConditions: {
    additionalText: '',
    petProhibited: true,
    smokingProhibited: true,
    renovationProhibited: true,
    duesByTenant: true,
    billsByTenant: true,
    subleaseProhibited: true,
  },
};
