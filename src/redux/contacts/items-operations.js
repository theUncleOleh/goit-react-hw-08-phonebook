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
const addContacts = createAsyncThunk('items/addContacts', async credentials => {
  try {
    const { data } = await axios.post('/contacts', credentials);
    //   token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
const deleteContacts = createAsyncThunk(
  'items/deleteContacts',
  async contactId => {
    try {
      console.log(contactId);
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      console.log(error);
    }
  }
);
const operations = { contacts, addContacts, deleteContacts };
export default operations;
