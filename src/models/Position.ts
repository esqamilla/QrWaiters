import { ResourceObject } from "models/ResourceObject";

export interface Position {
  Id: number;
  Name?: string;
}

export type PositionListResponse = ResourceObject<Position[]>;
