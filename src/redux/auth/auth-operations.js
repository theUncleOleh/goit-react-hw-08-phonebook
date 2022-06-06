import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import * as ContactsAPI from '../../contacts-api/contacts-api';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token} `;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    const { data } = await axios.post('/users/logOut', credentials);
    token.unset();
    return data;
  } catch (error) {
    console.log(error);
  }
});
 const fetchCurrentUser = createAsyncThunk(
   'auth/current',
   async (_, thunkAPI) => {
     const state = thunkAPI.getState();
     const persistedToken = state.auth.token;
     if (persistedToken === null) {
       return thunkAPI.rejectWithValue('Sorry');
     }
     token.set(persistedToken);
     try {
       const { data } = await axios.get('/users/current');
       return data;
     } catch (error) {
       console.log(error);
     }
   }
 );

 const operations = {
   register,
   logIn,
   logOut,
   fetchCurrentUser,
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
