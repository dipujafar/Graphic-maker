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
    profileData: builder.query({
      query: () => ({
        url: "/users/my-profile",
        method: "GET",
      }),
    }),
    allRequest: builder.query({
      query: (data) => ({
        url: `/request?email=${data}`,
        method: "GET",
      }),
    }),
    getsingleRequest: builder.query({
      query: (id) => ({
        url: `/request/${id}`,
        method: "GET",
      }),
    }),
    updateProfile : builder.mutation({
      query: (data)=>({
        url: "/users/update-my-profile",
        method: "PATCH",
        body: data
      })
    })
  }),
});

export const {
  useAllUserQuery,
  useEarningsQuery,
  useDashboardDataQuery,
  useProfileDataQuery,
  useAllRequestQuery,
  useGetsingleRequestQuery,
  useUpdateProfileMutation
} = userApi;
