import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsType } from '../types/types.ts';

const URL = 'https://api.thenewsapi.com/v1/news/';
const API_TOKEN = import.meta.env.VITE_API_KEY;
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getTopNews: builder.query<NewsType[], string>({
      query: () => `top?api_token=${API_TOKEN}&locale=us`,
      transformResponse: (response: { data: NewsType[] }) => response.data,
    }),
  }),
});

export const { useGetTopNewsQuery } = newsApi;
