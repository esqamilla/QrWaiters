export type Enum<E> = Record<keyof E, number | string> & {
  readonly [k: number]: string;
};
