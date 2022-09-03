import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './types';
import { nanoid } from 'nanoid';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: { id: nanoid(), ...payload },
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};

export const filterContact = payload => {
  return {
    type: FILTER_CONTACT,
    payload,
  };
};
