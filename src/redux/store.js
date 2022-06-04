import { configureStore } from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';

import { middleware } from './contacts/items-persistor';
import authSlice from 'redux/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
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
