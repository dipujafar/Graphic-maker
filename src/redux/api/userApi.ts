import { url } from "inspector";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    earnings: builder.query({
      query: () => ({
        url: "/payments/earnings",
        method: "GET",
      }),
    }),
    dashboardData: builder.query({
      query: () => ({
        url: "/payments/dashboard-data",
        method: "GET",
      }),
    }),
  }),
});

export const { useAllUserQuery, useEarningsQuery, useDashboardDataQuery } = userApi;
