interface User {
  Id: number;
  Login?: string;
  Password?: string;
  RoleId: any[];
  IsBlocked: boolean;
  RegistrationDate: string;
  RestaurantId?: number;
  Email?: string;
  City?: string;
  PhoneNumber?: string;
  Firstname?: string;
  Lastname?: string;
  Patronymic?: string;
  Goal?: string;
  GoalSum?: number;
  Amount?: number;
  PhotoUrl?: string;
  QrId?: string;
  PositionId?: number;
  ReferralUrl?: string;
  TokenKey?: string;
}

export default User;
