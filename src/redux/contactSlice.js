import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://63e53f6f8e1ed4ccf6f0d5a3.mockapi.io/' }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        fetchContacts: builder.query({
        query: () => '/contacts',
        providesTags: ['Contacts'],
      }),

      addContact: builder.mutation({
        query: newContact => ({
          url: `/contacts`,
          method: 'POST',
          body: newContact,
        }),
        invalidatesTags: ['Contacts'],
      }),

      deleteContact: builder.mutation({
        query: contactId => ({
          url: `/contacts/${contactId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Contacts'],
      }),
    }),
  })

  export const { 
    useFetchContactsQuery, 
    useDeleteContactMutation, 
    useAddContactMutation 
  } = contactsApi;
