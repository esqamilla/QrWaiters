import { useMemo, useState } from "react";
import { countPerPage } from "staticContent/table";

interface UsePaginationProps {
  initialState?: IPagination;
}

export type ChangePagination = (StartIndex: number, ObjectsCount: number) => void;

export interface IPagination {
  StartIndex: number;
  ObjectsCount: number;
}

const usePagination = ({
  initialState = {
    StartIndex: 0,
    ObjectsCount: countPerPage,
  },
}: UsePaginationProps | void = {}) => {
  const [pagination, setPagination] = useState<IPagination>(initialState);

  const changePagination: ChangePagination = (StartIndex: number, ObjectsCount: number) => {
    setPagination({
      StartIndex: ObjectsCount * (StartIndex - 1),
      ObjectsCount,
    });
  };

  const currentPage = useMemo(
    () =>
      (pagination.StartIndex < pagination.ObjectsCount
        ? pagination.ObjectsCount
        : pagination.StartIndex + pagination.ObjectsCount) / pagination.ObjectsCount,
    [pagination]
  );

  return {
    pagination,
    changePagination,
    currentPage,
  };
};

export default usePagination;
