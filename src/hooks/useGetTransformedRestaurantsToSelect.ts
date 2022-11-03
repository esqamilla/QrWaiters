import { SelectProps } from "antd";
import { RestaurantListResponse } from "models/Restaurant";
import { useMemo } from "react";
import { useGetRestaurantsQuery } from "services/restaurantsService";

interface UseGetTransformedRestaurantsToSelect {}

const transformData = (data?: RestaurantListResponse): SelectProps["options"] => {
  return data?.Objects.map((restaurant) => ({
    label: restaurant.Name,
    value: restaurant.Id,
    key: restaurant.Id,
  }));
};

const useGetTransformedRestaurantsToSelect = ({}: UseGetTransformedRestaurantsToSelect) => {
  const { data, isLoading } = useGetRestaurantsQuery();

  const restaurants = useMemo(() => transformData(data), [data]);

  return { restaurants, loading: isLoading };
};

export default useGetTransformedRestaurantsToSelect;
