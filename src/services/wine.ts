// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type Wine = {
  winery: string;
  wine: string;
  rating: {
    average: string;
    reviews: string;
  };
  location: string;
  image: string;
  id: number;
};

// Define a service using a base URL and expected endpoints
export const winesApi = createApi({
  reducerPath: "winesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.sampleapis.com/wines/reds",
  }),
  endpoints: (builder) => ({
    getWines: builder.query<Wine[], string>({
      query: () => ``,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWinesQuery } = winesApi;
