import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { apiPath } from "config/api";
import { RestaurantListResponse } from "models/Restaurant";

export const restaurantsApi = createApi({
  reducerPath: "restaurantsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiPath.Restaurants,
  }),

  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantListResponse, void>({
      query: () => {
        return {
          url: "",
        };
      },
    }),
    getRestaurantsByUserId: builder.query<any, { userId: string }>({
      query: ({ userId }) => {
        return {
          url: "",
          params: {
            UserId: userId,
          },
        };
      },
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantsApi;
