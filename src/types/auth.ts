export interface IAuthRequest {
  phone: string;
  password: string;
  remember?: boolean;
  returnUrl?: string;
}

export interface IAuthResponse {
  ReturnUrl: string;
  Token: string;
}
