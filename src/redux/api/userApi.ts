import { url } from "inspector";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tagTypes";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),

      providesTags: [tagTypes.users]
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

      providesTags: [tagTypes.user]
    }),
    allRequest: builder.query({
      query: (data) => ({
        url: `/request?searchTerm=${data}`,
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
      }),

      invalidatesTags: [tagTypes.user]
    })
  }),

  overrideExisting: true
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
