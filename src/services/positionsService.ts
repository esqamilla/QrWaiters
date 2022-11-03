import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { apiPath } from "config/api";
import { PositionListResponse } from "models/Position";

export const positionsApi = createApi({
  reducerPath: "positionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiPath.Positions,
  }),

  endpoints: (builder) => ({
    getPositions: builder.query<PositionListResponse, void>({
      query: () => {
        return {
          url: "",
        };
      },
    }),
  }),
});

export const { useGetPositionsQuery } = positionsApi;
