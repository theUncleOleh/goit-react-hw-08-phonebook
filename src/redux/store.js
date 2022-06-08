import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import contactsSlice from './contacts/items-slice';
import { middleware } from './persistor';
import { persistedReducer } from './persistor';
import itemsSlice from 'redux/contacts/filter-slice';

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsSlice,
    filter: itemsSlice,
  },
  middleware,
});

const persistor = persistStore(store);
export { store, persistor };
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
