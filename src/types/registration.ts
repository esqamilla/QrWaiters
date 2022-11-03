export interface IRegistrationRequest {
  login: string;
  password: string;
  email: string;
  phone: string;
  isWaiter: boolean;
  name?: string;
  city?: string;
  surname?: string;
  patronymic?: string;
  goal?: string;
  goalSum?: number;
  referalLink?: string;
  positionId?: number;
  restarauntId?: number;
}

export interface IRegistrationResponse {
  addedUserId: number;
}

export interface IRegistrationTipRecipient extends Omit<IRegistrationRequest, "city" | "patronymic"> {
  confirmPassword: string;
  personalData: boolean;
  agreement: boolean;
}
