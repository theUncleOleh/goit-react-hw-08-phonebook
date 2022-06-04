import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import * as ContactsAPI from '../../contacts-api/contacts-api';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    return data;
  } catch (error) {}
});

const operations = {
  register,
  logIn,
};
export default operations;

// export const usersApi = createApi({
//   reducerPath: 'fetchUser',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   tagTypes: ['User'],
//   endpoints: builder => ({
//     // getAllContacts: builder.query({
//     //   query: () => `/contacts`,
//     //   providesTags: ['Contacts'],
//     // }),
//     // deleteContact: builder.mutation({
//     //   query: contactId => ({
//     //     url: `/contacts/${contactId}`,
//     //     method: 'DELETE',
//     //   }),
//     //   invalidatesTags: ['Contacts'],
//     // }),
//     addUser: builder.mutation({
//       query: newUser => ({
//         url: `/users/signup`,
//         method: 'POST',
//         body: newUser,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     loginUser: builder.mutation({
//       query: user => ({
//         url: `/users/login`,
//         method: 'POST',
//         body: user,
//       }),
//       invalidatesTags: ['User'],
//     }),
//   }),
// });

// export const {
//   useGetAllContactsQuery,
//   useDeleteContactMutation,
//   useAddUserMutation,
//   useLoginUserMutation,
// } = usersApi;
