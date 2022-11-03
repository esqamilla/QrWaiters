export const getRange = (start: number, end: number): number[] => {
  return Array.from({ length: end - start }, (_, index) => index + start);
};
