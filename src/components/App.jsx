// import React, { Component } from 'react';
import { memo } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

import Lang from './Lang';
import useLang from 'hooks/useLang';
import contentText from './Lang/contentText.json';

import styled from 'styled-components';
// import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux/es/exports';
// import { addContact, deleteContact, filterContact } from 'redux/actions'; VANILA
import { addContact, deleteContact, filterContact } from 'redux/slise';
import { getFilter, visibleContacts } from '../redux/selectors';
//  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

function App() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(visibleContacts);

  const dispatch = useDispatch();
  const { lang } = useLang();

  const onAddContact = (name, number) => {
    const payload = { name, number };
    const action = addContact(payload);
    dispatch(action);
  };

  const onDeleteContact = payload => {
    console.log(payload);
    dispatch(deleteContact(payload));
  };

  const onChangeFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  const title = contentText.title[lang];
  const contactsList = contentText.contacts[lang];
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Lang />
      <Form onSubmit={onAddContact} contacts={contacts} />
      <Title>{contactsList}</Title>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  border: 1px solid black;
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #3df4d5;
  border-radius: 20px;
  -moz-box-shadow: 10px 10px 25px #333333;
  -webkit-box-shadow: 10px 10px 25px #333333;
  box-shadow: 10px 10px 25px #333333;
`;

const Title = styled.h2`
  font-size: 40px;
  color: #210672;
  text-shadow: 4px 2px 4px #e9f999;
`;

export default memo(App);
