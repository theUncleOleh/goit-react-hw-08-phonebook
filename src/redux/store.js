import { configureStore } from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';
import contactsSlice from './contacts/items-slice';
import { middleware } from './contacts/items-persistor';
import authSlice from 'redux/auth/auth-slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    contacts: contactsSlice,
  },
  middleware,
});

// const persistor = persistStore(store);
export { store };
// const store = configureStore({
//   reducer: {
//     contacts: reducers,
//   },
//   middleware,
// });

// const persistor = persistStore(store);

// export { store };
// import { configureStore } from '@reduxjs/toolkit';
// import itemsSlice from './contacts/itemSlice';
// import logger from 'redux-logger';
// export const store = configureStore({
//   reducer: {
//     contacts: itemsSlice,
//   },
//   middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
// });
