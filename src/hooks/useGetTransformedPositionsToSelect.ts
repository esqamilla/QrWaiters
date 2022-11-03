import { SelectProps } from "antd";
import { PositionListResponse } from "models/Position";
import { useMemo } from "react";
import { useGetPositionsQuery } from "services/positionsService";

interface UseGetTransformedPositionsToSelect {}

const transformData = (data?: PositionListResponse): SelectProps["options"] => {
  return data?.Objects.map((position) => ({
    label: position.Name,
    value: position.Id,
    key: position.Id,
  }));
};

const useGetTransformedPositionsToSelect = ({}: UseGetTransformedPositionsToSelect) => {
  const { data, isLoading } = useGetPositionsQuery();

  const positions = useMemo(() => transformData(data), [data]);

  return { positions, loading: isLoading };
};

export default useGetTransformedPositionsToSelect;
