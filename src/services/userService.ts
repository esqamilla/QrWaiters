import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RcFile } from "antd/es/upload";
import { apiPath } from "config/api";
import { contentType } from "config/services";
import { Dashboard } from "models/Dashboard";
import User from "models/User";
import { UserChangeData } from "types/contracts/user";
import { IRegistrationRequest, IRegistrationResponse } from "types/registration";
import { blobToBase64, buildFormData } from "utils/fileHelper";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiPath.Users,
  }),
  endpoints: (builder) => ({
    registration: builder.mutation<IRegistrationResponse, IRegistrationRequest>({
      query: (registerData) => {
        return {
          url: "/Register",
          method: "POST",
          body: JSON.stringify(registerData),
          headers: {
            ["Content-Type"]: contentType.jsonPatch,
          },
        };
      },
    }),

    getUser: builder.query<User, { token: string }>({
      query: ({ token }) => {
        return {
          url: "/ByToken",
          params: {
            token,
          },
        };
      },
    }),

    getUserById: builder.query<User, { id: number }>({
      query: ({ id }) => {
        return {
          url: id.toString(),
        };
      },
    }),

    getUserDashboard: builder.query<Dashboard, { userId: number }>({
      query: ({ userId }) => {
        return {
          url: "/Dashboard",
          params: {
            userId,
          },
        };
      },
    }),

    getUserQrCode: builder.query<{ src: string; file: Blob }, { userId: number }>({
      query: ({ userId }) => {
        return {
          url: "/Qr",
          responseHandler: (res) => res.blob(),
          params: {
            userId,
          },
        };
      },
      transformResponse: async (file: Blob) => {
        const base64 = await blobToBase64(file);

        return {
          src: base64,
          file: file,
        };
      },
    }),

    changeUser: builder.mutation<void, UserChangeData>({
      query: (data) => {
        return {
          url: "",
          method: "PUT",
          headers: {
            ["Content-Type"]: contentType.jsonPatch,
          },
          body: JSON.stringify(data),
        };
      },
    }),

    uploadPhoto: builder.mutation<any, { userId: number; file: RcFile }>({
      query: ({ file, userId }) => {
        const formData = buildFormData([file]);

        return {
          url: "UploadPhoto",
          method: "POST",
          params: {
            userId,
          },
          body: formData,
        };
      },
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLazyGetUserQuery,
  useChangeUserMutation,
  useGetUserDashboardQuery,
  useGetUserQrCodeQuery,
  useUploadPhotoMutation,
  useLazyGetUserByIdQuery,
} = userApi;
