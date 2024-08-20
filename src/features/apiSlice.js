import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Создаем API slice
export const userApiSlice = createApi({
  reducerPath: 'userApi', // Важно: этот ключ должен совпадать с именем редюсера в store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
  }),
});

// Экспортируем автоматически сгенерированные хуки
export const { useGetUsersQuery } = userApiSlice;
