import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },

      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (store, action) =>
      store.filter(contact => contact.id !== action.payload),
  },
});

export const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (_, { payload }) => payload,
  },
});

export const { addContact, deleteContact } = contactsSlise.actions;
export const { filterContact } = filterSlise.actions;
