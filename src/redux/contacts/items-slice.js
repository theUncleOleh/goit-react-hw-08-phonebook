import { createSlice } from '@reduxjs/toolkit';
import itemsOperations from './items-operations';
const initialState = {
  contacts: [],
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [itemsOperations.contacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    [itemsOperations.addContacts.fulfilled](state, action) {
      console.log(action.payload);
      state.contacts.push(action.payload);
    },
    [itemsOperations.deleteContacts.fulfilled](state, action) {
      console.log(action.payload);
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
    [itemsOperations.updateContacts.fulfilled](state, action) {
      state.contacts.map(contact =>
        contact.id === action.payload
          ? state.contacts.push(action.payload)
          : state.contacts
      );
    },
  },
});




export default contactsSlice.reducer;
