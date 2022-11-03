import { ResourceObject } from "models/ResourceObject";

export interface Restaurant {
  Id: number;
  Name?: string;
  // PageColor?: string;
  // backgroungImage: string;
  // additionalPageСolor: string;
  // logoUrl: string;
  // fontColor: string;
  // buttonText: string;
}

export type RestaurantListResponse = ResourceObject<Restaurant[]>;
