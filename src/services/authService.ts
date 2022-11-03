import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiPath } from "config/api";
import { contentType } from "config/services";
import { IAuthRequest, IAuthResponse } from "types/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiPath.Users,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", contentType.jsonPatch);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, IAuthRequest>({
      query: (authData) => {
        return {
          url: "/Login",
          method: "POST",
          body: JSON.stringify(authData),
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
