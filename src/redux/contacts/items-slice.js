import { createSlice } from '@reduxjs/toolkit';
import itemsOperations from './items-operations';
const initialState = {
  items: [],
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [itemsOperations.contacts.fulfilled](state, action) {
      state.items = action.payload;
    },
  },
});

export default contactsSlice.reducer;
