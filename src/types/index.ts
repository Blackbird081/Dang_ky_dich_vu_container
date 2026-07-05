export interface RegistrationServiceItem {
  id: string;
  name: string;
  unit: string;
}

export interface RegistrationLineItem {
  id: string;
  serviceName: string;
  size: string;
  quantity: number;
  tlManifest?: number;
}

export interface RegistrationHistoryItem {
  id: string;
  registrationNumber: string;
  registrationDate: string;
  customerName: string;
  customerAddress: string;
  customerPhone: string;
  workingDate: string;
  leaveDate?: string;
  cargoType: string;
  containerType: string;
  customerNotes: string;
  items: RegistrationLineItem[];
  createdAt: string;
}
