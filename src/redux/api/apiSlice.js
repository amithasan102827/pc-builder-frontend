import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pc-builder-5vdz.onrender.com/api' }),
    tagTypes: ['comments'],
    endpoints: () => ({}),
});