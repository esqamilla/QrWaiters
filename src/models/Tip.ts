import { ResourceObject } from "models/ResourceObject";
import { TransactionStatus } from "types/contracts/transactions";

export interface Tip {
  Amount: number;
  Date: number;
  Id: number;
  LikedInterior: boolean;
  LikedKitchen: boolean;
  LikedService: boolean;
  PaymentMethod: string;
  PaymentStatus: TransactionStatus;
  RestaurantId: number;
}

export type TipListResponse = ResourceObject<Tip[]>;
