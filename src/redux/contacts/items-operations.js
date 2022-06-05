import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const contacts = createAsyncThunk('items/contacts', async credentials => {
  try {
    const { data } = await axios.get('/contacts', credentials);
    //   token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
const operations = { contacts };
export default operations;
