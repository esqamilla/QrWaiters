import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { apiPath } from "config/api";
import { IPagination } from "hooks/usePagination";
import { TipListResponse } from "models/Tip";
import { Key } from "react";
import { TipListById } from "types/contracts/transactions";

export const tipsApi = createApi({
  reducerPath: "tipsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiPath.Tips,
  }),

  endpoints: (builder) => ({
    getTips: builder.query<TipListResponse, { pagination: IPagination; StartDate?: Key; EndDate?: Key }>({
      query: ({ pagination, EndDate, StartDate }) => {
        return {
          url: "",
          params: {
            ...pagination,
            StartDate,
            EndDate,
          },
        };
      },
    }),
    getTipsByUserId: builder.query<TipListResponse, TipListById>({
      query: ({ userId, pagination, StartDate, EndDate }) => {
        return {
          url: "",
          params: {
            UserId: userId,
            ...pagination,
            StartDate,
            EndDate,
          },
        };
      },
    }),
  }),
});

export const { useGetTipsQuery, useGetTipsByUserIdQuery } = tipsApi;
