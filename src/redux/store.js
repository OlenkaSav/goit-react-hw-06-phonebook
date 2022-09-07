import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsSlise, filterSlise } from './slise';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsSlise.reducer,
  filter: filterSlise.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export default store;

// -----------------VANILA REDUX-------------------
// import { createStore } from 'redux';
// import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './types';

// const initialStore = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// function contactReducer(store = initialStore, { type, payload }) {
//   switch (type) {
//     case ADD_CONTACT:
//       const newContactsAdd = [...store.contacts, payload];
//       return { ...store, contacts: newContactsAdd };

//     case DELETE_CONTACT:
//       const newContactsDel = store.contacts.filter(
//         contact => contact.id !== payload
//       );
//       return { ...store, contacts: newContactsDel };

//     case FILTER_CONTACT:
//       return { ...store, filter: payload };
//     default:
//       return store;
//   }
// }

// const store = createStore(
//   contactReducer,
//   initialStore,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

// console.log(store.getState());
