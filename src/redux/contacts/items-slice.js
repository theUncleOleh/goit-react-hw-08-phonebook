import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const userSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      return state.items.filter(item => item.id !== action.payload);
    },
  },
});
export const { add, remove } = userSlice.actions;
export default userSlice.reducer;
