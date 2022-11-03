export interface ResourceObject<ObjectType> {
  RequestedStartIndex: number;
  RequestedObjectsCount: number;
  Total: number;
  Objects: ObjectType;
}
